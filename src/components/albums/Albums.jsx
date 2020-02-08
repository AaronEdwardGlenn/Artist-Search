import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useGetAlbums } from '../hooks/albums';
import styles from './Albums.css';
import { useGetSongs } from '../hooks/songs';
import SongList from '../songlist/Songlist.jsx';

const Albums = ({ match }) => {  
  const { artistName, artistId } = match.params;

  const albums = useGetAlbums(artistId);

  const albumList = albums.map(album => {
    const src = album?.coverArt?.front ? `http://coverartarchive.org/release/${album.id}/front` : 'https://m.mrjatt-mp3.com/cover.jpg';
    const alt = album?.coverArt?.front ? `${album.title} cover art` : 'No cover art available';
    
    return (
      // Details style rendering
      <>
        <details>
          <summary>
            <img src={src} alt={alt} />
            <p>{album.title}</p>
            <p>{album.date}</p>
          </summary>
        <SongList artistName={artistName} artistId={artistId} albumId={album.id} />
        </details>
      </>

      // List style rendering
      // <li key={album.id} >
      //   <Link to={`/${artistName}/${artistId}/${album.id}`}>
      //     <img src={src} alt={alt} />
      //     <p>{album.title}</p>
      //     <p>{album.date}</p>
      //   </Link>
      // </li>
    );
  });

  return (
    // Details style rendering
    <summary className={styles.Albums}>
      <span>Albums by {artistName}</span>
      {albumList}
    </summary>

    // List style rendering
    // <ul className={styles.Albums}>
    //   <li><span className='albums-by'>Albums by {artistName}</span></li>
    //   {albumList}
    // </ul>
  );
};

Albums.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistName: PropTypes.string.isRequired,
      artistId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Albums;

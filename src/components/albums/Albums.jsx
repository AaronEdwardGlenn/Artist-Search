import React from 'react';
import PropTypes from 'prop-types';
import { useGetAlbums } from '../hooks/albums';
import styles from './Albums.css';
import SongList from '../songlist/Songlist.jsx';
import { useHistory } from 'react-router-dom';

const Albums = ({ match }) => {  
  const { artistName, artistId } = match.params;
  const history = useHistory();

  const goBack = ({ target }) => {
    target.parentNode.classList.add(styles.SlideOut);
    setTimeout(() => {
      history.replace('');
    }, 500);
  };

  const albums = useGetAlbums(artistId);

  const albumList = albums.map(album => {
    const src = album?.coverArt?.front ? `http://coverartarchive.org/release/${album.id}/front` : 'https://m.mrjatt-mp3.com/cover.jpg';
    const alt = album?.coverArt?.front ? `${album.title} cover art` : 'No cover art available';
    
    return (
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
    );
  });

  return (
    <>
      <summary className={styles.Albums}>
        <span>Albums by {artistName}</span>
        {albumList}
        <button onClick={goBack}>&#8674;</button>
      </summary>
    </>
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

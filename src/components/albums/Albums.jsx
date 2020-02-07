import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useGetAlbums } from '../hooks/albums';

const Albums = ({ match }) => {  
  const { artistName, artistId } = match.params;

  const albums = useGetAlbums(artistId);

  const albumList = albums.map(album => {  
      let src;
      let alt;

      if(album?.coverArt?.front === false){
        src = 'https://m.mrjatt-mp3.com/cover.jpg'; 
        alt = 'no cover art available';
      } else {
        src = `http://coverartarchive.org/release/${album.id}/front`;
        alt = `${album.title} cover art`;
      }
    
      return (
        <li key={album.id} >
          <Link to={`/${artistName}/${artistId}/${album.id}`}>
            <img style={{ 'width': '15vw' }} src={src} alt={alt} />
            <p>{album.title}</p>
            <p>{album.date}</p>
          </Link>
        </li>
      );
    });

  return (
    <ul>
      {albumList}
    </ul>
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

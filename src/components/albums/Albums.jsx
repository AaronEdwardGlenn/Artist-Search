import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useGetAlbums } from '../hooks/albums';

const Albums = ({ match }) => {  
  const artistId = match.params.artist;

  const albums = useGetAlbums(artistId);  

  const albumList = albums.map(album => {
    return (
      <li key={album.id} >
        <Link to={`/artistSearch/artist/album/${album.title}`}>
          <img src={`http://coverartarchive.org/release/${album.id}/front`} />
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
      artist: PropTypes.string.isRequired
    })
  })
};

export default Albums;

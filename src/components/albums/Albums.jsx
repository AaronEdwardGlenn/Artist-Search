import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Albums = ({ albums }) => {
  const albumList = albums.map(album => {
    <li key={album.release_id} >
      <Link to={`/artistSearch/artist/album/${album.title}`}>
        <img src={album.image} />
        <p>{album.title}</p>
      </Link>
    </li>;
  });
  return (
    <ul>
      {albumList}
    </ul>
  );
};

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
};

export default Albums;

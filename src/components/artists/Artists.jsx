import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artists = ({ artists }) => {
    const artistList = artists.map(artist => (
    <li key={artist.id} >
      <Link to={`/${artist.name}/${artist.id}`}>
        <p>{artist.name}</p>
        <p>{artist.disambiguation}</p>
      </Link>
    </li>
  ));

  return (
    <ul>
      {artistList}
      
    </ul>
  );
};

Artists.propTypes = {
  artists: PropTypes.array.isRequired
};

export default Artists;

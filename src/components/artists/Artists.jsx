import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artists = ({ artists }) => {
  
  // so we need a container component to deal with interations between artists.jsx and the hook in artists.js
  const artistList = artists.map(artist => (
    
    <li key={artist.id} >
      <Link to={`/artistSearch/artist/${artist.id}`} >
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
  artists: PropTypes.array,
};

export default Artists;

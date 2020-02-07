import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artists = ({ artists }) => {

  // so we need a container component to deal with interations between artists.jsx and the hook in artists.js
  const artstsList = artists.map(artist => {
    <li key={artist.id} >
      <Link to={`/artistSearch/artist/${artist.id}`} >
        {artists.name}
      </Link>
    </li>;
  });

  return (
    <ul>
      {artstsList}
    </ul>
  );
};



Artists.propTypes = {
  artists: PropTypes.array,
};

export default Artists;

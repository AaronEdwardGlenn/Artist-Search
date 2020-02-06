import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ lyrics, artist, album, songName }) => {
  return (
    <>
      <h1>{songName}</h1>
      <h2>By {artist} on the album {album}</h2>
      <p>{lyrics}</p>
    </>
  );
};

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  songName: PropTypes.string.isRequired
};

export default Lyrics;

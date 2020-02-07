import React from 'react';
import PropTypes from 'prop-types';
import { useGetLyrics } from '../hooks/lyrics';

const Lyrics = ({ match }) => {
  const { artistName, songTitle } = match.params;

  const lyrics = useGetLyrics(artistName, songTitle);

  return (
    <>
      <h1>{songTitle}</h1>
      <h2>By {artistName}</h2>
      <p>{lyrics}</p>
    </>
  );
};

Lyrics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistName: PropTypes.string.isRequired,
      songTitle: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Lyrics;

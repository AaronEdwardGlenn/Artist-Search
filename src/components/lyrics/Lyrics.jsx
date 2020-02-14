import React from 'react';
import PropTypes from 'prop-types';
import { useGetLyrics } from '../hooks/lyrics';
import styles from './Lyrics.css';

const Lyrics = ({ match }) => {
  const { artistName, songTitle } = match.params;

  const lyrics = useGetLyrics(artistName, songTitle);

  return (
    <section className={styles.Lyrics}>
      <h1>{songTitle}</h1>
      <h2>By {artistName}</h2>
      <p>{lyrics}</p>
    </section>
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

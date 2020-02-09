import React from 'react';
import PropTypes from 'prop-types';
import { useGetLyrics } from '../hooks/lyrics';
import styles from './Lyrics.css';

const Lyrics = ({ match }) => {
  const { artistName, songTitle } = match.params;

  const lyrics = useGetLyrics(artistName, songTitle);

  return (
    <>
      <h1 className={styles.Header} >{songTitle}</h1>
      <h2 className={styles.subHeader} >By {artistName}</h2>
      <p className={styles.bodyText} >{lyrics}</p>
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

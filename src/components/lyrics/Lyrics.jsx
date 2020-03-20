import React from 'react';
import PropTypes from 'prop-types';
import { useGetLyrics } from '../hooks/lyrics';
import styles from './Lyrics.css';
import { useHistory } from 'react-router-dom';

const Lyrics = ({ match }) => {
  const history = useHistory();
  const { artistName, artistId, albumId, songTitle } = match.params;

  const goBack = () => history.replace(`/${artistName}/${artistId}/${albumId}`);

  const lyrics = useGetLyrics(artistName, songTitle);

  return (
    <section className={styles.Lyrics}>
      <h1>{songTitle}</h1>
      <h2>By {artistName}</h2>
      <p>{lyrics}</p>
      <button onClick={goBack}>&#8672;</button>
    </section>
  );
};

Lyrics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistName: PropTypes.string.isRequired,
      songTitle: PropTypes.string.isRequired,
      artistId: PropTypes.string.isRequired,
      albumId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Lyrics;

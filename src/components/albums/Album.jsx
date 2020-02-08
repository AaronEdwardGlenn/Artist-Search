import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useGetSongs } from '../hooks/songs';

const Album = ({ match }) => {
  const { artistName, artistId, albumId } = match.params;

  // const songs = useGetSongs(albumId); 

  const songList = songs.map(song => {
    return (
      <li key={song.id}>
        <Link to={`/${artistName}/${artistId}/${albumId}/${song.title}`} >
          <p>{song.title}</p>
        </Link>
      </li>
    );});
  
  return (
    <ul>
      {songList}
    </ul>
  );
};

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistName: PropTypes.string.isRequired,
      artistId: PropTypes.string.isRequired,
      albumId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Album;

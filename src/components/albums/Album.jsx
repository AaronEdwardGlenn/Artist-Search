import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useGetSongs from '../hooks/song';

const Album = ({ match }) => {
  const albumId = match.params.album;
  const songs = useGetSongs(albumId); 
  const songList = songs.map(song => {
    <li key={song.title}>
      <Link to={`/artistSearch/artist/album/lyrics/${song.title}`} >
        {song.title}
      </Link>
    </li>;
  });


  
  return (
    <ul>
      {songList}
    </ul>
  );
};


Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      album: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  songs: PropTypes.array.isRequired,
};


export default Album;

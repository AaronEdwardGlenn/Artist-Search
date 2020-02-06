import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom';

const Album = ({ songs }) => {
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
  songs: PropTypes.array.isRequired,
};


export default Album;

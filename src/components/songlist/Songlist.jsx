import React from 'react';
import PropTypes from 'prop-types';
import { useGetSongs } from '../hooks/songs';
import { Link } from 'react-router-dom';

const SongList = ({ artistName, artistId, albumId }) => {
  console.log(albumId);
  
  const songs = useGetSongs(albumId);
  console.log(songs);
  
  const songList = songs.map(song => {
    return (
      <p key={song.id}>
        <Link to={`/${artistName}/${artistId}/${albumId}/${song.title}`}>
          {song.title}
        </Link>
      </p>
    );
  })

  return (
    <>
    {songList}
    </>
  )
}

SongList.propTypes = {
  albumId: PropTypes.string,
}

export default SongList;

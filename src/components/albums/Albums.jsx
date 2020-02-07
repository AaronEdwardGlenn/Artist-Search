import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useGetAlbums from '../hooks/albums';

const Albums = ({ match }) => {
  console.log(match);
  
  const artistId = match.params.artist;

  const { albums } = useGetAlbums(artistId);

  const albumList = albums.map(album => {
    <li key={album.id} >
      <Link to={`/artistSearch/artist/album/${album.title}`}>
        <img src={album.cover} />
        <p>{album.title}</p>
        <p>{album.date}</p>
      </Link>
    </li>;
  });
  return (
    <ul>
      {albumList}
    </ul>
  );
};

Albums.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artist: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    })
  }),
};

export default Albums;

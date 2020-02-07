import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useGetAlbums from '../hooks/albums';

const Albums = ({ match }) => {
  const artistId = match.params.artist.id;

  const { albums } = useGetAlbums(artistId);

  const albumList = albums.map(album => {
    <li key={album.release_id} >
      <Link to={`/artistSearch/artist/album/${album.title}`}>
        <img src={album.image} />
        <p>{album.title}</p>
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

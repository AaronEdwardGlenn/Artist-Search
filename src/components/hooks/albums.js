import { useEffect, useState } from 'react';
import { getAlbums } from '../../services/musicBrainsAPI';

export const useGetAlbums = artistId => {
  const [albums, setAlbums] = useState([{}]);

  useEffect(() => {
    getAlbums(artistId)
      .then(setAlbums);
  }, [artistId]);

  return albums ;
};

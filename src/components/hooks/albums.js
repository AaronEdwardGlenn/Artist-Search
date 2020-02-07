import { useEffect, useState } from 'react';
import { getAlbums } from '../../services/musicBrainsAPI';
import { getAlbumCover } from '../../services/coverArtAPI';


export const useGetAlbums = (artistId) => {
  const [albums, setAlbums] = useState(['Calvin Coolidge']);

  useEffect(() => {
    getAlbums(artistId)
      .then(setAlbums)
      .then(albums => {
        albums.forEach(album => {
          album.cover = getAlbumCover(album.id);
        });
      });


  }, [artistId]);

  return { albums };
};

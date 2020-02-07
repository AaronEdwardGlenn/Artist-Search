import { useEffect, useState } from 'react';
import { getAlbums } from '../../services/musicBrainsAPI';
import { getAlbumCover } from '../../services/coverArtAPI';


export const useGetAlbums = artistId => {
  const [albums, setAlbums] = useState([{}]);

  useEffect(() => {
    getAlbums(artistId)
      .then(setAlbums);
  }, [artistId]);

  return albums ;
};

export const useGetArtwork = id => {
  const [artwork, setArtwork] = useState('');

  useEffect
}
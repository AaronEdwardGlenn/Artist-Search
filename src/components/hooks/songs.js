import { useEffect, useState } from 'react';
import { getSongs }  from '../../services/musicBrainsAPI';

export const useGetSongs = id => {
  const [songs, setSongs] = useState([]);

  
  useEffect(() => {
    getSongs(id)
      .then(setSongs);
  }, [id]);
  return songs;
};


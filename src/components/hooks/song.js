import { useEffect, useState } from 'react';

export const useGetSongs = id => {
  const [songs, setSongs] = useState([]);

  
  useEffect(() => {
    getSongs(id)
      .then(setSongs);
  }, [id]);
  return songs;
};


import { useState, useEffect } from 'react';
import { getLyrics } from '../../services/lyricsApi';

export const useGetLyrics = (artist, song) => {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    getLyrics(artist, song)
      .then(setLyrics);
  }, [song]);

  return lyrics;
}

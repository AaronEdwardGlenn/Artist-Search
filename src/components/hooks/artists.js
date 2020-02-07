import { useState, useEffect } from 'react';
import { getArtists } from '../../services/musicBrainsAPI';

export const useGetArtists = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('drake');
  const [artists, setArtists] = useState({ artists:[] });

  useEffect(() => {
    getArtists(searchTerm)
      .then(setArtists);
  }, [searchTerm]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm(query);
  };

  


  return { artists: artists.artists, count: artists.count, handleSubmit, query, setQuery };

}; 

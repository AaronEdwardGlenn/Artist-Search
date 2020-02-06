import { useState, useEffect } from 'react';

export const useGetArtists = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtists(searchTerm)
      .then(setArtists);
  }, [searchTerm]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm(query);
  };

  return { artists, handleSubmit, query, setQuery };

}; 

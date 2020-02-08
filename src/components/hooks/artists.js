import { useState, useEffect } from 'react';
import { getArtists } from '../../services/musicBrainsAPI';
import { useHistory } from 'react-router-dom';

export const useGetArtists = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('#');
  const [artists, setArtists] = useState({ artists: [] });
  const history = useHistory();

  useEffect(() => {
    getArtists(searchTerm)
      .then(setArtists);
  }, [searchTerm]);

  const handleSubmit = event => {
    event.preventDefault();
    history.push('/');
    setSearchTerm(query);
  };

  return { artists: artists.artists, count: artists.count, handleSubmit, query, setQuery };
}; 

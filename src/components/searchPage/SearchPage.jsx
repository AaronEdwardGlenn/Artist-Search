import React from 'react';
import Artists from '../artists/Artists.jsx';
import { useGetArtists } from '../hooks/artists';

const SearchPage = () => {
  const { artists, handleSubmit, query, count, setQuery } = useGetArtists();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Search for Artists</p>
        <input type='text' value={query} onChange={({ target }) => setQuery(target.value)} />
        <button>Search</button>
      </form>
      {count && <p>{count} results</p>}
      <Artists artists={artists} />
    </>
  );
};

export default SearchPage;

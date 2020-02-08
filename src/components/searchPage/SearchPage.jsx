import React from 'react';
import Artists from '../artists/Artists.jsx';
import { useGetArtists } from '../hooks/artists';
import styles from './SearchPage.css';

const SearchPage = () => {
  const { artists, handleSubmit, query, count, setQuery } = useGetArtists();

  return (
    <>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <p>Search for Artists</p>
        <div>
          <input type='text' value={query} onChange={({ target }) => setQuery(target.value)}></input>
          <button>Search</button>
        </div>
      </form>
      {count && <p className={styles.Count}>{count} results</p>}
      <Artists artists={artists} />
    </>
  );
};

export default SearchPage;

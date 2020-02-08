import React from 'react';
import Artists from '../artists/Artists.jsx';
import { useGetArtists } from '../hooks/artists';
import styles from './SearchPage.css';

const SearchPage = () => {
  const { artists, handleSubmit, query, count, setQuery } = useGetArtists();

  return (
    <>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <p className={styles.subHeader} >SEARCH FOR ARTISTS</p>
        <div>
          <input type='text' value={query} onChange={({ target }) => setQuery(target.value)}></input>
          <button>Search</button>
        </div>
      </form>
      {count && <p>{count} results</p>}
      <Artists artists={artists} />
    </>
  );
};

export default SearchPage;

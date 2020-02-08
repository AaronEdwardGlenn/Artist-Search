import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SearchPage from './searchPage/SearchPage.jsx';
import Albums from './albums/Albums.jsx';
import Album from './albums/Album.jsx';
import Lyrics from './lyrics/Lyrics.jsx';
import Header from './HeaderFooter/Header.js';
import Footer from './HeaderFooter/Footer.js';

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Route path="/" component={SearchPage} />
        <Route path="/:artistName/:artistId" component={Albums} />
        {/* <Route path="/:artistName/:artistId/:albumId" component={Album} /> */}
        <Route path="/:artistName/:artistId/:albumId/:songTitle" component={Lyrics} />
      </Router>
      <Footer />
    </>
  );
}

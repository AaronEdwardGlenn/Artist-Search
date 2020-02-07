import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SearchPage from './searchPage/SearchPage.jsx';
import Albums from './albums/Albums.jsx';
import Album from './albums/Album.jsx';
import Lyrics from './lyrics/Lyrics.jsx';

export default function App() {
  return (
    <Router>
      <Route path="/" component={SearchPage} />
      <Route path="/:artistName/:artistId" component={Albums} />
      <Route path="/:artistName/:artistId/:albumId" component={Album} />
      <Route path="/:artistName/:artistId/:albumId/:songTitle" component={Lyrics} />
    </Router>
  );
}

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
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/:artistName/:artistId" component={Albums} />
      <Route exact path="/:artistName/:artistId/:albumId" component={Album} />
      <Route path="/:artistName/:artistId/:albumId/:songTitle" component={Lyrics} />
    </Router>
  );
}

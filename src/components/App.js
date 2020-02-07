import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SearchPage from './searchPage/SearchPage.jsx';
import Albums from './albums/Albums.jsx';
import Album from './albums/Album.jsx';


export default function App() {
  return (
    <Router>
      <Route exact path="/artistSearch/" component={SearchPage} />
      <Route exact path="/artistSearch/artist/:artist" component={Albums} />
      <Route exact path="/artistSearch/artist/album/:album" component={Album} />
      {/* <Route path="/artistSearch/artist/album/lyrics/:lyrics" component={} /> */}
    </Router>
  );
}

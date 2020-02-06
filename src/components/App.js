import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route path="/artistSearch/:search" component={} />
      <Route path="/artistSearch/artist/:artist" component={} />
      <Route path="/artistSearch/artist/album/:album" component={} />
      <Route path="/artistSearch/artist/album/lyrics/:lyrics" component={} />
    </Router>
  );
}

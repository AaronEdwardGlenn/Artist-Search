export const getArtists = searchTerm => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=25`)
    .then(res => res.json());
};

export const getAlbums = artistId => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(data => data.releases)
    .then(data => data.map(album => ({ 
      title: album.title, 
      id: album.id, 
      date: album.date,
      coverArt: album['cover-art-archive'] })));
};

export const getSongs = albumId => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${albumId}&fmt=json`)
    .then(res => res.json())
    .then(data => data.recordings)
    .then(data => data.map(({ title, id }) => ({
      title,
      id, 
    })));
};

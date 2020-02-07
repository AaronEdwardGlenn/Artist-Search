export const getAlbumCover = id => {
  return fetch(`http://coverartarchive.org/release/${id}/front`);
};


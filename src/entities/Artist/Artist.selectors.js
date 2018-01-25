// src/entities/Artist/Artist.selectors.js

export const selectArtist = (state, artistId) => (
  state.artist.byId[artistId]
);

export const selectArtistTopTracks = (state, artistId) => {
  const topTrackIds = state.artist.topTracks[artistId];

  if (!topTrackIds) return [];
  return topTrackIds
    .map((trackId) => (state.track.byId[trackId]))
    .map((track) => ({ ...track, album: state.album.byId[track.album] }));
};

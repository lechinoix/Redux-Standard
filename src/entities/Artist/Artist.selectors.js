// src/entities/Artist/Artist.selectors.js

import { fromJS } from 'immutable';

export const selectArtist = (state, artistId) => (
  state.getIn(['artist', 'byId', artistId.toString()])
);

export const selectArtistTopTracks = (state, artistId) => {
  const topTrackIds = state.getIn(['artist', 'topTracks', artistId.toString()]);

  if (!topTrackIds) return [];
  return topTrackIds
    .map((trackId) => (state.getIn(['track', 'byId', trackId.toString()])))
    .map((track) => (track.merge(
      fromJS({
          album: state.getIn(['album', 'byId', track.get('album').toString()])
        })
      ))
    );
};

// src/entities/Artist/Artist.selectors.js

import { fromJS } from 'immutable';

export const selectArtist = (state, artistId) => (
  state.get('artist').byId[artistId]
);

export const selectArtistTopTracks = (state, artistId) => {
  const topTrackIds = state.get('artist').topTracks[artistId];

  if (!topTrackIds) return [];
  return topTrackIds
    .map((trackId) => (state.getIn(['track', 'byId', String(trackId)])))
    .map((track) => (track.merge(
      fromJS({
          album: state.getIn(['album', 'byId', String(track.get('album'))])
        })
      ))
    );
};

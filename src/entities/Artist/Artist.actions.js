// src/entities/Artist/Artist.actions.js

/* Action types */
export const actionTypes = {
  REQUEST: {
    FETCH: {
      ERROR: 'ARTIST.REQUEST.FETCH.ERROR',
      START: 'ARTIST.REQUEST.FETCH.START',
      SUCCESS: 'ARTIST.REQUEST.FETCH.SUCCESS',
    },
    FETCH_TOP: {
      ERROR: 'ARTIST.REQUEST.FETCH_TOP.ERROR',
      START: 'ARTIST.REQUEST.FETCH_TOP.START',
      SUCCESS: 'ARTIST.REQUEST.FETCH_TOP.SUCCESS',
    },
  },
};

/* Actions */
export const errorFetchArtist = () => ({
  type: actionTypes.REQUEST.FETCH.ERROR,
});

export const startFetchArtistById = (artistId) => ({
  type: actionTypes.REQUEST.FETCH.START,
  artistId,
});

export const successFetchArtist = (artist) => ({
  type: actionTypes.REQUEST.FETCH.SUCCESS,
  artist,
});

export const errorFetchArtistTopTracks = () => ({
  type: actionTypes.REQUEST.FETCH_TOP.ERROR,
});

export const startFetchArtistTopTracks = (artistId) => ({
  type: actionTypes.REQUEST.FETCH_TOP.START,
  artistId,
});

export const successFetchArtistTopTracks = (artistId, entities, result) => ({
  type: actionTypes.REQUEST.FETCH_TOP.SUCCESS,
  artistId,
  entities,
  result,
});

export default {
  errorFetchArtist,
  startFetchArtistById,
  successFetchArtist,
  errorFetchArtistTopTracks,
  startFetchArtistTopTracks,
  successFetchArtistTopTracks,
};

// src/entities/Artist/Artist.reducer.js

import { actionTypes } from './Artist.actions';

/* Reducer */
const defaultState = {
  byId: {},
  topTracks: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST.FETCH.SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.artist.id]: action.artist,
        },
      };
    case actionTypes.REQUEST.FETCH_TOP.SUCCESS:
      return {
        ...state,
        topTracks: {
          ...state.topTracks,
          [action.artistId]: action.result,
        }
      };
    default:
      return state;
  }
};

export default reducer;

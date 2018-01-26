// src/entities/Artist/Artist.reducer.js

import { fromJS } from 'immutable';

import { actionTypes } from './Artist.actions';

/* Reducer */
const defaultState = fromJS({
  byId: {},
  topTracks: {},
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST.FETCH.SUCCESS:
      return state.merge(fromJS({
        byId: { [action.artist.id]: action.artist }
      }));
    case actionTypes.REQUEST.FETCH_TOP.SUCCESS:
      return state.merge(fromJS({
        topTracks: { [action.artistId]: action.result }
      }));
    default:
      return state;
  }
};

export default reducer;

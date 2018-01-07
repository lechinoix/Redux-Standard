// src/entities/Artist/Artist.reducer.js

import { actionTypes } from '../Artist/Artist.actions';

/* Reducer */
const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST.FETCH_TOP.SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.entities.album,
        },
      };
    default:
      return state;
  }
};

export default reducer;

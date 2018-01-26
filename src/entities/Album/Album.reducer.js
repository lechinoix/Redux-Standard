// src/entities/Artist/Artist.reducer.js

import { fromJS } from 'immutable';
import { actionTypes } from '../Artist/Artist.actions';

/* Reducer */
const defaultState = fromJS({});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST.FETCH_TOP.SUCCESS:
      return state.merge(fromJS({
        byId: action.entities.album,
      }));
    default:
      return state;
  }
};

export default reducer;

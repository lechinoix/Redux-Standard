// src/entities/Artist/Artist.reducer.js

import { actionTypes } from '../Artist/Artist.actions';
import { fromJS } from 'immutable';

/* Reducer */
const defaultState = fromJS({});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST.FETCH_TOP.SUCCESS:
      return state.merge(fromJS({
        byId: action.entities.track,
      }));
    default:
      return state;
  }
};

export default reducer;

import actionTypes from './Toggle.actions';

/* Reducer */
const defaultState = { isActive: false };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE:
      return {
        isActive: !state.isActive
      };
    default:
      return state;
  }
};

export default reducer;

// src/reducers.js

import { combineReducers } from 'redux';
import albumReducer from './entities/Album/Album.reducer';
import artistReducer from './entities/Artist/Artist.reducer';
import trackReducer from './entities/Track/Track.reducer';
import toggleReducer from './components/Toggle/Toggle.reducer';

const rootReducer = combineReducers({
  album: albumReducer,
  artist: artistReducer,
  track: trackReducer,
  toggle: toggleReducer,
})

export default rootReducer;

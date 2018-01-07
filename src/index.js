// src/App.js (main webpack entrypoint)

import React from 'react';
import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import Artist from './pages/Artist';
import rootReducer from './reducers';
import artistSagas from './entities/Artist/Artist.sagas';
import './style.css'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(artistSagas);

const App = () => (
  <Provider store={store}>
    <Artist />
  </Provider>
);

render(<App />, document.getElementById('app'));

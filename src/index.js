// src/App.js (main webpack entrypoint)

import React from 'react';
import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import Artist from './pages/Artist';
import rootReducer from './reducers';
import artistSagas from './entities/Artist/Artist.sagas';
import './style.css'

const sagaMiddleware = createSagaMiddleware();

const enhancers = [
  applyMiddleware(sagaMiddleware),
];


const composeEnhancers =
  typeof window === 'object' &&
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'My Deezer App' }) :
  compose;


const store = createStore(
  rootReducer,
  composeEnhancers(...enhancers),
);

sagaMiddleware.run(artistSagas);

const App = () => (
  <Provider store={store}>
    <Artist />
  </Provider>
);

render(<App />, document.getElementById('app'));

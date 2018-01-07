// src/entities/Artist/Artist.sagas.js

import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchArtist, fetchArtistTopTracks } from '../api';
import actionCreators, { actionTypes } from './Artist.actions';
import { normalizeTrackList } from '../Track/Track.schema';

function* fetchArtistByIdSaga(action) {
  try {
    const artist = yield call(fetchArtist, action.artistId);
    yield put(
      actionCreators.successFetchArtist(artist)
    );
  } catch (err) {
    yield put(actionCreators.errorFetchArtist());
  }
}

function* fetchArtistTopTracksSaga(action) {
  try {
    const { data } = yield call(fetchArtistTopTracks, action.artistId);
    const { entities, result } = normalizeTrackList(data);
    yield put(
      actionCreators.successFetchArtistTopTracks(
        action.artistId,
        entities,
        result
      )
    );
  } catch (err) {
    yield put(actionCreators.errorFetchArtistTopTracks());
  }
}

export default function* () {
  yield takeLatest(
    actionTypes.REQUEST.FETCH.START,
    fetchArtistByIdSaga,
  );
  yield takeLatest(
    actionTypes.REQUEST.FETCH_TOP.START,
    fetchArtistTopTracksSaga,
  );
}

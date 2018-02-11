import { all } from "redux-saga/effects";
import searchSaga from './search';
import webSocketSaga from './web-socket';

export default function* rootSaga() {
  yield all([
    searchSaga(),
    webSocketSaga()
  ])
}
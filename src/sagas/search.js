import { takeLatest, put, call, select } from "redux-saga/effects";
import { types as SearchTypes, selectors , actions } from "./../reducers/search";
import { fetchData } from "./../lib/api";

function* worker(action) {
  try {
    const filter = yield select(selectors.getFilter);
    const result = yield call(fetchData, filter.type);
    yield put(actions.searchResponse(result));
  } catch (error) {
    yield put(actions.searchError(error));
  }
}
export default function* watcher() {
  yield takeLatest(SearchTypes.FETCH, worker);
}

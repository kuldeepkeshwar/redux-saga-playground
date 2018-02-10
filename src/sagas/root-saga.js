import { takeEvery, put, call, select } from "redux-saga/effects";
import { types as SearchTypes, selectors } from "./../reducers";
import { fetchData } from "./../lib/api";

function* searchSaga(action) {
  try {
    const filter = yield select(selectors.getFilter);
    const result = yield call(fetchData, filter);
    yield put({ type: SearchTypes.FETCH_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: SearchTypes.FETCH_FAILURE, payload: error });
  }
}
export default function* rootSaga() {
  yield takeEvery(SearchTypes.FETCH, searchSaga);
}

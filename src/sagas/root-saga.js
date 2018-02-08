import { takeEvery, put, call } from "redux-saga/effects";
import { types as UserTypes } from "./../reducers";
import { fetchUsers } from "./../lib/api";

function* userSaga(action) {
  try {
    const users = yield call(fetchUsers, action);
    yield put({type:UserTypes.USER_FETCH_SUCCESS, payload:users});
  } catch (error) {
    yield put({ type:UserTypes.USER_FETCH_FAILURE, payload:error});
  }
}
export default function* rootSaga() {
  yield takeEvery(UserTypes.USER_FETCH, userSaga);
}

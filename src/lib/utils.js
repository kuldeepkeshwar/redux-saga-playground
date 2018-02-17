import { put, call } from 'redux-saga/effects';

const trimArray = arr => arr.filter((item, i) => i < 3);
export const apiCaller = (api, success, failure) => {
  return function*(...args) {
    try {
      const result = yield call(api, ...args);
      yield put(success(trimArray(result)));
    } catch (error) {
      yield put(failure(error));
    }
  };
};

export const simpleActionCreator = type => payload => ({
  type,
  payload
});
export const apiTypeCreator = type => ({
  FETCH: `FETCH_${type}`,
  SUCCESS: `FETCH_${type}_SUCCESS`,
  FAILURE: `FETCH_${type}_FAILURE`
});

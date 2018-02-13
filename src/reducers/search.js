import { Search_FILTER_TYPES as FILTER_TYPES } from 'utils/constants';
const types = {
  FETCH: "FETCH",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
  CLEAR: "CLEAR"
};
const initalState = {
  results: [],
  loading: false,
  error: false,
  filters: {
    type: FILTER_TYPES.USERS
  }
};
export default (state = initalState, { type, payload }) => {
  switch (type) {
    case types.CLEAR: {
      return {
        ...state,
        results: []
      };
    }
    case types.FETCH: {
      return {
        ...state,
        error: false,
        results: [],
        loading: true,
        filters: { ...state.filters, ...payload }
      };
    }
    case types.FETCH_SUCCESS: {
      return {
        ...state,
        results: payload,
        loading: false
      };
    }
    case types.FETCH_FAILURE: {
      return {
        ...state,
        results: [],
        error: true,
        loading: false
      };
    }
    default:
      return state;
  }
};
const search = filters => ({ type: types.FETCH, payload: filters });
const searchResponse = results => ({ type: types.FETCH_SUCCESS, payload: results });
const searchError = err => ({ type: types.FETCH_FAILURE, payload: err });

const clear = () => ({ type: types.CLEAR });
const actions = {
  search, searchResponse, searchError,
  clear
};
const getState = (state) => state.search;

const selectors = {
  getSearchResult: state => getState(state).results,
  getFilter: state => getState(state).filters,
  isLoading: state => getState(state).loading,
  isError: state => getState(state).error,
  canClear: state => getState(state).results.length > 0
};
export { types, actions, selectors };

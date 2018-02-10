const types = {
  FETCH: "FETCH",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
  CLEAR: "CLEAR",
  CHANGE_FILTER:"CHANGE_FILTER",
};
const FILTER_TYPES = {
  USERS: "users",
  ALBUMS: "albums"
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
  debugger;
  switch (type) {
    case types.CLEAR: {
      return {
        ...state,
        results: [],
      };
    }
    case types.FETCH: {
      return {
        ...state,
        error: false,
        results: [],
        loading: true,
        filters: { ...state.filters, ...payload}
      };
    }
    case types.FETCH_SUCCESS: {
      return {
        ...state,
        results: payload,
        loading: false,
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
const search = (filters) => ({ type: types.FETCH,payload:filters});
const clear = () => ({ type: types.CLEAR });
const actions = {
  search,
  clear,
};
const selectors = {
  getSearchResult: state => state.results,
  getFilter:state=>state.filters,
  isLoading: state => state.loading,
  isError: state => state.error,
  canClear: state => state.results.length > 0
};
export { FILTER_TYPES ,types, actions, selectors };

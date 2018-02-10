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
  filters: FILTER_TYPES.USERS
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
    case types.CHANGE_FILTER: {
      return {
        ...state,
        filters: payload
      };
    }
    default:
      return state;
  }
};
const search = () => ({ type: types.FETCH});
const clear = () => ({ type: types.CLEAR });
const changeFilter = (event) => ({ type: types.CHANGE_FILTER, payload: event.target.value  });
const actions = {
  search,
  clear,
  changeFilter,
};
const selectors = {
  getSearchResult: state => state.results,
  getFilter:state=>state.filters,
  isLoading: state => state.loading,
  isError: state => state.error,
  canClear: state => state.results.length > 0
};
export { FILTER_TYPES ,types, actions, selectors };

const types = {
  USER_FETCH: "USER_FETCH",
  USER_FETCH_SUCCESS: "USER_FETCH_SUCCESS",
  USER_FETCH_FAILURE: "USER_FETCH_FAILURE",
  USER_CLEAR: "USER_CLEAR"
};
const initalState = {
  users: [],
  loading: false,
  error: false,
  filters: {}
};
export default (state = initalState, { type, payload }) => {
  switch (type) {
    case types.USER_CLEAR: {
      return {
        ...state,
        error: false,
        users: [],
        loading: false
      };
    }
    case types.USER_FETCH: {
      return {
        error: false,
        users: [],
        loading: true,
        filters: payload
      };
    }
    case types.USER_FETCH_SUCCESS: {
      return {
        ...state,
        users: payload,
        loading: false
      };
    }
    case types.USER_FETCH_FAILURE: {
      return {
        ...state,
        users: [],
        error: true,
        loading: false
      };
    }
    default:
      return state;
  }
};
const fetchUsers = filters => ({ type: types.USER_FETCH, payload: filters });
const clearUsers = () => ({ type: types.USER_CLEAR });
const actions = {
  fetchUsers,
  clearUsers
};
const selectors = {
  getUsers: state => state.users,
  isLoading: state => state.loading,
  isError: state => state.error,
  canClear: state => state.users.length > 0
};
export { types, actions, selectors };

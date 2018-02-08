const types = {
  PERSONS_FETCH: "PERSONS_FETCH",
  PERSONS_FETCH_SUCCESS: "PERSONS_FETCH_SUCCESS",
  PERSONS_FETCH_FAILURE: "PERSONS_FETCH_FAILURE"
};
const initalState = {
  users: [],
  loading: false,
  error: false,
  filters: {}
};
export default (state = initalState, { type, payload }) => {
  switch (type) {
    case types.PERSONS_FETCH: {
      return {
        error: false,
        users: [],
        loading: true,
        filters: payload
      };
    }
    case types.PERSONS_FETCH_SUCCESS: {
      return {
        ...state,
        users: payload,
        loading: false
      };
    }
    case types.PERSONS_FETCH_FAILURE: {
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
const fetchUsers = filters => ({ type: types.PERSONS_FETCH, payload: filters });

const actions = {
  fetchUsers
};
const selectors = {
  getUsers: state => state.users,
  isLoading: state => state.loading,
  isError: state => state.error
};
export { types, actions, selectors };

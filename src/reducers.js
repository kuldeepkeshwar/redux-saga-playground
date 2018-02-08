const types = {
  PERSONS_FETCH: "PERSONS_FETCH",
  PERSONS_FETCH_SUCCESS: "PERSONS_FETCH_SUCCESS",
  PERSONS_FETCH_FAILURE: "PERSONS_FETCH_FAILURE"
};
const initalState = {
  persons: [],
  loading: false,
  error: false,
  filters: {}
};
export default (state = initalState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case types.PERSONS_FETCH: {
      return {
        error: false,
        persons: [],
        loading: true,
        filters: payload
      };
    }
    case types.PERSONS_FETCH_SUCCESS: {
      return {
        ...state,
        persons: payload,
        loading: false
      };
    }
    case types.PERSONS_FETCH_FAILURE: {
      return {
        ...state,
        persons: [],
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
  getPersons: state => state.persons,
  isLoading: state => state.loading,
  isError: state => state.Error
};
export { types, actions, selectors };

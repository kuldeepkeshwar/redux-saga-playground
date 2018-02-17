import { DATE_FILTER } from 'lib/constants';

const types = {
  CHANGE_FILTER: 'CHANGE_FILTER',
  FETCH_USER: 'FETCH_USER',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
  FETCH_ALBUM: 'FETCH_ALBUM',
  FETCH_ALBUM_SUCCESS: 'FETCH_ALBUM_SUCCESS',
  FETCH_ALBUM_FAILURE: 'FETCH_ALBUM_FAILURE',
  CLEAR: 'CLEAR'
};
const initalState = {
  users: {
    open: false,
    results: [],
    loading: false,
    error: false
  },
  albums: {
    open: false,
    results: [],
    loading: false,
    error: false
  },
  filters: {
    date: DATE_FILTER.Today
  }
};
export default (state = initalState, { type, payload }) => {
  switch (type) {
    case types.CLEAR: {
      return {
        ...state,
        users: {
          open: false,
          results: [],
          loading: false,
          error: false
        },
        albums: {
          open: false,
          results: [],
          loading: false,
          error: false
        }
      };
    }
    case types.CHANGE_FILTER: {
      return {
        ...state,
        filters: { ...state.filters, ...payload }
      };
    }
    case types.FETCH_USER: {
      return {
        ...state,
        users: {
          open: true,
          error: false,
          results: [],
          loading: true
        }
      };
    }
    case types.FETCH_USER_SUCCESS: {
      return {
        ...state,
        users: {
          ...state.users,
          results: payload,
          loading: false
        }
      };
    }
    case types.FETCH_USER_FAILURE: {
      return {
        ...state,
        users: {
          ...state.users,
          results: [],
          error: true,
          loading: false
        }
      };
    }
    case types.FETCH_ALBUM: {
      return {
        ...state,
        albums: {
          open: true,
          error: false,
          results: [],
          loading: true
        }
      };
    }
    case types.FETCH_ALBUM_SUCCESS: {
      return {
        ...state,
        albums: {
          ...state.albums,
          results: payload,
          loading: false
        }
      };
    }
    case types.FETCH_ALBUM_FAILURE: {
      return {
        ...state,
        albums: {
          ...state.albums,
          results: [],
          error: true,
          loading: false
        }
      };
    }
    default:
      return state;
  }
};

const changeFilter = filters => ({
  type: types.CHANGE_FILTER,
  payload: filters
});
const clear = () => ({ type: types.CLEAR });

const fetchUsers = () => ({
  type: types.FETCH_USER
});
const userResponse = results => ({
  type: types.FETCH_USER_SUCCESS,
  payload: results
});
const userError = err => ({ type: types.FETCH_USER_FAILURE, payload: err });

const fetchAlbums = () => ({
  type: types.FETCH_ALBUM
});
const albumResponse = results => ({
  type: types.FETCH_ALBUM_SUCCESS,
  payload: results
});
const albumError = err => ({ type: types.FETCH_ALBUM_FAILURE, payload: err });

const actions = {
  changeFilter,
  fetchUsers,
  userResponse,
  userError,
  fetchAlbums,
  albumResponse,
  albumError,
  clear
};
const getState = state => state.search;

const selectors = {
  getState: getState,
  getUsersData: state => getState(state).users,
  getAlbumsData: state => getState(state).albums,
  getFilter: state => getState(state).filters
};
export { types, actions, selectors };

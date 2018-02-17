import searchReducer from './search';
import { combineReducers } from 'redux';

export default combineReducers({
  search: searchReducer
});

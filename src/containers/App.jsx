import React from "react";
import { connect } from "react-redux";
import UserList from "./../components/UserList";
import AlbumList from "./../components/AlbumList";
import SearchForm from "./../components/SearchForm";
import {
  FILTER_TYPES,
  actions as SearchActions,
  selectors
} from "./../reducers";
import WithLoader from "./../decorators/with-loader";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const UserListWrapper = WithLoader(UserList);
const AlbumListWrapper = WithLoader(AlbumList);
const ListWrapper ={
  [FILTER_TYPES.USERS]: UserListWrapper,
  [FILTER_TYPES.ALBUMS]: AlbumListWrapper,
}
const renderList = (filter, props) => {
  const Component = ListWrapper[filter];
  return <Component {...props}/>
};
const App = ({ changeFilter, filters, search, canClear, clear, ...rest }) => (
  <div style={styles}>
    <h2>Search Users/Albums {"\u2728"}</h2>
    <SearchForm 
      changeFilter={changeFilter}
      filters={filters}
      search={search}
      canClear={canClear}
      clear={canClear}
    ></SearchForm>
    {renderList(filters, {...rest})}
  </div>
);
const props = state => ({
  results: selectors.getSearchResult(state),
  filters: selectors.getFilter(state),
  isLoading: selectors.isLoading(state),
  isError: selectors.isError(state),
  canClear: selectors.canClear(state)
});
const actions = { ...SearchActions };

export default connect(props, actions)(App);

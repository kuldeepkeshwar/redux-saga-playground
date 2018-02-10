import React from "react";
import { connect } from "react-redux";
import UserList from "./../components/UserList";
import { actions as SearchActions, selectors } from "./../reducers";
import WithLoader from "./../decorators/with-loader";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const UserListWrapper = WithLoader(UserList);

const App = ({
  changeFilter,
  filters,
  search,
  canClear,
  clear,
  ...rest
}) => (
  <div style={styles}>
    <h2>Search Users/Albums {"\u2728"}</h2>
    <select onChange={changeFilter} value={filters}>
      <option value="users">Users</option>
      <option value="albums">Albums</option>
    </select>
    <button onClick={search}> Search</button>
    {canClear ? <button onClick={clear}> Clear</button> : null}
    <UserListWrapper {...rest} />
  </div>
);
const props = state => ({
  users: selectors.getSearchResult(state),
  filters: selectors.getFilter(state),
  isLoading: selectors.isLoading(state),
  isError: selectors.isError(state),
  canClear: selectors.canClear(state)
});
const actions = { ...SearchActions };

export default connect(props, actions)(App);

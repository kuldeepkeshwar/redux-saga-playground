import React from "react";
import { connect } from "react-redux";
import UserList from "./../components/UserList";
import { actions as UserActions, selectors } from "./../reducers";
import WithLoader from './../decorators/with-loader';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const UserListWrapper = WithLoader(UserList);

const App = ({ fetchUsers, canClear, clearUsers, ...rest }) => (
  <div style={styles}>
    <h2>Click to see some magic happen {"\u2728"}</h2>
    {(canClear) ? <button onClick={clearUsers}> Clear</button> : <button onClick={fetchUsers}> Fetch Users</button>
    }
    <UserListWrapper {...rest} />
  </div>
);
const props = state => ({
  users: selectors.getUsers(state),
  isLoading: selectors.isLoading(state),
  isError: selectors.isError(state),
  canClear: selectors.canClear(state),
});
const actions = { ...UserActions};

export default connect(props, actions)(App);

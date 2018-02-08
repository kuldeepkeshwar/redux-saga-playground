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

const App = ({ fetchUsers, ...rest }) => (
  <div style={styles}>
    <button onClick={fetchUsers}> Fetch Users</button>
    <UserListWrapper {...rest} />
    <h2>Click to see some magic happen {"\u2728"}</h2>
  </div>
);
const props = state => ({
  users: selectors.getUsers(state),
  isLoading: selectors.isLoading(state),
  isError: selectors.isError(state)
});
const actions = {
  fetchUsers: UserActions.fetchUsers
};
export default connect(props, actions)(App);

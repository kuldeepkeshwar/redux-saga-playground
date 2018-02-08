import React from "react";
import { connect } from "react-redux";
import UserList from "./UserList";
import { actions as UserActions, selectors} from './reducers';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = ({ users, isLoading, isError, fetchUsers}) => (
  <div style={styles}>
    <button onClick={fetchUsers}> Fetch Users</button>
    <UserList users={users} />
    <h2>Click to see some magic happen {"\u2728"}</h2>
  </div>
);
const props = (state)=>({
  users: selectors.getPersons(state),
  isLoading: selectors.isLoading(state),
  isError: selectors.isError(state),
})
const actions = {
  fetchUsers:UserActions.fetchUsers
}
export default connect(props,actions)(App);

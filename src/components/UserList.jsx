import React from "react";

const rowStyles = {
  display: "flex",
  border: "#bb9797 solid 2px",
  alignItems: "left",
  margin: "10px",
  justifyContent: "center"
};
const cellStyles = {
  margin: "10px",
  width: "90px",
  overflow: "hidden",
  textOverflow: "ellipsis"
};
const cellIdStyles = {
  margin: "10px 0px",
  width: "25px",
  overflow: "hidden",
  textOverflow: "ellipsis"
};
const containerStyles = {
  margin: "10px"
};
export default ({ users }) => (
  <div style={containerStyles}>
    {users.map(user => (
      <div style={rowStyles} key={user.name}>
        <div style={cellIdStyles}>{user.id}</div>
        <div style={cellStyles}>{user.name}</div>
        <div style={cellStyles}>{user.email}</div>
        <div style={cellStyles}>{user.phone}</div>
        <div style={cellStyles}>{user.website}</div>
      </div>
    ))}
  </div>
);

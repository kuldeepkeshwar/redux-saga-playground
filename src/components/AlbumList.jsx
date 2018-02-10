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
export default ({ results }) => (
  <div style={containerStyles}>
    {results.map(album => (
      <div style={rowStyles} key={album.id}>
        <div style={cellIdStyles}>{album.id}</div>
        <div style={cellStyles}>{album.userId}</div>
        <div style={cellStyles}>{album.title}</div>
      </div>
    ))}
  </div>
);

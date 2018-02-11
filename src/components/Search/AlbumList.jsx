import React from "react";

const rowStyles = {
  display: "flex",
  border: "#bb9797 solid 2px",
  alignItems: "center",
  margin: "10px",
};
const cellStyles = {
  margin: "10px",
};
const containerStyles = {
  margin: "10px"
};
export default ({ results }) => (
  <div style={containerStyles}>
    {results.map(album => (
      <div style={rowStyles} key={album.id}>
        <div style={cellStyles}>{album.id}</div>
        <div style={cellStyles}>{album.userId}</div>
        <div style={cellStyles}>{album.title}</div>
      </div>
    ))}
  </div>
);

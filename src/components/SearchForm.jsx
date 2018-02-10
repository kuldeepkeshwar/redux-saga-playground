import React from "react";

export default ({ changeFilter, search, clear,filters, canClear}) => (
  <div>
    <select onChange={changeFilter} value={filters}>
      <option value="users">Users</option>
      <option value="albums">Albums</option>
    </select>
    <button onClick={search}> Search</button>
    {canClear ? <button onClick={clear}> Clear</button> : null}
  </div>
);

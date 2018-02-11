import React from "react";
import UserList from "./../components/UserList";
import AlbumList from "./../components/AlbumList";
import SearchForm from "./../components/SearchForm";
import { Search_FILTER_TYPES as FILTER_TYPES } from './../utils/constants';

import WithLoader from "./../decorators/with-loader";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const UserListWrapper = WithLoader(UserList);
const AlbumListWrapper = WithLoader(AlbumList);
const ListWrapper = {
  [FILTER_TYPES.USERS]: UserListWrapper,
  [FILTER_TYPES.ALBUMS]: AlbumListWrapper
};
const renderList = ({ type }, props) => {
  const Component = ListWrapper[type];
  return <Component {...props} />;
};

export default ({ filters, search, canClear, clear, ...rest }) => (
  <div style={styles}>
    <h2>Search Users/Albums {"\u2728"}</h2>
    <SearchForm
      filters={filters}
      search={search}
      canClear={canClear}
      clear={clear}
    />
    {renderList(filters, { ...rest })}
  </div>
);

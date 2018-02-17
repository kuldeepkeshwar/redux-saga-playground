import React from 'react';
import UserList from './UserList';
import AlbumList from './AlbumList';
import SearchForm from './SearchForm';
import WithLoader from 'decorators/with-loader';
import Accordion from 'components/Accordion';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const UserListWrapper = WithLoader(UserList);
const AlbumListWrapper = WithLoader(AlbumList);

export default ({
  filters,
  userData,
  albumData,
  fetchUsers,
  fetchAlbums,
  changeFilter
}) => (
  <div style={styles}>
    <h2>Search Users/Albums {'\u2728'}</h2>
    <SearchForm changeFilter={changeFilter} filters={filters} />
    <Accordion open={userData.open} title="Users" onOpen={fetchUsers}>
      <UserListWrapper {...userData} />
    </Accordion>
    <Accordion open={albumData.open} title="Albums" onOpen={fetchAlbums}>
      <AlbumListWrapper {...albumData} />
    </Accordion>
  </div>
);

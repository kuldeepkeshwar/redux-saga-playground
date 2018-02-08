import React from 'react';

const styles= {
  padding:'14px 0px',
}
export default ({ users }) => <div style={styles}>
  {users.map(user=>(<div key={user.name}>{user.name}</div>))}
</div>;

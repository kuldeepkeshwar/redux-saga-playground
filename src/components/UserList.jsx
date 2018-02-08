import React from 'react';

export default ({ users }) => <div>
  {users.map(user=>(<div key={user.name}>{user.name}</div>))}
</div>;

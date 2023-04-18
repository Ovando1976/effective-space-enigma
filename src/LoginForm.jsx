import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Joined: {user.joined}</p>
    </div>
  );
};

export default UserInfo;

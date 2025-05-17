import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/user/userSlice';

const UserInfo = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User: {user.isLoggedIn ? user.name : 'Guest'}</h2>
      {user.isLoggedIn ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(login({ name: 'Tanvir' }))}>Login</button>
      )}
    </div>
  );
};

export default UserInfo;

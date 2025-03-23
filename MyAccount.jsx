import React from 'react';

const MyAccount = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='account'>
    <div className='account2'>
      <h1>My Account</h1>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
      </div>
    </div>
  );
};

export default MyAccount;

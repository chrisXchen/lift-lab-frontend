import React from 'react';
import Login from '../components/Login';

const LoginPage = (props) => {
  return (
    <div>
      <Login updateLoggedIn={props.updateLoggedIn} />
    </div>
  );
};

export default LoginPage;

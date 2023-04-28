import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Not logged in.</h1>
      <Link to="/login">Login here</Link>
      <br />
      <Link to="/register">Register here</Link>
    </div>
  );
};

export default LandingPage;

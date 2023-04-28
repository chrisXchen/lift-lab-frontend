import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn }) => {
  return (
    <nav>
      {!loggedIn && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      {loggedIn && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;

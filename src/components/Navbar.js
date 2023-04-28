import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from './StyledNavbar';

const Navbar = ({ loggedIn }) => {
  return (
    <StyledNavbar>
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
    </StyledNavbar>
  );
};

export default Navbar;

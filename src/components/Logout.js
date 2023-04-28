import React from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';


const Logout = (props) => {
  const { updateLoggedIn } = props;
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.get('/api/logout');
      console.log('Logged out user:', response.data);
      updateLoggedIn(false, null);
      navigate('/');
    } catch (error) {
      console.error('Error logging out user:', error.response.data);
    }
  };

  return (
    <div>
      <h4>Wanna Logout?</h4>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;

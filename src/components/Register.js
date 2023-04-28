import React, { useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate();

  const register = async () => {
    try {
      const response = await axios.post('/api/register', { username, password, firstName });
      console.log('Registered user:', response.data.username);
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="mrdiabolical@devious.com"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Super Secure Password Here"
      />
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Jesus"
      />
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;

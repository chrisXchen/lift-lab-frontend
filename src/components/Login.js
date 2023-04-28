import React, { useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
  const { updateLoggedIn } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      console.log('Logged in user:', response.data);
      updateLoggedIn(true, response.data);
      navigate('/');
    } catch (error) {
      console.error('Error logging in user:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;

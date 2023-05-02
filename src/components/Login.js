import React, { useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';

const Login = (props) => {
  const { updateLoggedIn } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (event) => {
  event.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });
      console.log('Logged in user:', response.data);
      updateLoggedIn(true, response.data);
      navigate('/');
    } catch (error) {
      alert("Sorry! Couldn't log you in. Try a different username + password combination.");
      console.error('Error logging in user:', error.response.data);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={(e) => login(e)}>
        <TextField
          fullWidth
          required
          margin="normal"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          required
          margin="normal"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;

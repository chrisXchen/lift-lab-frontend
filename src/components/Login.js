import React, { useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DarkInput = styled.input`
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  border-color: black;
  color: black;
  font-size: 16px;
  padding: 8px 12px;
  width: 100%;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
`;

const OutlineButton = styled.button`
  margin-bottom: 1rem;
  background-color: transparent;
  border: 2px solid #333;
  color: #333;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #333;
    color: #ffffff;
  }
`;


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
      alert("Sorry! Couldn't log you in. Try a different username + password combination.");
      console.error('Error logging in user:', error.response.data);
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <DarkInput
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <DarkInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <OutlineButton onClick={login}>Login</OutlineButton>
    </Container>
  );
};

export default Login;

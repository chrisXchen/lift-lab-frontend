import React from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    <Container>
      <h4>Wanna Logout?</h4>
      <OutlineButton onClick={logout}>Logout</OutlineButton>
    </Container>
  );
};

export default Logout;

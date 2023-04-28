import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #181818;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <Title>Not logged in.</Title>
      <StyledLink to="/login">Login here</StyledLink>
      <br />
      <StyledLink to="/register">Register here</StyledLink>
    </Container>
  );
};

export default LandingPage;

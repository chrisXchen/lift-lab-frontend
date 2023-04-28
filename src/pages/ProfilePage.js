import React from 'react';
import styled from 'styled-components';
import Logout from '../components/Logout';
import AddPreferredWorkouts from '../components/AddPreferredWorkouts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
`;

const SubHeading = styled.h3`
  margin-bottom: 1.5rem;
`;

const ProfilePage = (props) => {
  const { updateLoggedIn, currentUser } = props;

  return (
    <Container>
      <Heading>Profile</Heading>
      <SubHeading>{currentUser.username}</SubHeading>
      <AddPreferredWorkouts currentUser={currentUser} />
      <Logout updateLoggedIn={updateLoggedIn} />
    </Container>
  );
};

export default ProfilePage;

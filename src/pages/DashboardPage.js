import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import WorkoutList from '../components/WorkoutList';
import WorkoutSearchModal from '../components/WorkoutSearchModal';
import DisplayPreferredWorkouts from '../components/DisplayPreferredWorkouts';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileLink = styled(RouterLink)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const DashboardPage = ({ currentUser }) => {
  return (
    <Container>
      <DisplayPreferredWorkouts currentUser={currentUser} />
      <WorkoutList userId={currentUser._id} />
      <WorkoutSearchModal />
      <ProfileLink to="/profile">Go to Profile</ProfileLink>
    </Container>
  );
};

export default DashboardPage;

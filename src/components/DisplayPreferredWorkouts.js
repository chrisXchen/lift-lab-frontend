import React, { useState, useEffect } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  display: inline-block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;


function DisplayPreferredWorkouts({ currentUser }) {
  const [preferredWorkouts, setPreferredWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (workoutSlug) => {
    navigate(`/dashboard/${workoutSlug}`);
  };

  useEffect(() => {
    const fetchPreferredWorkouts = async () => {
      try {
        const response = await axios.get('/api/preferred-workouts', {
          params: {
            userId: currentUser._id,
          },
        });
        setPreferredWorkouts(response.data);
      } catch (error) {
        console.error('Error fetching preferred workouts:', error);
      }
    };

    if (currentUser) {
      fetchPreferredWorkouts();
    }
    setLoading(false);
  }, [currentUser]);

  return (
    <Container>
      <Title>Favorited Workouts</Title>
      {!loading && preferredWorkouts.length !== 0 ? (
        <ul>
          {preferredWorkouts.map((workout) => (
            <ListItem key={workout._id} onClick={() => handleClick(workout.slug)}>
              {workout.name}</ListItem>
          ))}
        </ul>
      ) : <p>No Favorited Workouts Yet!</p>}
    </Container>
  );
};

export default DisplayPreferredWorkouts;

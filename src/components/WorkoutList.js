import React, { useEffect, useState } from 'react';
import axios from '../api';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const DateHeader = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const WorkoutHeader = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const WorkoutList = ({ userId }) => {
  const [groupedWorkouts, setGroupedWorkouts] = useState({});

  useEffect(() => {
    if (userId) {
      axios
        .get(`/api/recorded-workouts?userId=${userId}`)
        .then((response) => {
          setGroupedWorkouts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching workouts:', error);
        });
    }
  }, [userId]);

  return (
    <Container>
      <Title>Your Recorded Workouts</Title>
      {Object.keys(groupedWorkouts).map((date) => (
        <div key={date}>
          <DateHeader>{new Date(date).toLocaleDateString()}</DateHeader>
          {Object.keys(groupedWorkouts[date]).map((workoutName) => (
            <div key={workoutName}>
              <WorkoutHeader>{workoutName}</WorkoutHeader>
              <ul>
                {groupedWorkouts[date][workoutName].map((workout) => (
                  <li key={workout._id}>
                    {workout.weight} lbs x {workout.reps} reps
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
};


export default WorkoutList;

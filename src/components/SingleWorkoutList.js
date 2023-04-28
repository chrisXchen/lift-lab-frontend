import React from 'react';
import styled from 'styled-components';

const WorkoutList = styled.div`
  margin-bottom: 2rem;
`;

const WorkoutDate = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const WorkoutListUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const WorkoutListLi = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const SingleWorkoutList = ({ workoutData }) => {
  if (!workoutData || Object.keys(workoutData).length === 0) {
    return <p>No workouts recorded.</p>;
  }

  const workoutDates = Object.keys(workoutData);
  const exercise = Object.keys(workoutData[workoutDates[0]])[0];

  return (
    <WorkoutList>
      {workoutDates.map((date) => (
        <div key={date}>
          <WorkoutDate>{new Date(date).toLocaleDateString()}</WorkoutDate>
          <div>
            <WorkoutListUl>
              {workoutData[date][exercise].map((workout) => (
                <WorkoutListLi key={workout._id}>
                  {workout.weight} lbs x {workout.reps} reps
                </WorkoutListLi>
              ))}
            </WorkoutListUl>
          </div>
        </div>
      ))}
    </WorkoutList>
  );
};

export default SingleWorkoutList;

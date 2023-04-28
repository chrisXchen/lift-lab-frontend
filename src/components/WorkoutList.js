import React, { useEffect, useState } from 'react';
import axios from '../api';

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
    <div>
      <h2>Your Recorded Workouts</h2>
      {Object.keys(groupedWorkouts).map((date) => (
        <div key={date}>
          <h3>{new Date(date).toLocaleDateString()}</h3>
          {Object.keys(groupedWorkouts[date]).map((workoutName) => (
            <div key={workoutName}>
              <h4>{workoutName}</h4>
              <ul>
                {groupedWorkouts[date][workoutName].map((workout) => (
                  <li key={workout._id}>
                    Weight: {workout.weight} lbs, Reps: {workout.reps}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;

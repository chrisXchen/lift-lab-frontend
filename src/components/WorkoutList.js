import React, { useEffect, useState } from 'react';
import axios from '../api';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await axios.get('/api/workouts');
      setWorkouts(response.data);
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <h2>My Workouts</h2>
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;


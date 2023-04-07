import React, { useState } from 'react';
import axios from '../api';

const WorkoutForm = ({ onSubmit }) => {
  const [workoutName, setWorkoutName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/workouts', { name: workoutName }); // Update this line
      onSubmit(response.data);
      setWorkoutName('');
    } catch (error) {
      console.error('Error creating workout:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Workout</h2>
      <label htmlFor="workout-name">Workout Name:</label>
      <input
        id="workout-name"
        type="text"
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default WorkoutForm;

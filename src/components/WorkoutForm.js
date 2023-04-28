import React, { useState } from 'react';
import axios from '../api';
import Cookies from 'js-cookie';

const moment = require('moment');

const WorkoutForm = ({ workout }) => {
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const userId = Cookies.get('userId');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/api/recorded-workouts', {
        user: userId,
        UUID: "1",
        date: new moment(date),
        workout: workout[0]._id,
        weight: weight,
        reps: reps
      })
      .then((response) => {
        setDate('');
        setWeight(0);
        setReps(0);
      })
      .catch((error) => {
        console.log({
        user: userId,
        UUID: "1",
        date: new moment(date),
        workout: workout[0]._id,
        weight: weight,
        reps: reps
      });
        console.error('Error creating workout:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="workout">Date, Weight, and Reps:</label>
      <input
        type="text"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        id="reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <button type="submit">Create Workout</button>
    </form>
  );
};

export default WorkoutForm;

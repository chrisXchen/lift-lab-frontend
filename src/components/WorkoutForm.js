import React, { useState } from 'react';
import axios from '../api';
import Cookies from 'js-cookie';
import styled from 'styled-components';

const moment = require('moment');

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-size: 1.1rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`

  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;

  margin-bottom: 1rem;
  background-color: transparent;
  border: 2px solid #333;
  color: #333;
  border-radius: 5px;

  &:hover {
    background-color: #333;
    color: #ffffff;
  }
`;

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
        UUID: '1',
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
        console.error('Error creating workout:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="workout">Date</Label>
      <Input
        type="text"
        id="date"
        value={date}
        placeholder="12/31/99"
        onChange={(e) => setDate(e.target.value)}
      />
      <Label htmlFor="workout">Weight</Label>
      <Input
        type="number"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <Label htmlFor="workout">Repetitions</Label>
      <Input
        type="number"
        id="reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <SubmitButton type="submit">Create Workout</SubmitButton>
    </Form>
  );
};

export default WorkoutForm;

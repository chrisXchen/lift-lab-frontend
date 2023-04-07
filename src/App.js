import React, { useState } from 'react';
import './App.css';
import WorkoutList from './components/WorkoutList';
import WorkoutForm from './components/WorkoutForm';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (name) => {
    setWorkouts([...workouts, { name }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lift Lab</h1>
      </header>
      <main>
        <WorkoutList workouts={workouts} />
        <WorkoutForm onSubmit={addWorkout} />
      </main>
    </div>
  );
}

export default App;

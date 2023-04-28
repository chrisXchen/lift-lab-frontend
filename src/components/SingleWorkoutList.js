import React from 'react';

const SingleWorkoutList = ({ workoutData }) => {
  if (!workoutData || Object.keys(workoutData).length === 0) {
    return <p>No workouts recorded.</p>;
  }

  const workoutDates = Object.keys(workoutData);
  const exercise = Object.keys(workoutData[workoutDates[0]])[0];

  return (
    <div>
      {workoutDates.map((date) => (
        <div key={date}>
          <h3>{new Date(date).toLocaleDateString()}</h3>
            <div>
              <ul>
                {workoutData[date][exercise].map((workout) => (
                  <li key={workout._id}>
                    {workout.weight} lbs x {workout.reps} reps
                  </li>
                ))}
              </ul>
            </div>
        </div>
      ))}
    </div>
  )
};



export default SingleWorkoutList;

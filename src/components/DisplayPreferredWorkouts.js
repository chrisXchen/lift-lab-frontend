import React, { useState, useEffect } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h2>Favorited Workouts</h2>
      {!loading && preferredWorkouts.length !== 0 ? (
      <ul>
        {preferredWorkouts.map((workout) => (
          <li key={workout._id} onClick={() => handleClick(workout.slug)}>
          {workout.name}</li>
        ))}
      </ul>
      ) : <p>No Favorited Workouts Yet!</p>}
    </div>
  );
}

export default DisplayPreferredWorkouts;

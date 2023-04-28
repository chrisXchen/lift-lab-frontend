import React, { useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';

const WorkoutSearchModal = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const searchWorkouts = async () => {
    try {
      const response = await axios.get(`/api/search-all-workouts?search=${searchInput}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching workouts:', error.response.data);
    }
  };

  const handleClick = (workoutSlug) => {
    navigate(`/dashboard/${workoutSlug}`);
  };

  return (
    <div>
      <h2>Search Workouts</h2>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search workouts"
      />
      <button onClick={searchWorkouts}>Search</button>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((workout) => (
            <li key={workout._id} onClick={() => handleClick(workout.slug)}>
              {workout.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutSearchModal;

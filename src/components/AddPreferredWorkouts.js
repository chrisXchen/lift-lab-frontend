import React, { useState } from 'react';
import axios from '../api';

function AddPreferredWorkouts({ currentUser }) {
  const [searchInput, setSearchInput] = useState('');
  const [workoutList, setWorkoutList] = useState([]);
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const searchWorkouts = async () => {
    try {
      const response = await axios.get('/api/search-all-workouts', {
        params: {
          search: searchInput,
        },
      });
      setWorkoutList(response.data);
    } catch (error) {
      console.error('Error searching workouts:', error);
    }
  };

  const onAddPreferredWorkout = async (workout) => {
    try {
      await axios.post('/api/preferred-workouts', {
        userId: currentUser._id,
        workoutId: workout._id,
      });
      setSelectedWorkouts([...selectedWorkouts, workout]);
      console.log('Workout added to preferred workouts');
    } catch (error) {
      console.error('Error adding workout to preferred workouts:', error);
    }
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <button onClick={handleShow}>Add Preferred Workouts</button>

      {showModal && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="modal-title">Add Preferred Workouts</h4>
              <button className="close-button" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search workouts"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <button onClick={searchWorkouts}>Search</button>
              </div>
              <div className="results-container">
                <ul>
                  {workoutList.map((workout) => (
                    <li key={workout._id}>
                      {workout.name}
                      <button
                        className="add-workout-button"
                        onClick={() => onAddPreferredWorkout(workout)}
                      >
                        Add to preferred workouts
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddPreferredWorkouts;

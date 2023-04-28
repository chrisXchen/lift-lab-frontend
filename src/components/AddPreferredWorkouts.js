import React, { useState } from 'react';
import axios from '../api';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 2rem;
`;

const AddButton = styled.button`
  margin-bottom: 1rem;
  background-color: transparent;
  border: 2px solid #333;
  color: #333;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #333;
    color: #ffffff;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
`;

const ModalTitle = styled.h4`
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ResultsContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 1rem;
`;

const AddWorkoutButton = styled.button`
  margin-left: 1rem;
  background-color: transparent;
  border: 2px solid #333;
  color: #333;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #333;
    color: #ffffff;
  }
`;

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
      handleClose();
    } catch (error) {
      console.error('Error adding workout to preferred workouts:', error);
    }
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container>
      <AddButton onClick={handleShow}>Favorite a Workout</AddButton>

      {showModal && (
        <Modal onClick={handleClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Favorite a Workout</ModalTitle>
            <CloseButton onClick={handleClose}>&times;</CloseButton>
            <div>
              <InputGroup>
                <input
                  type="text"
                  placeholder="Search workouts"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <button onClick={searchWorkouts}>Search</button>
              </InputGroup>
              <ResultsContainer>
                <ul>
                  {workoutList.map((workout) => (
                    <li key={workout._id}>
                      {workout.name}
                      <AddWorkoutButton
                        onClick={() => onAddPreferredWorkout(workout)}
                      >
                        Add to preferred workouts
                      </AddWorkoutButton>
                    </li>
                  ))}
                </ul>
              </ResultsContainer>
            </div>
            <div>
              <button onClick={handleClose}>Close</button>
            </div>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default AddPreferredWorkouts;

import React, { useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  list-style: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

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
    <Container>
      <h2>Search Workouts</h2>
      <SearchInput
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search workouts"
      />
      <SearchButton onClick={searchWorkouts}>Search</SearchButton>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((workout) => (
            <ListItem key={workout._id} onClick={() => handleClick(workout.slug)}>
              {workout.name}
            </ListItem>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default WorkoutSearchModal;

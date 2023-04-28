import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api';
import SingleWorkoutList from '../components/SingleWorkoutList';
import WorkoutForm from '../components/WorkoutForm';
import Cookies from 'js-cookie';
import WorkoutChart from '../components/WorkoutChart';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const WorkoutImage = styled.img`
  width: 100%;
  max-width: 500px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 1rem;
`;

const WorkoutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const WorkoutPage = () => {
  const { workoutslug } = useParams();
  const [workoutData, setWorkoutData] = useState(null);
  const [genWorkoutData, setGenWorkoutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = Cookies.get('userId');

  const hasWorkoutData = () => {
    for (const date in workoutData) {
      if (Object.keys(workoutData[date]).length > 0) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const workoutResponse = await axios.get(`/api/filter-recorded-workouts?userId=${userId}&workoutSlug=${workoutslug}`);
        console.log('Fetched workout data:', workoutResponse.data);
        setWorkoutData(workoutResponse.data);
        const genWorkoutResponse = await axios.get(`/api/slug-search-all-workouts?search=${workoutslug}`);
        console.log("Grabbed workout data from slug:", genWorkoutResponse.data);
        setGenWorkoutData(genWorkoutResponse.data);
      } catch (error) {
        console.error('Error fetching workout data:', error.response.data);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId, workoutslug]);

  return (
    <Main>
      {!loading && (
        <div>
          <WorkoutImage src={genWorkoutData[0].gifUrl} alt="workout gif" />
          <WorkoutTitle>{genWorkoutData[0].name}</WorkoutTitle>
          {hasWorkoutData() && (
            <WorkoutChart workoutSlug={workoutslug} userId={userId} />
          )}
          <SingleWorkoutList workoutData={workoutData} />
          <WorkoutForm workout={genWorkoutData} onFormSubmit={fetchData} />
        </div>
      )}
    </Main>
  );
};

export default WorkoutPage;

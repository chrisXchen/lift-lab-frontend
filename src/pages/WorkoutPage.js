import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api';
import SingleWorkoutList from '../components/SingleWorkoutList';
import WorkoutForm from '../components/WorkoutForm';
import Cookies from 'js-cookie';
import WorkoutChart from '../components/WorkoutChart';

const WorkoutPage = () => {
  const { workoutslug } = useParams();
  const [workoutData, setWorkoutData] = useState(null);
  const [genWorkoutData, setGenWorkoutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = Cookies.get('userId');

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

  useEffect(() => {
    fetchData();
  }, [userId, workoutslug]);

  return (
    <main>
      {!loading && (
        <div>
          <img src={genWorkoutData[0].gifUrl} alt="workout gif"/>
          <h2>{genWorkoutData[0].name}</h2>
          {workoutData && workoutData.length > 0 && (
            <WorkoutChart workoutSlug={workoutslug} userId={userId} />
          )}
          <SingleWorkoutList workoutData={workoutData} />
          <WorkoutForm workout={genWorkoutData} onFormSubmit={fetchData} />
        </div>
      )}
    </main>
  );
};

export default WorkoutPage;

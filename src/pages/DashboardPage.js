import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutList from '../components/WorkoutList';
import WorkoutSearchModal from '../components/WorkoutSearchModal';
import DisplayPreferredWorkouts from '../components/DisplayPreferredWorkouts';

const DashboardPage = ({ currentUser }) => {
  return (
    <div>
      <DisplayPreferredWorkouts currentUser={currentUser} />
      <WorkoutList userId={currentUser._id} />
      <WorkoutSearchModal />
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default DashboardPage;

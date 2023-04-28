import React from 'react';
import Logout from '../components/Logout';
import AddPreferredWorkouts from '../components/AddPreferredWorkouts';

const ProfilePage = (props) => {
  const { updateLoggedIn, currentUser } = props;

  return (
    <div>
      <h2>Profile</h2>
      <h3>Email: {currentUser.username}</h3>
      <AddPreferredWorkouts currentUser={currentUser} />
      <Logout updateLoggedIn={updateLoggedIn} />
    </div>
  );
};

export default ProfilePage;

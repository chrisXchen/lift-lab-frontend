import React, { useEffect, useState } from 'react';
import axios from '../api';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const WorkoutList = ({ userId }) => {
  const [groupedWorkouts, setGroupedWorkouts] = useState({});

  useEffect(() => {
    if (userId) {
      axios
        .get(`/api/recorded-workouts?userId=${userId}`)
        .then((response) => {
          setGroupedWorkouts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching workouts:', error);
        });
    }
  }, [userId]);

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h4" gutterBottom>
        Your Recorded Workouts
      </Typography>
      {Object.keys(groupedWorkouts).map((date) => (
        <Box key={date}>
          <Typography variant="h5" gutterBottom>
            {new Date(date).toLocaleDateString()}
          </Typography>
          {Object.keys(groupedWorkouts[date]).map((workoutName) => (
            <Box key={workoutName}>
              <Typography variant="h6" gutterBottom>
                {workoutName}
              </Typography>
              <List>
                {groupedWorkouts[date][workoutName].map((workout) => (
                  <ListItem key={workout._id} disablePadding>
                    <ListItemText>
                      {workout.weight} lbs x {workout.reps} reps
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default WorkoutList;

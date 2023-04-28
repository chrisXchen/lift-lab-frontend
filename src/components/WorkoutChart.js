import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from '../api';

function WorkoutChart({ workoutSlug, userId }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(`/api/workout-chart-data?workoutSlug=${workoutSlug}&userId=${userId}`);
        setChartData(response.data);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, [workoutSlug, userId]);

  return (
    <LineChart
      width={900}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}

export default WorkoutChart;

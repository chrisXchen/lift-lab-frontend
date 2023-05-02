import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import { Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import WorkoutPage from './pages/WorkoutPage';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const updateLoggedIn = (status, user) => {
    setLoggedIn(status);
    setCurrentUser(user);

    if (status) {
      Cookies.set('userId', user._id);
      Cookies.set('username', user.username);
    } else {
      Cookies.remove('userId');
      Cookies.remove('username');
    }
  };

  const userIdCookie = Cookies.get('userId');
  const usernameCookie = Cookies.get('username');

  useEffect(() => {
    const fetchUser = async () => {
      const userId = Cookies.get('userId');
      const username = Cookies.get('username');

      if (userId && username) {
        setCurrentUser({ _id: userId, username });
        setLoggedIn(true);
        console.log('Found cookie for ' + username);
      }

      setLoading(false);
    };

    fetchUser();
  }, [userIdCookie, usernameCookie]);

  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Navbar loggedIn={loggedIn} />
        <main>
          {!loading && (
            <Routes>
              <Route
                path="/"
                element={loggedIn ? <Navigate to="/dashboard" /> : <LandingPage />}
              />
              <Route
                path="/login"
                element={loggedIn ? <Navigate to="/dashboard" /> : <LoginPage updateLoggedIn={updateLoggedIn} />}
              />
              <Route
                path="/register"
                element={loggedIn ? <Navigate to="/dashboard" /> : <RegisterPage />}
              />
              <Route
                path="/profile"
                element={loggedIn ? <ProfilePage updateLoggedIn={updateLoggedIn} currentUser={currentUser} /> : <Navigate to="/login" />}
              />
              <Route
                path="/dashboard"
                element={loggedIn ? <DashboardPage currentUser={currentUser} /> : <Navigate to="/login" />}
              />
              <Route
                path="/dashboard/:workoutslug"
                element={loggedIn ? <WorkoutPage /> : <Navigate to="/login" />}
              />
            </Routes>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;

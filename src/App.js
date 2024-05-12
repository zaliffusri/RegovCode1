import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleRegister = (userData) => {
    console.log('Registration data:', userData);
    setUser(userData);
  };

  const handleLogin = (loginData) => {
    console.log('Login data:', loginData);
    setUser(loginData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="app-container">
        <Navigation user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/register" element={<RegisterForm onRegister={handleRegister} />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={user ? <div>Welcome, {user.username}! Your account has been created.</div> : <div>Please register or log in.</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

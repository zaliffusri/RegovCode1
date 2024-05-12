import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigation({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // This should be a function passed from App to reset the user state
    navigate('/login');
  };

  return (
    <nav>
      <Link to="/register">Register</Link> | 
      <Link to="/login">Login</Link> |
      {user && (
        <>
          <Link to="/profile">Profile</Link> |
          <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Navigation;

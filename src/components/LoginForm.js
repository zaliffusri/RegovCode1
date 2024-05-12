import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginForm.css'; // Importing the CSS for styling

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigateToRegister = () => {
    navigate('/register'); // Navigate to the registration page
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(formData);
    setFormData({ username: '', password: '' }); // Reset form after submission
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="regov.png" alt="Log in to Your Account" /> {/* Ensure you have an appropriate image */}
      </div>
      <div className="login-form-container">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link">Don't have an account? <a href="#" onClick={handleNavigateToRegister}>Sign up here</a></p>
      </div>
    </div>
  );
};

export default LoginForm;

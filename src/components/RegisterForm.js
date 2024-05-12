import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './RegisterForm.css'; // Make sure the CSS file is correctly linked

const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigateToLogin = () => {
    navigate('/login'); // Navigate to the login page
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
    onRegister(formData);
    setFormData({ username: '', email: '', password: '' }); // Reset form after submission
  };

  return (
    <div className="register-container">
      <div className="register-image">
        <img src="regov.png" alt="Welcome to Our Platform" />
      </div>
      <div className="register-form-container">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="login-link">Already have an account? <a href="#" onClick={handleNavigateToLogin}>Login here</a></p>
      </div>
    </div>
  );
};

export default RegisterForm;

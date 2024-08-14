import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="HomePage">
      <h1>Welcome to Our App</h1>
      <div className="button-container">
        <button onClick={handleLoginClick} className="toggle-button">Login</button>
        <button onClick={handleSignupClick} className="toggle-button">Signup</button>
      </div>
    </div>
  );
};

export default HomePage;
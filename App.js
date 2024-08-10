import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate('/landing');
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Walmart Store</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Input fields here */}
        <button type="submit" className="login-button">Sign In</button>
      </form>
    </div>
  );
}

export default LoginPage;

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/user/login', {
        name,
        password,
      });
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('authToken', token); // Guarda el token en localStorage
        setMessage('Login successful!');
//REDIRIGIR

      } else {
        setMessage('Login failed');
      }
    } catch (error) {
      setMessage('Error during login. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
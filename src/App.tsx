import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import { Home } from './containers/Home/Home';
import { Users } from './containers/Users/Users';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
    </Routes>
  );
}

export default App;

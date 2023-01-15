import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import { Home } from './containers/Home/Home';
import { Users } from './containers/Users/Users';
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </Provider>
  );
}

export default App;

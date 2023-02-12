

import Home from './routes/Home';
import About from './routes/About';
import Nav from './components/Nav'
import Login from './routes/Login';
import Profile from './routes/Profile'


import { useState } from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';




function App() {
  return (
    <>
    <Nav />
    <div className="App App-header">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
     

    </div>

    
    </>

  );
}

export default App;

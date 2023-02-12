import Home from './routes/Home';
import About from './routes/About';
import Nav from './components/Nav'


import { useState } from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';




function App() {
  return (
    <>
    <Nav />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
    </>

  );
}

export default App;

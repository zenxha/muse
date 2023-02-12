import Home from './routes/Home';
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
      </Routes>
    
    </>

  );
}

export default App;

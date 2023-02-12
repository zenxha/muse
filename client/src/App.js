import Home from './routes/Home';
import Nav from './components/Nav'
import SignIn from './routes/SignIn';


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
        <Route path="/sign_in" element={<SignIn />} />
      </Routes>
    
    </>

  );
}

export default App;

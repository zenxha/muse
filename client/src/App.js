import Home from './routes/Home';


import { useState } from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

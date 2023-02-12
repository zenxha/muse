import Home from './routes/Home'

import { useState } from 'react';
import {
  BrowserRouter as Router, /* You can also use HashRouter with '#/' */
  Route,
  Routes,
} from 'react-router-dom';



function App() {

  const [text, setText] = useState([""])

  return (
    <Router>
    <Routes>
      <Route path={`/detail`} element={<Home/>} /> 
      {/* :id is a dynamic router */}
      <Route path={`/`} element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;

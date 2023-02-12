import Home from './routes/Home'
import { useState } from 'react';
import {
  BrowserRouter as Router, /* You can also use HashRouter with '#/' */
  Route,
  Routes,
} from 'react-router-dom';



function App() {
  //const [text, setText] = useState([""])
  return (
    <Router>
      <Routes>
        <Route path={`/detail`} element={<h2>Hi</h2> } /> 
        <Route path={`/`} element={<h2>Hello</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

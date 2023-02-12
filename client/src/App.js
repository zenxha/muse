import './App.css';
import axios from 'axios';


import Button from './components/Button';
import Nav from './components/Nav';

import { useState } from 'react';




function App() {

  const [text, setText] = useState([""])

  const hitBackend = () => {
    axios.get('https://catfact.ninja/fact')
    .then((response) => {
    console.log(response.data)
    setText(response.data.fact);
    })
    }

  return (
    <div className="App">
        <Nav />
        
        <p>
          Hello there
        </p>
        <a
          className="App-link"
          href="https://github.com/zenxha/muse"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
        
        <Button text="Cat Fact" onClick={hitBackend}/>
        {text}
      
      
    </div>
  );
}

export default App;

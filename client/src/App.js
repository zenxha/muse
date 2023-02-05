import logo from './logo.svg';
import './App.css';
import axios from 'axios';


import Button from './components/Button'
import SignInForm from './components/SignInForm';

import NavClass from './components/NavWClass';

import { useState } from 'react';
import NavWClass from './components/NavWClass';



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
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello there
        </p>
        <SignInForm />
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
      </header>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SignInForm from './fanArtists';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <button className="btn" onClick={hitBackend}>Send request</button>
        {text}
      </header>
      
    </div>
  );
}

export default App;

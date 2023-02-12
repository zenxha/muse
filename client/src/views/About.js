import logo from './logo.svg';
import './App.css';
import axios from 'axios';


import Button from './components/Button';
import Nav from './components/Nav';

import { useState } from 'react';



function About() {

    
  return (
    <div className="App App-header">
        <Nav />
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
        
      
      
    </div>
  );
}

export default App;

import Button from '../components/Button';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios';

import '../App.css';

const Home = () => {
  const [text, setText] = useState([""])

  const hitBackend = () => {
    axios.get('https://catfact.ninja/fact')
    .then((response) => {
    console.log(response.data)
    setText(response.data.fact);
    })
  }

  return (
    <>

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
      <p>{text}</p>
    </>
  );
}

export default Home;
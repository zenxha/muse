import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Button from '../components/Button';
import OutlinedCard from '../components/Card';
import creatorData from '../data/data.json';
import {useState} from 'react';
import styles from './About.module.css'


import '../App.css';
import { TableRow } from '@mui/material';

const About = () => {


  function doThis(x)  {
     return <OutlinedCard key={x.id} />
  }

  console.log(creatorData.data);
  
  return (
  <Grid container spacing={3}   alignItems="center" justify="center" >
    <Grid item xs={12}>
    <a
        className="App-link"
        href="https://github.com/zenxha/muse"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Repository

      </a>
    </Grid>
    
    {creatorData.data.map(x => {
      return <Grid item xs={3} >
        <OutlinedCard key={x.id} person={x}/>
         </Grid>
    })}
      
    

</Grid>
  );
}


export default About;
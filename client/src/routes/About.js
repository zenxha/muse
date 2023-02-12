import Grid from '@mui/material/Unstable_Grid2';

import OutlinedCard from '../components/Card';
import creatorData from '../data/data.json';

import styles from './About.module.css'


import '../App.css';

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
      
      {creatorData.data.map(person => {
        return <Grid item xs={3} >
          <OutlinedCard key={person.id} person={person}/>
          </Grid>
      })}
        
  </Grid>
  );
}


export default About;
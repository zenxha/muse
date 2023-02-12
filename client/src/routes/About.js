import Grid from '@mui/material/Unstable_Grid2';

import OutlinedCard from '../components/Card';
import creatorData from '../data/data.json';


import '../App.css';

const About = () => {

  console.log(creatorData.data);
  
  return (
    <Grid container spacing={3} alignItems="center" justify="center" >
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
        return <Grid key={person.id} item xs={4} >
          <OutlinedCard person={person}/>
          </Grid>
      })}
    </Grid>
  );
}


export default About;
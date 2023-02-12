import Button from '../components/Button';
import OutlinedCard from '../components/Card';
import creatorData from '../data/data.json';
import {useState} from 'react';
import axios from 'axios';


import '../App.css';

const About = () => {


  function doThis(x)  {
     return <OutlinedCard key={x.id} />
  }

  console.log(creatorData.data);
  
  return (
    <div className="App App-header">
      <a
        className="App-link"
        href="https://github.com/zenxha/muse"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Repository

      </a>
      
        {creatorData.data.map(x => {
          return <OutlinedCard key={x.id} person={x}/>
        })}
       
        

        
      
      
    </div>
  );
}


export default About;
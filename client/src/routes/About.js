import Button from '../components/Button';
import Card from '../components/Card';
import creatorData from '../data/data.json';
import {useState} from 'react';
import axios from 'axios';

import '../App.css';

const About = () => {

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
      <div>
        {creatorData.data.map((x) => {
          <Card key={x.id} person={x} />
        })}
      </div>
    </div>
  );
}

export default About;
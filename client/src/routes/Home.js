import Button from '../components/Button';
import {useState} from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
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
    <div className="App App-header">
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
      <p>{text}</p>
    </div>
  );
}

export default Home;
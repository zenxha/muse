import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SignInForm from './SignInForm';


const hitBackend = () => {
  axios.get('https://catfact.ninja/fact')
  .then((response) => {
  console.log(response.data)
  })
  }

function App() {
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
        <button className="btn" onClick={hitBackend}>Send request</button>
      </header>
      
    </div>
  );
}

export default App;

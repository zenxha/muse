import React, { useState , useEffect} from 'react';
import "./SignInForm.module.css"
// import Button from './Button';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Button from "./Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();
function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Username: ${username} Password: ${password}`);
    console.log(window.location.origin)
    fetch(`http://localhost:3001/login?username=${username}&password=${password}`)
    // fetch(`http://localhost:3001/test`)
    .then(response => response.json())
    .then((json) => {
      console.log();
    });
  };



  return (
    <form onSubmit={handleSubmit}>
      <label>
        {"Username: "}
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        {"Password: "}
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <Button type="submit" text = "Sign In" />

    </form>
  );
}

export default SignInForm;

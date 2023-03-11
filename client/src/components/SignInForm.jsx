import React, { useState } from 'react';
import "./SignInForm.module.css"
// import Button from './Button';
// import Button from '@mui/material/Button';
import Button from "./Button";
//import { createTheme } from '@mui/material/styles';
import {Link} from 'react-router-dom';


//const theme = createTheme();
function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setPassword('')
    console.log(`Username: ${username} Password: ${password}`);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   //setUsername('');
  //   setPassword('')


  //   console.log(`Username: ${username} Password: ${password}`);
  //   console.log(window.location.origin)
  // //   fetch(`http://localhost:3001/login?username=${username}&password=${password}`)
  // //   // fetch(`http://localhost:3001/test`)
  // //   .then(response => response.json())
  // //   .then((json) => {
  // //     console.log();
  // //   });
  // // };

  // console.log(JSON.stringify({ username, password }))
  // fetch('http://localhost:3001/login', {
  //   method: 'POST',
  //   body: JSON.stringify({ username, password }),
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {
  //   // Handle the response from the backend
  //   if (data.error) {
  //   alert(data.error);
  //   } else {
  //   alert('Login successful');
  //   }
  //   });
  //   };

  return (
    <>
      <div>
        <label>
          {"Username: "}
          <input type="text" placeholder="id" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          {"Password: "}
          <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
        </label>
      </div>

      <div className='btns'>
        <Button type="submit" text = "Log In" onClick={handleClick} />
        <Link to="/create_account"  style={{ textDecoration: "none", color: 'black', }}><Button type="submit" text = "Sign In" /></Link>
      </div>
    </>
  );
}

export default SignInForm;

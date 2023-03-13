import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './SignInFormStyle.css';


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
    <div style={{
      display: 'flex',
      //background: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      <div className="container">
          <div className="image">
              <div className="form-box">
                  <div className="form">
                      <h2>Register</h2>
                      {/* <div className="input-box">
                          <input type="text" required className="username" />
                          <label for="Username">
                              Username
                          </label>
                      </div> */}
                      <div className="input-box">
                          <input type="text" required className="email" />
                          <label for="Username">
                              Email
                          </label>
                      </div>
                      <div className="input-box">
                          <input type="password" required className="password" />
                          <label for="Username">
                              Password
                          </label>
                      </div>
                      <div className="group">
                          <Link to="/forgot_password" className='link'>Forgot Password</Link>
                          <Link to="/register" className='link'>Sign in</Link>
                      </div>
                      <button className='sign-in-btn'>Sign up</button>
                  </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;

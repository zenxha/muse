import React, { useState } from 'react';
import Button from './Button';

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

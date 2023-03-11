import { useState } from 'react';
import Button from "./Button";
import { Link } from 'react-router-dom';
import {User} from '../objects/User.ts';

function CreateAccountForm() {
    var newUser = new User();
    const [username, setUsername] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handdleSubmit = (event) => {
        event.preventDefault();
        newUser.userName = username;
        console.log(newUser);
    }
    return (
        <form onSubmit={handdleSubmit}>
            <label>
                {"Username: "}
                <input type="text" placeholder="name" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <Button text="click submit" />
        </form>
    );
}

export default CreateAccountForm;
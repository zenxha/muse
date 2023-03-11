import React, { useState } from 'react'
import { useEffect } from 'react';


const Profile = ({username}) => {
    const [user, setUser] = useState(null)
    const [age, setAge] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:3001/api/users/username/${username}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(()=> setUser(null))
    }, [])
    useEffect(() => {
        // const dob  = new Date(user.dob)
        // const ageInMilliseconds = Date.now() - dob.getTime();
        // const ageInYears = Math.floor(ageInMilliseconds / 31557600000);
        // setAge(ageInYears);
    }, [user])
  return (
    <div>
        { user ? (
            <div>
                <h1>{user.username}'s profile</h1>
                <p>Email: {user.email} </p>
                <p>Birthday: {user.dob} </p>
            </div>
        ) : (<div>User not found</div>)
        }
    </div>
  )
}




export default Profile
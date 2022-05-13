import React, { useState } from 'react'
import UserData from './UserData';

const CustomForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  const udpateData = (e) => {
    e.preventDefault();
    if (email && password) {
      let user = {email : email, password : password}
      setAllUsers([...allUsers, user]);
      setEmail('')
      setPassword('') 
    } else {
      alert('please fill data')
    }
  }

  return (
    <>
      <form action="" onSubmit={udpateData}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={email} autoComplete='off' 
          onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={password} autoComplete='off' 
          onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      { allUsers.length > 0 && <UserData users={allUsers} /> }
    </>
  )
}

export default CustomForm
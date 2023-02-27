import React from "react"
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser, id }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container" id={id} onSubmit={handleSubmit}>
        <form autoComplete="off" >
          <label htmlFor={`${id}-email-input`}>Email</label>
          <input type="text" id={`${id}-email-input`} name="email" value={credentials.email} onChange={handleChange} required />
          <label htmlFor={`${id}-password-input`}>Password</label>
          <input type="password" id={`${id}-password-input`} name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit" id={`${id}-submit-button`}>LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}

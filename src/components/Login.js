import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(credentials);
    
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='email'
          type='text'
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          name='password'
          type='password'
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Log in</button>
      </form>
      <Link to='/sign-up'><button>Create an Account</button></Link>
    </div>
  )
}

export default Login; 
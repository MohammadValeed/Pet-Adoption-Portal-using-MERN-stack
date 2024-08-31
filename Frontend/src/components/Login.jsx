// Frontend - Signin.js

import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PetsContext } from './PetsContext';

function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { UpdateUserInfo } = useContext(PetsContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.message === 'Success') {
          console.log(result.data.user)
          window.alert('Successfully signed in!');
          localStorage.setItem('isAdmin', true);
          localStorage.setItem("user", JSON.stringify(result.data.user))
          UpdateUserInfo(result.data.user)
          navigate('/');
        } else if (result.data === 'The Password is Incorrect') {
          window.alert('Incorrect Password');
        } else {
          window.alert('User Does not exist');
          navigate('/register');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ width: '300px' }}>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              style={{ margin: '10px 0', padding: '10px' }}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              style={{ margin: '10px 0', padding: '10px' }}
            />
            <button type='submit' style={{ padding: '10px', backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}>
              Sign In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
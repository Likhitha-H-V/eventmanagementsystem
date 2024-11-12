import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../src/authContext';
import './CSS/signup.css'

function SignUp() {
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword || !email) {
      setError('All fields are required');
      return;
    }
    if(password.length < 4 || password.length > 10){
        setError('Password length should be greater than 4 and lesser than 10');
        return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const errorMessage = signup(username, password);
    if (errorMessage) {
      setError(errorMessage);
    } else {
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSignUp} className='signupForm'>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
       <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
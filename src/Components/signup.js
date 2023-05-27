//working code
import React, { useState } from 'react';
import './signup.css';
const Signup = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are mandatory');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    onSignup({ name, email });

    // Clear form inputs and display success message
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSuccess('Signup successful!');
  };

  return (
    <div className='signup-container'>
      <h2>Signup</h2>
      <input id='name'
        type="text"
        placeholder=" Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input id='email'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input id='password'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input id='password1'
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
//end of working code








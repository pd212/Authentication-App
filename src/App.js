
//working code
import React, { useState } from 'react';
import Signup from './Components/signup';
import Profile from './Components/profile';

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignup = (userData) => {
    const accessToken = generateAccessToken();
    const userWithToken = { ...userData, accessToken };
    setUser(userWithToken);
    localStorage.setItem('user', JSON.stringify(userWithToken));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const generateAccessToken = () => {
    const accessToken = Array.from(
      window.crypto.getRandomValues(new Uint8Array(16)),
      (byte) => byte.toString(16).padStart(2, '0')
    ).join('');

    return accessToken;
  };
  
  if (!user) {
    return <Signup onSignup={handleSignup} />;
  }

  return <Profile user={user} onLogout={handleLogout} />;
  
 
};

export default App;

//end of working code





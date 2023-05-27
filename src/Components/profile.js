
// working code
import React from 'react';
import './profile.css';
const Profile = ({ user, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className='profile-container'>
      <h2 id='profile'>Profile</h2>
      <p id='name1'>Name: {user.name}</p>
      <p id='email1'>Email: {user.email}</p>
      <p id='password3'>Password: {user.password}</p>
      <button id='log-out' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
//end of working code






// import React from 'react';
// import { useHistory } from 'react-router-dom';

// const Profile = () => {
//   const history = useHistory();
//   const user = JSON.parse(localStorage.getItem('user'));

//   if (!user || !user.accessToken) {
//     // User does not have an access token, redirect to the signup page
//     history.push('/signup');
//     return null;
//   }

//   const handleLogout = () => {
//     // Clear user data and access token from local storage
//     localStorage.removeItem('user');

//     // Redirect to signup page
//     history.push('/signup');
//   };

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p>Name: {user && user.name}</p>
//       <p>Email: {user && user.email}</p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Profile;



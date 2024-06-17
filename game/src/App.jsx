import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import Game from './Game.jsx';
import './App.scss';

function App() {
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); // State variable to track login status
  const [loggedInUserId, setLoggedInUserId] = useState(null); // State variable to store logged-in user ID

  useEffect(() => {
    const back_url = "https://api.zarrinmehr.zarrinroya.com";
    axios.get(back_url + '/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Function to handle successful login
  const handleLoginSuccess = (userId) => {
    console.log('Login successful');
    setLoggedIn(true);
    setLoggedInUserId(userId); // Set the logged-in user ID
  };

  return (
    <div>
      <div className='App'>
        <div className="app-container">
        {loggedIn ? <Game userId={loggedInUserId} /> : <Login onLoginSuccess={handleLoginSuccess} />}
        {/* Pass loggedInUserId as prop */}
          {/* <h1>User IDs</h1> */}
          {/* <ul>
            {users.map(user => (
              <li key={user.id}>id:{user.id} code:{user.personal_code}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default App;

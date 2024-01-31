import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Replace these values with your actual admin credentials
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    if (username === adminUsername && password === adminPassword) {
      // Admin login successful
      setErrorMessage('');

      // Redirect to the Admin page
      navigate('/admin');
    } else {
      // Admin login failed
      setErrorMessage('Incorrect username or password');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
      <h2 style={{ fontSize: '24px' }}>Admin Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ margin: '10px', padding: '5px' }} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: '10px', padding: '5px' }} />
      </label>
      <br />
      <button onClick={handleLogin} style={{ fontSize: '18px', padding: '10px', cursor: 'pointer', backgroundColor: 'lightcoral', color: 'white', border: 'none', borderRadius: '5px' }}>
        Login
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Adminlogin;

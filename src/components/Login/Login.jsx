import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (username && password) {
      setError('');

      try {
        const response = await fetch(`http://localhost:3001/users?username=${username}&password=${password}`);

        if (response.ok) {
          const userData = await response.json();

          if (userData.length > 0) {
            console.log('User logged in successfully');
            // Redirect the user or perform other actions
            window.location.href = 'http://google.com/';
          } else {
            setError('Invalid username or password');
          }
        } else {
          setError('Error logging in');
        }
      } catch (error) {
        setError('Error logging in');
      }
    } else {
      setError('Please fill in both username and password');
    }
  };

  return (
    <div style={styles.container}>
    <h2 style={styles.title}>Login</h2>
    <div style={styles.formGroup}>
      <label style={styles.label}>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
    </div>
    <div style={styles.formGroup}>
      <label style={styles.label}>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
    </div>
    {error && <p style={styles.error}>{error}</p>}
    <button onClick={handleLogin} style={styles.button}>
      Login
    </button>
    <p style={styles.linkText}>
        Don't have an account? <Link to="/signup" style={{color:'orange'}}>Create one</Link>
      </p>
  </div>
);
};

const styles = {
container: {
  width: '300px',
  margin: 'auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  marginTop: '30px',
},
title: {
  fontSize: '24px',
  marginBottom: '20px',
  textAlign: 'center',
  color: '#333',
},
formGroup: {
  marginBottom: '15px',
},
label: {
  display: 'block',
  marginBottom: '8px',
  color: '#555',
},
input: {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ddd',
},
error: {
  color: 'red',
  marginBottom: '10px',
  textAlign: 'center',
},
button: {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#FFA500', // Orange color
  color: '#fff',
  borderRadius: '4px',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.3s ease', // Smooth transition on hover
},
};


export default Login;

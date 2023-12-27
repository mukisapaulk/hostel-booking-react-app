import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (username && password && confirmPassword && password === confirmPassword) {
      setError('');

      const newUser = { username, password };

      try {
        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          console.log('User registered successfully');
          // Reset the form after successful registration
          setUsername('');
          setPassword('');
          setConfirmPassword('');

          // Display an alert to notify the user
          window.alert('User registered successfully!');
        } else {
          setError('Error registering user');
        }
      } catch (error) {
        setError('Error registering user');
      }
    } else {
      setError('Please fill in all fields correctly');
    }
  };

  return (
    <div style={styles.container}>
    <h2 style={styles.title}>Signup</h2>
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
    <div style={styles.formGroup}>
      <label style={styles.label}>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={styles.input}
      />
    </div>
    {error && <p style={styles.error}>{error}</p>}
    <button onClick={handleSignup} style={styles.button}>
      Signup
    </button>
    <p style={styles.linkText}>
        Already have an account? <Link to="/login" style={{color:'orange'}}>Login</Link>
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
  marginTop: '40px',
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

export default Signup;

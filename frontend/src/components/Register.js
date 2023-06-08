import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('normal');

  const handleSignup = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      name: name,
      password: password,
      user_type: userType,
    };

    fetch('http://127.0.0.1:8000/api/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 className="text-center mb-4">Sign Up</h1>
        <form onSubmit={handleSignup} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <br />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <br />
          <div style={styles.fieldGroup}>
            <label htmlFor="userType" style={styles.label}>
            </label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              style={styles.select}
            >
              <option value="normal">Normal User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <br />
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background:
      'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("background-image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: '1',
  },
  card: {
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(10px)',
    opacity: '0.9', 
    zIndex: '1',
    maxWidth: '400px',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    zIndex: '1',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    width: '300px',
    zIndex: '1',
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center',
    zIndex: '1',
  },
  label: {
    marginRight: '10px',
  },
  select: {
    padding: '10px',
    width: '300px',
    zIndex: '1',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#212529',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    zIndex: '1',
  },
};

export default Signup;

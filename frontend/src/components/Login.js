import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Invalid credentials');
        }
      })
      .then((data) => {
        // Handle successful login
        console.log(data);
        // Show success toast notification
        toast.success('Login successful');
        // Redirect to home page
        navigate('/');
      })
      .catch((error) => {
        // Handle login error
        console.log(error);
        // Show error toast notification
        toast.error('Login failed');
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleLogin} style={styles.form}>
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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <br />
          <button type="submit" style={styles.button}>
            Log In
          </button>
        </form>
      </div>
      <ToastContainer />
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
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    width: '100%',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#212529',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default Login;

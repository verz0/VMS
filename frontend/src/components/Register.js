import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, first_name: name, password, password2 };
    fetch('http://127.0.0.1:8000/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRegistrationSuccess(true);
      })
      .catch(error => {
        console.error(error);
        // handle error response
      });
  };

  return (
    <div className="registration-form-container" style={{zIndex:1}}>
      
      <form className="registration-form" onSubmit={handleSubmit} style={{zIndex:1}}>
        <h2>Registration Form</h2>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} required />
        </label>
        <br />
        <button className="register-button" type="submit">Register</button>
      </form>
      {registrationSuccess && <p className="registration-success">Registration successful!</p>}

    </div>
  );
}

export default RegistrationForm;

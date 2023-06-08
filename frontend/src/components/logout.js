import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
  const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState('');

  const handleLogout = () => {
    fetch('http://127.0.0.1:8000/api/logout/', {
      method: 'POST',
    })
      .then(() => {
        // Redirect the user to the login page
        navigate('/login');
        toast.success('Logout successful');
      })
      .catch((error) => {
        // Handle logout error
        console.log(error);
        toast.error('Logout failed');
      });
  };

  return (
    <div>
      {logoutMessage && <p>{logoutMessage}</p>}
      <Button variant="link" onClick={handleLogout} className="text-white">
        Logout
      </Button>
      <ToastContainer />
    </div>
  );
};

export default Logout;

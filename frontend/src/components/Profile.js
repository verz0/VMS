import React, { useState, useEffect } from 'react';

function ProfilePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/profile/', {
      method: 'GET',
      headers: {
        Authorization: `Token ${localStorage.getItem('authToken')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUserData(data);
      })
      .catch(error => {
        console.error(error);
        // handle error response
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Name:</strong> {userData.name}</p>
    </div>
  );
}

export default ProfilePage;

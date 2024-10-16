// Profilepage.js
import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

export default function Profilepage() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const storedName = localStorage.getItem('name'); // Retrieve name from localStorage
      setUserName(storedName || 'Guest'); // If no name, default to 'Guest'
    } else {
      setUserName('Guest'); // If user not logged in
    }
  }, []);

  return (
    <div style={{ padding: '20px', fontSize: '24px' }}>
      Hello, {userName}!
    </div>
  );
}


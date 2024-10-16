// // Profilepage.js
// import React, { useEffect, useState } from 'react';
// import { getAuth } from 'firebase/auth';

// export default function Profilepage() {
//   const [userName, setUserName] = useState('');

//   useEffect(() => {
//     const auth = getAuth();
//     const user = auth.currentUser;

//     if (user) {
//       const storedName = localStorage.getItem('name'); // Retrieve name from localStorage
//       setUserName(storedName || 'Guest'); // If no name, default to 'Guest'
//     } else {
//       setUserName('Guest'); // If user not logged in
//     }
//   }, []);

//   return (
//     <div style={{ padding: '20px', fontSize: '24px' }}>
//       Hello, {userName}!
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "./firebase.config"; // Adjust the path as needed for your Firebase config
import { doc, getDoc } from "firebase/firestore";

const ProfilePage = () => {
  const [userName, setUserName] = useState("Guest"); // Default to "Guest"
  const auth = getAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;

      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserName(userDoc.data().name); // Set the user's name from Firestore
        } else {
          console.log("No such user document!");
        }
      }
    };

    fetchUserData();
  }, [auth]);

  return (
    <div>
      <h1>Hello, {userName}!</h1> {/* Display user's name */}
    </div>
  );
};

export default ProfilePage;

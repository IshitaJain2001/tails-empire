import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "./firebase.config"; // Adjust the path as needed for your Firebase config
import { doc, getDoc } from "firebase/firestore";

const ProfilePage = () => {
  const [userName, setUserName] = useState("Guest"); // Default to "Guest"
  const [loading, setLoading] = useState(true); // Add loading state
  const auth = getAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser; // Get the current user

      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserName(userDoc.data().name); // Set the user's name from Firestore
        } else {
          console.log("No such user document!");
        }
      }
      setLoading(false); // Set loading to false after fetching data
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserData(); // Fetch user data if the user is authenticated
      } else {
        setLoading(false); // If not authenticated, stop loading
      }
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div>
      <h1>Hello, {userName}!</h1> {/* Display user's name */}
    </div>
  );
};

export default ProfilePage;

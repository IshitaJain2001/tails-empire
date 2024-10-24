// userService.js
import { db } from './firebaseConfig'; // Firebase config ko import karein

const saveUserData = async (userId, data) => {
  try {
    await db.collection('users').doc(userId).set(data, { merge: true });
    console.log("User data saved successfully");
  } catch (error) {
    console.error("Error saving user data:", error);
  }
};

export { saveUserData }; // Function ko export karein

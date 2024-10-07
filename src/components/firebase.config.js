 // firebase.config.js
 import { initializeApp } from "firebase/app";
 import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMpKX-Lb-Ij113TSXTSXN8gMGTSAscEcA",
  authDomain: "tails--empire.firebaseapp.com",
  projectId: "tails--empire",
  storageBucket: "tails--empire.appspot.com",
  messagingSenderId: "1061649946108",
  appId: "1:1061649946108:web:751d65066ec16af0468e79",
  measurementId: "G-ETGNEJWJJJ"
};












// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize the Google provider
const provider = new GoogleAuthProvider();

// Export the auth and provider
export { auth, provider };


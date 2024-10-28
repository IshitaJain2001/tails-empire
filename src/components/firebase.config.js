 // firebase.config.js
 import { initializeApp } from "firebase/app";
 import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAMpKX-Lb-Ij113TSXTSXN8gMGTSAscEcA",
  authDomain: "tails--empire.firebaseapp.com",
  projectId: "tails--empire",
  storageBucket: "tails--empire.appspot.com",
  messagingSenderId: "1061649946108",
  appId: "1:1061649946108:web:751d65066ec16af0468e79",
  measurementId: "G-ETGNEJWJJJ"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Export the auth, provider, and db
export { auth, provider, db };

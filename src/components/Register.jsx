


import React, { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { db } from "./firebase.config";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [userName, setUserName] = useState(""); // Store the user's name
  const [isRegistered, setIsRegistered] = useState(false); // Track registration status
  const [loading, setLoading] = useState(true); // Track loading state
  const auth = getAuth();
  const navigate = useNavigate();

  // Set up Firebase auth persistence
  useEffect(() => {
    setPersistence(auth, browserLocalPersistence);
  }, [auth]);

  // Monitor auth state changes to sync user data on reload
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const storedName = localStorage.getItem("userName");
        if (storedName) {
          setUserName(storedName);
        } else if (user.displayName) {
          setUserName(user.displayName);
          localStorage.setItem("userName", user.displayName);
        }
        setIsRegistered(true); // Mark as registered
      } else {
        setUserName("Guest");
        setIsRegistered(false); // Mark as not registered
      }
      setLoading(false); // Stop loading
    });

    return () => unsubscribe();
  }, [auth]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password } = formData;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), { name });

      localStorage.setItem("userName", name);
      setUserName(name);
      setIsRegistered(true); // Mark as registered

      alert("Registered successfully!");
      navigate("/address");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Failed to register.");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), { name: user.displayName });

      localStorage.setItem("userName", user.displayName);
      setUserName(user.displayName);
      setIsRegistered(true); // Mark as registered

      alert("Signed in with Google!");
      navigate("/address");
    } catch (error) {
      console.error("Google sign-in error:", error);
      alert("Failed to sign in with Google.");
    }
  };

  // Show loading message while checking auth state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Conditional rendering: show welcome message or registration form
  return isRegistered ? (
    <div style={{ padding: "16px", marginTop: "80px", maxWidth: "400px", margin: "auto" }}>
      <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Welcome, {userName}!</h1>
      <p>You are already registered.</p>
      <button
        onClick={() => navigate("/address")}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Go to Address Page
      </button>
    </div>
  ) : (
    <div style={{ padding: "16px", marginTop: "80px", maxWidth: "400px", margin: "auto" }}>
      <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Register</h1>
      <p>Hello, {userName || "Guest"}</p>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
      <button
        onClick={handleGoogleSignIn}
        style={{
          backgroundColor: "#db4437",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Register;

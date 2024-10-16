


// components/Register.js
import React, { useState } from "react";
import { auth } from "./firebase.config"; 
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success("Google sign-in successful!");
      localStorage.setItem("isRegistered", "true");
      navigate("/address");
    } catch (error) {
      console.error(error);
      toast.error("Google sign-in failed.");
    }
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registration successful!");
      localStorage.setItem("isRegistered", "true");
      navigate("/address");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <Toaster toastOptions={{ duration: 4000 }} />
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          width: "300px",
        }}
      >
        <h1>Register</h1>
        <form onSubmit={handleEmailSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={showPassword ? "text" : "password"} 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>
          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "10px",
              width: "100%",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sign Up with Email
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
            backgroundColor: "#db4437",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Register;

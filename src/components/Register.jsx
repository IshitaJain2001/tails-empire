


import React, { useState } from "react";
import { auth } from "./firebase.config";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
  const dispatch= useDispatch()
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      toast.success("Sign in successful!");
      localStorage.setItem("name", user.displayName);
      navigate("/Address"); // Redirect to address page
      dispatch({
        type:"user registered",
        payload:user.displayName
      })
    } catch (error) {
      console.error(error);
      toast.error("Failed to sign in with Google.");
    }
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);
      toast.success("Registration successful!");
      setEmail("");
      setPassword("");
      navigate("/address"); // Redirect to address page
      console.log(user)
    } catch (error) {
      console.error(error);
      toast.error("Failed to register.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <Toaster toastOptions={{ duration: 4000 }} />
      {user ? (
        <h2>Welcome, {user.displayName}!</h2>
      ) : (
        <div
          style={{
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            width: "300px",
            textAlign: "center",
          }}
        >
          <h1>Sign Up</h1>
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
                margin: "10px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
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
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
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
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Sign Up with Email
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
              width: "100%",
              marginTop: "10px",
            }}
          >
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;

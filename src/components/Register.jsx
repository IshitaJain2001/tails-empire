// // import React, { useState, useEffect } from "react";
// // import {
// //   getAuth,
// //   createUserWithEmailAndPassword,
// //   signInWithPopup,
// //   GoogleAuthProvider,
// //   onAuthStateChanged,
// //   setPersistence,
// //   browserLocalPersistence,
// // } from "firebase/auth";
// // import { db } from "./firebase.config";
// // import { setDoc, doc } from "firebase/firestore";
// // import { useNavigate } from "react-router-dom";

// // const Register = () => {
// //   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
// //   const [userName, setUserName] = useState(""); // Store the user's name
// //   const auth = getAuth();
// //   const navigate = useNavigate();

// //   // Set up Firebase auth persistence
// //   useEffect(() => {
// //     setPersistence(auth, browserLocalPersistence);
// //   }, [auth]);

// //   // Monitor auth state changes to sync user data on reload
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// //       if (user) {
// //         const storedName = localStorage.getItem("userName");
// //         if (storedName) {
// //           setUserName(storedName); // Use name from local storage if available
// //         } else if (user.displayName) {
// //           setUserName(user.displayName); // Use Google name if signed in with Google
// //           localStorage.setItem("userName", user.displayName); // Save in local storage
// //         } else {
// //           setUserName("Guest");
// //         }
// //       } else {
// //         setUserName("Guest");
// //       }
// //     });

// //     return () => unsubscribe(); // Cleanup subscription on unmount
// //   }, [auth]);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleRegister = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const { name, email, password } = formData;
// //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;

// //       // Save the name to Firestore
// //       await setDoc(doc(db, "users", user.uid), { name });

// //       // Store name in localStorage and state
// //       localStorage.setItem("userName", name);
// //       setUserName(name);

// //       alert("Registered successfully!");
// //       navigate("/address");
// //     } catch (error) {
// //       console.error("Registration error:", error);
// //       alert("Failed to register.");
// //     }
// //   };

// //   const handleGoogleSignIn = async () => {
// //     const provider = new GoogleAuthProvider();
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;

// //       // Save user info to Firestore if needed
// //       await setDoc(doc(db, "users", user.uid), { name: user.displayName });

// //       // Store name in localStorage and state
// //       localStorage.setItem("userName", user.displayName);
// //       setUserName(user.displayName);

// //       alert("Signed in with Google!");
// //       navigate("/address");
// //     } catch (error) {
// //       console.error("Google sign-in error:", error);
// //       alert("Failed to sign in with Google.");
// //     }
// //   };

// //   return (
// //     <div style={{ padding: "16px", marginTop: "80px", maxWidth: "400px", margin: "auto" }}>
// //       <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Register</h1>
// //       <p>Hello, {userName || "Guest"}</p> {/* Display user name or Guest */}
// //       <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Enter your name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           required
// //           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Enter your email"
// //           value={formData.email}
// //           onChange={handleChange}
// //           required
// //           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Enter your password"
// //           value={formData.password}
// //           onChange={handleChange}
// //           required
// //           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
// //         />
// //         <button
// //           type="submit"
// //           style={{
// //             backgroundColor: "#007bff",
// //             color: "white",
// //             padding: "10px",
// //             border: "none",
// //             borderRadius: "4px",
// //             cursor: "pointer",
// //           }}
// //         >
// //           Register
// //         </button>
// //       </form>
// //       <button
// //         onClick={handleGoogleSignIn}
// //         style={{
// //           backgroundColor: "#db4437",
// //           color: "white",
// //           padding: "10px",
// //           border: "none",
// //           borderRadius: "4px",
// //           cursor: "pointer",
// //           marginTop: "10px",
// //         }}
// //       >
// //         Sign in with Google
// //       </button>
// //     </div>
// //   );
// // };

// // export default Register;




// import React, { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { db } from "./firebase.config"; // Adjust the path as needed
// import { setDoc, doc } from "firebase/firestore";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userName, setUserName] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [phone, setPhone] = useState("");

//   const auth = getAuth();

//   const handleRegister = async (e) => {
//     e.preventDefault(); // Prevent page refresh

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Save user data to Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         name: userName,
//         address: address,
//         city: city,
//         postalCode: postalCode,
//         phone: phone,
//       });

//       console.log("User registered and data saved successfully!");

//     } catch (error) {
//       console.error("Error registering user:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Name" required />
//       <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
//       <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
//       <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="Postal Code" required />
//       <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;



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
          setUserName(storedName); // Use name from local storage if available
        } else if (user.displayName) {
          setUserName(user.displayName); // Use Google name if signed in with Google
          localStorage.setItem("userName", user.displayName); // Save in local storage
        } else {
          setUserName("Guest");
        }
      } else {
        setUserName("Guest");
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
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

      // Save the name to Firestore
      await setDoc(doc(db, "users", user.uid), { name , });

      // Store name in localStorage and state
      localStorage.setItem("userName", name);
      setUserName(name);

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

      // Save user info to Firestore if needed
      await setDoc(doc(db, "users", user.uid), { name: user.displayName });

      // Store name in localStorage and state
      localStorage.setItem("userName", user.displayName);
      setUserName(user.displayName);

      alert("Signed in with Google!");
      navigate("/address");
    } catch (error) {
      console.error("Google sign-in error:", error);
      alert("Failed to sign in with Google.");
    }
  };

  return (
    <div style={{ padding: "16px", marginTop: "80px", maxWidth: "400px", margin: "auto" }}>
      <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Register</h1>
      <p>Hello, {userName || "Guest"}</p> {/* Display user name or Guest */}
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
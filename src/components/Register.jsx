


// // // // // // // // components/Register.js
// // // // // // // import React, { useState } from "react";
// // // // // // // import { auth } from "./firebase.config"; 
// // // // // // // import {
// // // // // // //   GoogleAuthProvider,
// // // // // // //   signInWithPopup,
// // // // // // //   createUserWithEmailAndPassword,
// // // // // // // } from "firebase/auth";
// // // // // // // import { toast, Toaster } from "react-hot-toast";
// // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // const Register = () => {
// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [password, setPassword] = useState("");
// // // // // // //   const [showPassword, setShowPassword] = useState(false); 
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const handleGoogleSignIn = async () => {
// // // // // // //     const provider = new GoogleAuthProvider();
// // // // // // //     try {
// // // // // // //       const result = await signInWithPopup(auth, provider);
// // // // // // //       toast.success("Google sign-in successful!");
// // // // // // //       localStorage.setItem("isRegistered", "true");
// // // // // // //       navigate("/address");
// // // // // // //     } catch (error) {
// // // // // // //       console.error(error);
// // // // // // //       toast.error("Google sign-in failed.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleEmailSignUp = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     try {
// // // // // // //       await createUserWithEmailAndPassword(auth, email, password);
// // // // // // //       toast.success("Registration successful!");
// // // // // // //       localStorage.setItem("isRegistered", "true");
// // // // // // //       navigate("/address");
// // // // // // //     } catch (error) {
// // // // // // //       console.error(error);
// // // // // // //       toast.error("Registration failed.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const togglePasswordVisibility = () => {
// // // // // // //     setShowPassword(!showPassword); 
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       style={{
// // // // // // //         display: "flex",
// // // // // // //         alignItems: "center",
// // // // // // //         justifyContent: "center",
// // // // // // //         minHeight: "100vh",
// // // // // // //         backgroundColor: "#f5f5f5",
// // // // // // //         padding: "20px",
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       <Toaster toastOptions={{ duration: 4000 }} />
// // // // // // //       <div
// // // // // // //         style={{
// // // // // // //           textAlign: "center",
// // // // // // //           backgroundColor: "#fff",
// // // // // // //           padding: "20px",
// // // // // // //           borderRadius: "8px",
// // // // // // //           boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
// // // // // // //           width: "300px",
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <h1>Register</h1>
// // // // // // //         <form onSubmit={handleEmailSignUp}>
// // // // // // //           <input
// // // // // // //             type="email"
// // // // // // //             placeholder="Email"
// // // // // // //             value={email}
// // // // // // //             onChange={(e) => setEmail(e.target.value)}
// // // // // // //             required
// // // // // // //             style={{
// // // // // // //               width: "100%",
// // // // // // //               padding: "10px",
// // // // // // //               marginBottom: "10px",
// // // // // // //               borderRadius: "4px",
// // // // // // //               border: "1px solid #ccc",
// // // // // // //             }}
// // // // // // //           />
// // // // // // //           <div style={{ position: "relative", width: "100%" }}>
// // // // // // //             <input
// // // // // // //               type={showPassword ? "text" : "password"} 
// // // // // // //               placeholder="Password"
// // // // // // //               value={password}
// // // // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // // // //               required
// // // // // // //               style={{
// // // // // // //                 width: "100%",
// // // // // // //                 padding: "10px",
// // // // // // //                 borderRadius: "4px",
// // // // // // //                 border: "1px solid #ccc",
// // // // // // //               }}
// // // // // // //             />
// // // // // // //             <button
// // // // // // //               type="button"
// // // // // // //               onClick={togglePasswordVisibility}
// // // // // // //               style={{
// // // // // // //                 position: "absolute",
// // // // // // //                 right: "10px",
// // // // // // //                 top: "50%",
// // // // // // //                 transform: "translateY(-50%)",
// // // // // // //                 background: "none",
// // // // // // //                 border: "none",
// // // // // // //                 cursor: "pointer",
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {showPassword ? "👁️" : "🙈"}
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //           <button
// // // // // // //             type="submit"
// // // // // // //             style={{
// // // // // // //               marginTop: "10px",
// // // // // // //               padding: "10px",
// // // // // // //               width: "100%",
// // // // // // //               backgroundColor: "#007bff",
// // // // // // //               color: "#fff",
// // // // // // //               border: "none",
// // // // // // //               borderRadius: "4px",
// // // // // // //               cursor: "pointer",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             Sign Up with Email
// // // // // // //           </button>
// // // // // // //         </form>
// // // // // // //         <button
// // // // // // //           onClick={handleGoogleSignIn}
// // // // // // //           style={{
// // // // // // //             marginTop: "10px",
// // // // // // //             padding: "10px",
// // // // // // //             width: "100%",
// // // // // // //             backgroundColor: "#db4437",
// // // // // // //             color: "#fff",
// // // // // // //             border: "none",
// // // // // // //             borderRadius: "4px",
// // // // // // //             cursor: "pointer",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Sign in with Google
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Register;


// // // // // // import React, { useState } from "react";
// // // // // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // // // // import { db } from "./firebase.config";
// // // // // // import { setDoc, doc } from "firebase/firestore";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // const Register = () => {
// // // // // //   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
// // // // // //   const auth = getAuth();
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleChange = (e) => {
// // // // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // // //   };

// // // // // //   const handleRegister = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       const { name, email, password } = formData;
// // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // //       const user = userCredential.user;

// // // // // //       // Save the name to Firestore under the user's uid
// // // // // //       await setDoc(doc(db, "users", user.uid), { name });

// // // // // //       alert("Registered successfully!");
// // // // // //       navigate("/profile"); // Redirect to profile page
// // // // // //     } catch (error) {
// // // // // //       console.error("Registration error:", error);
// // // // // //       alert("Failed to register.");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <form onSubmit={handleRegister}>
// // // // // //       <input
// // // // // //         type="text"
// // // // // //         name="name"
// // // // // //         placeholder="Enter your name"
// // // // // //         value={formData.name}
// // // // // //         onChange={handleChange}
// // // // // //         required
// // // // // //       />
// // // // // //       <input
// // // // // //         type="email"
// // // // // //         name="email"
// // // // // //         placeholder="Enter your email"
// // // // // //         value={formData.email}
// // // // // //         onChange={handleChange}
// // // // // //         required
// // // // // //       />
// // // // // //       <input
// // // // // //         type="password"
// // // // // //         name="password"
// // // // // //         placeholder="Enter your password"
// // // // // //         value={formData.password}
// // // // // //         onChange={handleChange}
// // // // // //         required
// // // // // //       />
// // // // // //       <button type="submit">Register</button>
// // // // // //     </form>
// // // // // //   );
// // // // // // };

// // // // // // export default Register;


// // // // // import React, { useState } from "react";
// // // // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // // // import { db } from "./firebase.config";
// // // // // import { setDoc, doc } from "firebase/firestore";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // const Register = () => {
// // // // //   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
// // // // //   const auth = getAuth();
// // // // //   const navigate = useNavigate();

// // // // //   const handleChange = (e) => {
// // // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   const handleRegister = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const { name, email, password } = formData;
// // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // //       const user = userCredential.user;

// // // // //       // Save the name to Firestore under the user's uid
// // // // //       await setDoc(doc(db, "users", user.uid), { name });

// // // // //       alert("Registered successfully!");
// // // // //       navigate("/profile");
// // // // //     } catch (error) {
// // // // //       console.error("Registration error:", error);
// // // // //       alert("Failed to register.");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ padding: "16px", marginTop: "80px", maxWidth: "400px", margin: "auto" }}>
// // // // //       <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Register</h1>
// // // // //       <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
// // // // //         <input
// // // // //           type="text"
// // // // //           name="name"
// // // // //           placeholder="Enter your name"
// // // // //           value={formData.name}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
// // // // //         />
// // // // //         <input
// // // // //           type="email"
// // // // //           name="email"
// // // // //           placeholder="Enter your email"
// // // // //           value={formData.email}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
// // // // //         />
// // // // //         <input
// // // // //           type="password"
// // // // //           name="password"
// // // // //           placeholder="Enter your password"
// // // // //           value={formData.password}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
// // // // //         />
// // // // //         <button
// // // // //           type="submit"
// // // // //           style={{
// // // // //             backgroundColor: "#007bff",
// // // // //             color: "white",
// // // // //             padding: "10px",
// // // // //             border: "none",
// // // // //             borderRadius: "4px",
// // // // //             cursor: "pointer",
// // // // //           }}
// // // // //         >
// // // // //           Register
// // // // //         </button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Register;



// // // // import React, { useState } from "react";
// // // // import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// // // // import { db } from "./firebase.config";
// // // // import { setDoc, doc } from "firebase/firestore";
// // // // import { useNavigate } from "react-router-dom";

// // // // const Register = () => {
// // // //   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
// // // //   const auth = getAuth();
// // // //   const navigate = useNavigate();

// // // //   const handleChange = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleRegister = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const { name, email, password } = formData;
// // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // //       const user = userCredential.user;

// // // //       // Save the name to Firestore under the user's uid
// // // //       await setDoc(doc(db, "users", user.uid), { name });

// // // //       alert("Registered successfully!");
// // // //       navigate("/profile");
// // // //     } catch (error) {
// // // //       console.error("Registration error:", error);
// // // //       alert("Failed to register.");
// // // //     }
// // // //   };

// // // //   const handleGoogleSignIn = async () => {
// // // //     const provider = new GoogleAuthProvider();
// // // //     try {
// // // //       const result = await signInWithPopup(auth, provider);
// // // //       const user = result.user;

// // // //       // Save user info to Firestore if needed
// // // //       await setDoc(doc(db, "users", user.uid), { name: user.displayName });

// // // //       alert("Signed in with Google!");
// // // //       navigate("/profile");
// // // //     } catch (error) {
// // // //       console.error("Google sign-in error:", error);
// // // //       alert("Failed to sign in with Google.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={{ padding: "16px", marginTop: "80px", maxWidth: "400px", margin: "auto" }}>
// // // //       <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Register</h1>
// // // //       <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
// // // //         <input
// // // //           type="text"
// // // //           name="name"
// // // //           placeholder="Enter your name"
// // // //           value={formData.name}
// // // //           onChange={handleChange}
// // // //           required
// // // //           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
// // // //         />
// // // //         <input
// // // //           type="email"
// // // //           name="email"
// // // //           placeholder="Enter your email"
// // // //           value={formData.email}
// // // //           onChange={handleChange}
// // // //           required
// // // //           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
// // // //         />
// // // //         <input
// // // //           type="password"
// // // //           name="password"
// // // //           placeholder="Enter your password"
// // // //           value={formData.password}
// // // //           onChange={handleChange}
// // // //           required
// // // //           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
// // // //         />
// // // //         <button
// // // //           type="submit"
// // // //           style={{
// // // //             backgroundColor: "#007bff",
// // // //             color: "white",
// // // //             padding: "10px",
// // // //             border: "none",
// // // //             borderRadius: "4px",
// // // //             cursor: "pointer",
// // // //           }}
// // // //         >
// // // //           Register
// // // //         </button>
// // // //       </form>
// // // //       <button
// // // //         onClick={handleGoogleSignIn}
// // // //         style={{
// // // //           backgroundColor: "#db4437",
// // // //           color: "white",
// // // //           padding: "10px",
// // // //           border: "none",
// // // //           borderRadius: "4px",
// // // //           cursor: "pointer",
// // // //           marginTop: "10px",
// // // //         }}
// // // //       >
// // // //         Sign in with Google
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Register;


// // // import React, { useState } from "react";
// // // import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// // // import { db } from "./firebase.config"; // Adjust the path as needed for your Firebase config
// // // import { setDoc, doc } from "firebase/firestore";
// // // import { useNavigate } from "react-router-dom";

// // // const Register = () => {
// // //   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
// // //   const auth = getAuth();
// // //   const navigate = useNavigate();

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleRegister = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const { name, email, password } = formData;
// // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // //       const user = userCredential.user;

// // //       // Save the name to Firestore under the user's uid
// // //       await setDoc(doc(db, "users", user.uid), { name });

// // //       alert("Registered successfully!");
// // //       navigate("/address"); // Redirect to address page after registration
// // //     } catch (error) {
// // //       console.error("Registration error:", error);
// // //       alert("Failed to register.");
// // //     }
// // //   };

// // //   const handleGoogleSignIn = async () => {
// // //     const provider = new GoogleAuthProvider();
// // //     try {
// // //       const result = await signInWithPopup(auth, provider);
// // //       const user = result.user;

// // //       // Save user info to Firestore if needed
// // //       await setDoc(doc(db, "users", user.uid), { name: user.displayName });

// // //       alert("Signed in with Google!");
// // //       navigate("/address"); // Redirect to the address page after successful sign-in
// // //     } catch (error) {
// // //       console.error("Google sign-in error:", error);
// // //       alert("Failed to sign in with Google.");
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ padding: "16px", marginTop: "80px", maxWidth: "400px", margin: "auto" }}>
// // //       <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Register</h1>
// // //       <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
// // //         <input
// // //           type="text"
// // //           name="name"
// // //           placeholder="Enter your name"
// // //           value={formData.name}
// // //           onChange={handleChange}
// // //           required
// // //           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
// // //         />
// // //         <input
// // //           type="email"
// // //           name="email"
// // //           placeholder="Enter your email"
// // //           value={formData.email}
// // //           onChange={handleChange}
// // //           required
// // //           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
// // //         />
// // //         <input
// // //           type="password"
// // //           name="password"
// // //           placeholder="Enter your password"
// // //           value={formData.password}
// // //           onChange={handleChange}
// // //           required
// // //           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
// // //         />
// // //         <button
// // //           type="submit"
// // //           style={{
// // //             backgroundColor: "#007bff",
// // //             color: "white",
// // //             padding: "10px",
// // //             border: "none",
// // //             borderRadius: "4px",
// // //             cursor: "pointer",
// // //           }}
// // //         >
// // //           Register
// // //         </button>
// // //       </form>
// // //       <button
// // //         onClick={handleGoogleSignIn}
// // //         style={{
// // //           backgroundColor: "#db4437",
// // //           color: "white",
// // //           padding: "10px",
// // //           border: "none",
// // //           borderRadius: "4px",
// // //           cursor: "pointer",
// // //           marginTop: "10px",
// // //         }}
// // //       >
// // //         Sign in with Google
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default Register;


// // import React, { useState } from "react";
// // import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// // import { db } from "./firebase.config"; // Adjust the path as needed for your Firebase config
// // import { setDoc, doc } from "firebase/firestore";
// // import { useNavigate } from "react-router-dom";

// // const Register = () => {
// //   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
// //   const auth = getAuth();
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleRegister = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const { name, email, password } = formData;
// //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;

// //       // Save the name to Firestore under the user's uid
// //       await setDoc(doc(db, "users", user.uid), { name });

// //       alert("Registered successfully!");
// //       navigate("/address"); // Redirect to address page after registration
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

// //       alert("Signed in with Google!");
// //       navigate("/address"); // Redirect to the address page after successful sign-in
// //     } catch (error) {
// //       console.error("Google sign-in error:", error);
// //       alert("Failed to sign in with Google.");
// //     }
// //   };

// //   return (
// //     <div style={{ padding: "16px", marginTop: "80px", maxWidth: "400px", margin: "auto" }}>
// //       <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Register</h1>
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



// import React, { useState, useEffect } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import { db } from "./firebase.config"; // Adjust the path as needed
// import { setDoc, doc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [userName, setUserName] = useState(""); // Store the user's name
//   const auth = getAuth();
//   const navigate = useNavigate();

//   // Fetch user name from localStorage on component mount
//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     if (storedName) {
//       setUserName(storedName);
//     }
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const { name, email, password } = formData;
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Save the name to Firestore under the user's UID
//       await setDoc(doc(db, "users", user.uid), { name });

//       // Store the name in localStorage
//       localStorage.setItem("userName", name);
//       setUserName(name); // Update state with the new name

//       alert("Registered successfully!");
//       navigate("/address");
//     } catch (error) {
//       console.error("Registration error:", error);
//       alert("Failed to register.");
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // Save user info to Firestore if needed
//       await setDoc(doc(db, "users", user.uid), { name: user.displayName });

//       // Store the name in localStorage
//       localStorage.setItem("userName", user.displayName);
//       setUserName(user.displayName); // Update state with Google user's name

//       alert("Signed in with Google!");
//       navigate("/address");
//     } catch (error) {
//       console.error("Google sign-in error:", error);
//       alert("Failed to sign in with Google.");
//     }
//   };

//   return (
//     <div style={{ padding: "16px", marginTop: "80px", maxWidth: "400px", margin: "auto" }}>
//       <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Register</h1>
//       <p>Hello, {userName || "Guest"}</p> {/* Display user name or Guest */}
//       <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter your password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
//         />
//         <button
//           type="submit"
//           style={{
//             backgroundColor: "#007bff",
//             color: "white",
//             padding: "10px",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Register
//         </button>
//       </form>
//       <button
//         onClick={handleGoogleSignIn}
//         style={{
//           backgroundColor: "#db4437",
//           color: "white",
//           padding: "10px",
//           border: "none",
//           borderRadius: "4px",
//           cursor: "pointer",
//           marginTop: "10px",
//         }}
//       >
//         Sign in with Google
//       </button>
//     </div>
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
      await setDoc(doc(db, "users", user.uid), { name });

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

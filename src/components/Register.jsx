
// // // import React, { useState } from "react";
// // // import { auth } from "./firebase.config";
// // // import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
// // // import { toast, Toaster } from "react-hot-toast";
// // // import { useNavigate } from "react-router-dom";

// // // const Register = () => {
// // //   const [user, setUser] = useState(null);
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const navigate = useNavigate();
// // //   const handleGoogleSignIn = async () => {
// // //     const provider = new GoogleAuthProvider();
// // //     try {
// // //       const result = await signInWithPopup(auth, provider);
// // //       const user = result.user;
// // //       setUser(user);
// // //       toast.success("Sign in successful!");
// // //     } catch (error) {
// // //       console.error(error);
// // //       toast.error("Failed to sign in with Google.");
// // //     }
// // //   };

// // //   const handleEmailSignUp = async (e) => {
// // //     e.preventDefault(); // Prevent page refresh
// // //     try {
// // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // //       const user = userCredential.user;
// // //       setUser(user);
// // //       toast.success("Registration successful!");
// // //       setEmail("");
// // //       setPassword("");
// // //       navigate("/address"); 
// // //     } catch (error) {
// // //       console.error(error);
// // //       toast.error( error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // //       <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
// // //         <Toaster toastOptions={{ duration: 4000 }} />
// // //         {user ? (
// // //           <h2 className="text-2xl font-semibold text-center mb-4">Welcome, {user.displayName} ,{user.email}!</h2>
      
// // //         ) : (
// // //           <div>
// // //             <h1 className="text-2xl font-semibold text-center mb-6">Sign Up</h1>
// // //             <form onSubmit={handleEmailSignUp}>
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700">Email:</label>
// // //                 <input
// // //                   type="email"
// // //                   value={email}
// // //                   onChange={(e) => setEmail(e.target.value)}
// // //                   required
// // //                   className="mt-1 p-2 border border-gray-300 rounded w-full"
// // //                 />
// // //               </div>
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700">Password:</label>
// // //                 <input
// // //                   type="password"
// // //                   value={password}
// // //                   onChange={(e) => setPassword(e.target.value)}
// // //                   required
// // //                   className="mt-1 p-2 border border-gray-300 rounded w-full"
// // //                 />
// // //               </div>
// // //               <button
// // //                 type="submit"
// // //                 className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
// // //               >
// // //                 Register
// // //               </button>
// // //             </form>
// // //             <div className="text-center my-4">OR</div>
// // //             <button
// // //               onClick={handleGoogleSignIn}
// // //               className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
// // //             >
// // //               Sign in with Google
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Register;



// // import React, { useState } from "react";
// // import { auth } from "./firebase.config";
// // import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
// // import { toast, Toaster } from "react-hot-toast";
// // import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

// // const Register = () => {
// //   const [user, setUser] = useState(null);
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
// //   const navigate = useNavigate(); // Initialize navigate

// //   const handleGoogleSignIn = async () => {
// //     const provider = new GoogleAuthProvider();
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;
// //       setUser(user);
// //       toast.success("Sign in successful!");
// //       navigate("/address"); // Redirect to address page
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Failed to sign in with Google.");
// //     }
// //   };

// //   const handleEmailSignUp = async (e) => {
// //     e.preventDefault(); // Prevent page refresh
// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;
// //       setUser(user);
// //       toast.success("Registration successful!");
// //       setEmail("");
// //       setPassword("");
// //       navigate("/address"); // Redirect to address page
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Failed to register.");
// //     }
// //   };

// //   // Function to toggle password visibility
// //   const togglePasswordVisibility = () => {
// //     setShowPassword(!showPassword);
// //   };

// //   return (
// //     <div style={styles.registerContainer}>
// //       <Toaster toastOptions={{ duration: 4000 }} />
// //       {user ? (
// //         <h2>Welcome, {user.displayName}!</h2>
// //       ) : (
// //         <div style={styles.registerForm}>
// //           <h1>Sign Up</h1>
// //           <form onSubmit={handleEmailSignUp}>
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               style={styles.inputField}
// //             />
// //             <div style={styles.passwordWrapper}>
// //               <input
// //                 type={showPassword ? "text" : "password"} // Toggle between password and text type
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //                 style={styles.inputField}
// //               />
// //               <button
// //                 type="button"
// //                 onClick={togglePasswordVisibility}
// //                 style={styles.eyeButton}
// //               >
// //                 {showPassword ? "👁️" : "🙈"} {/* Display different icons for visibility */}
// //               </button>
// //             </div>
// //             <button type="submit" style={styles.submitButton}>Sign Up with Email</button>
// //           </form>
// //           <button onClick={handleGoogleSignIn} style={styles.googleButton}>Sign in with Google</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const styles = {
// //   registerContainer: {
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     minHeight



// import React, { useState } from "react";
// import { auth } from "./firebase.config";
// import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
// import { toast, Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

// const Register = () => {
//   const [user, setUser] = useState(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const navigate = useNavigate(); // Initialize navigate

//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       setUser(user);
//       toast.success("Sign in successful!");
//       navigate("/address"); // Redirect to address page
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to sign in with Google.");
//     }
//   };

//   const handleEmailSignUp = async (e) => {
//     e.preventDefault(); // Prevent page refresh
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       setUser(user);
//       toast.success("Registration successful!");
//       setEmail("");
//       setPassword("");
//       navigate("/address"); // Redirect to address page
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to register.");
//     }
//   };

//   // Function to toggle password visibility
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div style={styles.registerContainer}>
//       <Toaster toastOptions={{ duration: 4000 }} />
//       {user ? (
//         <h2>Welcome, {user.displayName}!</h2>
//       ) : (
//         <div style={styles.registerForm}>
//           <h1>Sign Up</h1>
//           <form onSubmit={handleEmailSignUp}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={styles.inputField}
//             />
//             <div style={styles.passwordWrapper}>
//               <input
//                 type={showPassword ? "text" : "password"} // Toggle between password and text type
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 style={styles.inputField}
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 style={styles.eyeButton}
//               >
//                 {showPassword ? "👁️" : "🙈"} {/* Display different icons for visibility */}
//               </button>
//             </div>
//             <button type="submit" style={styles.submitButton}>Sign Up with Email</button>
//           </form>
//           <button onClick={handleGoogleSignIn} style={styles.googleButton}>Sign in with Google</button>
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   registerContainer: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "100vh",
//     backgroundColor: "#f5f5f5",
//     padding: "20px",
//   },
//   registerForm: {
//     background: "white",
//     borderRadius: "8px",
//     boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//     padding: "20px",
//     width: "300px",
//     textAlign: "center",
//   },
//   inputField: {
//     width: "100%",
//     padding: "10px",
//     margin: "10px 0",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//   },
//   passwordWrapper: {
//     position: "relative",
//     width: "100%",
//   },
//   eyeButton: {
//     position: "absolute",
//     right: "10px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     background: "none",
//     border: "none",
//     cursor: "pointer",
//   },
//   submitButton: {
//     backgroundColor: "#007bff",
//     color: "white",
//     padding: "10px",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     width: "100%",
//   },
//   googleButton: {
//     backgroundColor: "#db4437",
//     color: "white",
//     padding: "10px",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     width: "100%",
//     marginTop: "10px",
//   },
// };

// export default Register;


import React, { useState } from "react";
import { auth } from "./firebase.config";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      toast.success("Sign in successful!");
      navigate("/address"); // Redirect to address page
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

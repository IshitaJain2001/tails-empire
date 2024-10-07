// // // src/Register.jsx
// // import React, { useState } from "react";
// // import { auth } from "./firebase.config";
// // import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// // import { toast, Toaster } from "react-hot-toast";

// // const Register = () => {
// //   const [user, setUser] = useState(null);

// //   const handleGoogleSignIn = async () => {
// //     const provider = new GoogleAuthProvider();
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       // The signed-in user info
// //       const user = result.user;
// //       setUser(user);
// //       toast.success("Sign in successful!");
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Failed to sign in with Google.");
// //     }
// //   };

// //   return (
// //     <div>
// //       <Toaster toastOptions={{ duration: 4000 }} />
// //       {user ? (
// //         <h2>Welcome, {user.displayName}!</h2>
// //       ) : (
// //         <div>
// //           <h1>Sign Up</h1>
// //           <button onClick={handleGoogleSignIn}>Sign in with Google</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Register;



// // // import React, { useState } from "react";
// // // import { auth, provider } from "./firebase.config";
// // // import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
// // // import { toast, Toaster } from "react-hot-toast";
// // // import { BsGoogle } from "react-icons/bs";

// // // const RegistrationForm = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const handleGoogleSignIn = async () => {
// // //     try {
// // //       await signInWithPopup(auth, provider);
// // //       toast.success("Signed in successfully!");
// // //     } catch (error) {
// // //       console.error("Error signing in with Google: ", error);
// // //       toast.error("Failed to sign in!");
// // //     }
// // //   };

// // //   const handleEmailSignUp = async (e) => {
// // //     e.preventDefault(); // Prevent page refresh
// // //     try {
// // //       await createUserWithEmailAndPassword(auth, email, password);
// // //       toast.success("Registration successful!");
// // //     } catch (error) {
// // //       console.error("Error signing up: ", error);
// // //       toast.error("Registration failed!");
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-center h-screen bg-emerald-500">
// // //       <Toaster toastOptions={{ duration: 4000 }} />
// // //       <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
// // //         <h1 className="text-2xl font-semibold text-center mb-4">
// // //           Register for Tails Empire
// // //         </h1>
        
// // //         <form onSubmit={handleEmailSignUp} className="flex flex-col w-full">
// // //           <input
// // //             type="email"
// // //             placeholder="Email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             className="mb-4 p-2 border border-gray-300 rounded"
// // //             required
// // //           />
// // //           <input
// // //             type="password"
// // //             placeholder="Password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             className="mb-4 p-2 border border-gray-300 rounded"
// // //             required
// // //           />
// // //           <button
// // //             type="submit"
// // //             className="bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition duration-300 mb-4"
// // //           >
// // //             Register
// // //           </button>
// // //         </form>

// // //         <div className="text-center mb-4">OR</div>

// // //         <button
// // //           onClick={handleGoogleSignIn}
// // //           className="flex items-center justify-center bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition duration-300"
// // //         >
// // //           <BsGoogle className="mr-2" />
// // //           Sign in with Google
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RegistrationForm;



// // src/Register.jsx
// import React, { useState } from "react";
// import { auth } from "./firebase.config";
// import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
// import { toast, Toaster } from "react-hot-toast";

// const Register = () => {
//   const [user, setUser] = useState(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       const result = await signInWithPopup(auth, provider);
//       // The signed-in user info
//       const user = result.user;
//       setUser(user);
//       toast.success("Sign in successful!");
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to sign in with Google.");
//     }
//   };

//   const handleEmailSignUp = async (e) => {
//     e.preventDefault(); // Prevent page refresh
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       // Signed in
//       const user = userCredential.user;
//       setUser(user);
//       toast.success("Registration successful!");
//       // Clear email and password fields
//       setEmail("");
//       setPassword("");
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to register.");
//     }
//   };

//   return (
//     <div>
//       <Toaster toastOptions={{ duration: 4000 }} />
//       {user ? (
//         <h2>Welcome, {user.displayName}!</h2>
//       ) : (
//         <div>
//           <h1>Sign Up</h1>
//           <form onSubmit={handleEmailSignUp}>
//             <div>
//               <label>Email:</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Password:</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit">Register</button>
//           </form>
//           <button onClick={handleGoogleSignIn}>Sign in with Google</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Register;


// src/Register.jsx
import React, { useState } from "react";
import { auth } from "./firebase.config";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const Register = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      toast.success("Sign in successful!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to sign in with Google.");
    }
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);
      toast.success("Registration successful!");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to register." +error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <Toaster toastOptions={{ duration: 4000 }} />
        {user ? (
          <h2 className="text-2xl font-semibold text-center mb-4">Welcome, {user.displayName} ,{user.email}!</h2>
      
        ) : (
          <div>
            <h1 className="text-2xl font-semibold text-center mb-6">Sign Up</h1>
            <form onSubmit={handleEmailSignUp}>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Register
              </button>
            </form>
            <div className="text-center my-4">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
            >
              Sign in with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;


// // // // // // // // // // 
// // // // // // // // // // AddressForm.js
// // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // import { db } from "./firebase.config";
// // // // // // // // // import { setDoc, doc, getDoc } from "firebase/firestore";
// // // // // // // // // import { getAuth } from "firebase/auth";
// // // // // // // // // import { toast, Toaster } from "react-hot-toast";
// // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // const AddressForm = () => {
// // // // // // // // //   const [address, setAddress] = useState({
// // // // // // // // //     phone: "",
// // // // // // // // //     address: "",
// // // // // // // // //     city: "",
// // // // // // // // //     postalCode: "",
// // // // // // // // //   });

// // // // // // // // //   const auth = getAuth();
// // // // // // // // //   const user = auth.currentUser;
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   // Fetch existing address if user is logged in
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (user) {
// // // // // // // // //       const fetchAddress = async () => {
// // // // // // // // //         const docRef = doc(db, "users", user.uid);
// // // // // // // // //         const docSnap = await getDoc(docRef);
// // // // // // // // //         if (docSnap.exists()) setAddress(docSnap.data());
// // // // // // // // //       };
// // // // // // // // //       fetchAddress();
// // // // // // // // //     }
// // // // // // // // //   }, [user]);

// // // // // // // // //   // Handle form input changes
// // // // // // // // //   const handleChange = (e) =>
// // // // // // // // //     setAddress({ ...address, [e.target.name]: e.target.value });

// // // // // // // // //   // Handle form submission
// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     if (user) {
// // // // // // // // //       try {
// // // // // // // // //         await setDoc(doc(db, "users", user.uid), address);
// // // // // // // // //         toast.success("Address saved!");
// // // // // // // // //         localStorage.setItem("hasAddress", "true");
// // // // // // // // //         navigate("/profile");
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Error saving address: ", error);
// // // // // // // // //         toast.error("Failed to save address.");
// // // // // // // // //       }
// // // // // // // // //     } else {
// // // // // // // // //       toast.error("Please log in.");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div style={{ padding: "16px", marginTop: "90px", marginLeft: "300px" }}>
// // // // // // // // //       <Toaster toastOptions={{ duration: 4000 }} />
// // // // // // // // //       <h1 className="text-[30px] mb-[30px]">
// // // // // // // // //         Hello, {localStorage.getItem("name") || "Guest"}
// // // // // // // // //       </h1>
// // // // // // // // //       <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Shipping Address</h1>

// // // // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // // // //         <input
// // // // // // // // //           type="text"
// // // // // // // // //           name="phone"
// // // // // // // // //           placeholder="Phone"
// // // // // // // // //           value={address.phone}
// // // // // // // // //           onChange={handleChange}
// // // // // // // // //           required
// // // // // // // // //           style={{ border: "1px solid", padding: "8px", width: "400px" }}
// // // // // // // // //         />
// // // // // // // // //         <br />
// // // // // // // // //         <input
// // // // // // // // //           type="text"
// // // // // // // // //           name="address"
// // // // // // // // //           placeholder="Address"
// // // // // // // // //           value={address.address}
// // // // // // // // //           onChange={handleChange}
// // // // // // // // //           required
// // // // // // // // //           style={{
// // // // // // // // //             border: "1px solid",
// // // // // // // // //             padding: "8px",
// // // // // // // // //             width: "400px",
// // // // // // // // //             marginTop: "8px",
// // // // // // // // //           }}
// // // // // // // // //         />
// // // // // // // // //         <br />
// // // // // // // // //         <input
// // // // // // // // //           type="text"
// // // // // // // // //           name="city"
// // // // // // // // //           placeholder="City"
// // // // // // // // //           value={address.city}
// // // // // // // // //           onChange={handleChange}
// // // // // // // // //           required
// // // // // // // // //           style={{
// // // // // // // // //             border: "1px solid",
// // // // // // // // //             padding: "8px",
// // // // // // // // //             width: "400px",
// // // // // // // // //             marginTop: "8px",
// // // // // // // // //           }}
// // // // // // // // //         />
// // // // // // // // //         <br />
// // // // // // // // //         <input
// // // // // // // // //           type="text"
// // // // // // // // //           name="postalCode"
// // // // // // // // //           placeholder="Postal Code"
// // // // // // // // //           value={address.postalCode}
// // // // // // // // //           onChange={handleChange}
// // // // // // // // //           required
// // // // // // // // //           style={{
// // // // // // // // //             border: "1px solid",
// // // // // // // // //             padding: "8px",
// // // // // // // // //             width: "400px",
// // // // // // // // //             marginTop: "8px",
// // // // // // // // //           }}
// // // // // // // // //         />
// // // // // // // // //         <br />
// // // // // // // // //         <button
// // // // // // // // //           type="submit"
// // // // // // // // //           style={{
// // // // // // // // //             backgroundColor: "#007bff",
// // // // // // // // //             color: "white",
// // // // // // // // //             padding: "10px",
// // // // // // // // //             border: "none",
// // // // // // // // //             borderRadius: "4px",
// // // // // // // // //             cursor: "pointer",
// // // // // // // // //             marginTop: "12px",
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           Save Address
// // // // // // // // //         </button>
// // // // // // // // //       </form>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default AddressForm;



// // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // import { db } from "./firebase.config";
// // // // // // // // import { setDoc, doc, getDoc } from "firebase/firestore";
// // // // // // // // import { getAuth, onAuthStateChanged } from "firebase/auth"; // Use onAuthStateChanged
// // // // // // // // import { toast, Toaster } from "react-hot-toast";
// // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // const AddressForm = () => {
// // // // // // // //   const [address, setAddress] = useState({
// // // // // // // //     phone: "",
// // // // // // // //     address: "",
// // // // // // // //     city: "",
// // // // // // // //     postalCode: "",
// // // // // // // //   });

// // // // // // // //   const [userName, setUserName] = useState("Guest"); // Track the user's name
// // // // // // // //   const [user, setUser] = useState(null); // Store user object in state

// // // // // // // //   const auth = getAuth();
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   // Fetch user on auth state change and sync data
// // // // // // // //   useEffect(() => {
// // // // // // // //     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
// // // // // // // //       if (currentUser) {
// // // // // // // //         setUser(currentUser);

// // // // // // // //         const docRef = doc(db, "users", currentUser.uid);
// // // // // // // //         const docSnap = await getDoc(docRef);

// // // // // // // //         // If address data exists, prefill the form
// // // // // // // //         if (docSnap.exists()) {
// // // // // // // //           setAddress(docSnap.data());
// // // // // // // //         }

// // // // // // // //         // Set user name from Firebase or use displayName fallback
// // // // // // // //         const name = localStorage.getItem("name") || currentUser.displayName || "Guest";
// // // // // // // //         setUserName(name);
// // // // // // // //         localStorage.setItem("name", name); // Ensure it's saved
// // // // // // // //       } else {
// // // // // // // //         setUserName("Guest");
// // // // // // // //         setUser(null);
// // // // // // // //       }
// // // // // // // //     });

// // // // // // // //     return () => unsubscribe(); // Cleanup listener
// // // // // // // //   }, [auth]);

// // // // // // // //   // Handle form input changes
// // // // // // // //   const handleChange = (e) =>
// // // // // // // //     setAddress({ ...address, [e.target.name]: e.target.value });

// // // // // // // //   // Handle form submission
// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     if (user) {
// // // // // // // //       try {
// // // // // // // //         await setDoc(doc(db, "users", user.uid), address);
// // // // // // // //         toast.success("Address saved!");
// // // // // // // //         localStorage.setItem("hasAddress", "true");
// // // // // // // //         navigate("/profile");
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error saving address: ", error);
// // // // // // // //         toast.error("Failed to save address.");
// // // // // // // //       }
// // // // // // // //     } else {
// // // // // // // //       toast.error("Please log in.");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div style={{ padding: "16px", marginTop: "90px", marginLeft: "300px" }}>
// // // // // // // //       <Toaster toastOptions={{ duration: 4000 }} />
// // // // // // // //       <h1 className="text-[30px] mb-[30px]">Hello, {userName}</h1> {/* Display userName from state */}
// // // // // // // //       <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Shipping Address</h1>

// // // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           name="phone"
// // // // // // // //           placeholder="Phone"
// // // // // // // //           value={address.phone}
// // // // // // // //           onChange={handleChange}
// // // // // // // //           required
// // // // // // // //           style={{ border: "1px solid", padding: "8px", width: "400px" }}
// // // // // // // //         />
// // // // // // // //         <br />
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           name="address"
// // // // // // // //           placeholder="Address"
// // // // // // // //           value={address.address}
// // // // // // // //           onChange={handleChange}
// // // // // // // //           required
// // // // // // // //           style={{
// // // // // // // //             border: "1px solid",
// // // // // // // //             padding: "8px",
// // // // // // // //             width: "400px",
// // // // // // // //             marginTop: "8px",
// // // // // // // //           }}
// // // // // // // //         />
// // // // // // // //         <br />
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           name="city"
// // // // // // // //           placeholder="City"
// // // // // // // //           value={address.city}
// // // // // // // //           onChange={handleChange}
// // // // // // // //           required
// // // // // // // //           style={{
// // // // // // // //             border: "1px solid",
// // // // // // // //             padding: "8px",
// // // // // // // //             width: "400px",
// // // // // // // //             marginTop: "8px",
// // // // // // // //           }}
// // // // // // // //         />
// // // // // // // //         <br />
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           name="postalCode"
// // // // // // // //           placeholder="Postal Code"
// // // // // // // //           value={address.postalCode}
// // // // // // // //           onChange={handleChange}
// // // // // // // //           required
// // // // // // // //           style={{
// // // // // // // //             border: "1px solid",
// // // // // // // //             padding: "8px",
// // // // // // // //             width: "400px",
// // // // // // // //             marginTop: "8px",
// // // // // // // //           }}
// // // // // // // //         />
// // // // // // // //         <br />
// // // // // // // //         <button
// // // // // // // //           type="submit"
// // // // // // // //           style={{
// // // // // // // //             backgroundColor: "#007bff",
// // // // // // // //             color: "white",
// // // // // // // //             padding: "10px",
// // // // // // // //             border: "none",
// // // // // // // //             borderRadius: "4px",
// // // // // // // //             cursor: "pointer",
// // // // // // // //             marginTop: "12px",
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           Save Address
// // // // // // // //         </button>
// // // // // // // //       </form>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default AddressForm;


// // // // // // // import React, { useState } from "react";
// // // // // // // import { db, auth } from "./firebase.config";
// // // // // // // import { doc, updateDoc } from "firebase/firestore";
// // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // const Address = () => {
// // // // // // //   const [address, setAddress] = useState("");
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const handleSaveAddress = async () => {
// // // // // // //     const user = auth.currentUser;
// // // // // // //     if (!user) {
// // // // // // //       alert("No user is logged in.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       await updateDoc(doc(db, "users", user.uid), { address });
// // // // // // //       alert("Address saved!");
// // // // // // //       navigate("/profile"); // Navigate to Profile after saving address
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Failed to save address:", error);
// // // // // // //       alert("Error saving address.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h1>Enter Your Address</h1>
// // // // // // //       <input
// // // // // // //         type="text"
// // // // // // //         value={address}
// // // // // // //         onChange={(e) => setAddress(e.target.value)}
// // // // // // //         placeholder="Enter your address"
// // // // // // //       />
// // // // // // //       <button onClick={handleSaveAddress}>Save Address</button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Address;



// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { db, auth } from "./firebase.config";
// // // // // // import { doc, updateDoc } from "firebase/firestore";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // const Address = () => {
// // // // // //   const [address, setAddress] = useState("");
// // // // // //   const navigate = useNavigate();

// // // // // //   useEffect(() => {
// // // // // //     // Check if the user is logged in
// // // // // //     const user = auth.currentUser;
// // // // // //     if (!user) {
// // // // // //       navigate("/register"); // Redirect to Register if not logged in
// // // // // //     }
// // // // // //   }, [navigate]);

// // // // // //   const handleSaveAddress = async () => {
// // // // // //     const user = auth.currentUser;
// // // // // //     if (!user) {
// // // // // //       alert("No user is logged in.");
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       await updateDoc(doc(db, "users", user.uid), { address });
// // // // // //       alert("Address saved!");
// // // // // //       navigate("/profile"); // Navigate to Profile after saving address
// // // // // //     } catch (error) {
// // // // // //       console.error("Failed to save address:", error);
// // // // // //       alert("Error saving address.");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h1>Enter Your Address</h1>
// // // // // //       <input
// // // // // //         type="text"
// // // // // //         value={address}
// // // // // //         onChange={(e) => setAddress(e.target.value)}
// // // // // //         placeholder="Enter your address"
// // // // // //       />
// // // // // //       <button onClick={handleSaveAddress}>Save Address</button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Address;



// // // // // import React, { useState } from "react";

// // // // // const Address = () => {
// // // // //   const [address, setAddress] = useState("");

// // // // //   const handleSaveAddress = () => {
// // // // //     // Save the address logic here
// // // // //     alert("Address saved: " + address);
// // // // //   };

// // // // //   const styles = {
// // // // //     container: {
// // // // //       padding: "16px",
// // // // //       maxWidth: "400px",
// // // // //       margin: "auto",
// // // // //       backgroundColor: "#f9f9f9",
// // // // //       borderRadius: "8px",
// // // // //       boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
// // // // //     },
// // // // //     heading: {
// // // // //       fontSize: "24px",
// // // // //       marginBottom: "20px",
// // // // //       textAlign: "center",
// // // // //     },
// // // // //     input: {
// // // // //       padding: "8px",
// // // // //       border: "1px solid #ddd",
// // // // //       borderRadius: "4px",
// // // // //       width: "100%",
// // // // //       marginBottom: "10px",
// // // // //     },
// // // // //     button: {
// // // // //       backgroundColor: "#007bff",
// // // // //       color: "white",
// // // // //       border: "none",
// // // // //       borderRadius: "4px",
// // // // //       padding: "10px",
// // // // //       cursor: "pointer",
// // // // //       width: "100%",
// // // // //     },
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.container}>
// // // // //       <h1 style={styles.heading}>Set Address</h1>
// // // // //       <input
// // // // //         type="text"
// // // // //         placeholder="Enter your address"
// // // // //         value={address}
// // // // //         onChange={(e) => setAddress(e.target.value)}
// // // // //         style={styles.input}
// // // // //       />
// // // // //       <button onClick={handleSaveAddress} style={styles.button}>
// // // // //         Save Address
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Address;


// // // // import React, { useState } from "react";

// // // // const Address = () => {
// // // //   const [addressData, setAddressData] = useState({
// // // //     street: "",
// // // //     houseNumber: "",
// // // //     area: "",
// // // //     pinCode: "",
// // // //     phoneNumber: "",
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setAddressData({ ...addressData, [name]: value });
// // // //   };

// // // //   const handleSaveAddress = () => {
// // // //     // Save the address logic here (e.g., send to database)
// // // //     alert("Address saved: " + JSON.stringify(addressData));
// // // //   };

// // // //   const styles = {
// // // //     container: {
// // // //       padding: "16px",
// // // //       maxWidth: "400px",
// // // //       margin: "auto",
// // // //       backgroundColor: "#f9f9f9",
// // // //       borderRadius: "8px",
// // // //       boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
// // // //     },
// // // //     heading: {
// // // //       fontSize: "24px",
// // // //       marginBottom: "20px",
// // // //       textAlign: "center",
// // // //     },
// // // //     input: {
// // // //       padding: "8px",
// // // //       border: "1px solid #ddd",
// // // //       borderRadius: "4px",
// // // //       width: "100%",
// // // //       marginBottom: "10px",
// // // //     },
// // // //     button: {
// // // //       backgroundColor: "#007bff",
// // // //       color: "white",
// // // //       border: "none",
// // // //       borderRadius: "4px",
// // // //       padding: "10px",
// // // //       cursor: "pointer",
// // // //       width: "100%",
// // // //     },
// // // //   };

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <h1 style={styles.heading}>Set Address</h1>
// // // //       <input
// // // //         type="text"
// // // //         name="street"
// // // //         placeholder="Street Name"
// // // //         value={addressData.street}
// // // //         onChange={handleChange}
// // // //         style={styles.input}
// // // //       />
// // // //       <input
// // // //         type="text"
// // // //         name="houseNumber"
// // // //         placeholder="House Number"
// // // //         value={addressData.houseNumber}
// // // //         onChange={handleChange}
// // // //         style={styles.input}
// // // //       />
// // // //       <input
// // // //         type="text"
// // // //         name="area"
// // // //         placeholder="Area"
// // // //         value={addressData.area}
// // // //         onChange={handleChange}
// // // //         style={styles.input}
// // // //       />
// // // //       <input
// // // //         type="text"
// // // //         name="pinCode"
// // // //         placeholder="Pin Code"
// // // //         value={addressData.pinCode}
// // // //         onChange={handleChange}
// // // //         style={styles.input}
// // // //       />
// // // //       <input
// // // //         type="text"
// // // //         name="phoneNumber"
// // // //         placeholder="Phone Number"
// // // //         value={addressData.phoneNumber}
// // // //         onChange={handleChange}
// // // //         style={styles.input}
// // // //       />
// // // //       <button onClick={handleSaveAddress} style={styles.button}>
// // // //         Save Address
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Address;



// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // const Address = () => {
// // //   const [addressData, setAddressData] = useState({
// // //     street: "",
// // //     houseNumber: "",
// // //     area: "",
// // //     pinCode: "",
// // //     phoneNumber: "",
// // //   });

// // //   const navigate = useNavigate(); // Use navigate from react-router-dom

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setAddressData({ ...addressData, [name]: value });
// // //   };

// // //   const handleSaveAddress = () => {
// // //     // Save the address logic here (e.g., send to database)
// // //     alert("Address saved: " + JSON.stringify(addressData));

// // //     // Redirect to Profile page after saving the address
// // //     navigate("/profilepage");
// // //   };

// // //   const styles = {
// // //     container: {
// // //       padding: "16px",
// // //       maxWidth: "400px",
// // //       margin: "auto",
// // //       backgroundColor: "#f9f9f9",
// // //       borderRadius: "8px",
// // //       boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
// // //     },
// // //     heading: {
// // //       fontSize: "24px",
// // //       marginBottom: "20px",
// // //       textAlign: "center",
// // //     },
// // //     input: {
// // //       padding: "8px",
// // //       border: "1px solid #ddd",
// // //       borderRadius: "4px",
// // //       width: "100%",
// // //       marginBottom: "10px",
// // //     },
// // //     button: {
// // //       backgroundColor: "#007bff",
// // //       color: "white",
// // //       border: "none",
// // //       borderRadius: "4px",
// // //       padding: "10px",
// // //       cursor: "pointer",
// // //       width: "100%",
// // //     },
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <h1 style={styles.heading}>Set Address</h1>
// // //       <input
// // //         type="text"
// // //         name="street"
// // //         placeholder="Street Name"
// // //         value={addressData.street}
// // //         onChange={handleChange}
// // //         style={styles.input}
// // //       />
// // //       <input
// // //         type="text"
// // //         name="houseNumber"
// // //         placeholder="House Number"
// // //         value={addressData.houseNumber}
// // //         onChange={handleChange}
// // //         style={styles.input}
// // //       />
// // //       <input
// // //         type="text"
// // //         name="area"
// // //         placeholder="Area"
// // //         value={addressData.area}
// // //         onChange={handleChange}
// // //         style={styles.input}
// // //       />
// // //       <input
// // //         type="text"
// // //         name="pinCode"
// // //         placeholder="Pin Code"
// // //         value={addressData.pinCode}
// // //         onChange={handleChange}
// // //         style={styles.input}
// // //       />
// // //       <input
// // //         type="text"
// // //         name="phoneNumber"
// // //         placeholder="Phone Number"
// // //         value={addressData.phoneNumber}
// // //         onChange={handleChange}
// // //         style={styles.input}
// // //       />
// // //       <button onClick={handleSaveAddress} style={styles.button}>
// // //         Save Address
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default Address;

// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const AddressForm = () => {
// //   const [address, setAddress] = useState({
// //     street: '',
// //     houseNumber: '',
// //     area: '',
// //     pinCode: '',
// //     phoneNumber: '',
// //   });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setAddress({ ...address, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Save address to local storage
// //     localStorage.setItem('address', JSON.stringify(address));
// //     localStorage.setItem('hasAddress', 'true'); // Mark that address is added
// //     navigate('/Profile'); // Redirect to Profile page
// //   };

// //   return (
// //     <div style={{ padding: '16px' }}>
// //       <h2>Enter Your Address</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           name="street"
// //           placeholder="Street"
// //           value={address.street}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="houseNumber"
// //           placeholder="House Number"
// //           value={address.houseNumber}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="area"
// //           placeholder="Area"
// //           value={address.area}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="pinCode"
// //           placeholder="Pin Code"
// //           value={address.pinCode}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="text"
// //           name="phoneNumber"
// //           placeholder="Phone Number"
// //           value={address.phoneNumber}
// //           onChange={handleChange}
// //           required
// //         />
// //         <button type="submit">Save Address</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddressForm;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AddressForm = () => {
//     const [address, setAddress] = useState({
//         street: '',
//         houseNumber: '',
//         area: '',
//         pinCode: '',
//         phoneNumber: ''
//     });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setAddress(prevAddress => ({ ...prevAddress, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         localStorage.setItem('address',true);
//         navigate('/Profile'); // Redirect to profile page after saving address
//     };

//     return (
//         <div className="address-form" style={{ padding: '20px' }}>
//             <h2>Address Form</h2>
//             <form onSubmit={handleSubmit}>
//                 <input name="street" value={address.street} onChange={handleChange} placeholder="Street" required />
//                 <input name="houseNumber" value={address.houseNumber} onChange={handleChange} placeholder="House Number" required />
//                 <input name="area" value={address.area} onChange={handleChange} placeholder="Area" required />
//                 <input name="pinCode" value={address.pinCode} onChange={handleChange} placeholder="Pin Code" required />
//                 <input name="phoneNumber" value={address.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
//                 <button type="submit">Save Address</button>
//             </form>
//         </div>
//     );
// };

// export default AddressForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const [address, setAddress] = useState({
    street: "",
    houseNumber: "",
    area: "",
    pinCode: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save address to local storage (or Firestore if needed)
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("hasAddress", true);
    alert("Address saved successfully!");
    navigate("/profile");
  };

  return (
    <div style={{ padding: "16px", marginTop: "80px", maxWidth: "400px", margin: "auto" }}>
      <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Address</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={address.street}
          onChange={handleChange}
          required
          style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
        />
        <input
          type="text"
          name="houseNumber"
          placeholder="House Number"
          value={address.houseNumber}
          onChange={handleChange}
          required
          style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
        />
        <input
          type="text"
          name="area"
          placeholder="Area"
          value={address.area}
          onChange={handleChange}
          required
          style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
        />
        <input
          type="text"
          name="pinCode"
          placeholder="Pin Code"
          value={address.pinCode}
          onChange={handleChange}
          required
          style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={address.phoneNumber}
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
          Save Address
        </button>
      </form>
    </div>
  );
};

export default AddressForm;


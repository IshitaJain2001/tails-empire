


// // import React, { useState, useEffect } from 'react';
// // import { doc, setDoc, getDoc } from 'firebase/firestore';
// // import { getAuth, onAuthStateChanged } from 'firebase/auth';
// // import { db } from './firebase.config';

// // const AddressForBill = () => {
// //   const auth = getAuth();
// //   const [address, setAddress] = useState({
// //     street: '',
// //     houseNumber: '',
// //     area: '',
// //     pinCode: '',
// //     phoneNumber: '',
// //   });
// //   const [userName, setUserName] = useState('');
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [loading, setLoading] = useState(true);

// //   // Fetch the user's address when authenticated
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// //       if (user) {
// //         setUserName(user.displayName || '');
// //         await fetchDefaultAddress(user.uid); // Fetch the default address from Firestore
// //       } else {
// //         setAddress({}); // Reset address if user is not authenticated
// //         setUserName('');
// //       }
// //       setLoading(false);
// //     });

// //     return () => unsubscribe(); // Cleanup subscription
// //   }, [auth]);

// //   // Fetch the default address from Firestore
// //   const fetchDefaultAddress = async (uid) => {
// //     try {
// //       const addressDoc = await getDoc(doc(db, 'addresses', uid));
// //       if (addressDoc.exists()) {
// //         const data = addressDoc.data();
// //         setAddress(data); // Pre-fill billing address with default address
// //       } else {
// //         setIsEditing(true); // Prompt to add an address if none exists
// //       }
// //     } catch (error) {
// //       console.error('Error fetching address:', error); // Log any errors
// //     }
// //   };

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     setAddress({ ...address, [e.target.name]: e.target.value });
// //   };

// //   // Save the address to Firestore
// //   const handleSave = async () => {
// //     try {
// //       const user = auth.currentUser;
// //       if (user) {
// //         await setDoc(doc(db, 'addresses', user.uid), address); // Save address in Firestore
// //         alert('Billing address saved successfully!');
// //         setIsEditing(false);
// //       }
// //     } catch (error) {
// //       console.error('Error saving address:', error); // Log any errors
// //     }
// //   };

// //   // Loading state while fetching data
// //   if (loading) return <p>Loading...</p>;

// //   return (
// //     <div style={{ padding: '16px', maxWidth: '400px', margin: 'auto' }}>
// //       {userName && <h2>Welcome, {userName}!</h2>}

// //       {isEditing ? (
// //         <>
// //           <h1>Billing Address</h1>
// //           <label htmlFor="street">Street:</label>
// //           <input
// //             type="text"
// //             name="street"
// //             value={address.street}
// //             onChange={handleChange}
// //             placeholder="Street"
// //           />
// //           <br />
// //           <label htmlFor="houseNumber">House Number:</label>
// //           <input
// //             type="text"
// //             name="houseNumber"
// //             value={address.houseNumber}
// //             onChange={handleChange}
// //             placeholder="House Number"
// //           />
// //           <br />
// //           <label htmlFor="area">Area:</label>
// //           <input
// //             type="text"
// //             name="area"
// //             value={address.area}
// //             onChange={handleChange}
// //             placeholder="Area"
// //           />
// //           <br />
// //           <label htmlFor="pinCode">Pin Code:</label>
// //           <input
// //             type="text"
// //             name="pinCode"
// //             value={address.pinCode}
// //             onChange={handleChange}
// //             placeholder="Pin Code"
// //           />
// //           <br />
// //           <label htmlFor="phoneNumber">Phone Number:</label>
// //           <input
// //             type="text"
// //             name="phoneNumber"
// //             value={address.phoneNumber}
// //             onChange={handleChange}
// //             placeholder="Phone Number"
// //           />
// //           <button onClick={handleSave}>Save Address</button>
// //         </>
// //       ) : (
// //         <>
// //           <h1>Billing Address</h1>
// //           {address.street ? (
// //             <>
// //               <p>Street: {address.street}</p>
// //               <p>House Number: {address.houseNumber}</p>
// //               <p>Area: {address.area}</p>
// //               <p>Pin Code: {address.pinCode}</p>
// //               <p>Phone Number: {address.phoneNumber}</p>
// //               <button onClick={() => setIsEditing(true)}>Edit Address</button>
// //             </>
// //           ) : (
// //             <p>Please add your billing address.</p>
// //           )}
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default AddressForBill;


// import React, { useState, useEffect } from 'react';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { db } from './firebase.config';

// const AddressForBill = () => {
//   const auth = getAuth();
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [address, setAddress] = useState({
//     street: '',
//     houseNumber: '',
//     area: '',
//     pinCode: '',
//     phoneNumber: '',
//   });
//   const [userName, setUserName] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // Fetch user's address when authenticated
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         setUserName(user.displayName || '');
//         await fetchDefaultAddress(user.uid); // Fetch address from Firestore
//       } else {
//         setAddress({}); // Reset address if user is not authenticated
//         setUserName('');
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe(); // Cleanup subscription
//   }, [auth]);

//   // Fetch the default address from Firestore
//   const fetchDefaultAddress = async (uid) => {
//     try {
//       const addressDoc = await getDoc(doc(db, 'addresses', uid));
//       if (addressDoc.exists()) {
//         const data = addressDoc.data();
//         setAddress(data); // Set fetched address
//       } else {
//         setIsEditing(true); // Prompt to add an address if none exists
//       }
//     } catch (error) {
//       console.error('Error fetching address:', error); // Log any errors
//     }
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     setAddress({ ...address, [e.target.name]: e.target.value });
//   };

//   // Save the address to Firestore
//   const handleSave = async () => {
//     try {
//       const user = auth.currentUser;
//       if (user) {
//         await setDoc(doc(db, 'addresses', user.uid), address); // Save address in Firestore
//         alert('Billing address saved successfully!');
//         setIsEditing(false);
//       }
//     } catch (error) {
//       console.error('Error saving address:', error); // Log any errors
//     }
//   };

//   // Handle navigation to payment page
//   const handleProceedToPay = () => {
//     if (address.street && address.houseNumber && address.area && address.pinCode && address.phoneNumber) {
//       // If all required fields are filled
//       navigate('/payment'); // Navigate to payment page
//     } else {
//       alert('Please fill in all required fields before proceeding to payment.'); // Alert user
//     }
//   };

//   // Loading state while fetching data
//   if (loading) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: '16px', maxWidth: '400px', margin: 'auto' }}>
//       {userName && <h2>Welcome, {userName}!</h2>}

//       {isEditing ? (
//         <>
//           <h1>Billing Address</h1>
//           <label htmlFor="street">Street:</label>
//           <input
//             type="text"
//             name="street"
//             value={address.street}
//             onChange={handleChange}
//             placeholder="Street"
//           />
//           <br />
//           <label htmlFor="houseNumber">House Number:</label>
//           <input
//             type="text"
//             name="houseNumber"
//             value={address.houseNumber}
//             onChange={handleChange}
//             placeholder="House Number"
//           />
//           <br />
//           <label htmlFor="area">Area:</label>
//           <input
//             type="text"
//             name="area"
//             value={address.area}
//             onChange={handleChange}
//             placeholder="Area"
//           />
//           <br />
//           <label htmlFor="pinCode">Pin Code:</label>
//           <input
//             type="text"
//             name="pinCode"
//             value={address.pinCode}
//             onChange={handleChange}
//             placeholder="Pin Code"
//           />
//           <br />
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="text"
//             name="phoneNumber"
//             value={address.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
//           />
//           <button onClick={handleSave}>Save Address</button>
//         </>
//       ) : (
//         <>
//           <h1>Billing Address</h1>
//           {address.street ? (
//             <>
//               <p>Street: {address.street}</p>
//               <p>House Number: {address.houseNumber}</p>
//               <p>Area: {address.area}</p>
//               <p>Pin Code: {address.pinCode}</p>
//               <p>Phone Number: {address.phoneNumber}</p>
//               <button onClick={() => setIsEditing(true)}>Edit Address</button>
//             </>
//           ) : (
//             <p>Please add your billing address.</p>
//           )}
//         </>
//       )}

//       <button 
//         style={{
//           backgroundColor: "#007bff",
//           color: "white",
//           padding: "10px",
//           border: "none",
//           borderRadius: "4px",
//           cursor: "pointer",
//           marginTop: '16px',
//         }}
//         onClick={handleProceedToPay} // Handle proceeding to payment
//       >
//         Proceed to Pay
//       </button>
//     </div>
//   );
// };

// export default AddressForBill;


import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db } from './firebase.config';

const AddressForBill = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    street: '',
    houseNumber: '',
    area: '',
    pinCode: '',
    phoneNumber: '',
  });
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch user's address when authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserName(user.displayName || '');
        await fetchAddress(user.uid);
      } else {
        setAddress({});
        setUserName('');
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [auth]);

  // Fetch the address from Firestore
  const fetchAddress = async (uid) => {
    try {
      const addressDoc = await getDoc(doc(db, 'addresses', uid));
      if (addressDoc.exists()) {
        const data = addressDoc.data();
        setAddress(data);
      } else {
        // Handle case where no address exists
        alert('No billing address found. Please add an address first.');
        navigate('/address'); // Redirect to the address page if none exists
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  // Handle navigation to payment page
  const handleProceedToPay = () => {
    if (address.street && address.houseNumber && address.area && address.pinCode && address.phoneNumber) {
      // If all required fields are filled
      navigate('/payment'); // Navigate to payment page
    } else {
      alert('Please fill in all required fields before proceeding to payment.'); // Alert user
    }
  };

  // Loading state while fetching data
  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: '16px', maxWidth: '400px', margin: 'auto' }}>
      {userName && <h2>Welcome, {userName}!</h2>}
      <h1>Billing Address</h1>
      {address.street ? (
        <>
          <p>Street: {address.street}</p>
          <p>House Number: {address.houseNumber}</p>
          <p>Area: {address.area}</p>
          <p>Pin Code: {address.pinCode}</p>
          <p>Phone Number: {address.phoneNumber}</p>
        </>
      ) : (
        <p>No billing address available. Please add one.</p>
      )}

      <button 
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: '16px',
        }}
        onClick={handleProceedToPay} // Handle proceeding to payment
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default AddressForBill;


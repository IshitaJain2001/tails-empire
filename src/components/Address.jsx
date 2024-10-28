



// import React, { useState, useEffect, useRef } from 'react';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import { getAuth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import { db } from './firebase.config';

// const AddressPage = () => {
//   const auth = getAuth();
//   const recaptchaContainer = useRef(null); // Recaptcha reference

//   const [address, setAddress] = useState({
//     street: '',
//     houseNumber: '',
//     area: '',
//     pinCode: '',
//     phoneNumber: '',
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [phoneVerified, setPhoneVerified] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         await fetchAddress(user.uid);
//       } else {
//         setAddress({});
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   const fetchAddress = async (uid) => {
//     try {
//       const storedAddress = localStorage.getItem('address');
//       if (storedAddress) {
//         setAddress(JSON.parse(storedAddress));
//       } else {
//         const addressDoc = await getDoc(doc(db, 'addresses', uid));
//         if (addressDoc.exists()) {
//           const data = addressDoc.data();
//           setAddress(data);
//           localStorage.setItem('address', JSON.stringify(data));
//         } else {
//           setIsEditing(true);
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching address:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setAddress({ ...address, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     if (!phoneVerified) {
//       alert('Please verify your phone number before saving.');
//       return;
//     }
//     try {
//       const user = auth.currentUser;
//       if (user) {
//         await setDoc(doc(db, 'addresses', user.uid), address);
//         localStorage.setItem('address', JSON.stringify(address));
//         alert('Address saved successfully!');
//         setIsEditing(false);
//       }
//     } catch (error) {
//       console.error('Error saving address:', error);
//     }
//   };

//   const sendOtp = () => {
//     if (!address.phoneNumber) {
//       alert('Please enter a valid phone number.');
//       return;
//     }

//     const phoneNumber = `+91${address.phoneNumber}`; // Change country code as required

//     window.recaptchaVerifier = new RecaptchaVerifier(
//       recaptchaContainer.current,
//       { size: 'invisible', callback: () => requestOtp(phoneNumber) },
//       auth
//     );
//   };

//   const requestOtp = (phoneNumber) => {
//     signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
//       .then((confirmationResult) => {
//         window.confirmationResult = confirmationResult;
//         alert('OTP sent!');
//         setOtpSent(true);
//       })
//       .catch((error) => {
//         console.error('Error sending OTP:', error);
//         alert('Failed to send OTP. Try again.');
//       });
//   };

//   const verifyOtp = () => {
//     window.confirmationResult.confirm(otp)
//       .then((result) => {
//         alert('Phone number verified!');
//         setPhoneVerified(true);
//       })
//       .catch((error) => {
//         console.error('Invalid OTP:', error);
//         alert('Invalid OTP. Please try again.');
//       });
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: '16px', maxWidth: '400px', margin: 'auto' }}>
//       <h2>Enter Address</h2>
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             name="street"
//             value={address.street}
//             onChange={handleChange}
//             placeholder="Street"
//           />
//           <input
//             type="text"
//             name="houseNumber"
//             value={address.houseNumber}
//             onChange={handleChange}
//             placeholder="House Number"
//           />
//           <input
//             type="text"
//             name="area"
//             value={address.area}
//             onChange={handleChange}
//             placeholder="Area"
//           />
//           <input
//             type="text"
//             name="pinCode"
//             value={address.pinCode}
//             onChange={handleChange}
//             placeholder="Pin Code"
//           />
//           <input
//             type="text"
//             name="phoneNumber"
//             value={address.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
//           />
//           <div ref={recaptchaContainer}></div>

//           {otpSent ? (
//             <>
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter OTP"
//               />
//               <button onClick={verifyOtp}>Verify OTP</button>
//             </>
//           ) : (
//             <button onClick={sendOtp}>Send OTP</button>
//           )}

//           <button onClick={handleSave}>Save Address</button>
//         </>
//       ) : (
//         <>
//           <p>Street: {address.street || 'Not available'}</p>
//           <p>House Number: {address.houseNumber || 'Not available'}</p>
//           <p>Area: {address.area || 'Not available'}</p>
//           <p>Pin Code: {address.pinCode || 'Not available'}</p>
//           <p>Phone Number: {address.phoneNumber || 'Not available'}</p>
//           <button onClick={() => setIsEditing(true)}>Edit Address</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default AddressPage;



import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from './firebase.config';

const AddressPage = () => {
  const auth = getAuth();

  const [address, setAddress] = useState({
    street: '',
    houseNumber: '',
    area: '',
    pinCode: '',
    phoneNumber: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await fetchAddress(user.uid);
      } else {
        setAddress({});
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const fetchAddress = async (uid) => {
    try {
      const storedAddress = localStorage.getItem('address');
      if (storedAddress) {
        setAddress(JSON.parse(storedAddress));
      } else {
        const addressDoc = await getDoc(doc(db, 'addresses', uid));
        if (addressDoc.exists()) {
          const data = addressDoc.data();
          setAddress(data);
          localStorage.setItem('address', JSON.stringify(data));
        } else {
          setIsEditing(true);
        }
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, 'addresses', user.uid), address);
        localStorage.setItem('address', JSON.stringify(address));
        alert('Address saved successfully!');
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: '16px', maxWidth: '400px', margin: 'auto' }}>
  
      {isEditing ? (
        <>
        <label htmlFor="street">Street:</label>
          <input
          
            type="text"
            name="street"
            value={address.street}
            onChange={handleChange}
            placeholder="Street"
          />
          <br />
          <label htmlFor="house Num">House Number:</label>
          <input
            type="text"
            name="houseNumber"
            value={address.houseNumber}
            onChange={handleChange}
            placeholder="House Number"
          />
          <br />
          <label htmlFor="Area">Area : </label>
          <input
            type="text"
            name="area"
            value={address.area}
            onChange={handleChange}
            placeholder="Area"
          />
          <br />
               <label htmlFor="pincode">Pin Code : </label>
          <input
            type="text"
            name="pinCode"
            value={address.pinCode}
            onChange={handleChange}
            placeholder="Pin Code"
          />
            <br />
            <label htmlFor="phone">Phone Number : </label>
          <input
            type="text"
            name="phoneNumber"
            value={address.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <button onClick={handleSave}>Save Address</button>
        </>
      ) : (
        <>
            {/* <h2>Enter Address</h2> */}
          <p>Street: {address.street || 'Not available'}</p>
          <p>House Number: {address.houseNumber || 'Not available'}</p>
          <p>Area: {address.area || 'Not available'}</p>
          <p>Pin Code: {address.pinCode || 'Not available'}</p>
          <p>Phone Number: {address.phoneNumber || 'Not available'}</p>
          <button onClick={() => setIsEditing(true)}>Edit Address</button>
        </>
      )}
    </div>
  );
};

export default AddressPage;

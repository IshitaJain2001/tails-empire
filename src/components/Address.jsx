



// import React, { useState, useEffect } from 'react';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { db } from './firebase.config';

// const AddressPage = () => {
//   const auth = getAuth();

//   const [address, setAddress] = useState({
//     street: '',
//     houseNumber: '',
//     area: '',
//     pinCode: '',
//     phoneNumber: '',
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(true);

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

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: '16px', maxWidth: '400px', margin: 'auto' }}>
  
//       {isEditing ? (
//         <>
//         <h1>  Default Address</h1>
//         <label htmlFor="street">Street:</label>
//           <input
          
//             type="text"
//             name="street"
//             value={address.street}
//             onChange={handleChange}
//             placeholder="Street"
//           />
//           <br />
//           <label htmlFor="house Num">House Number:</label>
//           <input
//             type="text"
//             name="houseNumber"
//             value={address.houseNumber}
//             onChange={handleChange}
//             placeholder="House Number"
//           />
//           <br />
//           <label htmlFor="Area">Area : </label>
//           <input
//             type="text"
//             name="area"
//             value={address.area}
//             onChange={handleChange}
//             placeholder="Area"
//           />
//           <br />
//                <label htmlFor="pincode">Pin Code : </label>
//           <input
//             type="text"
//             name="pinCode"
//             value={address.pinCode}
//             onChange={handleChange}
//             placeholder="Pin Code"
//           />
//             <br />
//             <label htmlFor="phone">Phone Number : </label>
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
//             {/* <h2>Enter Address</h2> */}
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
  const [userName, setUserName] = useState(''); // State for storing user name
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserName(user.displayName || ''); // Get user name if available
        await fetchAddress(user.uid);
      } else {
        setAddress({});
        setUserName('');
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
          setIsEditing(true); // Prompt to add an address if none exists
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
      {userName && <h2>Welcome, {userName}!</h2>}
      
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
          <label htmlFor="houseNumber">House Number:</label>
          <input
            type="text"
            name="houseNumber"
            value={address.houseNumber}
            onChange={handleChange}
            placeholder="House Number"
          />
          <br />
          <label htmlFor="area">Area:</label>
          <input
            type="text"
            name="area"
            value={address.area}
            onChange={handleChange}
            placeholder="Area"
          />
          <br />
          <label htmlFor="pinCode">Pin Code:</label>
          <input
            type="text"
            name="pinCode"
            value={address.pinCode}
            onChange={handleChange}
            placeholder="Pin Code"
          />
          <br />
          <label htmlFor="phoneNumber">Phone Number:</label>
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
          {address.street ? (
            <>
              <p>Street: {address.street}</p>
              <p>House Number: {address.houseNumber}</p>
              <p>Area: {address.area}</p>
              <p>Pin Code: {address.pinCode}</p>
              <p>Phone Number: {address.phoneNumber}</p>
              <button onClick={() => setIsEditing(true)}>Edit Address</button>
            </>
          ) : (
            <p>Please add your address.</p>
          )}
        </>
      )}
    </div>
  );
};

export default AddressPage;

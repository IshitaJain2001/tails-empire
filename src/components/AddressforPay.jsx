

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


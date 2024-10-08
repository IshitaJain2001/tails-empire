// 

import React, { useState, useEffect } from "react";
import { db } from './firebase.config'; // Make sure this is your Firestore configuration
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const AddressForm = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  // Default state for address form
  const [address, setAddress] = useState({
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  // Get user name from local storage
  const userName = localStorage.getItem("name"); // Get name from local storage

  // Retrieve default address if already set
  useEffect(() => {
    if (user) {
      const fetchAddress = async () => {
        const addressDocRef = doc(db, "users", user.uid);
        const addressSnapshot = await getDoc(addressDocRef);
        
        if (addressSnapshot.exists()) {
          setAddress(addressSnapshot.data()); // Set the existing address data to the form
        }
      };
      fetchAddress();
    }
  }, [user]);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user) {
      try {
        const addressDocRef = doc(db, "users", user.uid);
        await setDoc(addressDocRef, address); // Store the address in Firestore

        toast.success("Address set successfully!"); // Show toast notification
        
      // Redirect after submission
      } catch (error) {
        console.error("Error setting address: ", error);
        toast.error("Failed to set address."); // Show error toast
      }
    } else {
      toast.error("User not authenticated. Please log in."); // Show error toast
    }
  };

  return (
    <div style={{ padding: "16px", marginTop: "90px", marginLeft: "300px" }}>
      <Toaster toastOptions={{ duration: 4000 }} /> {/* Ensure Toaster is here */}
      <h1 className="text-[30px] mb-[30px]">Hello, {userName || "Guest"}</h1> {/* Displaying user name */}

      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Shipping Address</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="phone"
          value={address.phone}
          placeholder="Phone Number"
          style={{ border: "1px solid", padding: "8px", width: "400px" }}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="address"
          value={address.address}
          placeholder="Address"
          style={{ border: "1px solid", padding: "8px", width: "400px", marginTop: "8px" }}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="city"
          value={address.city}
          placeholder="City"
          style={{ border: "1px solid", padding: "8px", width: "400px", marginTop: "8px" }}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="postalCode"
          value={address.postalCode}
          placeholder="Postal Code"
          style={{ border: "1px solid", padding: "8px", width: "400px", marginTop: "8px" }}
          onChange={handleChange}
        />
        <br />
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          type="submit"
        >
          Set As Default
        </button>
      </form>
    </div>
  );
};

export default AddressForm;

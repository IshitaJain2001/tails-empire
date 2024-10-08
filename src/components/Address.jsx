
import React, { useState, useEffect } from "react";
import { db } from './firebase.config'; // Make sure this is your Firestore configuration
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const AddressForm = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  
  // Default state for address form
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  // const userName = useSelector(state => state.userAdded); // Redux state for userName
  const storedName = localStorage.getItem("name"); // Retrieve name from localStorage
  const name = storedName || "Guest"; 
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

        alert("Address set successfully.");
        navigate('/nextPage'); // Redirect after submission
      } catch (error) {
        console.error("Error setting address: ", error);
        alert("Failed to set address.");
      }
    } else {
      alert("User not authenticated. Please log in.");
    }
  };

  return (
    <div style={{ padding: "16px", marginTop: "90px", marginLeft: "300px" }}>
      <h1 className="text-[30px] mb-[30px]">Hello, {name}</h1>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }} >Shipping Address</h1>
      <form onSubmit={handleSubmit}>
        
        <br />
        <input
          type="text"
          name="phone"
          value={address.phone} // Displaying the default value
          placeholder="Phone Number"
          style={{ border: "1px solid", padding: "8px", width: "400px", marginTop: "8px" }}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="address"
          value={address.address} // Displaying the default value
          placeholder="Address"
          style={{ border: "1px solid", padding: "8px", width: "400px", marginTop: "10px" }}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="city"
          value={address.city} // Displaying the default value
          placeholder="City"
          style={{ border: "1px solid", padding: "8px", width: "400px", marginTop: "10px" }}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="postalCode"
          value={address.postalCode} // Displaying the default value
          placeholder="Postal Code"
          style={{ border: "1px solid", padding: "8px", width: "400px", marginTop: "10px" }}
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
          className="mt-[10px]"
        >
          Set As Default
        </button>
      </form>
    </div>
  );
};

export default React.memo(AddressForm);



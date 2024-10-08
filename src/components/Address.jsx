



import React, { useState } from "react";
import { db } from './firebase.config'; // Make sure this is your Firestore configuration
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
const AddressForm = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    email: "", // Initialize to an empty string
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Form submission ko roken

    const auth = getAuth(); // Firebase authentication instance lein
    const user = auth.currentUser; // Current user ko lein

    if (user) {
        const userId = user.uid; // User ID retrieve karein

        try {
            // Firestore me address data set karna
            const addressDocRef = doc(db, "users", userId); // Document reference sahi tarike se banayein
            await setDoc(addressDocRef, address); // Address ko Firestore me set karein
            alert("Address set successfully.");
            navigate('/nextPage'); // Agle page par navigate kare
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
      <h1 className="text-[30px] mb-[30px]">Hello, {address.name || "Guest"}</h1>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Shipping Address</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          style={{ border: "1px solid", padding: "8px", width: "400px" }}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          style={{ border: "1px solid", padding: "8px", width: "400px", marginTop: "8px" }}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          style={{ border: "1px solid", padding: "8px", width: "400px", marginTop: "8px" }}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          style={{ border: "1px solid", padding: "8px", width: "400px", marginTop: "8px" }}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="postalCode"
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

export default React.memo(AddressForm);


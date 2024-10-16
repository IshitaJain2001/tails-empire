// 
// AddressForm.js
import React, { useState, useEffect } from "react";
import { db } from "./firebase.config";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const [address, setAddress] = useState({
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  // Fetch existing address if user is logged in
  useEffect(() => {
    if (user) {
      const fetchAddress = async () => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) setAddress(docSnap.data());
      };
      fetchAddress();
    }
  }, [user]);

  // Handle form input changes
  const handleChange = (e) =>
    setAddress({ ...address, [e.target.name]: e.target.value });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await setDoc(doc(db, "users", user.uid), address);
        toast.success("Address saved!");
        localStorage.setItem("hasAddress", "true");
        navigate("/profile");
      } catch (error) {
        console.error("Error saving address: ", error);
        toast.error("Failed to save address.");
      }
    } else {
      toast.error("Please log in.");
    }
  };

  return (
    <div style={{ padding: "16px", marginTop: "90px", marginLeft: "300px" }}>
      <Toaster toastOptions={{ duration: 4000 }} />
      <h1 className="text-[30px] mb-[30px]">
        Hello, {localStorage.getItem("name") || "Guest"}
      </h1>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Shipping Address</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={address.phone}
          onChange={handleChange}
          required
          style={{ border: "1px solid", padding: "8px", width: "400px" }}
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={address.address}
          onChange={handleChange}
          required
          style={{
            border: "1px solid",
            padding: "8px",
            width: "400px",
            marginTop: "8px",
          }}
        />
        <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
          required
          style={{
            border: "1px solid",
            padding: "8px",
            width: "400px",
            marginTop: "8px",
          }}
        />
        <br />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={address.postalCode}
          onChange={handleChange}
          required
          style={{
            border: "1px solid",
            padding: "8px",
            width: "400px",
            marginTop: "8px",
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "12px",
          }}
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default AddressForm;

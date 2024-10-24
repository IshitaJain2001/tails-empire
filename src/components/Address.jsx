


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "./firebase.config"; 

const AddressForm = () => {
    const [address, setAddress] = useState({
        street: "",
        houseNumber: "",
        area: "",
        pinCode: "",
        phoneNumber: "",
    });
    const [user, setUser] = useState(null);
    const [submittedAddress, setSubmittedAddress] = useState(null); // New state to store the submitted address
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user || !user.uid) {
            alert("You must be logged in to save the address.");
            return;
        }

        try {
            const userId = user.uid;

            if (
                !address.street ||
                !address.houseNumber ||
                !address.area ||
                !address.pinCode ||
                !address.phoneNumber
            ) {
                alert("Please fill out all fields.");
                return;
            }

            await setDoc(doc(db, "users", userId), { address }, { merge: true });

            localStorage.setItem("address", JSON.stringify(address));
            localStorage.setItem("hasAddress", true);
            setSubmittedAddress(address); // Store the submitted address
            alert("Address saved successfully!");
            navigate("/profile");
        } catch (error) {
            console.error("Error saving address:", error);
            alert("Failed to save address: " + error.message);
        }
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
            {submittedAddress && ( // Render the address if submitted
                <div style={{ marginTop: "20px" }}>
                    <h2>Your Saved Address:</h2>
                    <p>Street: {submittedAddress.street}</p>
                    <p>House Number: {submittedAddress.houseNumber}</p>
                    <p>Area: {submittedAddress.area}</p>
                    <p>Pin Code: {submittedAddress.pinCode}</p>
                    <p>Phone Number: {submittedAddress.phoneNumber}</p>
                </div>
            )}
        </div>
    );
};

export default AddressForm;




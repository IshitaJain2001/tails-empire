


import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase.config";
import Address from './Address';

const ProfilePage = () => {
    const [userName, setUserName] = useState("Guest");
    const [userAddress, setUserAddress] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const auth = getAuth();

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (userDoc.exists()) {
                    const data = userDoc.data();
                    setUserName(data.name || "Guest");
                    setUserAddress(data.address || null);
                } else {
                    console.log("No user document found.");
                }
            }
            setLoading(false);
        };

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                fetchUserData();
            } else {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleAddressSubmit = async (updatedAddress) => {
        const user = auth.currentUser;
        if (user) {
            try {
                await setDoc(doc(db, "users", user.uid), { address: updatedAddress }, { merge: true });
                setUserAddress(updatedAddress);
                setIsEditing(false);
            } catch (error) {
                console.error("Error saving address:", error);
            }
        }
    };

    if (loading) {
        return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;
    }

    // Directly show the Address component if userAddress is null
    return (
        <div style={{ padding: "16px", marginTop: "80px", maxWidth: "600px", margin: "auto" }}>
            <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>Hello, {userName}!</h1>
            {isEditing || userAddress === null ? (
                <Address
                    initialAddress={userAddress || { street: "", houseNumber: "", area: "", pinCode: "", phoneNumber: "" }}
                    onSubmit={handleAddressSubmit}
                />
            ) : (
                <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "10px", borderRadius: "4px" }}>
                    <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Your Address:</h2>
                    <p>Street: {userAddress.street || "Not provided"}</p>
                    <p>House Number: {userAddress.houseNumber || "Not provided"}</p>
                    <p>Area: {userAddress.area || "Not provided"}</p>
                    <p>Pin Code: {userAddress.pinCode || "Not provided"}</p>
                    <p>Phone Number: {userAddress.phoneNumber || "Not provided"}</p>
                    <button onClick={handleEditClick}>Edit Address</button>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;

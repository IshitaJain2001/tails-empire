



import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "./firebase.config"; 
import { doc, getDoc } from "firebase/firestore";

const ProfilePage = () => {
    const [userName, setUserName] = useState("Guest");
    const [address, setAddress] = useState(null); // State to store user's address
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;

            if (user) {
                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (userDoc.exists()) {
                    setUserName(userDoc.data().name); // Set the user's name
                    if (userDoc.data().address) {
                        setAddress(userDoc.data().address); // Set the user's address if it exists
                    }
                } else {
                    console.log("No such user document!");
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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Hello, {userName}!</h1> {/* Display user's name */}
            {address ? (
                <div style={{ marginTop: "20px" }}>
                    <h2>Your Address:</h2>
                    <p>Street: {address.street}</p>
                    <p>House Number: {address.houseNumber}</p>
                    <p>Area: {address.area}</p>
                    <p>Pin Code: {address.pinCode}</p>
                    <p>Phone Number: {address.phoneNumber}</p>
                </div>
            ) : (
                <p>No address found.</p> // Message when no address is saved
            )}
        </div>
    );
};

export default ProfilePage;

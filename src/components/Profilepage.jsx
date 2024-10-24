



// // import React, { useEffect, useState } from "react";
// // import { getAuth } from "firebase/auth";
// // import { db } from "./firebase.config"; 
// // import { doc, getDoc } from "firebase/firestore";
// // import AddressForm from "./Address"; // Import AddressForm component

// // const ProfilePage = () => {
// //     const [userName, setUserName] = useState("Guest");
// //     const [userAddress, setUserAddress] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [isEditing, setIsEditing] = useState(false); // State to control if in edit mode
// //     const auth = getAuth();

// //     useEffect(() => {
// //         const fetchUserData = async () => {
// //             const user = auth.currentUser;

// //             if (user) {
// //                 const userDoc = await getDoc(doc(db, "users", user.uid));
// //                 if (userDoc.exists()) {
// //                     const data = userDoc.data();
// //                     setUserName(data.name);
// //                     setUserAddress(data.address);
// //                 } else {
// //                     console.log("No such user document!");
// //                 }
// //             }
// //             setLoading(false);
// //         };

// //         const unsubscribe = auth.onAuthStateChanged((user) => {
// //             if (user) {
// //                 fetchUserData();
// //             } else {
// //                 setLoading(false);
// //             }
// //         });

// //         return () => unsubscribe();
// //     }, [auth]);

// //     const handleEditClick = () => {
// //         setIsEditing(true); // Set editing mode to true
// //     };

// //     if (loading) {
// //         return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;
// //     }

// //     if (isEditing) {
// //         return <AddressForm />; // Render AddressForm when in editing mode
// //     }

// //     return (
// //         <div style={{ padding: "16px", marginTop: "80px", maxWidth: "600px", margin: "auto" }}>
// //             <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>Hello, {userName}!</h1>
// //             {userAddress ? (
// //                 <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "10px", borderRadius: "4px" }}>
// //                     <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
// //                         <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Your Address:</h2>
// //                         <div 
// //                             style={{ position: "relative", cursor: "pointer", display: "inline-block" }}
// //                             onMouseEnter={(e) => {
// //                                 e.currentTarget.querySelector('.edit-text').style.visibility = 'visible';
// //                             }}
// //                             onMouseLeave={(e) => {
// //                                 e.currentTarget.querySelector('.edit-text').style.visibility = 'hidden';
// //                             }}
// //                             onClick={handleEditClick} // Handle click to show the form
// //                         >
// //                             <i 
// //                                 className="fas fa-pencil-alt" 
// //                                 style={{ fontSize: "20px", marginRight: "5px" }}
// //                             ></i>
// //                             <span className="edit-text" style={{ visibility: "hidden", position: "absolute", left: "20px", top: "5px", fontSize: "14px", color: "#007bff" }}>
// //                                 Edit
// //                             </span>
// //                         </div>
// //                     </div>
// //                     <p style={{ margin: "5px 0" }}>Street: {userAddress.street}</p>
// //                     <p style={{ margin: "5px 0" }}>House Number: {userAddress.houseNumber}</p>
// //                     <p style={{ margin: "5px 0" }}>Area: {userAddress.area}</p>
// //                     <p style={{ margin: "5px 0" }}>Pin Code: {userAddress.pinCode}</p>
// //                     <p style={{ margin: "5px 0" }}>Phone Number: {userAddress.phoneNumber}</p>
// //                 </div>
// //             ) : (
// //                 <div style={{ marginTop: "20px" }}>
// //                     <h2 style={{ fontSize: "24px" }}>No Address Found</h2>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default ProfilePage;



// import React, { useEffect, useState } from "react";
// import { getAuth } from "firebase/auth";
// import { db } from "./firebase.config"; 
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import AddressForm from "./Address"; // Import AddressForm component
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const ProfilePage = () => {
//     const [userName, setUserName] = useState("Guest");
//     const [userAddress, setUserAddress] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [isEditing, setIsEditing] = useState(false); // State to control if in edit mode
//     const auth = getAuth();
//     const navigate = useNavigate(); // Initialize navigate

//     useEffect(() => {
//         const fetchUserData = async () => {
//             const user = auth.currentUser;

//             if (user) {
//                 const userDoc = await getDoc(doc(db, "users", user.uid));
//                 if (userDoc.exists()) {
//                     const data = userDoc.data();
//                     setUserName(data.name);
//                     setUserAddress(data.address);
//                 } else {
//                     console.log("No such user document!");
//                 }
//             }
//             setLoading(false);
//         };

//         const unsubscribe = auth.onAuthStateChanged((user) => {
//             if (user) {
//                 fetchUserData();
//             } else {
//                 setLoading(false);
//             }
//         });

//         return () => unsubscribe();
//     }, [auth]);

//     const handleEditClick = () => {
//         setIsEditing(true); // Set editing mode to true
//     };

//     const handleAddressSubmit = async (updatedAddress) => {
//         const user = auth.currentUser;
//         if (user) {
//             try {
//                 await setDoc(doc(db, "users", user.uid), { address: updatedAddress }, { merge: true });
//                 setUserAddress(updatedAddress); // Update local address state
//                 setIsEditing(false); // Exit editing mode
//                 navigate("/"); // Navigate back to ProfilePage
//             } catch (error) {
//                 console.error("Error updating address:", error);
//             }
//         }
//     };

//     if (loading) {
//         return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;
//     }

//     if (isEditing) {
//         return <AddressForm initialAddress={userAddress} onSubmit={handleAddressSubmit} />; // Pass initial address and submit handler
//     }

//     return (
//         <div style={{ padding: "16px", marginTop: "80px", maxWidth: "600px", margin: "auto" }}>
//             <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>Hello, {userName}!</h1>
//             {userAddress ? (
//                 <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "10px", borderRadius: "4px" }}>
//                     <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                         <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Your Address:</h2>
//                         <div 
//                             style={{ position: "relative", cursor: "pointer", display: "inline-block" }}
//                             onMouseEnter={(e) => {
//                                 e.currentTarget.querySelector('.edit-text').style.visibility = 'visible';
//                             }}
//                             onMouseLeave={(e) => {
//                                 e.currentTarget.querySelector('.edit-text').style.visibility = 'hidden';
//                             }}
//                             onClick={handleEditClick} // Handle click to show the form
//                         >
//                             <i 
//                                 className="fas fa-pencil-alt" 
//                                 style={{ fontSize: "20px", marginRight: "5px" }}
//                             ></i>
//                             <span className="edit-text" style={{ visibility: "hidden", position: "absolute", left: "20px", top: "5px", fontSize: "14px", color: "#007bff" }}>
//                                 Edit
//                             </span>
//                         </div>
//                     </div>
//                     <p style={{ margin: "5px 0" }}>Street: {userAddress.street}</p>
//                     <p style={{ margin: "5px 0" }}>House Number: {userAddress.houseNumber}</p>
//                     <p style={{ margin: "5px 0" }}>Area: {userAddress.area}</p>
//                     <p style={{ margin: "5px 0" }}>Pin Code: {userAddress.pinCode}</p>
//                     <p style={{ margin: "5px 0" }}>Phone Number: {userAddress.phoneNumber}</p>
//                 </div>
//             ) : (
//                 <div style={{ marginTop: "20px" }}>
//                     <h2 style={{ fontSize: "24px" }}>No Address Found</h2>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProfilePage;



import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "./firebase.config"; 
import { doc, getDoc, setDoc } from "firebase/firestore";
import AddressForm from "./Address"; // Import AddressForm component
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ProfilePage = () => {
    const [userName, setUserName] = useState("Guest");
    const [userAddress, setUserAddress] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false); // State to control if in edit mode
    const auth = getAuth();
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;

            if (user) {
                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (userDoc.exists()) {
                    const data = userDoc.data();
                    setUserName(data.name);
                    setUserAddress(data.address);
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

    const handleEditClick = () => {
        setIsEditing(true); // Set editing mode to true
    };

    const handleAddressSubmit = async (updatedAddress) => {
        const user = auth.currentUser;
        if (user) {
            try {
                await setDoc(doc(db, "users", user.uid), { address: updatedAddress }, { merge: true });
                setUserAddress(updatedAddress); // Update local address state
                setIsEditing(false); // Exit editing mode
                navigate("/Profilepage"); // Navigate back to ProfilePage
            } catch (error) {
                console.error("Error updating address:", error);
            }
        }
    };

    if (loading) {
        return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;
    }

    if (isEditing) {
        return <AddressForm initialAddress={userAddress} onSubmit={handleAddressSubmit} />; // Pass initial address and submit handler
    }

    return (
        <div style={{ padding: "16px", marginTop: "80px", maxWidth: "600px", margin: "auto" }}>
            <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>Hello, {userName}!</h1>
            {userAddress ? (
                <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "10px", borderRadius: "4px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Your Address:</h2>
                        <div 
                            style={{ position: "relative", cursor: "pointer", display: "inline-block" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.querySelector('.edit-text').style.visibility = 'visible';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.querySelector('.edit-text').style.visibility = 'hidden';
                            }}
                            onClick={handleEditClick} // Handle click to show the form
                        >
                            <i 
                                className="fas fa-pencil-alt" 
                                style={{ fontSize: "20px", marginRight: "5px" }}
                            ></i>
                            <span className="edit-text" style={{ visibility: "hidden", position: "absolute", left: "20px", top: "5px", fontSize: "14px", color: "#007bff" }}>
                                Edit
                            </span>
                        </div>
                    </div>
                    <p style={{ margin: "5px 0" }}>Street: {userAddress.street}</p>
                    <p style={{ margin: "5px 0" }}>House Number: {userAddress.houseNumber}</p>
                    <p style={{ margin: "5px 0" }}>Area: {userAddress.area}</p>
                    <p style={{ margin: "5px 0" }}>Pin Code: {userAddress.pinCode}</p>
                    <p style={{ margin: "5px 0" }}>Phone Number: {userAddress.phoneNumber}</p>
                </div>
            ) : (
                <div style={{ marginTop: "20px" }}>
                    <h2 style={{ fontSize: "24px" }}>No Address Found</h2>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;

// import React, { useState } from "react";
// import Register from "./Register";
// // import Login from "./Login";
// // import ProfileDetails from "./ProfileDetails";
// import { p } from "framer-motion/client";

// const Profile = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   const handleLogin = (userData) => {
//     setUser(userData);
//     setIsLoggedIn(true);
//   };

//   return (
//     <div className="profile-container">
//       {!isLoggedIn ? (
//         <div>
//           <h1>Welcome to Tails Empire</h1>
//           <p>Please register or login to continue.</p>
//            <Register onRegister={handleLogin} /> 
//           {/* <Login onLogin={handleLogin} />  */}
//         </div>
//       ) : (
//         <p>logged in</p>
//         // <ProfileDetails user={user} />
//       )}
//     </div>
//   );
// };

// export default Profile;






// import React from "react";

// const ProfilePage = ({ user, orders }) => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6">My Profile</h2>
//         <div className="flex flex-col sm:flex-row gap-6">
    
//           <div className="sm:w-1/3 bg-blue-50 p-4 rounded-lg">
//             <h3 className="text-xl font-medium text-gray-700 mb-4">Profile Information</h3>
//             <p className="text-gray-600">
//               <strong>Name:</strong> {user.name}
//             </p>
//             <p className="text-gray-600">
//               <strong>Email:</strong> {user.email}
//             </p>
//             <p className="text-gray-600">
//               <strong>Member Since:</strong> {user.memberSince}
//             </p>
//             <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
//               Edit Profile
//             </button>
//           </div>

//           {/* Orders Section */}
//           <div className="sm:w-2/3 bg-gray-50 p-4 rounded-lg">
//             <h3 className="text-xl font-medium text-gray-700 mb-4">My Orders</h3>
//             {orders.length > 0 ? (
//               <div className="space-y-4">
//                 {orders.map((order) => (
//                   <div
//                     key={order.id}
//                     className="p-4 bg-white rounded-md shadow-sm border border-gray-200"
//                   >
//                     <p className="text-gray-700">
//                       <strong>Order ID:</strong> {order.id}
//                     </p>
//                     <p className="text-gray-700">
//                       <strong>Date:</strong> {order.date}
//                     </p>
//                     <p className="text-gray-700">
//                       <strong>Status:</strong>{" "}
//                       <span className={`font-semibold ${order.status === "Delivered" ? "text-green-500" : "text-yellow-500"}`}>
//                         {order.status}
//                       </span>
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-gray-600">You have no orders yet.</p>
//             )}
//           </div>
//         </div>

//         <button className="mt-6 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;





import React, { useState } from "react";
import Register from "./Register";
// import Login from "./Login";
// import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center pt-[150px]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {!isLoggedIn ? (
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Tails Empire</h1>
            <p className="text-gray-600 mb-6">Please register or login to continue.</p>
            <Register onRegister={handleLogin} />
            {/* <Login onLogin={handleLogin} /> */}
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Hello, {user.name}!</h1>
            <p className="text-gray-600 mb-6">You are now logged in.</p>
            {/* <ProfileDetails user={user} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

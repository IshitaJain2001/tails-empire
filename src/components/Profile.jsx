
// import React, { useState } from "react";
// import Register from "./Register";
// import Login from "./Login";
// import { Link, Route, Routes } from "react-router-dom";
// // import Login from "./Login";
// // import ProfileDetails from "./ProfileDetails";

// const Profile = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [user, setUser] = useState(null);

//   const handleLogin = (userData) => {
//     setUser(userData);
//     setIsLoggedIn(true);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center pt-[150px]">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//    <Link to="/Register">  <button> Register  </button> </Link>    / <Link to='/Login'> <button>Login</button></Link>  
//        <Routes>
//         <Route path="/Register" element={<Register/>}>     </Route>
// <Route path="/Login" element={<Login/>} />
    
//        </Routes>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { Link, Route, Routes } from "react-router-dom";

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
        <div className="flex justify-center mb-6">
          <Link to="/register">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mx-2 hover:bg-blue-700 transition-colors">
              Register
            </button>
          </Link>
          <span className="text-gray-500 mx-2">/</span>
          <Link to="/login">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mx-2 hover:bg-blue-700 transition-colors">
              Login
            </button>
          </Link>
        </div>
     
      </div>


    </div>
  );
};

export default Profile;

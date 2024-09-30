
import React, { useState } from "react";

import { Link } from "react-router-dom";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center  pt-[150px] ">
      <div className="bg-white  rounded-lg shadow-md w-full max-w-md ">
        <div className="flex justify-center  mb-6 h-[100px] items-center">
          <Link to="/register">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mx-2 hover:bg-blue-700 transition-colors">
              Register
            </button>
          </Link>
      
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

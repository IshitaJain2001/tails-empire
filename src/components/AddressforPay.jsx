


import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const AddressForBill = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const storedName = localStorage.getItem("name"); // Retrieve name from localStorage
  const name = storedName || "Guest"; // Fallback to "Guest" if no name found
 

 

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    navigate("/payment");
  };

  return (
    <div
      style={{
        padding: "16px",
        marginTop: "90px",
        marginLeft: "300px",
      }}
    >
      <h1 className="text-[30px] mb-[30px]">Hello, {name}</h1>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }} >Shipping Address</h1>
      <div style={{ margin: "16px 0" }}>
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
      </div>
      <Link to="/payment">
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleNext}
        >
          Proceed To Pay
        </button>
      </Link>
    </div>
  );
};

export default React.memo(AddressForBill);
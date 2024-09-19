
// src/components/AddressForm.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    navigate("/payment");
  };

  return (
    <div className="p-4 mt-[120px] ml-[300px]">
      <h1 className="text-2xl font-bold">Shipping Address</h1>
      <div className="my-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2 w-[400px]"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="border p-2 w-[400px] mt-2"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="border p-2 w-[400px] mt-2"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          className="border p-2 w-[400px] mt-2"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          className="border p-2 w-[400px] mt-2"
          onChange={handleChange}
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleNext}>
        Proceed To Pay
      </button>
    </div>
  );
};

export default AddressForm;

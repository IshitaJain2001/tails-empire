




import React, { useState } from "react";

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    age: "",
    phone: "",
    otp: "",
  });

  const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordFocus = () => {
    setShowPasswordTooltip(true);
  };

  const handlePasswordBlur = () => {
    setShowPasswordTooltip(false);
  };

  // Check if age is above 18
  const isAgeValid = formData.age >= 18;

  // Simulate sending OTP
  const sendOtp = () => {
    if (formData.phone.length === 10) {
      setShowOtpField(true);
      setOtpSent(true);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  // Simulate OTP verification
  const verifyOtp = () => {
    if (formData.otp === "123456") {
      setOtpVerified(true);
      alert("OTP verified successfully.");
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAgeValid) {
      alert("You must be at least 18 years old to register.");
      return;
    }

    if (!otpVerified) {
      alert("Please verify your phone number with OTP.");
      return;
    }

    // Proceed with form submission
    onRegister(formData);
  };

  return (
    <div className="flex justify-center items-center h-full bg-gray-100  py-[150px] ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md ">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="At least 6 characters"
              value={formData.password}
              onChange={handleChange}
              required
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {showPasswordTooltip && (
              <div className="text-xs text-gray-500 mt-1">Password should be at least 6 characters long.</div>
            )}
          </div>

          {/* Detailed Address Fields */}
          <div className="flex flex-col">
            <label htmlFor="streetAddress" className="text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              placeholder="123 Main St"
              value={formData.streetAddress}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="state" className="text-sm font-medium text-gray-700 mb-1">
              State/Province
            </label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="State/Province"
              value={formData.state}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="zipCode" className="text-sm font-medium text-gray-700 mb-1">
              ZIP/Postal Code
            </label>
            <input
              type="text"
              name="zipCode"
              id="zipCode"
              placeholder="ZIP/Postal Code"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="country" className="text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="age" className="text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="18"
              value={formData.age}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {!isAgeValid && (
              <div className="text-xs text-red-500 mt-1">You must be at least 18 years old to register.</div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter 10-digit phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={sendOtp}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
           Request OTP
            </button>
            {otpSent && (
              <div className="flex flex-col mt-4">
                <label htmlFor="otp" className="text-sm font-medium text-gray-700 mb-1">
                  Enter OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  placeholder="123456"
                  value={formData.otp}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >             Verify OTP
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;




import React, { useState } from "react";
import { auth } from "./firebase"; // Ensure this path is correct
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

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

  const [showOtpField, setShowOtpField] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 


  const sendOtp = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
        console.log("solved")
        }
      });
    }
  
    // Ensure the phone number is formatted correctly
    const phoneNumber = `+91${formData.phone}`.replace(/\s+/g, '').replace(/[^0-9]/g, ''); // Clean up the phone number
    const appVerifier = window.recaptchaVerifier;
  
    auth
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
        setOtpSent(true);
        setShowOtpField(true);
      })
      .catch((error) => {
        console.error("SMS not sent", error);
        alert("SMS could not be sent. Try again.");
      });
  };
  

  // Verify OTP using Firebase
  const verifyOtp = () => {
    confirmationResult
      .confirm(formData.otp)
      .then(() => {
        setOtpVerified(true);
        alert("OTP verified successfully.");
      })
      .catch((error) => {
        console.error("OTP verification failed", error);
        alert("Incorrect OTP. Please try again.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!otpVerified) {
      alert("Please verify your phone number with OTP.");
      return;
    }

    // Proceed with form submission
    onRegister(formData);
  };
console.log()
  return (
    <div className="flex justify-center items-center h-full bg-gray-100 py-[150px]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Fields */}
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
            <div id="recaptcha-container"></div> {/* Recaptcha Container */}
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
                >
                  Verify OTP
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

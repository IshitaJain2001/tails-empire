
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const PaymentForm = () => {
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const navigate = useNavigate();

//   const handlePayment = () => {
//     if (paymentMethod) {
//       navigate("/summary");
//     } else {
//       alert("Please select a payment method");
//     }
//   };

//   return (
//     <div className="p-4 mt-[120px] ml-[570px]">
//       <h1 className="text-2xl font-bold">Select Payment Method</h1>
//       <div className="my-4">
//         <label className="flex items-center">
//           <input
//             type="radio"
//             name="payment"
//             value="COD"
//             onChange={(e) => setPaymentMethod(e.target.value)}
//           />
//           <span className="ml-2">Cash on Delivery (COD)</span>
//         </label>
//         <label className="flex items-center mt-2">
//           <input
//             type="radio"
//             name="payment"
//             value="Online"
//             onChange={(e) => setPaymentMethod(e.target.value)}
//           />
//           <span className="ml-2">Online Payment</span>
//         </label>
//       </div>
//    <Link to="/Order Summary">
//    <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handlePayment}>
//         Next: Summary
//       </button>
//    </Link>  
//     </div>
//   );
// };

// export default PaymentForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
  };

  const handleNext = () => {
    if (paymentMethod) {
      navigate('/summary'); // Redirect to Summary page
    } else {
      alert('Please select a payment method before proceeding.');
    }
  };

  return (
    <div style={{ padding: '16px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Select Payment Method</h1>
      <div style={{ marginBottom: '16px' }}>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="COD"
            checked={paymentMethod === 'COD'}
            onChange={() => handlePaymentSelection('COD')}
          />
          Cash on Delivery (COD)
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Online"
            checked={paymentMethod === 'Online'}
            onChange={() => handlePaymentSelection('Online')}
          />
          Online Payment
        </label>
      </div>
      <button
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={handleNext}
      >
        Next: Summary
      </button>
    </div>
  );
};

export default PaymentMethod;

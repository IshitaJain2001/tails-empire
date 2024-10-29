// // import React from 'react';

// // const OnlinePayment = () => {
// //   return (
// //     <div style={{ padding: '16px', maxWidth: '400px', margin: 'auto' }}>
// //       <h1>Online Payment</h1>
// //       <p>Please enter your card details to proceed with the payment.</p>
// //       {/* Add form fields for online payment here */}
// //       <form>
// //         <div style={{ marginBottom: '16px' }}>
// //           <label>
// //             Card Number:
// //             <input type="text" required style={{ marginLeft: '8px' }} />
// //           </label>
// //         </div>
// //         <div style={{ marginBottom: '16px' }}>
// //           <label>
// //             Expiry Date:
// //             <input type="text" required style={{ marginLeft: '8px' }} />
// //           </label>
// //         </div>
// //         <div style={{ marginBottom: '16px' }}>
// //           <label>
// //             CVV:
// //             <input type="text" required style={{ marginLeft: '8px' }} />
// //           </label>
// //         </div>
// //         <button
// //           type="submit"
// //           style={{
// //             backgroundColor: '#007bff',
// //             color: 'white',
// //             padding: '10px',
// //             border: 'none',
// //             borderRadius: '4px',
// //             cursor: 'pointer',
// //           }}
// //         >
// //           Pay Now
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default OnlinePayment;



// import React, { useState } from 'react';

// const OnlinePayment = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [error, setError] = useState('');

//   // Card Number Validation
//   const validateCardNumber = (number) => {
//     const regex = /^\d{16}$/; // 16 digits
//     return regex.test(number);
//   };

//   // Expiry Date Validation
//   const validateExpiryDate = (expiry) => {
//     const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
//     if (!regex.test(expiry)) return false;

//     const [month, year] = expiry.split('/').map(Number);
//     const currentDate = new Date();
//     const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
//     const currentYear = currentDate.getFullYear() % 100; // Last two digits of year

//     return year > currentYear || (year === currentYear && month >= currentMonth);
//   };

//   // CVV Validation
//   const validateCVV = (cvv) => {
//     const regex = /^\d{3,4}$/; // 3 or 4 digits
//     return regex.test(cvv);
//   };

//   // Handle Form Submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Reset error
//     setError('');

//     // Validate fields
//     if (!validateCardNumber(cardNumber)) {
//       setError('Invalid card number. It should be 16 digits long.');
//       return;
//     }
//     if (!validateExpiryDate(expiryDate)) {
//       setError('Invalid expiry date. Format should be MM/YY and it should be a future date.');
//       return;
//     }
//     if (!validateCVV(cvv)) {
//       setError('Invalid CVV. It should be 3 or 4 digits long.');
//       return;
//     }

//     // If all validations pass
//     alert('Payment processed successfully!');
//     // Here you can add your payment processing logic
//   };

//   return (
//     <div style={{ padding: '16px', maxWidth: '400px', margin: 'auto' }}>
//       <h1>Online Payment</h1>
//       <p>Please enter your card details to proceed with the payment.</p>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '16px' }}>
//           <label>
//             Card Number:
//             <input
//               type="text"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               required
//               style={{ marginLeft: '8px' }}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: '16px' }}>
//           <label>
//             Expiry Date (MM/YY):
//             <input
//               type="text"
//               value={expiryDate}
//                placeholder='11/25'
//               onChange={(e) => setExpiryDate(e.target.value)}
//               required
//               style={{ marginLeft: '8px' }}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: '16px' }}>
//           <label>
//             CVV:
//             <input
//               type="text"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//               required
//               style={{ marginLeft: '8px' }}
             
//             />
//           </label>
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button
//           type="submit"
//           style={{
//             backgroundColor: '#007bff',
//             color: 'white',
//             padding: '10px',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//           }}
//         >
//           Pay Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default OnlinePayment;


import React, { useState } from 'react';

const OnlinePayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  // Luhn Algorithm for Card Number Validation
  const isValidCardNumber = (number) => {
    let sum = 0;
    const nDigits = number.length;
    const parity = nDigits % 2;

    for (let i = 0; i < nDigits; i++) {
      let digit = parseInt(number.charAt(i), 10);
      if (i % 2 === parity) {
        digit = digit * 2;
        if (digit > 9) {
          digit = digit - 9;
        }
      }
      sum += digit;
    }

    return sum % 10 === 0;
  };

  // Card Number Validation
  const validateCardNumber = (number) => {
    const regex = /^\d{16}$/; // 16 digits
    return regex.test(number) && isValidCardNumber(number); // Check format and validity
  };

  // Expiry Date Validation
  const validateExpiryDate = (expiry) => {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
    if (!regex.test(expiry)) return false;

    const [month, year] = expiry.split('/').map(Number);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const currentYear = currentDate.getFullYear() % 100; // Last two digits of year

    return year > currentYear || (year === currentYear && month >= currentMonth);
  };

  // CVV Validation
  const validateCVV = (cvv) => {
    const regex = /^\d{3,4}$/; // 3 or 4 digits
    return regex.test(cvv);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset error
    setError('');

    // Validate fields
    if (!validateCardNumber(cardNumber)) {
      setError('Invalid card number. It should be 16 digits long and valid.');
      return;
    }
    if (!validateExpiryDate(expiryDate)) {
      setError('Invalid expiry date. Format should be MM/YY and it should be a future date.');
      return;
    }
    if (!validateCVV(cvv)) {
      setError('Invalid CVV. It should be 3 or 4 digits long.');
      return;
    }

    // If all validations pass
    alert('Payment processed successfully!');
    // Here you can add your payment processing logic
  };

  return (
    <div style={{ padding: '16px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Online Payment</h1>
      <p>Please enter your card details to proceed with the payment.</p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <label>
            Card Number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              style={{ marginLeft: '8px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label>
            Expiry Date (MM/YY):
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
              placeholder="MM/YY" // Placeholder added here
              style={{ marginLeft: '8px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
              style={{ marginLeft: '8px' }}
            />
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message */}
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default OnlinePayment;


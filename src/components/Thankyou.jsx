import React from 'react';

export default function Thankyou() {
  const deliveryDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString();

  return (
    <div className="flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg shadow-lg bg-gray-100 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-800">We appreciate your visit and your purchase.</p>
      <p className="text-lg font-semibold text-orange-600 mt-2">
        Probable delivery date: <strong>{deliveryDate}</strong>
      </p>
    </div>
  );
}

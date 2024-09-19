// CartPage.jsx
import React from 'react';

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 2,
      // image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen py-10 mt-[150px]">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border-b border-gray-200"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="font-bold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex justify-between items-center py-4 border-t border-gray-200">
                <span className="text-lg font-semibold">Total Price:</span>
                <span className="text-lg font-bold text-gray-800">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="mt-4 w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;

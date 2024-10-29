


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Action to load cart items from localStorage into Redux
const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : { productadded: [], productprices: [] };
};

const CartPage = () => {
  const dispatch = useDispatch();
  const productname = useSelector((state) => state.productadded);
  const productprices = useSelector((state) => state.productprices);
  const navigate = useNavigate();

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const persistedCart = loadCartFromLocalStorage();
    if (persistedCart) {
      dispatch({ type: 'LOAD_CART', payload: persistedCart });
    }
  }, [dispatch]);

  // Calculate product counts and total price
  const productCount = productname.reduce((acc, product, index) => {
    if (acc[product]) {
      acc[product].count += 1;
      acc[product].price += Number(productprices[index]);
    } else {
      acc[product] = { count: 1, price: Number(productprices[index]) };
    }
    return acc;
  }, {});

  const totalPrice = Object.values(productCount).reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-gray-100 p-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

          {Object.keys(productCount).length > 0 ? (
            <ul className="space-y-4">
              {Object.keys(productCount).map((product, index) => (
                <li key={index} className="flex justify-between items-center border-b pb-4">
                  <span className="text-lg font-semibold">
                    {product} {productCount[product].count > 1 && `x${productCount[product].count}`}
                  </span>
                  <span className="text-lg font-semibold">₹{productCount[product].price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}

          {Object.keys(productCount).length > 0 && (
            <>
              <div className="border-t mt-6 pt-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Total Price</h2>
                <span className="text-2xl font-bold">₹{totalPrice}</span>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => navigate('/Addressforpayment')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Confirm Address
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartPage);


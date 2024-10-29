

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';

// const loadCartFromLocalStorage = () => {
//   const cartData = localStorage.getItem('cart');
//   return cartData ? JSON.parse(cartData) : { productadded: [], productprices: [] };
// };

// const DELIVERY_CHARGE = 50;
// const TAX_RATE = 0.18;

// const OrderSummary = () => {
//   const dispatch = useDispatch();
//   const productname = useSelector((state) => state.productadded);
//   const productprices = useSelector((state) => state.productprices);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const persistedCart = loadCartFromLocalStorage();
//     if (persistedCart) {
//       dispatch({ type: 'LOAD_CART', payload: persistedCart });
//     }
//   }, [dispatch]);

//   const productCount = productname.reduce((acc, product, index) => {
//     if (acc[product]) {
//       acc[product].count += 1;
//       acc[product].price += Number(productprices[index]);
//     } else {
//       acc[product] = { count: 1, price: Number(productprices[index]) };
//     }
//     return acc;
//   }, {});

//   const subtotal = Object.values(productCount).reduce((acc, item) => acc + item.price, 0);
//   const taxAmount = subtotal * TAX_RATE;
//   const totalAmount = subtotal + taxAmount + DELIVERY_CHARGE;

//   const handlePlaceOrder = () => {
//     toast.success("Order Placed Successfully" );
//     // navigate('/OrderConfirmation');
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       <Toaster position="top-right" reverseOrder={false} />
//       <div className="max-w-4xl mx-auto bg-gray-100 p-6">
//         <div className="bg-white p-6 shadow-lg rounded-lg">
//           <h1 className="text-3xl font-bold mb-6 text-center">Order Summary</h1>

//           {Object.keys(productCount).length > 0 ? (
//             <ul className="space-y-4">
//               {Object.keys(productCount).map((product, index) => (
//                 <li key={index} className="flex justify-between items-center border-b pb-4">
//                   <span className="text-lg font-semibold">
//                     {product} {productCount[product].count > 1 && `x${productCount[product].count}`}
//                   </span>
//                   <span className="text-lg font-semibold">₹{productCount[product].price}</span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-center text-gray-500">Your cart is empty.</p>
//           )}

//           {Object.keys(productCount).length > 0 && (
//             <>
//               <div className="border-t mt-6 pt-4">
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-xl font-semibold">Subtotal</h2>
//                   <span className="text-xl font-semibold">₹{subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-xl font-semibold">Delivery Charge</h2>
//                   <span className="text-xl font-semibold">₹{DELIVERY_CHARGE.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-xl font-semibold">Tax (18%)</h2>
//                   <span className="text-xl font-semibold">₹{taxAmount.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between items-center border-t mt-4 pt-4">
//                   <h2 className="text-2xl font-bold">Total Amount</h2>
//                   <span className="text-2xl font-bold">₹{totalAmount.toFixed(2)}</span>
//                 </div>
//               </div>

//               <div className="mt-6 flex justify-center">
//                 <button
//                   onClick={handlePlaceOrder}
//                   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
//                 >
//                   Place Order
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(OrderSummary);

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : { productadded: [], productprices: [] };
};

const DELIVERY_CHARGE = 50;
const TAX_RATE = 0.18;

const OrderSummary = () => {
  const dispatch = useDispatch();
  const productname = useSelector((state) => state.productadded);
  const productprices = useSelector((state) => state.productprices);
  const navigate = useNavigate();

  useEffect(() => {
    const persistedCart = loadCartFromLocalStorage();
    if (persistedCart) {
      dispatch({ type: 'LOAD_CART', payload: persistedCart });
    }
  }, [dispatch]);

  const productCount = productname.reduce((acc, product, index) => {
    if (acc[product]) {
      acc[product].count += 1;
      acc[product].price += Number(productprices[index]);
    } else {
      acc[product] = { count: 1, price: Number(productprices[index]) };
    }
    return acc;
  }, {});

  const subtotal = Object.values(productCount).reduce((acc, item) => acc + item.price, 0);
  const taxAmount = subtotal * TAX_RATE;
  const totalAmount = subtotal + taxAmount + DELIVERY_CHARGE;

  const handlePlaceOrder = () => {
    toast.success("Order Placed Successfully!");
    setTimeout(() => {
      navigate('/ThankYou'); // Adjust this to your actual "Thank You" route
    }, 2000); // 2000ms = 2 seconds delay
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-4xl mx-auto bg-gray-100 p-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Order Summary</h1>

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
              <div className="border-t mt-6 pt-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Subtotal</h2>
                  <span className="text-xl font-semibold">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Delivery Charge</h2>
                  <span className="text-xl font-semibold">₹{DELIVERY_CHARGE.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Tax (18%)</h2>
                  <span className="text-xl font-semibold">₹{taxAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center border-t mt-4 pt-4">
                  <h2 className="text-2xl font-bold">Total Amount</h2>
                  <span className="text-2xl font-bold">₹{totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={handlePlaceOrder}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Place Order
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(OrderSummary);



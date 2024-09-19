// src/components/OrderSummary.js
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert("Order Placed Successfully!");
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Order Summary</h1>
      <p className="my-4">Review your order details below:</p>
      <div className="flex justify-between">
        <span>Total Amount:</span>
        <span>$79.97</span>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;

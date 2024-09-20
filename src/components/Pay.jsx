
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handlePayment = () => {
    if (paymentMethod) {
      navigate("/summary");
    } else {
      alert("Please select a payment method");
    }
  };

  return (
    <div className="p-4 mt-[120px] ml-[570px]">
      <h1 className="text-2xl font-bold">Select Payment Method</h1>
      <div className="my-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="payment"
            value="COD"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span className="ml-2">Cash on Delivery (COD)</span>
        </label>
        <label className="flex items-center mt-2">
          <input
            type="radio"
            name="payment"
            value="Online"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span className="ml-2">Online Payment</span>
        </label>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handlePayment}>
        Next: Summary
      </button>
    </div>
  );
};

export default PaymentForm;

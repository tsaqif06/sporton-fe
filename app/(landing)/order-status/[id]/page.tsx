"use client";

import { useState } from "react";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <main className="bg-gray-100 min-h-screen grid grid-rows-[auto_1fr]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-2">Order Status</h1>
      </div>

      <div className="mb-20">
        {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />}
      </div>
    </main>
  );
};

export default OrderStatus;

"use client";

import { useState } from "react";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <main className="bg-gray-100 min-h-screen flex flex-col px-4">
      <div className="max-w-5xl mx-auto w-full py-12 lg:py-20 flex-grow flex flex-col">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 lg:mb-20">
          Order Status
        </h1>

        <div className="flex-grow flex items-start justify-center">
          <div className="w-full">
            {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderStatus;

"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderSubmitted = () => {
  const reloadOrderStatus = () => {
    window.location.reload();
  };

  return (
    <div className="bg-white w-full max-w-[640px] p-8 lg:p-16 flex flex-col justify-center items-center mx-auto mb-8 rounded-xl shadow-sm">
      <Image
        src="/images/icon-order-submitted.svg"
        width={117}
        height={117}
        alt="order submitted"
        className="mb-4 w-20 lg:w-[117px] h-auto"
      />
      <h2 className="text-xl lg:text-2xl font-semibold mb-2">Order Submitted!!</h2>
      <p className="text-center text-sm lg:text-base mb-8 text-gray-600">
        Your Order is recorded in our system, we are still confirming the
        payment status, please wait and your order status will be updated in
        less than 12 hours.
      </p>
      <Button variant="dark" className="w-full flex items-center justify-center gap-2" onClick={reloadOrderStatus}>
        <FiRefreshCw className="animate-spin-hover" />
        Refresh Order Status
      </Button>
    </div>
  );
};

export default OrderSubmitted;

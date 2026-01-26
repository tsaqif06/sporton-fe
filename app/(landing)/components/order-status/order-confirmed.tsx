"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderConfirmed = () => {
  return (
    <div className="bg-white w-full max-w-[640px] p-8 lg:p-16 flex flex-col justify-center items-center mx-auto rounded-xl shadow-sm">
      <Image
        src="/images/icon-order-confirmed.svg"
        width={117}
        height={117}
        alt="order confirmed"
        className="mb-4 w-20 lg:w-[117px] h-auto"
      />
      <h2 className="text-xl lg:text-2xl font-semibold mb-2">Order Confirmed!!</h2>
      <p className="text-center text-sm lg:text-base mb-8 text-gray-600">
        We have received your payment, and your order is currently processed by
        our staff, just wait until your favorite sportswear arrive in your home.
        We will contact you in Whatsapp for further shipping updates.
      </p>
    </div>
  );
};

export default OrderConfirmed;

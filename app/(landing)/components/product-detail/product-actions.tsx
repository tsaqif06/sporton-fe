"use client";

import {
  FiChevronDown,
  FiChevronUp,
  FiArrowRight,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductActions = () => {
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 w-full">
      <div className="flex gap-4 lg:gap-5">
        <div className="border border-gray-500 flex w-fit h-[50px] lg:h-auto">
          <div className="w-12 lg:w-14 text-xl font-medium border-r border-gray-500 flex justify-center items-center">
            <span>{qty}</span>
          </div>
          <div className="flex flex-col w-10">
            <button
              className="border-b border-gray-500 cursor-pointer flex-1 flex items-center justify-center hover:bg-gray-100"
              onClick={() => setQty(qty + 1)}
            >
              <FiChevronUp />
            </button>
            <button
              className="cursor-pointer flex-1 flex items-center justify-center hover:bg-gray-100"
              onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
            >
              <FiChevronDown />
            </button>
          </div>
        </div>

        <Button className="flex-1 lg:px-14 flex items-center justify-center gap-2">
          <FiShoppingBag size={20} />
          <span className="whitespace-nowrap">Add To Cart</span>
        </Button>
      </div>

      <Button
        variant="dark"
        className="w-full lg:px-14 flex items-center justify-center gap-2"
        onClick={() => push("/checkout")}
      >
        <span className="whitespace-nowrap">Checkout Now</span>
        <FiArrowRight size={20} />
      </Button>
    </div>
  );
};

export default ProductActions;

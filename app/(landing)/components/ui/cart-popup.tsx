"use client";

import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const cartList = [
  {
    name: "SportsOn Product 1",
    category: "Running",
    price: 450000,
    qty: 2,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Running",
    price: 250000,
    qty: 3,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    qty: 5,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 4",
    category: "Running",
    price: 30000,
    qty: 2,
    imgUrl: "product-3.png",
  },
];

interface CartPopupProps {
  onClose?: () => void;
}

const CartPopup = ({ onClose }: CartPopupProps) => {
  const { push } = useRouter();

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const handleCheckout = () => {
  if (onClose) onClose();
    push("/checkout");
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-40 lg:hidden" 
        onClick={onClose} 
      />
      <div 
        className="
          fixed lg:absolute 
          top-20 lg:top-12 
          left-4 right-4 lg:left-auto lg:right-0 
          bg-white shadow-2xl lg:shadow-xl shadow-black/20 
          border border-gray-200 
          w-auto lg:w-90 
          z-50 
          rounded-lg lg:rounded-none
        "
      >
        <div className="p-4 border-b border-gray-200 font-bold text-center">
          Shopping Cart
        </div>

        <div className="max-h-[50vh] lg:max-h-[400px] overflow-y-auto">
          {cartList.map((item, index) => (
            <div className="border-b border-gray-200 p-4 flex gap-3 hover:bg-gray-50 transition-colors" key={index}>
              <div className="bg-primary-light aspect-square w-16 h-16 flex-shrink-0 flex justify-center items-center rounded">
                <Image
                  src={`/images/products/${item.imgUrl}`}
                  width={63}
                  height={63}
                  alt={item.name}
                  className="aspect-square object-contain"
                />
              </div>

              <div className="self-center flex-grow overflow-hidden">
                <div className="text-sm font-medium truncate">{item.name}</div>
                <div className="flex gap-3 font-medium text-xs mt-1">
                  <div className="text-gray-500">{item.qty}x</div>
                  <div className="text-primary">{priceFormatter(item.price)}</div>
                </div>
              </div>

              <Button
                size="small"
                variant="ghost"
                className="w-8 h-8 p-0! self-center ml-auto flex-shrink-0 text-gray-400 hover:text-red-500"
              >
                <FiTrash2 size={16} />
              </Button>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 p-4 bg-gray-50 lg:bg-white rounded-b-lg lg:rounded-none">
          <div className="flex justify-between items-center font-semibold">
            <div className="text-sm text-gray-600">Total Amount</div>
            <div className="text-primary text-base">
              {priceFormatter(totalPrice)}
            </div>
          </div>
          <Button
            variant="dark"
            className="w-full mt-4 py-3 lg:py-2 flex items-center justify-center gap-2"
            onClick={handleCheckout}
          >
            Checkout Now <FiArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartPopup;
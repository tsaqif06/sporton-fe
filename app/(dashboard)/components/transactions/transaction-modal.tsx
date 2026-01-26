import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";

type TTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TransactionModal = ({ isOpen, onClose }: TTransactionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
      <div className="max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-auto">
            <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
            <div className="bg-gray-100 rounded-lg overflow-hidden flex justify-center">
              <Image
                src="/images/payment-proof-dummy.png"
                alt="payment proof"
                width={300}
                height={500}
                className="w-full md:w-[250px] h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-sm mb-2">Order Details</h4>
            <div className="bg-gray-100 rounded-md flex flex-col gap-2.5 p-4 text-sm mb-5">
              <div className="flex justify-between font-medium">
                <div className="opacity-50">Date</div>
                <div className="text-right">23/02/2026 19:32</div>
              </div>
              <div className="flex justify-between font-medium">
                <div className="opacity-50">Customer</div>
                <div className="text-right">John Doe</div>
              </div>
              <div className="flex justify-between font-medium">
                <div className="opacity-50">Contact</div>
                <div className="text-right">+123123123</div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-2 md:gap-10 font-medium border-t border-gray-200 pt-2 mt-1">
                <div className="opacity-50 whitespace-nowrap">
                  Shipping Address
                </div>
                <div className="text-left sm:text-right">
                  Merdeka Street, Jakarta, Indonesia, 332122
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
            <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3">
              <div className="bg-gray-100 rounded aspect-square w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/products/product-1.png"
                  width={40}
                  height={40}
                  alt="product image"
                  className="object-contain"
                />
              </div>
              <div className="font-medium text-xs md:text-sm">
                SportsOn Hyperfast Shoes
              </div>
              <div className="font-medium ml-auto text-sm whitespace-nowrap">
                3 units
              </div>
            </div>

            <div className="flex justify-between text-sm mt-6">
              <h4 className="font-semibold">Total</h4>
              <div className="text-primary font-bold text-base">
                {priceFormatter(450000)}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 md:gap-5 mt-8 md:mt-12">
              <Button
                className="text-primary! bg-primary-light! rounded-md w-full sm:w-auto"
                size="small"
              >
                <FiX size={20} />
                Reject
              </Button>
              <Button
                className="text-white! bg-[#50C252]! rounded-md w-full sm:w-auto"
                size="small"
              >
                <FiCheck size={20} />
                Approve
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionModal;

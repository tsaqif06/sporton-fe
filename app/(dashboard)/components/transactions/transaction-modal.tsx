import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import { useState } from "react";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiImage, FiX } from "react-icons/fi";
import { getImageUrl } from "@/app/lib/api";
import { Transaction } from "@/app/types";

type TTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction | null;
  onStatusChange: (id: string, status: "paid" | "rejected") => Promise<void>;
};

const TransactionModal = ({
  isOpen,
  onClose,
  transaction,
  onStatusChange,
}: TTransactionModalProps) => {
  const [isUpdating, setIsUpdating] = useState(false);

  if (!transaction) return;

  const handleStatusUpdate = async (status: "paid" | "rejected") => {
    setIsUpdating(true);
    try {
      await onStatusChange(transaction._id, status);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Transaction Details">
      <div className="max-h-[85vh] overflow-y-auto pr-2 custom-scrollbar p-1">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <h4 className="text-sm font-bold text-dark mb-3">Payment Proof</h4>
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-sm relative aspect-[3/5] flex items-center justify-center text-gray-500 border border-gray-200">
              {transaction.paymentProof ? (
                <Image
                  src={getImageUrl(transaction.paymentProof)}
                  alt="Payment Proof"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <FiImage size={24} />
                  <span className="text-xs">No Proof Uploaded</span>
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-col">
            <h4 className="text-sm font-bold text-dark mb-3">Order Details</h4>

            <div className="grid grid-cols-3 gap-y-4 text-sm mb-8">
              <div className="text-gray-400">Date</div>
              <div className="col-span-2 font-medium text-dark text-right">
                {new Date(transaction.createdAt).toLocaleString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>

              <div className="text-gray-400">Customer</div>
              <div className="col-span-2 font-medium text-dark text-right uppercase">
                {transaction.customerName}
              </div>

              <div className="text-gray-400">Contact</div>
              <div className="col-span-2 font-medium text-dark text-right">
                {transaction.customerContact}
              </div>

              <div className="text-gray-400">Address</div>
              <div className="col-span-2 font-medium text-dark text-right leading-relaxed">
                {transaction.customerAddress}
              </div>

              <div className="text-gray-400">Status</div>
              <div className="col-span-2 text-right">
                <span
                  className={`px-3 py-1.5 rounded-md text-xs md:text-sm font-bold uppercase tracking-wider
                  ${
                    transaction.status === "pending"
                      ? "bg-yellow-100 text-yellow-600 border-yellow-300"
                      : transaction.status === "paid"
                        ? "bg-green-100 text-green-600 border-green-300"
                        : "bg-red-100 text-red-600 border-red-300"
                  }`}
                >
                  {transaction.status}
                </span>
              </div>
            </div>

            <h4 className="text-sm font-bold text-dark mb-3">
              Items Purchased
            </h4>
            <div className="space-y-3 mb-8">
              {transaction.purchasedItems.map((item, index) => {
                const productData = item.productId;
                return (
                  <div
                    className="border border-gray-100 rounded-lg p-3 flex items-center gap-3 bg-white"
                    key={index}
                  >
                    <div className="bg-gray-50 rounded-lg aspect-square w-12 h-12 shrink-0 flex items-center justify-center overflow-hidden border border-gray-100">
                      {productData?.imageUrl ? (
                        <Image
                          src={getImageUrl(productData.imageUrl)}
                          width={48}
                          height={48}
                          alt="item"
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-[8px] text-gray-400 italic">
                          Deleted
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="font-bold text-dark text-xs md:text-sm leading-tight">
                        {productData?.name || "Product Deleted"}
                      </div>
                      <div className="text-[10px] text-gray-400">
                        ID: {productData?._id || "null"}
                      </div>
                    </div>
                    <div className="font-bold ml-auto text-sm text-gray-500">
                      x{item.qty}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between py-4 border-t border-dashed border-gray-200 mb-8">
              <span className="font-bold text-dark">Total Payment</span>
              <span className="font-extrabold text-primary text-xl">
                {priceFormatter(parseInt(transaction.totalPayment))}
              </span>
            </div>

            {transaction.status === "pending" && (
              <div className="flex flex-col-reverse sm:flex-row gap-4 mt-auto">
                <button
                  disabled={isUpdating}
                  onClick={() => handleStatusUpdate("rejected")}
                  className="cursor-pointer flex-1 bg-red-100 text-red-500 hover:bg-red-200 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  <FiX size={18} /> <span>Reject</span>
                </button>
                <button
                  disabled={isUpdating}
                  onClick={() => handleStatusUpdate("paid")}
                  className="cursor-pointer flex-1 bg-green-500 text-white hover:bg-green-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  <FiCheck size={18} /> <span>Approve</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionModal;

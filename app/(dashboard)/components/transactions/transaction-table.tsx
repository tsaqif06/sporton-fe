import { Transaction } from "@/app/types";
import priceFormatter from "@/app/utils/price-formatter";
import { useState } from "react";
import { FiEye } from "react-icons/fi";

type TTransactionTableProps = {
  transactions: Transaction[];
  onViewDetails: (transaction: Transaction) => void;
};

const TransactionTable = ({
  transactions,
  onViewDetails,
}: TTransactionTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-600 border-yellow-300";
      case "rejected":
        return "bg-red-100 text-red-600 border-red-300";
      case "paid":
        return "bg-green-100 text-green-600 border-green-300";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 font-semibold whitespace-nowrap">
                Date
              </th>
              <th className="px-6 py-4 font-semibold whitespace-nowrap">
                Customer
              </th>
              <th className="px-6 py-4 font-semibold whitespace-nowrap">
                Contact
              </th>
              <th className="px-6 py-4 font-semibold whitespace-nowrap">
                Total
              </th>
              <th className="px-6 py-4 font-semibold whitespace-nowrap">
                Status
              </th>
              <th className="px-6 py-4 font-semibold whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((data) => (
              <tr
                key={data._id}
                className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 font-medium whitespace-nowrap text-sm">
                  {new Date(data.createdAt).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                  {data.customerName}
                </td>
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                  {data.customerContact}
                </td>
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                  {priceFormatter(parseInt(data.totalPayment))}
                </td>
                <td className="px-6 py-4 font-medium">
                  <div
                    className={`px-4 py-1 rounded-full border text-center w-fit text-[10px] md:text-sm font-bold uppercase tracking-wider ${getStatusColor(
                      data.status,
                    )}`}
                  >
                    {data.status}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onViewDetails(data)}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition-all w-fit py-2 px-3 rounded-md text-gray-700 font-semibold text-sm whitespace-nowrap"
                  >
                    <FiEye size={18} />
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;

"use client";

import TransactionTable from "../../components/transactions/transaction-table";
import TransactionModal from "../../components/transactions/transaction-modal";
import { useCallback, useEffect, useState } from "react";
import { Transaction } from "@/app/types";
import {
  getAllTransactions,
  updateTransaction,
} from "@/app/services/transaction.service";
import { toast } from "react-toastify";

const TransactionManagement = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const fetchTransactions = useCallback(async () => {
    try {
      const data = await getAllTransactions();
      if (data) setTransactions(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleViewDetails = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleStatusChange = async (
    id: string,
    status: "paid" | "rejected",
  ) => {
    try {
      const formData = new FormData();
      formData.append("status", status);

      await updateTransaction(id, formData);

      toast.success("Transaction status updated");
      fetchTransactions();
    } catch (error) {
      console.error("Failed to update transaction status", error);
      toast.error("Failed to update transaction status");
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="font-bold text-2xl">Transaction Management</h1>
          <p className="opacity-50 text-sm md:text-base">
            Verify incoming payments and manage orders.
          </p>
        </div>
      </div>

      <TransactionTable
        transactions={transactions}
        onViewDetails={handleViewDetails}
      />
      <TransactionModal
        transaction={selectedTransaction}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default TransactionManagement;

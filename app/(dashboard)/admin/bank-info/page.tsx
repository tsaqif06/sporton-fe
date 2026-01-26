"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import BankInfoList from "../../components/bank-info/bank-info-list";
import BankInfoModal from "../../components/bank-info/bank-info-modal";

const BankInfoManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="font-bold text-2xl">Bank Info Management</h1>
          <p className="opacity-50 text-sm md:text-base">
            Manage destination accounts for customer transfers.
          </p>
        </div>

        <Button
          className="rounded-lg w-full md:w-auto flex justify-center items-center"
          onClick={() => setIsOpen(true)}
        >
          <FiPlus size={24} />
          Add Bank Account
        </Button>
      </div>

      <BankInfoList />
      <BankInfoModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default BankInfoManagement;

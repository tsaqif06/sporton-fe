"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { useCallback, useEffect, useState } from "react";
import BankInfoList from "../../components/bank-info/bank-info-list";
import BankInfoModal from "../../components/bank-info/bank-info-modal";
import { Bank } from "@/app/types";
import { deleteBank, getAllBanks } from "@/app/services/bank.service";
import { toast } from "react-toastify";
import DeleteModal from "../../components/ui/delete-modal";
import Pagination from "../../components/ui/pagination";

const BankInfoManagement = () => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [bankToDeleteId, setBankToDeleteId] = useState("");

  const fetchBanks = useCallback(async () => {
    try {
      const data = await getAllBanks();
      if (data) setBanks(data);
    } catch (error) {
      console.error("Failed to fetch banks", error);
    }
  }, []);

  const handleEdit = (bank: Bank) => {
    setSelectedBank(bank);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setBankToDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!bankToDeleteId) return;

    try {
      await deleteBank(bankToDeleteId);
      fetchBanks();
      toast.success("Bank deleted successfully");
      setIsDeleteModalOpen(false);
      setBankToDeleteId("");
    } catch (error) {
      console.error("Failed to delete bank", error);
      toast.error("Failed to delete bank");
    }
  };

  useEffect(() => {
    fetchBanks();
  }, [fetchBanks]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBank(null);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const currentBanks = banks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

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
          onClick={() => setIsModalOpen(true)}
        >
          <FiPlus size={24} />
          Add Bank Account
        </Button>
      </div>
      <BankInfoList banks={currentBanks} onEdit={handleEdit} onDelete={handleDelete} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(banks.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
        totalItems={banks.length}
        itemsPerPage={itemsPerPage}
      />
      <BankInfoModal
        bank={selectedBank}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSuccess={fetchBanks}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default BankInfoManagement;

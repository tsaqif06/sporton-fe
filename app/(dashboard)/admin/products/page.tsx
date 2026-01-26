"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../components/products/product-table";
import ProductModal from "../../components/products/product-modal";
import { useState } from "react";

const ProductManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="font-bold text-2xl">Product Management</h1>
          <p className="opacity-50">Manage your inventory, prices and stock.</p>
        </div>
        <Button
          className="rounded-lg w-full md:w-auto"
          onClick={() => setIsOpen(true)}
        >
          <FiPlus size={24} />
          Add Product
        </Button>
      </div>
      <ProductTable />
      <ProductModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ProductManagement;

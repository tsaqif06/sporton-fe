"use client";

import { logout } from "@/app/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiBox,
  FiCreditCard,
  FiLayers,
  FiLogOut,
  FiMenu,
  FiShoppingCart,
  FiX,
} from "react-icons/fi";

const Sidebar = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      name: "Products",
      icon: FiBox,
      link: "/admin/products",
    },
    {
      name: "Categories",
      icon: FiLayers,
      link: "/admin/categories",
    },
    {
      name: "Transactions",
      icon: FiShoppingCart,
      link: "/admin/transactions",
    },
    {
      name: "Bank Information",
      icon: FiCreditCard,
      link: "/admin/bank-info",
    },
  ];

  const handleLogout = () => {
    logout();
    push("/admin/login");
  }

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`md:hidden fixed top-4 left-4 z-60 p-2.5 bg-primary text-white rounded-xl shadow-lg active:scale-95 transition-all ${
          isOpen ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
        aria-label="Open Menu"
      >
        <FiMenu size={22} />
      </button>

      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-45 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      />

      <aside
        className={`w-80 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-61 
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"} 
        md:translate-x-0 md:shadow-none`}
      >
        <div className="py-8 px-8 border-b border-gray-100 flex items-center justify-between">
          <Image
            src="/images/logo-admin.svg"
            alt="logo admin"
            width={180}
            height={30}
            className="w-auto h-auto"
          />

          <button
            onClick={toggleSidebar}
            className="md:hidden p-1.5 mt-1.5 bg-primary text-white rounded-lg shadow-lg active:scale-95 transition-all ml-4"
            aria-label="Close menu"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-1.5 mt-8 p-4">
          {menuItems.map((item, index) => {
            const isActive = item.link === pathname;
            return (
              <Link
                href={item.link}
                key={index}
                onClick={() => setIsOpen(false)}
                className={`flex gap-3 items-center py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "text-gray-500 hover:bg-gray-50 hover:text-primary"
                }`}
              >
                <item.icon size={20} />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </div>

        <button
          className="flex cursor-pointer gap-3 font-medium py-3 px-4.5 mx-5 hover:bg-gray-100 duration-300 rounded-lg mt-auto mb-10"
          onClick={handleLogout}
        >
          <FiLogOut size={24} />
          Log Out
        </button>
      </aside>
    </>
  );
};

export default Sidebar;

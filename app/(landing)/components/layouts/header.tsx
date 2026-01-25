"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi"; // Tambah FiMenu & FiX
import CartPopup from "../ui/cart-popup";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { items } = useCartStore();

  const totalQty = items.reduce((acc, item) => acc + item.qty, 0);

  const pathname = usePathname();
  const activeLineClass = `
    relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1
  `;

  return (
    <header className="sticky top-0 w-full bg-white z-50">
      <div className="flex justify-between gap-5 md:gap-10 container mx-auto py-7 items-center px-4 md:px-0">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo" width={127} height={30} />
        </Link>

        <nav className="hidden lg:flex gap-10 xl:gap-44 font-medium items-center">
          <Link
            href="/"
            className={`${pathname === "/" ? activeLineClass : ""}`}
          >
            Home
          </Link>
          <Link
            href="/category"
            className={`${pathname === "/category" ? activeLineClass : ""}`}
          >
            Category
          </Link>
          <Link
            href="/explore"
            className={`${pathname === "/explore" ? activeLineClass : ""}`}
          >
            Explore Products
          </Link>
        </nav>

        <div className="flex items-center gap-5 md:gap-10">
          <div className="flex gap-5 md:gap-10 items-center">
            <FiSearch size={24} className="cursor-pointer" />
            <div className="relative">
              <button
                className="relative cursor-pointer flex items-center"
                onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
              >
                <FiShoppingBag size={24} />
                {items.length > 0 && (
                  <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center leading-tight">
                    {totalQty}
                  </div>
                )}
              </button>
              {isCartPopupOpen && (
                <CartPopup onClose={() => setIsCartPopupOpen(false)} />
              )}
            </div>
          </div>

          <button
            className="lg:hidden relative w-8 h-8 flex items-center justify-center text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Pakai div wrapper biar icon-nya beneran di tengah button */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div
                className={`absolute transition-all duration-300 transform ${isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
              >
                <FiMenu size={28} />
              </div>
              <div
                className={`absolute transition-all duration-300 transform ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
              >
                <FiX size={28} />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`
    lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg 
    flex flex-col font-medium transition-all duration-500 ease-in-out z-40 overflow-hidden
    ${
      isMenuOpen
        ? "max-h-[300px] opacity-100 visible"
        : "max-h-0 opacity-0 invisible"
    }
  `}
      >
        <div className="py-6 px-4 flex flex-col gap-6">
          {" "}
          {/* Bungkus kontennya di sini */}
          <Link
            href="/"
            className={pathname === "/" ? "text-primary font-bold" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/category"
            className={pathname === "/category" ? "text-primary font-bold" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Category
          </Link>
          <Link
            href="/explore"
            className={pathname === "/explore" ? "text-primary font-bold" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Explore Products
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

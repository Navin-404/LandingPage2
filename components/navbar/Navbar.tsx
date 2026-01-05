"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md border-gray-100 shadow-sm" 
          : "bg-white border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Reduced weight from font-black to font-bold */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              kasparro
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10 items-center text-[15px] font-medium text-gray-500">
            {["Products", "Resources", "Case Studies", "Pricing"].map((item) => (
              <Link key={item} href="#" className="hover:text-black transition-colors">
                {item}
              </Link>
            ))}
          </div>

          {/* CTA Button - Reduced weight from font-bold to font-medium */}
          <div className="hidden md:flex items-center">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-md shadow-gray-900/10">
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-4"
        >
          {["Products", "Resources", "Case Studies", "Pricing"].map((item) => (
            <Link key={item} href="#" className="block text-gray-600 hover:text-black text-lg font-medium py-2">
              {item}
            </Link>
          ))}
          <button className="w-full py-3 text-lg font-medium bg-gray-900 text-white rounded-lg mt-4">
            Book Demo
          </button>
        </motion.div>
      )}
    </nav>
  );
};
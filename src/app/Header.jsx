"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* ✅ Logo Only */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Hospice and Beyond Logo"
            width={182}
            height={182}
            className="object-contain"
          />
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link
            href="/"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
          >
            Contact
          </Link>
          <a
            href="https://blog.hospiceandbeyond.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
          >
            Blog
          </a>
        </nav>

        {/* ✅ Mobile Menu Icon */}
        <div
          className="md:hidden text-[#03271E] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>

      {/* ✅ Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6 py-6">
          <Link
            href="/"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="https://blog.hospiceandbeyond.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
}

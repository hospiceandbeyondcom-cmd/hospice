"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// =============================
// DESKTOP DROPDOWN LINK
// =============================
const DropdownLink = ({ title, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hoverTimer = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimer.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimer.current = setTimeout(() => setDropdownOpen(false), 80);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center cursor-pointer text-[#03271E] font-medium hover:text-[#047857] transition">
        {title}
        <svg
          className={`ml-1 h-4 w-4 transform transition-transform ${
            dropdownOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-150 ease-out will-change-transform ${
          dropdownOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 translate-y-2"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

// =============================
// DESKTOP DROPDOWN ITEM
// =============================
const DropdownItem = ({ href, children }) => (
  <Link
    href={href}
    className="block px-4 py-2 text-sm text-[#03271E] hover:bg-gray-100 hover:text-[#047857] transition"
  >
    {children}
  </Link>
);

// =============================
// MOBILE DROPDOWN (Accordion)
// =============================
const MobileDropdown = ({ title, children, closeMenu }) => {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-between text-[#03271E] font-medium hover:text-[#047857] transition cursor-pointer py-1"
        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
      >
        <span>{title}</span>
        <svg
          className={`ml-1 h-5 w-5 transform transition-transform ${
            mobileDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden pl-4 ${
          mobileDropdownOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            className:
              "block text-[#03271E] font-normal hover:text-[#047857] transition py-1",
            onClick: closeMenu,
          })
        )}
      </div>
    </div>
  );
};

// =============================
// MAIN HEADER COMPONENT
// =============================
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Hospice and Beyond Logo"
            width={250}
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

          {/* About Dropdown */}
          <DropdownLink title="About">
            <DropdownItem href="/about">About Us</DropdownItem>
            <DropdownItem href="/team">Our Team</DropdownItem>
          </DropdownLink>

          {/* Services Dropdown */}
          <DropdownLink title="Services">
            <DropdownItem href="/services">Hospice Care</DropdownItem>
            <DropdownItem href="/palliative-care">Palliative Care</DropdownItem>
            <DropdownItem href="/bereavement">Bereavement</DropdownItem>
            <DropdownItem href="/social-services">Social Services</DropdownItem>
            <DropdownItem href="/physician">Physician</DropdownItem>
            <DropdownItem href="/nursing">Nursing Care</DropdownItem>
            <DropdownItem href="/durable-medical-equipment">
              Durable Medical Equipment
            </DropdownItem>
            <DropdownItem href="/therapy">Therapy Services</DropdownItem>
          </DropdownLink>

          {/* Myth & FAQ */}
          <DropdownLink title="Myth and FAQ">
            <DropdownItem href="/myth">Myth</DropdownItem>
            <DropdownItem href="/faq">FAQ</DropdownItem>
          </DropdownLink>

          {/* Careers */}
          <Link
            href="/careers"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
          >
            Careers
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
          >
            Contact
          </Link>

          {/* Blog */}
          <Link
            href="/blog"
            className="text-[#03271E] font-medium hover:text-[#047857] transition"
          >
            Blog
          </Link>

          {/* Donate */}
          <Link
            href="/donate-to-us"
            className="bg-[#047857] text-white px-4 py-2 rounded-lg font-medium transition duration-150 ease-in-out hover:bg-[#03271E] shadow-md"
          >
            Donate to Us
          </Link>
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

      {/* ✅ Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6 py-6">
          <Link
            href="/"
            className="text-[#03271E] font-medium hover:text-[#047857] transition py-1"
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <MobileDropdown title="About" closeMenu={closeMobileMenu}>
            <Link href="/about">About Us</Link>
            <Link href="/team">Our Team</Link>
          </MobileDropdown>

          <MobileDropdown title="Services" closeMenu={closeMobileMenu}>
            <Link href="/services">Hospice Care</Link>
            <Link href="/palliative-care">Palliative Care</Link>
            <Link href="/bereavement">Bereavement</Link>
            <Link href="/social-services">Social Services</Link>
            <Link href="/physician">Physician</Link>
            <Link href="/nursing">Nursing Care</Link>
            <Link href="/durable-medical-equipment">Durable Medical Equipment</Link>
            <Link href="/therapy">Therapy Services</Link>
          </MobileDropdown>

          <MobileDropdown title="Myth and FAQ" closeMenu={closeMobileMenu}>
            <Link href="/myth">Myth</Link>
            <Link href="/faq">FAQ</Link>
          </MobileDropdown>

          <Link
            href="/careers"
            className="text-[#03271E] font-medium hover:text-[#047857] transition py-1"
            onClick={closeMobileMenu}
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className="text-[#03271E] font-medium hover:text-[#047857] transition py-1"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>

          <Link
            href="/blog"
            className="text-[#03271E] font-medium hover:text-[#047857] transition py-1"
            onClick={closeMobileMenu}
          >
            Blog
          </Link>

          <Link
            href="/donate-to-us"
            className="text-center bg-[#047857] text-white px-4 py-2 rounded-lg font-medium transition duration-150 ease-in-out hover:bg-[#03271E] shadow-md block"
            onClick={closeMobileMenu}
          >
            Donate to Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

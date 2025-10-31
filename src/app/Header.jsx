"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  const closeAll = () => {
    setAboutOpen(false);
    setServicesOpen(false);
    setFaqOpen(false);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) closeAll();
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">
        {/* === LOGO === */}
        <Link
          href="/"
          className="flex items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-[#047857]/50"
        >
          <Image
            src="/logo.png"
            alt="Hospice and Beyond Logo"
            width={180}
            height={55}
            className="object-contain rounded-lg"
          />
        </Link>

        {/* === DESKTOP MENU - UPDATED CLASSES HERE === */}
        <nav className="hidden md:flex items-center space-x-7 text-[#03271E] font-medium text-[15.5px] leading-[1.6] tracking-tight">
          <Link href="/" className="hover:text-[#047857] transition-colors">
            Home
          </Link>

          {/* === ABOUT DROPDOWN === */}
          <div
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-[#047857] transition-colors">
              <span>About</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  aboutOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {aboutOpen && (
              <div className="absolute left-0 top-7 bg-white shadow-xl rounded-xl py-2 w-36 border border-gray-100 z-50">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm hover:bg-[#047857] hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 text-sm hover:bg-[#047857] hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </div>
            )}
          </div>

          {/* === SERVICES DROPDOWN === */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-[#047857] transition-colors">
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-7 bg-white shadow-xl rounded-xl py-2 w-56 border border-gray-100 z-50">
                {[
                  { title: "Hospice Care", href: "/services" },
                  { title: "Palliative Care", href: "/palliative-care" },
                  { title: "Bereavement", href: "/bereavement" },
                  { title: "Social Services", href: "/social-services" },
                  { title: "Physician", href: "/physician" },
                  { title: "Nursing Care", href: "/nursing" },
                  {
                    title: "Durable Medical Equipment",
                    href: "/durable-medical-equipment",
                  },
                  { title: "Therapy Services", href: "/therapy" },
                ].map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block px-4 py-2 text-sm hover:bg-[#047857] hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* === MYTH & FAQ DROPDOWN === */}
          <div
            className="relative group"
            onMouseEnter={() => setFaqOpen(true)}
            onMouseLeave={() => setFaqOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-[#047857] transition-colors">
              <span>Myth & FAQ</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  faqOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {faqOpen && (
              <div className="absolute left-0 top-7 bg-white shadow-xl rounded-xl py-2 w-36 border border-gray-100 z-50">
                <Link
                  href="/myth"
                  className="block px-4 py-2 text-sm hover:bg-[#047857] hover:text-white transition-colors"
                >
                  Myth
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2 text-sm hover:bg-[#047857] hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>

          {/* === OTHER PAGES === */}
          <Link href="/careers" className="hover:text-[#047857]">
            Careers
          </Link>
          <Link href="/contact" className="hover:text-[#047857]">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-[#047857]">
            Blog
          </Link>
          <Link href="/donate-to-us" className="hover:text-[#047857]">
            Donate
          </Link>

          {/* === LAST: TAKE HOSPICE ELIGIBILITY QUESTIONNAIRE === */}
          <Link
            href="/hospice-eligibility-questionnaire"
            className="bg-[#047857] hover:bg-[#065f46] text-white font-medium px-4 py-2 rounded-full shadow-md transition-all duration-300 whitespace-nowrap text-[14px]"
          >
            Take the Hospice Eligibility Questionnaire
          </Link>
        </nav>

        {/* === MOBILE MENU BUTTON === */}
        <button
          className="md:hidden text-[#03271E] p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#047857]"
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* === MOBILE MENU (unchanged) === */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 sm:px-6 py-4 space-y-2 text-[#03271E] font-medium border-t border-gray-200">
          <Link
            href="/"
            onClick={closeAll}
            className="block py-2 hover:bg-[#047857]/10 hover:text-[#047857] rounded-lg px-2"
          >
            Home
          </Link>

          {/* ABOUT (MOBILE) */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex justify-between w-full py-2 px-2 hover:bg-[#047857]/10 hover:text-[#047857] rounded-lg"
            >
              About
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  aboutOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {aboutOpen && (
              <div className="pl-6 mt-1 space-y-1 text-sm bg-gray-50 rounded-lg py-1">
                <Link
                  href="/about"
                  onClick={closeAll}
                  className="block py-2 hover:text-[#047857] px-2"
                >
                  About Us
                </Link>
                <Link
                  href="/team"
                  onClick={closeAll}
                  className="block py-2 hover:text-[#047857] px-2"
                >
                  Our Team
                </Link>
              </div>
            )}
          </div>

          {/* SERVICES (MOBILE) */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between w-full py-2 px-2 hover:bg-[#047857]/10 hover:text-[#047857] rounded-lg"
            >
              Services
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="pl-6 mt-1 space-y-1 text-sm bg-gray-50 rounded-lg py-1">
                {[
                  { title: "Hospice Care", href: "/services" },
                  { title: "Palliative Care", href: "/palliative-care" },
                  { title: "Bereavement", href: "/bereavement" },
                  { title: "Social Services", href: "/social-services" },
                  { title: "Physician", href: "/physician" },
                  { title: "Nursing Care", href: "/nursing" },
                  {
                    title: "Durable Medical Equipment",
                    href: "/durable-medical-equipment",
                  },
                  { title: "Therapy Services", href: "/therapy" },
                ].map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={closeAll}
                    className="block py-2 hover:text-[#047857] px-2"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* MYTH & FAQ (MOBILE) */}
          <div>
            <button
              onClick={() => setFaqOpen(!faqOpen)}
              className="flex justify-between w-full py-2 px-2 hover:bg-[#047857]/10 hover:text-[#047857] rounded-lg"
            >
              Myth & FAQ
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  faqOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {faqOpen && (
              <div className="pl-6 mt-1 space-y-1 text-sm bg-gray-50 rounded-lg py-1">
                <Link
                  href="/myth"
                  onClick={closeAll}
                  className="block py-2 hover:text-[#047857] px-2"
                >
                  Myth
                </Link>
                <Link
                  href="/faq"
                  onClick={closeAll}
                  className="block py-2 hover:text-[#047857] px-2"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/careers"
            onClick={closeAll}
            className="block py-2 hover:bg-[#047857]/10 hover:text-[#047857] rounded-lg px-2"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            onClick={closeAll}
            className="block py-2 hover:bg-[#047857]/10 hover:text-[#047857] rounded-lg px-2"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            onClick={closeAll}
            className="block py-2 hover:bg-[#047857]/10 hover:text-[#047857] rounded-lg px-2"
          >
            Blog
          </Link>
          <Link
            href="/donate-to-us"
            onClick={closeAll}
            className="block py-2 hover:bg-[#047857]/10 hover:text-[#047857] rounded-lg px-2"
          >
            Donate
          </Link>

          {/* === LAST: TAKE HOSPICE ELIGIBILITY QUESTIONNAIRE === */}
          <Link
            href="/hospice-eligibility-questionnaire"
            onClick={closeAll}
            className="mt-4 block bg-[#047857] hover:bg-[#065f46] text-white font-semibold px-5 py-3 rounded-full shadow-md text-center transition-all duration-300"
          >
            Take the Hospice Eligibility Questionnaire
          </Link>
        </div>
      </div>
    </header>
  );
}
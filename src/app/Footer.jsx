"use client";
import Image from "next/image";
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-[#03271E] py-14 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* 1. Logo & Intro */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-semibold text-[#006D66] tracking-tight">
                Hospice & Beyond
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              A legacy of compassion — honoring every life, every moment.
              We bring comfort, dignity, and peace to every family we serve.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#006D66] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/" className="hover:text-[#006D66] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#006D66] transition">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#006D66] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#006D66] transition">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://blog.hospiceandbeyond.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#006D66] transition"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#006D66] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#006D66]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#006D66]" />
                <a
                  href="mailto:contact@hospiceandbeyond.com"
                  className="hover:text-[#006D66] transition"
                >
                  contact@hospiceandbeyond.com
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Accreditation Logo (New Position) */}
          <div>
            <h4 className="text-lg font-semibold text-[#006D66] mb-4">
              Accreditation
            </h4>
            <div className="flex items-center space-x-4">
                <Image
                    src="/footer.png" // Assumes the image is in your /public directory
                    alt="Accreditation Logo"
                    width={140} // Adjust width as needed
                    height={40} // Adjust height as needed
                    className="object-contain" // Keep the image aspect ratio
                />
                {/* Add more logos here if you have them */}
            </div>
          </div>
        </div>

        {/* Social Media Section (Moved to the bottom row, center-aligned) */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col items-center">
            <h4 className="text-lg font-semibold text-[#006D66] mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full border border-[#006D66]/30 hover:bg-[#006D66] hover:text-white transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-[#006D66]/30 hover:bg-[#006D66] hover:text-white transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-[#006D66]/30 hover:bg-[#006D66] hover:text-white transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-[#006D66]/30 hover:bg-[#006D66] hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Hospice & Beyond. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
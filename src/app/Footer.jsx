"use client";
import Image from "next/image";
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#03271E] text-white py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Intro */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* ✅ Logo removed as requested */}
            <h3 className="text-2xl font-semibold text-white tracking-tight">
              Hospice & Beyond
            </h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            A legacy of compassion — honoring every life, every moment.
            We bring comfort, dignity, and peace to every family we serve.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#FFD700] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-[#FFD700] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#FFD700] transition">About</a></li>
            <li><a href="/services" className="hover:text-[#FFD700] transition">Services</a></li>
            <li><a href="/contact" className="hover:text-[#FFD700] transition">Contact</a></li>
            <li>
              <a
                href="https://blog.hospiceandbeyond.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-[#FFD700] mb-4">Contact Us</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#FFD700]" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#FFD700]" />
              <a
                href="mailto:contact@hospiceandbeyond.com"
                className="hover:text-[#FFD700] transition"
              >
                contact@hospiceandbeyond.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-[#FFD700] mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full border border-[#FFD700]/40 hover:bg-[#FFD700] hover:text-[#03271E] transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-[#FFD700]/40 hover:bg-[#FFD700] hover:text-[#03271E] transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-[#FFD700]/40 hover:bg-[#FFD700] hover:text-[#03271E] transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-[#FFD700]/40 hover:bg-[#FFD700] hover:text-[#03271E] transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-[#FFD700]/20 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Hospice & Beyond. All rights reserved.
      </div>
    </footer>
  );
}

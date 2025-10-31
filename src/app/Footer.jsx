"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react"; 
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn } from "react-icons/fa6"; 

export default function Footer() {
    
    // 1. Define Brand Colors
    const brandColors = {
        Facebook: "#1877F2",
        X: "#000000",        // Black is the official color for the 'X' icon
        Instagram: "#E4405F", // Using a common gradient center/primary color
        Youtube: "#FF0000",
        TikTok: "#000000",   // Black is common for the logo on a white background
        LinkedIn: "#0A66C2",
    };

    // Define the social media links
    const socialLinks = [
        {
            icon: FaFacebookF,
            href: "http://facebook.com/hospiceandbeyond",
            label: "Facebook",
            colorKey: "Facebook",
        },
        {
            icon: FaXTwitter,
            href: "https://x.com/hospicenbeyond",
            label: "X (Twitter)",
            colorKey: "X",
        },
        {
            icon: FaInstagram,
            href: "https://www.instagram.com/hospiceandbeyond",
            label: "Instagram",
            colorKey: "Instagram",
        },
        {
            icon: FaYoutube,
            href: "https://www.youtube.com/@hospiceandbeyond",
            label: "YouTube",
            colorKey: "Youtube",
        },
        {
            icon: FaTiktok,
            href: "https://www.tiktok.com/@hospiceandbeyond",
            label: "TikTok",
            colorKey: "TikTok",
        },
        {
            icon: FaLinkedinIn,
            href: "https://www.linkedin.com/company/hospice-and-beyond-palliative-care",
            label: "LinkedIn",
            colorKey: "LinkedIn",
        },
    ];

    return (
        <footer className="bg-white text-[#03271E] py-14 px-6 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Main Columns: Stacks on Mobile (grid-cols-1), 5-column grid on Desktop (md:grid-cols-5) */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    
                    {/* 1. Logo (Always Col 1) */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-2xl font-semibold text-[#006D66] tracking-tight">
                                Hospice & Beyond
                            </h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            A legacy of compassion honoring every life, every moment.
                            We bring comfort, dignity, and peace to every family we serve.
                        </p>
                    </div>

                    {/* 2 & 3. Quick Links and Service Areas (HORIZONTAL on Mobile, Cols 2 & 3 on Desktop) */}
                    <div className="grid grid-cols-2 gap-12 md:col-span-2">
                        
                        {/* Quick Links (Col 2) */}
                        <div className="col-span-1">
                            <h4 className="text-lg font-semibold text-[#006D66] mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><a href="/" className="hover:text-[#006D66] transition">Home</a></li>
                                <li><a href="/about" className="hover:text-[#006D66] transition">About</a></li>
                                <li><a href="/services" className="hover:text-[#006D66] transition">Services</a></li>
                                <li><a href="/contact" className="hover:text-[#006D66] transition">Contact</a></li>
                                <li>
                                    <a
                                        href="https://hospiceandbeyond.com/blog"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#006D66] transition"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Service Areas (Col 3) */}
                        <div className="col-span-1">
                            <h4 className="text-lg font-semibold text-[#006D66] mb-4">
                                Service Areas
                            </h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <span>Austin, Texas</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Denton</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Allen, Texas</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Dallas, Texas</span>
                                </li>
                            </ul>
                            <a
                                href="/service-areas"
                                className="inline-block mt-4 text-sm font-medium text-[#006D66] hover:underline transition"
                            >
                                View All Areas →
                            </a>
                        </div>
                    </div>


                    {/* 4. Contact Us (Col 4) */}
                    <div className="col-span-1">
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

                    {/* 5. Accreditation (Col 5) */}
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold text-[#006D66] mb-4">
                            Accreditation
                        </h4>
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/footer.png"
                                alt="Accreditation Logo"
                                width={180}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col items-center">
                    <h4 className="text-lg font-semibold text-[#006D66] mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                        {/* Dynamically generate social icons from the array */}
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                // Removed hover styles since we are using brand colors
                                className="p-2 rounded-full border border-gray-300 transition" 
                            >
                                <link.icon 
                                    size={20} 
                                    // Apply the brand color here
                                    color={brandColors[link.colorKey]} 
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Hospice & Beyond. All rights reserved 2025.
                </div>
            </div>
        </footer>
    );
}
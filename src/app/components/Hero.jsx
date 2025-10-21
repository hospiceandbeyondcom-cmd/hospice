"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

// Consistent color definitions for clean code
const PRIMARY_DARK = "#003D39"; // Deep Teal
const PRIMARY_TEAL = "#006D66"; // Main Teal

export default function Hero() {
  // Animation variants for better orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // Section: Retained white background with ample vertical spacing
    <section className="relative bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        
        {/* Main Content Container: Reverse column order on desktop for better visual flow (Image first) */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          
          {/* Left Section (Content) - Now takes full width on mobile, controlled width on desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            {/* Tagline/Accent */}
            <motion.p 
              variants={itemVariants} 
              className={`text-sm sm:text-base font-semibold uppercase text-[${PRIMARY_TEAL}] tracking-widest mb-3`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Hospice Care with Compassion
            </motion.p>
            
            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className={`text-5xl lg:text-6xl font-extrabold text-[${PRIMARY_DARK}] leading-tight tracking-tighter`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Bring comfort and peace to every life
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed font-light"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Experience hospice care designed for dignity and comfort through every moment.
            </motion.p>

            {/* Primary Button */}
            <motion.div variants={itemVariants} className="mt-10">
              <a
                href="/services"
                className={`bg-[${PRIMARY_TEAL}] hover:bg-[${PRIMARY_DARK}] focus:ring-4 focus:ring-[${PRIMARY_TEAL}] focus:ring-opacity-50 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out inline-flex items-center justify-center`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Explore our Services
                {/* Optional: Add a subtle icon animation */}
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>

            {/* Get in Touch Section */}
            <motion.div variants={itemVariants} className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className={`w-5 h-5 text-[${PRIMARY_TEAL}] flex-shrink-0`} />
                <span className="text-base font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                  Call to Get in Touch
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className={`w-5 h-5 text-[${PRIMARY_TEAL}] flex-shrink-0`} />
                <a
                  href="mailto:info@hospiceandbeyond.com"
                  className={`text-base font-medium hover:text-[${PRIMARY_DARK}] transition-colors`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Send a Message
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image (Visuals) - Now takes full width on mobile, controlled width on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg" // Max width constraints for mobile/desktop
              style={{
                aspectRatio: "4 / 3",
                borderRadius: "1.5rem", // Slightly rounded corners
                overflow: "hidden",
                boxShadow: `0 20px 40px -10px rgba(0, 61, 57, 0.2), 0 0 0 4px ${PRIMARY_TEAL}40`, // Soft, color-tinted shadow with subtle border
              }}
              whileHover={{ scale: 1.02 }} // Gentle hover
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image
                src="/hero.png"
                alt="Hospice and Beyond care"
                fill
                className="object-cover"
                priority
              />
              {/* Optional: Subtle gradient overlay for extra depth/polish */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
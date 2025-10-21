"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

// === Color Palette ===
const PRIMARY_TEAL = "#006D66";      // Core brand teal
const PRIMARY_DARK = "#003D39";      // Deep base tone
const ACCENT_ROSEGOLD = "#7D5F42";   // Elegant rose-gold brown

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Gradient Accent Bar */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background: `linear-gradient(90deg, ${PRIMARY_TEAL}, ${ACCENT_ROSEGOLD})`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-20">
          {/* === LEFT CONTENT === */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="uppercase font-semibold tracking-widest mb-3 text-sm sm:text-base"
              style={{ color: PRIMARY_TEAL, fontFamily: "Inter, sans-serif" }}
            >
              Hospice Care with Compassion
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
              style={{
                color: PRIMARY_DARK,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Bring Comfort and Peace to Every Life
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed font-light"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Experience hospice care designed for dignity, compassion, and comfort through every moment.
            </motion.p>

            {/* === CTA BUTTON === */}
            <motion.div variants={itemVariants} className="mt-10">
              <a
                href="/services"
                className="font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out inline-flex items-center justify-center text-white"
                style={{
                  background: `linear-gradient(90deg, ${PRIMARY_TEAL}, ${ACCENT_ROSEGOLD})`,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Explore Our Services
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>

            {/* === CONTACT LINKS === */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-gray-700"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" style={{ color: PRIMARY_TEAL }} />
                <span className="text-base font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                  Call to Get in Touch
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" style={{ color: PRIMARY_TEAL }} />
                <a
                  href="mailto:info@hospiceandbeyond.com"
                  className="text-base font-medium transition-colors"
                  style={{
                    color: ACCENT_ROSEGOLD,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Send a Message
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* === RIGHT IMAGE === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg"
              style={{
                aspectRatio: "4 / 3",
                borderRadius: "1.75rem",
                overflow: "hidden",
                boxShadow: `0 20px 45px -12px rgba(0,0,0,0.15), 0 0 0 3px ${ACCENT_ROSEGOLD}30`,
              }}
            >
              <Image
                src="/hero.png"
                alt="Hospice and Beyond Care"
                fill
                className="object-cover"
                priority
              />
              {/* Elegant gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, rgba(0, 61, 57, 0.25), transparent 70%)`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

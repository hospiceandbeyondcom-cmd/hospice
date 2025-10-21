"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-center md:text-left"
          style={{
            maxWidth: "620px",
          }}
        >
          {/* Heading */}
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#003D39] leading-[1.1] tracking-tight"
            style={{
              wordSpacing: "0.03em",
              letterSpacing: "-0.02em",
              whiteSpace: "normal",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Bring comfort and peace to every life
          </h1>

          {/* Subtext */}
          <p
            className="mt-6 text-lg text-gray-700 leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Experience hospice care designed for dignity
            <br className="hidden md:block" />
            and comfort through every moment.
          </p>

          {/* Primary Button */}
          <div className="mt-10">
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              className="bg-[#006D66] hover:bg-[#004E49] text-white font-semibold px-8 py-4 rounded-md shadow-md text-center inline-block transition-all"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Explore our services
            </motion.a>
          </div>

          {/* Get in Touch Section */}
          <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#006D66]" />
              <span
                className="text-sm sm:text-base font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Get in touch with us
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#006D66]" />
              <a
                href="mailto:info@hospiceandbeyond.com"
                className="text-sm sm:text-base font-medium hover:text-[#003D39] transition-colors"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Send Message
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center w-full"
        >
          <div
            className="relative w-[95%] sm:w-[420px] md:w-[480px]"
            style={{
              aspectRatio: "4 / 3", // ✅ Keeps a fixed proportion across devices
              minHeight: "300px", // ✅ Guarantees visible height on mobile
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src="/hero.png"
              alt="Hospice and Beyond care"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

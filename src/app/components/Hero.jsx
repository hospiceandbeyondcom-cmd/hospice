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
            maxWidth: "620px", // ✅ slightly wider container to prevent wrapping
          }}
        >
          {/* Heading */}
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#003D39] leading-[1.1] tracking-tight"
            style={{
              wordSpacing: "0.03em",
              letterSpacing: "-0.02em",
              whiteSpace: "normal",
            }}
          >
            Bring comfort and peace to every life
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Experience hospice care designed for dignity<br className="hidden md:block" />
            and comfort through every moment.
          </p>

          {/* Primary Button */}
          <div className="mt-10">
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              className="bg-[#006D66] hover:bg-[#004E49] text-white font-semibold px-8 py-4 rounded-md shadow-md text-center inline-block transition-all"
            >
              Explore our services
            </motion.a>
          </div>

          {/* Get in Touch Section */}
          <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#006D66]" />
              <span className="text-sm sm:text-base font-medium">
                Get in touch with us
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#006D66]" />
              <a
                href="mailto:info@hospiceandbeyond.com"
                className="text-sm sm:text-base font-medium hover:text-[#003D39] transition-colors"
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
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
        >
          <div className="relative w-[90%] md:w-[480px] h-[340px] md:h-[420px]">
            <Image
              src="/hero.png"
              alt="Hospice and Beyond care"
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

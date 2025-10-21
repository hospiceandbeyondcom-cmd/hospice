"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Welcome() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.9, ease: "easeOut" },
  };

  // Point directly to the file inside your public folder
  const brochureLink = "/pages.pdf";

  return (
    <section className="relative bg-white py-24 sm:py-28 text-[#03271E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* === Brochure Download Section === */}
        <motion.div
          {...fadeUp}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_15px_60px_rgba(0,0,0,0.08)] mb-24"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Left Image Section */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl shadow-green-200/50">
              <Image
                src="/book.png"
                alt="Download Our Detailed Hospice Brochure"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Right Text + Download Button */}
            <div className="flex flex-col justify-center py-4">
              <h2 className="text-4xl font-extrabold text-[#03271E] mb-4 leading-tight">
                Deepen Your Understanding
              </h2>
              <p className="text-xl text-[#047857] font-semibold mb-6">
                Download Our Comprehensive Brochure
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Our detailed brochure provides a complete overview of the
                compassionate care, services, and support we offer to patients
                and families. Learn more about our philosophy, our team, and how
                we bring comfort and dignity to life's final chapter.
              </p>
              
              <a
                href={brochureLink}
                download="pages.pdf"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-transparent text-lg font-bold rounded-full shadow-lg text-white bg-[#047857] hover:bg-[#035b43] transition duration-300 transform hover:scale-[1.02]"
              >
                <Download size={24} className="mr-3" />
                Download Brochure
              </a>
              <p className="mt-4 text-sm text-gray-500 text-center sm:text-left">
                (PDF, 1.2MB – Click to start the download)
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* === Final CTA Section === */}
        <section
          id="contact"
          className="relative py-12 sm:py-16 bg-white text-center"
        >
          <div className="mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold text-[#006D66]"
            >
              You’re Never Alone in This Journey
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto"
            >
              Our compassionate team is ready to support you with comfort, care, and
              understanding — every step of the way.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <a
                href="mailto:info@hospiceandbeyond.com"
                className="inline-block px-10 py-4 rounded-full text-lg font-bold text-white bg-[#006D66] hover:bg-[#04584E] shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
              >
                Join Our Care Family
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}

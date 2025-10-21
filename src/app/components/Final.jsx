"use client";
import { motion } from "framer-motion";

export default function Final() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.9, ease: "easeOut" },
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-28 bg-white text-center"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          {...fadeUp}
          className="text-3xl sm:text-4xl font-bold text-[#006D66]"
        >
          You’re Never Alone in This Journey
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-4 text-gray-700"
        >
          Our compassionate team is ready to support you with comfort, care, and
          understanding — every step of the way.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="mailto:info@hospiceandbeyond.com"
            className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-[#006D66] hover:bg-[#04584E] shadow-lg transition-all duration-300"
          >
            Join Our Care Family
          </a>
        </motion.div>
      </div>
    </section>
  );
}

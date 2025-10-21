"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function OurCareJourney() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.9, ease: "easeOut" },
  };

  return (
    <section className="bg-[#03271E] py-28 sm:py-36 px-6 md:px-12 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title and Subtitle */}
        <motion.h2
          {...fadeUp}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-[#FFD700] tracking-tight" // Made title bigger and bolder
        >
          Our Care Journey
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-300 max-w-4xl mx-auto mb-20"
        >
          Every journey we walk with our patients and families is guided by one
          purpose — to bring light, peace, and dignity to every moment.
        </motion.p>

        {/* Journey Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="bg-white/10 rounded-3xl border border-white/20 p-8 sm:p-10 hover:bg-white/15 transition duration-300 transform hover:scale-[1.02] shadow-2xl shadow-black/30" // Enhanced styling
          >
            <h3 className="text-3xl font-bold text-[#FFD700] mb-4">
              Listening
            </h3>
            <p className="text-gray-200">
              It starts with listening — to fears, to hopes, to the simple
              truths that define what truly matters most.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="bg-white/10 rounded-3xl border border-white/20 p-8 sm:p-10 hover:bg-white/15 transition duration-300 transform hover:scale-[1.02] shadow-2xl shadow-black/30" // Enhanced styling
          >
            <h3 className="text-3xl font-bold text-[#FFD700] mb-4">
              Guiding
            </h3>
            <p className="text-gray-200">
              We guide each family through care transitions, offering wisdom,
              clarity, and support that feels personal and steady.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.4 }}
            className="bg-white/10 rounded-3xl border border-white/20 p-8 sm:p-10 hover:bg-white/15 transition duration-300 transform hover:scale-[1.02] shadow-2xl shadow-black/30" // Enhanced styling
          >
            <h3 className="text-3xl font-bold text-[#FFD700] mb-4">
              Honoring
            </h3>
            <p className="text-gray-200">
              We honor life — every story, every smile, every goodbye — with
              compassion that continues beyond the moment.
            </p>
          </motion.div>
        </div>

        {/* Start Now CTA Button */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <a
            href="/contact" // Leads to the /contact page as requested
            className="inline-flex items-center justify-center px-12 py-4 rounded-full text-xl font-bold text-[#03271E] bg-[#FFD700] hover:bg-[#E0B800] shadow-2xl shadow-[#FFD700]/50 transition-all duration-300 transform hover:scale-[1.05]"
          >
            Start Your Journey Now
            <ArrowRight size={24} className="ml-3" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
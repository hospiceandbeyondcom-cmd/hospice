"use client";

import { motion } from "framer-motion";

const gradientHeading = {
  background: "linear-gradient(90deg, #006D66, #7D5F42)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function OurCareJourney() {
  return (
    <section className="bg-[#03271E] py-20 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADING WITH GRADIENT + SLIDE UP */}
        <motion.h2
          style={gradientHeading}
          className="text-3xl md:text-5xl font-extrabold mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Care Journey
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          className="text-gray-200 max-w-3xl mx-auto mb-16 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Every journey we walk with our patients and families is guided by one
          purpose to bring light peace and dignity to every moment.
        </motion.p>

        {/* THREE CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 — LISTENING */}
          <motion.div
            className="bg-white/10 rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition text-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[#FFD700] mb-3">
              Listening
            </h3>
            <p className="leading-relaxed">
              It starts with listening to fears to hopes to the simple truths
              that define what truly matters most.
            </p>
          </motion.div>

          {/* CARD 2 — GUIDING (FACING RIGHT ON MD+) */}
          <motion.div
            className="bg-white/10 rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition flex flex-col items-start md:items-end text-left md:text-right"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[#FFD700] mb-3">
              Guiding
            </h3>
            <p className="leading-relaxed">
              We guide each family through care transitions offering wisdom
              clarity and support that feels personal and steady.
            </p>
          </motion.div>

          {/* CARD 3 — HONORING */}
          <motion.div
            className="bg-white/10 rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition text-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[#FFD700] mb-3">
              Honoring
            </h3>
            <p className="leading-relaxed">
              We honor life every story every smile every goodbye with compassion
              that continues beyond the moment.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

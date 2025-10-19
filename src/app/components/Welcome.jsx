"use client";

import { motion } from "framer-motion";
import { Trophy, Feather, PersonStanding } from "lucide-react";
import Image from "next/image";

export default function Welcome() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.9, ease: "easeOut" },
  };

  return (
    <section className="relative bg-white py-24 sm:py-28 text-[#03271E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== MISSION / VISION / VALUES FIRST ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Mission */}
          <motion.div
            {...fadeUp}
            className="bg-[#F9FAFB] rounded-2xl text-center shadow-[0_0_20px_rgba(0,0,0,0.06)] hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] transition"
          >
            <div className="flex justify-center mb-4 mt-8">
              <div className="bg-[#047857] rounded-full p-5 shadow-md hover:scale-105 transition">
                <Feather size={48} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-[#047857] mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 px-6 pb-8 leading-relaxed">
              To bring exceptional comfort, dignity, and peace to every patient
              and family we serve. We ensure that life’s final chapter is lived
              with grace — supported by compassionate professionals who
              understand that every moment matters.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="bg-[#F9FAFB] rounded-2xl text-center shadow-[0_0_20px_rgba(0,0,0,0.06)] hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] transition"
          >
            <div className="flex justify-center mb-4 mt-8">
              <div className="bg-[#047857] rounded-full p-5 shadow-md hover:scale-105 transition">
                <PersonStanding size={48} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-[#047857] mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 px-6 pb-8 leading-relaxed">
              To be a guiding light of hope and healing in our communities —
              where every individual experiences compassionate care, emotional
              peace, and spiritual wholeness.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="bg-[#F9FAFB] rounded-2xl text-center shadow-[0_0_20px_rgba(0,0,0,0.06)] hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] transition"
          >
            <div className="flex justify-center mb-4 mt-8">
              <div className="bg-[#047857] rounded-full p-5 shadow-md hover:scale-105 transition">
                <Trophy size={48} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-[#047857] mb-2">
              Our Core Values
            </h3>
            <p className="text-gray-700 px-6 pb-8 leading-relaxed">
              Compassion | Dignity | Integrity | Family | Hope <br />
              These are the principles that shape every decision, every visit,
              and every conversation at Hospice and Beyond.
            </p>
          </motion.div>
        </div>

        {/* ===== ABOUT US ===== */}
        <motion.div
          {...fadeUp}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Section */}
          <div>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Hospice and Beyondd Palliative Care is founded on a simple but
              sacred belief — that every person deserves dignity, comfort, and
              peace through every stage of life. We are a compassionate team of
              professionals who walk hand in hand with patients and their loved
              ones, creating a space where healing, presence, and hope are
              honored.
            </p>

            {/* ==== Mobile: Image Immediately After First Paragraph ==== */}
            <div className="md:hidden mb-5">
              <Image
                src="/about3.png"
                alt="About Hospice and Beyond"
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl shadow-lg"
                priority
              />
            </div>

            <p className="text-gray-700 mb-5 leading-relaxed">
              We bring care directly to where it’s most meaningful — the home.
              Our focus extends beyond medical support to emotional and
              spiritual well-being, helping families find calm even in difficult
              transitions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Hospice and Beyond, every heartbeat, every moment, and every
              story matters.
            </p>
          </div>

          {/* Desktop image */}
          <div className="relative hidden md:block w-full">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/about3.png"
                alt="About Hospice and Beyond"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

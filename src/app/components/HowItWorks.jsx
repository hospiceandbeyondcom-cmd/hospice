"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaFileMedical, FaHeart } from "react-icons/fa";

// === Premium Color Palette ===
const DEEP_GREEN = "#006D66"; // ✅ changed background color
const PRIMARY_TEAL = "#006D66";
const ACCENT_ORANGE = "#E68A1F"; // ✅ unified orange color

// === Animation Variants ===
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// === Step Data ===
const gettingStartedSteps = [
  {
    title: "1. Schedule Your Consultation",
    desc: "Easily book a private virtual or in-person session at a time that works for you.",
    iconName: "FaCalendarAlt",
    color: PRIMARY_TEAL,
  },
  {
    title: "2. Personalized Assessment",
    desc: "We conduct a thorough review of your history and goals to tailor a treatment plan.",
    iconName: "FaFileMedical",
    color: ACCENT_ORANGE,
  },
  {
    title: "3. Begin Your Healing Journey",
    desc: "Start your sessions with a dedicated specialist and begin seeing real progress.",
    iconName: "FaHeart",
    color: PRIMARY_TEAL,
  },
];

const IconMap = {
  FaCalendarAlt: FaCalendarAlt,
  FaFileMedical: FaFileMedical,
  FaHeart: FaHeart,
};

export default function HowItWorksSection() {
  return (
    <motion.section
      className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ backgroundColor: DEEP_GREEN }} // ✅ background color changed here
    >
      {/* === Section Content === */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row-reverse items-center gap-14 mb-16">
          {/* Image */}
          <motion.div
            className="relative w-full md:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/mysection5.png"
              alt="Getting care should be simple"
              className="w-full h-full object-cover relative z-10 rounded-[2rem]"
            />
          </motion.div>

          {/* Text Content */}
          <div className="md:w-1/2 text-left text-white">
            <h2 className="font-serif text-4xl md:text-6xl font-extrabold mb-6 leading-snug">
              Getting care should be{" "}
              <span style={{ color: ACCENT_ORANGE }}>simple.</span>
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-gray-200 font-light">
              We’ve designed every part of the journey to feel supportive,
              elegant, and human — so healing feels natural and empowering.
            </p>
          </div>
        </div>

        {/* === Timeline (Visible on all devices) === */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div
            className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px]"
            style={{
              background: `linear-gradient(to bottom, ${PRIMARY_TEAL}, ${ACCENT_ORANGE}, ${PRIMARY_TEAL})`,
            }}
          ></div>

          {gettingStartedSteps.map((step, i) => {
            const IconComponent = IconMap[step.iconName];
            return (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row items-center w-full my-10 relative ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {/* Icon */}
                <div
                  className="z-10 p-4 rounded-full border-4 bg-white/90 shadow-2xl mb-4 md:mb-0"
                  style={{ borderColor: step.color }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md"
                    style={{ backgroundColor: step.color }}
                  >
                    {IconComponent && <IconComponent className="text-3xl" />}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md transition duration-300 hover:shadow-2xl text-center md:text-left`}
                  style={{
                    borderLeft: `5px solid ${step.color}`,
                    color: "white",
                  }}
                >
                  <h3 className="font-bold text-2xl mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* === Button === */}
        <div className="flex justify-center mt-16">
          <Link
            href="/book-consultation"
            className="relative inline-block text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.07]"
            style={{
              backgroundColor: ACCENT_ORANGE,
            }}
          >
            Start Now
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

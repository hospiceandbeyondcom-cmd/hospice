// This component requires an updated tailwind.config.js file to support the 'pulse-slow' animation.
// See the instructions following the code block.

"use client";

// ============================================================================
// 1. IMPORTS
// ============================================================================
import Link from "next/link";
import { motion } from "framer-motion";
// Updated Icons for Listening (VolumeUp) and Guiding (MapSigns)
import { FaVolumeUp, FaMapSigns, FaHeart } from "react-icons/fa";

// ============================================================================
// 2. CONSTANTS
// ============================================================================

// --- Color Palette ---
const BACKGROUND_WHITE = "#FFFFFF"; // Main section background is white
const PRIMARY_TEAL = "#006D66"; // Primary brand color
const ACCENT_BROWN = "#7d5f42"; // Secondary brand color for cards/highlights

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// --- Step Data (using both brand colors for visual depth) ---
const gettingStartedSteps = [
  {
    title: "Listening",
    desc: "It starts with listening — to fears, to hopes, to the simple truths that define what truly matters most.",
    iconName: "FaVolumeUp", // Changed from FaCalendarAlt to FaVolumeUp (Audio/Listening)
    primaryColor: PRIMARY_TEAL,
    cardColor: ACCENT_BROWN,
  },
  {
    title: "Guiding",
    desc: "We guide each family through care transitions, offering wisdom, clarity, and support that feels personal and steady.",
    iconName: "FaMapSigns", // Changed from FaFileMedical to FaMapSigns (Road/Direction)
    primaryColor: PRIMARY_TEAL,
    cardColor: ACCENT_BROWN,
  },
  {
    title: "Honoring",
    desc: "We honor life — every story, every smile, every goodbye — with compassion that continues beyond the moment.",
    iconName: "FaHeart", // Kept FaHeart
    primaryColor: PRIMARY_TEAL,
    cardColor: ACCENT_BROWN,
  },
];

// --- Icon Map for dynamic lookup (Updated to match data) ---
const IconMap = {
  FaVolumeUp: FaVolumeUp,
  FaMapSigns: FaMapSigns,
  FaHeart: FaHeart,
};

// ============================================================================
// 3. COMPONENT DEFINITION
// ============================================================================

export default function HowItWorksSection() {
  return (
    <motion.section
      className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ backgroundColor: BACKGROUND_WHITE }}
    >
      {/* === Section Content Container === */}
      <div className="container mx-auto relative z-10">

        {/* --- Header/Image Block --- */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-14 mb-16">
          
          {/* Text Content */}
          <div className="md:w-1/2 text-left text-[#03271E]">
            <h2 className="font-serif text-4xl md:text-6xl font-extrabold mb-6 leading-snug">
              Our Care Journey
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-gray-700 font-light">
              Every journey we walk with our patients and families is guided by one
              purpose — to bring light, peace, and dignity to every moment.
            </p>
          </div>

          {/* Image */}
          <motion.div
            className="relative w-full md:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/hospicesteps.png"
              alt="Our Care Journey"
              className="w-full h-full object-cover relative z-10 rounded-[2rem]"
            />
          </motion.div>
        </div>

        {/* --- Timeline / Steps --- */}
        <div className="relative flex flex-col items-center">
          
          {/* Vertical Line */}
          <div
            className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px]"
            style={{
              background: `linear-gradient(to bottom, ${PRIMARY_TEAL}, ${PRIMARY_TEAL}, ${PRIMARY_TEAL})`,
            }}
          ></div>

          {gettingStartedSteps.map((step, i) => {
            // Dynamically get the icon component
            const IconComponent = IconMap[step.iconName];
            
            return (
              <motion.div
                key={i}
                className={`flex flex-col items-center w-full my-10 relative ${
                  i % 2 === 0 ? "md:flex-row md:justify-start" : "md:flex-row-reverse md:justify-end"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                
                {/* Icon Circle */}
                <div
                  className="z-10 p-4 rounded-full border-4 bg-white/90 shadow-2xl mb-4 md:mb-0 animate-pulse-slow"
                  style={{ borderColor: step.primaryColor }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md"
                    style={{ backgroundColor: step.primaryColor }}
                  >
                    {IconComponent && <IconComponent className="text-3xl" />}
                  </div>
                </div>

                {/* Card Content */}
                <div
                  className={`w-full md:w-5/12 p-8 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl text-center text-white ${
                    i % 2 === 0 ? "md:text-left md:ml-12" : "md:text-right md:mr-12"
                  }`}
                  style={{
                    backgroundColor: step.cardColor,
                    // Dynamic border side based on placement
                    [i % 2 === 0 ? 'borderLeft' : 'borderRight']: `5px solid ${step.primaryColor}`,
                  }}
                >
                  <h3 className="font-bold text-2xl mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- Button --- */}
        <div className="flex justify-center mt-16">
          <Link
            href="/contact"
            className="relative inline-block text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.07]"
            style={{
              backgroundColor: PRIMARY_TEAL,
            }}
          >
            Start Now
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
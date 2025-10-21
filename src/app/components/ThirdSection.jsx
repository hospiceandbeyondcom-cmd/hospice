"use client";

import { motion } from "framer-motion";
import { FaFeatherAlt, FaChild, FaTrophy } from "react-icons/fa"; // icons updated to match screenshot style

// === Color Constants ===
const BACKGROUND_MID = "#f3f4f6";
const PRIMARY_TEAL = "#006D66";
const ACCENT_GOLD = "#D4881A";

export default function ExperienceSection() {
  return (
    <motion.section
      className="py-16 md:py-24 px-6 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: BACKGROUND_MID }}
    >
      {/* === Animated Gradient Background === */}
      <motion.div
        className="absolute inset-0 -z-30 opacity-40"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `linear-gradient(120deg, ${BACKGROUND_MID}, ${ACCENT_GOLD}10, ${PRIMARY_TEAL}10, ${BACKGROUND_MID})`,
          backgroundSize: "250% 250%",
          filter: "blur(40px)",
        }}
      />

      {/* === Subtle Motion Texture === */}
      <motion.div
        className="absolute inset-0 -z-20 opacity-[0.06]"
        animate={{ x: ["0%", "4%", "0%"], y: ["0%", "3%", "0%"] }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 0), radial-gradient(rgba(0,0,0,0.03) 1px, transparent 0)",
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0, 15px 15px",
        }}
      />

      {/* === Content === */}
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
        {/* === Right Image === */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <motion.img
            src="/missionvisionvalues.png" // ✅ replace with your new image
            alt="Our Mission, Vision, and Core Values"
            className="rounded-[2rem] shadow-2xl w-full md:w-4/5 object-cover relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* === Left Text Section === */}
        <div className="md:w-1/2 relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl font-extrabold mb-6 leading-snug text-[#003D39]">
            Bringing Comfort, Dignity & Peace to Every Life We Touch
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-700 font-light">
            At Hospice and Beyond, our mission, vision, and core values guide
            everything we do — ensuring that every patient and family
            experiences compassionate care, emotional peace, and spiritual
            wholeness.
          </p>

          {/* === Vision, Mission, Values Cards === */}
          <div className="space-y-6">
            {[
              {
                title: "Our Mission",
                text: "To bring exceptional comfort, dignity, and peace to every patient and family we serve. We ensure that life’s final chapter is lived with grace — supported by compassionate professionals who understand that every moment matters.",
                icon: <FaFeatherAlt />,
              },
              {
                title: "Our Vision",
                text: "To be a guiding light of hope and healing in our communities — where every individual experiences compassionate care, emotional peace, and spiritual wholeness.",
                icon: <FaChild />,
              },
              {
                title: "Our Core Values",
                text: "Compassion | Dignity | Integrity | Family | Hope — These are the principles that shape every decision, every visit, and every conversation at Hospice and Beyond.",
                icon: <FaTrophy />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white/80 rounded-2xl shadow-xl backdrop-blur-md border-l-4"
                style={{ borderColor: ACCENT_GOLD }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        "0 0 0px rgba(0,109,102,0.0)",
                        "0 0 20px rgba(0,109,102,0.3)",
                        "0 0 0px rgba(0,109,102,0.0)",
                      ],
                    }}
                    transition={{
                      duration: 2 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-[2rem] p-3 rounded-full"
                    style={{ color: PRIMARY_TEAL }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ color: PRIMARY_TEAL }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
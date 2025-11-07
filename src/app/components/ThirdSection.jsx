"use client";

import { motion } from "framer-motion";
import { FaFeatherAlt, FaChild, FaTrophy } from "react-icons/fa";

const BACKGROUND_MID = "#f3f4f6";
const PRIMARY_TEAL = "#006D66";
const ACCENT_GOLD = "#7d5f42";

export default function ExperienceSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="py-16 md:py-24 px-6 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: BACKGROUND_MID }}
    >
      {/* Animated Gradient Background */}
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

      {/* Subtle Motion Texture */}
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

      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
        {/* Right Image */}
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/missionvisionvalues.png"
            alt="Our Mission, Vision, and Core Values"
            className="rounded-[2rem] shadow-2xl w-full md:w-4/5 object-cover relative z-10"
          />
        </motion.div>

        {/* Left Text Section */}
        <motion.div
          className="md:w-1/2 relative z-10 max-w-prose"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            className="font-serif text-4xl md:text-6xl font-extrabold mb-6 leading-snug text-[#003D39] text-left md:text-justify"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            Bringing Comfort, Dignity and Peace to Every Life We Touch
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p
            className="text-xl mb-8 leading-relaxed text-gray-700 font-light text-left md:text-justify tracking-normal"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Hospice and Beyond, our mission, vision, and core values guide
            everything we do, ensuring that every patient and family experiences
            compassionate care, emotional peace, and spiritual wholeness.
          </motion.p>

          {/* Mission, Vision, Values Cards */}
          <div className="space-y-6">
            {[
              {
                title: "Our Mission",
                text: "To bring exceptional comfort, dignity, and peace to every patient and family we serve. We ensure that life’s final chapter is lived with grace, supported by compassionate professionals who understand that every moment matters.",
                icon: <FaFeatherAlt />,
              },
              {
                title: "Our Vision",
                text: "To be a guiding light of hope and healing in our communities, where every individual experiences compassionate care, emotional peace, and spiritual wholeness.",
                icon: <FaChild />,
              },
              {
                title: "Our Core Values",
                text: "Compassion, Dignity, Integrity, Family, and Hope. These are the principles that shape every decision, every visit, and every conversation at Hospice and Beyond.",
                icon: <FaTrophy />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white/80 rounded-2xl shadow-xl backdrop-blur-md border-l-4"
                style={{ borderColor: ACCENT_GOLD }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
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
                      className="text-xl font-bold mb-2"
                      style={{ color: PRIMARY_TEAL }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-left md:text-justify leading-relaxed tracking-normal">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

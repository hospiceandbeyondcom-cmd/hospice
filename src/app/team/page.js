import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// --- START: Inline Component Definitions for Single-File React App ---

const HeaderComponent = () => (
  <header className="bg-white/90 backdrop-blur-md sticky top-0 z-10 shadow-sm border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold" style={{ color: "#006D66" }}>
        Hospice & Beyond
      </div>
      <nav className="hidden md:flex space-x-8">
        {["Home", "Services", "Team", "Contact"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className={`text-gray-600 hover:text-[#7D5F42] transition font-medium ${item === "Team" ? "text-[#006D66]" : ""}`}
          >
            {item}
          </a>
        ))}
      </nav>
      <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#006D66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </header>
);

const FooterComponent = () => (
  <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
    <div className="max-w-7xl mx-auto px-6 py-12 text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} Hospice and Beyond. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="/privacy" className="hover:text-[#006D66]">Privacy Policy</a>
        <span className="text-gray-300">|</span>
        <a href="/terms" className="hover:text-[#006D66]">Terms of Service</a>
      </div>
    </div>
  </footer>
);

// --- END: Inline Component Definitions ---


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Function to attempt playing the video
      const playVideo = async () => {
        try {
          await video.play();
        } catch (err) {
          // console.warn("Autoplay blocked:", err); // Suppress console warning for cleaner output
        }
      };
      playVideo();
    }
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col font-['Inter']">
      <HeaderComponent />

      {/* ===== HERO (TEXT LEFT + VIDEO RIGHT) ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-md rounded-b-[2rem] mx-4 md:mx-0 mt-4 md:mt-0">
        {/* LEFT TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 p-8 md:p-20 text-center md:text-left order-2 md:order-1"
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-snug"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Team of Compassion
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            A family of professionals and caregivers working together to bring comfort,
            dignity, and love to every patient we serve.
          </p>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full md:w-1/2 h-[40vh] md:h-[70vh] order-1 md:order-2"
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover rounded-t-[2rem] md:rounded-t-none md:rounded-bl-[2rem] md:rounded-tr-none"
            muted
            loop
            playsInline
            preload="none"
            // Using a placeholder image for the video poster since the video URL is external
            poster="https://placehold.co/1280x720/E0F2F1/006D66?text=Team+Video+Preview"
            decoding="async"
          >
            {/* Note: The video src="/teams.mp4" is assumed to be accessible in the actual environment */}
            <source src="/teams.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent md:hidden"></div>
        </motion.div>
      </section>

      {/* ===== FOUNDER SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-start md:items-center gap-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center md:justify-start"
        >
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-[#006D66]/20">
            {/* Replaced next/image with standard <img> */}
            <img
              src="https://placehold.co/256x256/D1C4E9/4527A0?text=Founder" // Placeholder for /team1.png
              alt="Founder of Hospice and Beyond"
              className="absolute inset-0 w-full h-full object-cover object-top rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "#006D66" }}
          >
            Our Founder
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            At the heart of Hospice and Beyond is our visionary founder, a compassionate leader
            whose mission is to restore dignity, warmth, and humanity to care. Her leadership
            inspires every nurse, chaplain, and caregiver to serve with love and excellence.
            Through her guidance, Hospice and Beyond has become a home of hope, healing, and
            heartfelt compassion.
          </p>
        </motion.div>
      </section>

      {/* ===== EXTENDED TEAM SECTION ===== */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1"
          >
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{ color: "#006D66" }}
            >
              Our Extended Family of Care
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
              Compassion is a shared mission. Our team works together, blending medical
              expertise, emotional support, and spiritual care to meet every **patient&apos;s** unique
              needs with grace and dedication.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              From physicians and nurses to chaplains and therapists, every member plays a vital
              role in creating comfort and connection when it matters most.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2"
          >
            {/* Replaced next/image with standard <img> */}
            <img
              src="https://placehold.co/800x600/E0F7FA/00BCD4?text=Extended+Team+Image" // Placeholder for /teams.png
              alt="Hospice and Beyond Extended Family of Care"
              className="object-contain w-[95%] sm:w-[90%] md:w-full h-auto max-w-[650px] rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== ROLES GRID ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center mb-12"
          style={{ color: "#006D66" }}
        >
          Meet Our Professional Team
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            "Medical Director",
            "Nurse",
            "Chaplain",
            "Social Worker",
            "Physical Therapist",
            "Occupational Therapist",
            "Speech Therapist",
            // Added another role to fill the grid better
            "Hospice Aide"
          ].map((role, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="p-6 border border-[#006D66]/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white transform hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: "#7D5F42" }}>
                {role}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Dedicated to compassionate, holistic, and coordinated care for every individual.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(90deg, #006D66, #7D5F42)" }}
      >
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white text-2xl md:text-3xl font-semibold mb-4"
        >
          Together, We Are Hospice and Beyond
        </motion.h3>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white mb-8 text-lg max-w-2xl mx-auto px-6"
        >
          Every heart that serves here is part of a shared purpose to make every moment matter.
        </motion.p>

        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="/contact"
          className="inline-block px-10 py-4 bg-white text-[#006D66] font-bold rounded-full shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-105"
        >
          Contact Our Team
        </motion.a>
      </section>

      <FooterComponent />
    </div>
  );
}
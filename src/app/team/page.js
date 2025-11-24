"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

export default function Team() {
  const videoRef = useRef(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
        } catch (err) {
          console.warn("Autoplay blocked:", err);
        }
      };
      playVideo();
    }
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* ===== HERO (TEXT LEFT + VIDEO RIGHT) ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">

        {/* LEFT TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left"
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
          className="relative w-full md:w-1/2 h-[40vh] md:h-[70vh]"
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover rounded-bl-[2rem] md:rounded-none"
            muted
            loop
            playsInline
            preload="none"
            decoding="async"
          >
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
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-[#006D66]/20">
            <Image
              src="/team1.png"
              alt="Founder of Hospice and Beyond"
              fill
              className="object-cover object-top rounded-full"
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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{ color: "#006D66" }}
            >
              Our Extended Family of Care
            </h2>

            {/* FIXED LINE BELOW */}
            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
              Compassion is a shared mission. Our team works together, blending medical
              expertise, emotional support, and spiritual care to meet every patient&apos;s unique
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
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <Image
              src="/teams.png"
              alt="Hospice and Beyond Extended Family of Care"
              width={800}
              height={600}
              className="object-contain w-[95%] sm:w-[90%] md:w-full h-auto max-w-[650px]"
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
          ].map((role, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#7D5F42" }}>
                {role}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed text-justify">
                Dedicated to compassionate, holistic, and coordinated care.
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
          className="text-white mb-6 text-lg max-w-2xl mx-auto text-justify"
        >
          Every heart that serves here is part of a shared purpose to make every moment matter.
        </motion.p>

        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-[#006D66] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Contact Our Team
        </motion.a>
      </section>

      <Footer />
    </div>
  );
}

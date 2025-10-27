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

      {/* ===== Hero Section with teams.mp4 ===== */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="none"
          decoding="async"
        >
          <source src="/teams.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center text-white px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Our Team of Compassion
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            A family of professionals and caregivers working together to bring
            comfort, dignity, and love to every patient we serve.
          </p>
        </motion.div>
      </section>

      {/* ===== Founder Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Founder Image */}
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

        {/* Founder Text */}
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
          <p className="text-gray-700 text-lg leading-relaxed">
            At the heart of Hospice and Beyond is our visionary founder — a
            compassionate leader whose mission is to restore dignity, warmth,
            and humanity to care. Her leadership inspires every nurse, chaplain,
            and caregiver to serve with love and excellence. Through her
            guidance, Hospice and Beyond has become a home of hope, healing, and
            heartfelt compassion.
          </p>
        </motion.div>
      </section>

      {/* ===== Our Extended Family of Care (Text Left / Image Right) ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Text Column (Left on Desktop) */}
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
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Compassion is a shared mission. Our team works together — blending
              medical expertise, emotional support, and spiritual care to meet
              every patient’s unique needs with grace and dedication.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              From physicians and nurses to chaplains and therapists, every
              member plays a vital role in creating comfort and connection when
              it matters most.
            </p>
          </motion.div>

          {/* Image Column (Right on Desktop) */}
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
              className="object-contain w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== Professional Roles Section ===== */}
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
            "Physical Therapist (P.T.)",
            "Occupational Therapist (O.T.)",
            "Speech Therapist (S.T.)",
          ].map((role, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#7D5F42" }}
              >
                {role}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Dedicated to compassionate, holistic, and coordinated care.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section
        className="py-16 text-center"
        style={{
          background: "linear-gradient(90deg, #006D66, #7D5F42)",
        }}
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
          className="text-white mb-6 text-lg max-w-2xl mx-auto"
        >
          Every heart that serves here is part of a shared purpose — to make
          every moment matter.
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

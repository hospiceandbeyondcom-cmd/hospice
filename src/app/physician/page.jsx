"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function PhysicianService() {
  const [videoVisible, setVideoVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Comprehensive Medical Assessment",
      image: "/physician1.png",
      description:
        "Our physicians conduct thorough evaluations to understand your overall health, medical history, and current symptoms. This helps us create a complete picture of your needs and guide every decision with clarity and precision.",
    },
    {
      title: "Pain & Symptom Control",
      image: "/physician2.png",
      description:
        "Expert management of pain, nausea, shortness of breath, and other discomforts using evidence-based treatments. Our goal is to bring relief while preserving dignity, independence, and comfort.",
    },
    {
      title: "Interdisciplinary Collaboration",
      image: "/physician3.png",
      description:
        "Our doctors work closely with nurses, therapists, and social workers to ensure every aspect of care — physical, emotional, and spiritual — is aligned and integrated for the best possible outcome.",
    },
    {
      title: "Medication Management",
      image: "/physician4.png",
      description:
        "We prescribe, monitor, and adjust medications with careful attention to side effects and interactions, ensuring every treatment supports your comfort and quality of life.",
    },
    {
      title: "Family Consultation & Education",
      image: "/physician5.png",
      description:
        "Our physicians provide clear communication and family education to help loved ones understand care options, progress, and realistic expectations with compassion and transparency.",
    },
    {
      title: "Continuity of Care",
      image: "/physician6.png",
      description:
        "We coordinate care seamlessly across home, hospital, and hospice settings — ensuring you always have a trusted medical partner by your side, no matter where your journey leads.",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-800 overflow-hidden">
        {/* === HERO SECTION === */}
        <section
          ref={heroRef}
          className="relative w-full py-24 md:h-[80vh] flex items-center justify-center overflow-hidden"
        >
          {videoVisible ? (
            <video
              src="/physician.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          ) : (
            <div className="absolute inset-0 bg-transparent" />
          )}

          <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
            >
              Physician Services
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Compassionate medical care led by experienced physicians focused
              on comfort, dignity, and holistic wellness.
            </motion.p>
          </div>
        </section>

        {/* === SERVICES SECTION === */}
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20 space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-md w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-4"
                  style={{ color: "#006D66" }}
                >
                  {service.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </section>

        {/* === CTA SECTION === */}
        <section
          className="relative w-full py-24 flex items-center justify-center overflow-hidden text-center px-6"
          style={{
            background: "linear-gradient(90deg, #006D66, #7D5F42)",
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug text-white">
              Skilled Hands, Compassionate Hearts
            </h2>
            <p className="text-base sm:text-lg text-white mb-8 leading-relaxed">
              Our physician team combines medical expertise with deep empathy —
              ensuring that every patient receives care rooted in respect,
              comfort, and excellence.
            </p>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-[#006D66] font-semibold px-8 sm:px-10 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-[1.05]"
            >
              Contact Us
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

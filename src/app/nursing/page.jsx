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

export default function NursingCare() {
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
      title: "24-Hour Skilled Nursing Support",
      image: "/nursing1.png",
      description:
        "Our dedicated nurses provide around-the-clock clinical care — including vital sign monitoring, medication administration, and comfort management — ensuring that every patient receives consistent, high-quality support.",
    },
    {
      title: "Personalized Care Plans",
      image: "/nursing2.png",
      description:
        "Each patient’s plan is customized based on individual needs, diagnosis, and preferences. From daily routines to advanced medical interventions, our nurses deliver care that reflects compassion and professionalism.",
    },
    {
      title: "Wound & Symptom Management",
      image: "/nursing3.png",
      description:
        "Expert wound care and symptom control reduce pain and prevent complications. Our nurses focus on healing, dignity, and comfort — empowering patients to live with confidence and ease.",
    },
    {
      title: "Education for Patients & Families",
      image: "/nursing4.png",
      description:
        "We believe knowledge brings peace of mind. Our nursing staff teaches families how to manage medications, recognize changes, and respond confidently to evolving care needs.",
    },
    {
      title: "Coordination with Physicians",
      image: "/nursing5.png",
      description:
        "Our nurses work hand-in-hand with your physician to update treatment plans, track progress, and ensure that every clinical decision supports the patient’s comfort and recovery goals.",
    },
    {
      title: "Home & Hospice Care Visits",
      image: "/nursing6.png",
      description:
        "From home visits to hospice environments, our nurses bring expert care directly to you — creating an atmosphere of warmth, safety, and personalized attention wherever you are.",
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
              src="/nursing.mp4"
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
              Nursing Care
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Compassionate, skilled nursing care dedicated to comfort, dignity,
              and quality of life at every stage.
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
              Compassion You Can Feel, Care You Can Trust
            </h2>
            <p className="text-base sm:text-lg text-white mb-8 leading-relaxed">
              Our nursing team stands beside you with clinical skill and
              heartfelt compassion — ensuring every patient experiences comfort,
              peace, and personalized attention.
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

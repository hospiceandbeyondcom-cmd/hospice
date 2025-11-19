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

export default function DurableEquipment() {
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
      title: "Reliable Home Medical Equipment",
      image: "/ment.png",
      description:
        "We provide hospital grade medical equipment that ensures safety, comfort, and convenience at home, helping patients maintain independence and dignity during care.",
    },
    {
      title: "Mobility and Support Aids",
      image: "/equipment2.png",
      description:
        "From wheelchairs and walkers to bedside rails and patient lifts, we supply reliable mobility aids that reduce strain for patients and caregivers while improving daily comfort.",
    },
    {
      title: "Respiratory and Oxygen Therapy",
      image: "/equipment3.png",
      description:
        "Our respiratory support tools include oxygen concentrators- all maintained and serviced regularly for optimal performance and safety.",
    },
    {
      title: "Pressure Relief and Comfort Systems",
      image: "/equipment4.png",
      description:
        "We offer relief mattresses, positioning devices, and specialized cushions that prevent skin breakdown and promote relaxation for long term patients.",
    },
    // The "Monitoring and Safety Devices" section (index 4 in the original array) has been removed.
    {
      title: "Delivery, Setup and Maintenance",
      image: "/equipment6.png",
      description:
        "Our logistics team handles equipment delivery, in home setup, and training. We ensure everything is functioning properly and replace items promptly when needed.",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-800 overflow-hidden">
        {/* ===== HERO (Blog Style: Text Left + Video Right) ===== */}
        <section
          ref={heroRef}
          className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]"
        >
          {/* LEFT TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left"
          >
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug"
              style={{
                background: "linear-gradient(90deg, #006D66, #7D5F42)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Durable Medical Equipment
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
              Providing dependable hospital grade equipment that enhances comfort, safety,
              mobility, and independence for patients receiving care at home.
            </p>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full md:w-1/2 h-[45vh] md:h-[70vh] relative"
          >
            {videoVisible ? (
              <video
                src="/equip.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover rounded-bl-[2rem] md:rounded-none"
              ></video>
            ) : (
              <div className="absolute inset-0 bg-transparent"></div>
            )}

            {/* Mobile Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent md:hidden"></div>
          </motion.div>
        </section>

        {/* ===== SERVICES LIST ===== */}
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
              <div className="w-full md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-md w-full h-auto object-cover"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#006D66" }}>
                  {service.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ===== CTA SECTION ===== */}
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
              Reliable Equipment, Seamless Care
            </h2>
            <p className="text-base sm:text-lg text-white mb-8 leading-relaxed text-justify">
              From delivery to maintenance, we ensure every piece of equipment supports comfort,
              safety, and peace of mind every single day.
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
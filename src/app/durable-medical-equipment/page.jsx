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
      image: "/equipment1.png",
      description:
        "We provide hospital-grade medical equipment that ensures safety, comfort, and convenience at home — helping patients maintain independence and dignity during care.",
    },
    {
      title: "Mobility & Support Aids",
      image: "/equipment2.png",
      description:
        "From wheelchairs and walkers to bedside rails and patient lifts, we supply reliable mobility aids that reduce strain for patients and caregivers while improving daily comfort.",
    },
    {
      title: "Respiratory & Oxygen Therapy",
      image: "/equipment3.png",
      description:
        "Our respiratory support tools include oxygen concentrators, nebulizers, and ventilator accessories — all maintained and serviced regularly for optimal performance and safety.",
    },
    {
      title: "Pressure Relief & Comfort Systems",
      image: "/equipment4.png",
      description:
        "We offer pressure-relief mattresses, positioning devices, and specialized cushions that prevent skin breakdown and promote relaxation for long-term patients.",
    },
    {
      title: "Monitoring & Safety Devices",
      image: "/equipment5.png",
      description:
        "Our monitors, alert systems, and vital sign devices help families and nurses track health indicators and respond quickly to changes in patient condition.",
    },
    {
      title: "Delivery, Setup & Maintenance",
      image: "/equipment6.png",
      description:
        "Our logistics team handles equipment delivery, in-home setup, and training. We ensure everything is functioning properly — and replace items promptly when needed.",
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
              src="/equipment.mp4"
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
              Durable Medical Equipment
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Providing dependable, hospital-grade equipment for comfort, safety, and care at home.
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
              Reliable Equipment, Seamless Care
            </h2>
            <p className="text-base sm:text-lg text-white mb-8 leading-relaxed">
              From delivery to maintenance, we ensure every piece of equipment supports patient
              comfort, safety, and peace of mind — every single day.
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

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

export default function SocialService() {
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
      title: "Emotional and Family Counseling",
      image: "/social1.png",
      description:
        "Our licensed social workers provide compassionate counseling for patients and families coping with illness, grief, and life transitions. We help you process emotions, find strength, and navigate complex decisions together.",
    },
    {
      title: "Resource and Benefits Assistance",
      image: "/social2.png",
      description:
        "We connect families to community resources, financial aid programs, and support services. From insurance guidance to government benefits, our goal is to ease your financial and emotional stress based on your eligibility.",
    },
    {
      title: "Care Coordination and Advocacy",
      image: "/social3.png",
      description:
        "Our social workers act as advocates and coordinators, ensuring every patient receives seamless care across physicians, nurses, and community organizations so nothing is overlooked and every need is met.",
    },
    {
      title: "Crisis Intervention and Support",
      image: "/social4.png",
      description:
        "During moments of crisis, our team provides immediate emotional support, crisis planning, and compassionate guidance to stabilize families and help them feel supported through difficult times.",
    },
    {
      title: "End of Life Planning and Guidance",
      image: "/social5.png",
      description:
        "We walk with families through sensitive end of life discussions, offering emotional presence and practical help with advance directives, memorial wishes, and family communication.",
    },
    {
      title: "Community and Bereavement Resources",
      image: "/social6.png",
      description:
        "Beyond immediate care, we connect families to ongoing support groups, faith based organizations, and bereavement networks, helping loved ones find healing in community after loss.",
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
              src="/social.mp4"
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
              Social Services
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Compassionate support for families navigating care, emotions, and
              community resources.
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
              Support That Extends Beyond Care
            </h2>
            <p className="text-base sm:text-lg text-white mb-8 leading-relaxed">
              Our Social Services team helps you access care, comfort, and
              community resources, ensuring no family walks this journey alone.
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

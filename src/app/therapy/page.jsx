"use client";
import { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

export default function TherapyService() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
          setVideoReady(true);
        } catch (err) {
          console.warn("Autoplay blocked:", err);
        }
      };
      playVideo();
    }
  }, []);

  const services = [
    {
      title: "Pharmacy Services",
      image: "/therapy1.png",
      description:
        "Our pharmacy team provides safe, timely, and personalized medication management for patients under hospice and palliative care. We coordinate prescriptions, ensure proper dosing, and guide families on how to safely administer medications to maintain comfort and symptom control at every stage.",
    },
    {
      title: "Physiotherapy",
      image: "/therapy2.png",
      description:
        "Our physiotherapists help patients maintain strength, balance, and mobility through gentle exercise, positioning, and movement training. Each program is customized to relieve pain, improve circulation, and promote ease of motion — enabling patients to enjoy better comfort and independence day to day.",
    },
    {
      title: "Occupational Therapy",
      image: "/therapy3.png",
      description:
        "Our occupational therapy team focuses on helping patients perform everyday activities with confidence and safety. We assess living environments, recommend adaptive tools, and teach energy-conservation techniques that make daily routines easier and more comfortable for patients and caregivers alike.",
    },
    {
      title: "Speech Therapy",
      image: "/therapy4.png",
      description:
        "Speech-language pathologists assist patients experiencing communication or swallowing challenges. Using gentle, evidence-based techniques, our team improves speech clarity, enhances swallowing safety, and supports meaningful interaction with family and caregivers.",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          muted
          loop
          playsInline
          preload="none"
          decoding="async"
          style={{
            transform: videoReady ? "scale(1)" : "scale(1.02)",
            transition: "transform 1s ease-out",
          }}
        >
          <source src="/therapy.mp4" type="video/mp4" />
        </video>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Therapy Services
          </h1>
          <p className="text-white text-lg md:text-xl mt-3 drop-shadow-md max-w-2xl mx-auto">
            Restorative therapies that combine clinical care and compassion — to
            improve comfort, function, and connection.
          </p>
        </div>
      </section>

      {/* ===== Therapy Branches Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
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
              <h2
                className="text-2xl md:text-3xl font-semibold mb-4"
                style={{ color: "#006D66" }}
              >
                {service.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ===== CTA Section ===== */}
      <section
        className="py-16 text-center"
        style={{
          background: "linear-gradient(90deg, #006D66, #7D5F42)",
        }}
      >
        <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
          Healing That Restores Body and Spirit
        </h3>
        <p className="text-white mb-6 text-lg max-w-2xl mx-auto">
          Through pharmacy, physiotherapy, occupational, and speech therapy, we
          help patients experience comfort, dignity, and confidence — every step
          of the way.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-[#006D66] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}

"use client";
import { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

export default function PalliativeCare() {
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
      title: "Pain & Symptom Management",
      image: "/palliative1.png",
      description:
        "Our palliative team provides expert medical care focused on relieving pain, managing symptoms, and improving comfort at every stage of illness. Through personalized plans, we help patients experience better days with dignity and relief.",
    },
    {
      title: "Emotional & Spiritual Support",
      image: "/palliative2.png",
      description:
        "Illness affects more than the body — it touches the mind and spirit. Our counselors and chaplains walk alongside patients and families, offering comfort, prayer, and a listening ear through every season of care.",
    },
    {
      title: "Family & Caregiver Guidance",
      image: "/palliative3.png",
      description:
        "We empower families with education, support, and tools to provide compassionate care. From medication understanding to emotional resilience, our team ensures caregivers never feel alone or unprepared.",
    },
    {
      title: "Home-Based Medical Support",
      image: "/palliative4.png",
      description:
        "Palliative care meets you where you are — in your home, assisted living, or hospital. We coordinate visits, medications, and equipment so that comfort and convenience remain central to every patient’s experience.",
    },
    {
      title: "Advance Care Planning",
      image: "/palliative5.png",
      description:
        "Our professionals help patients and families make informed decisions about treatment options, future care preferences, and goals — ensuring every voice is heard, honored, and respected.",
    },
    {
      title: "Rehabilitation & Quality of Life",
      image: "/palliative6.png",
      description:
        "Physical and occupational therapists support mobility, independence, and daily wellbeing. Even in serious illness, our goal is simple: to help every person live fully and meaningfully.",
    },
  ];

  const stages = [
    {
      number: "01",
      title: "Creating Awareness & Understanding",
      description:
        "The first stage focuses on helping patients and families understand what palliative care truly means — not as end-of-life care alone, but as comfort-centered support that enhances quality of life.",
    },
    {
      number: "02",
      title: "Assessment & Care Planning",
      description:
        "Our team works with patients and families to assess medical, emotional, and spiritual needs. Together, we develop a personalized care plan that aligns with your values, preferences, and goals.",
    },
    {
      number: "03",
      title: "Symptom Control & Active Care",
      description:
        "At this stage, care centers on relieving pain and managing symptoms such as fatigue, anxiety, and breathlessness. Medical and therapeutic teams coordinate to maintain comfort and stability.",
    },
    {
      number: "04",
      title: "Emotional, Social & Spiritual Support",
      description:
        "Beyond medical treatment, palliative care strengthens emotional wellbeing and provides counseling, social work, and spiritual guidance — helping families navigate each step with compassion and peace.",
    },
    {
      number: "05",
      title: "Transition & Bereavement Care",
      description:
        "When the patient’s journey transitions, our team continues to support families through grief counseling, memorial support, and follow-up care — ensuring no one faces loss alone.",
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
          <source src="/palliative.mp4" type="video/mp4" />
        </video>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Palliative Care Services
          </h1>
          <p className="text-white text-lg md:text-xl mt-3 drop-shadow-md max-w-2xl mx-auto">
            Providing expert care, emotional support, and dignity — every step
            of the way.
          </p>
        </div>
      </section>

      {/* ===== Services Section ===== */}
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

      {/* ===== 5 Stages of Palliative Care ===== */}
      <section className="bg-[#f9fafb] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{ color: "#006D66" }}
          >
            The 5 Stages of Palliative Care
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16">
            Palliative care is a journey that evolves with every individual’s
            needs. These five stages ensure care remains compassionate,
            structured, and centered on dignity from start to finish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="text-4xl font-extrabold mb-4"
                  style={{ color: "#7D5F42" }}
                >
                  {stage.number}
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#006D66" }}
                >
                  {stage.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section
        className="py-16 text-center"
        style={{
          background: "linear-gradient(90deg, #006D66, #7D5F42)",
        }}
      >
        <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
          Compassion That Walks With You
        </h3>
        <p className="text-white mb-6 text-lg max-w-2xl mx-auto">
          Our Palliative Care team is here to support your comfort, guide your
          family, and help you live fully — one day at a time.
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

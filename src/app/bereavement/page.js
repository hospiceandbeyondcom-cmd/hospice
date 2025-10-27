"use client";
import { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

export default function BereavementCare() {
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
      title: "Emotional Healing and Counseling",
      image: "/bereavement1.png",
      description:
        "Our grief counselors provide a safe, understanding space where individuals and families can express emotions freely. Through guided sessions, we help you process loss, rediscover peace, and find strength in healing.",
    },
    {
      title: "Family Grief Support",
      image: "/bereavement2.png",
      description:
        "Families often grieve in different ways. Our support programs foster communication and connection through family therapy, ensuring no one carries the weight of loss alone.",
    },
    {
      title: "Memorial and Remembrance Planning",
      image: "/bereavement3.png",
      description:
        "We help families design personalized remembrance events and moments that celebrate the life of a loved one, offering space for reflection, gratitude, and closure.",
    },
    {
      title: "Spiritual and Faith Based Guidance",
      image: "/bereavement4.png",
      description:
        "Our chaplains and spiritual advisors offer faith centered comfort for those seeking meaning and hope after loss, respecting all beliefs and traditions with deep compassion.",
    },
    {
      title: "Community Resources and Workshops",
      image: "/bereavement5.png",
      description:
        "We connect you with grief workshops, support groups, and community resources to help you rebuild life with resilience and a sense of belonging after loss.",
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
          <source src="/bereavement.mp4" type="video/mp4" />
        </video>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Bereavement and Healing Care
          </h1>
          <p className="text-white text-lg md:text-xl mt-3 drop-shadow-md max-w-2xl mx-auto">
            Walking with you through grief, helping hearts heal and hope return.
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

      {/* ===== CTA Section ===== */}
      <section
        className="py-16 text-center"
        style={{
          background: "linear-gradient(90deg, #006D66, #7D5F42)",
        }}
      >
        <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
          Healing Is a Journey We Walk With You
        </h3>
        <p className="text-white mb-6 text-lg max-w-2xl mx-auto">
          Our bereavement team offers comfort, understanding, and strength as
          you navigate loss. Together, we will find light in the moments that
          matter most.
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

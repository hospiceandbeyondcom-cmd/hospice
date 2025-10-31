"use client";
import { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function MITE() {
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

  const myths = [
    { myth: "Hospice means giving up hope.", truth: "Hospice focuses on quality of life, not giving up. Patients and families often discover deeper connection, peace, and even improved comfort through hospice care." },
    { myth: "Hospice is only for people who have just a few days left.", truth: "Hospice can begin as soon as a doctor certifies a life expectancy of six months or less. Early admission provides more time for comfort, support, and meaningful moments." },
    { myth: "Hospice is a place you go to.", truth: "Hospice is a service, not a location. It brings care to you, at home, in a nursing facility, or wherever you live." },
    { myth: "Choosing hospice means the doctor has given up.", truth: "Hospice care includes physicians who work closely with your doctor to ensure comfort and dignity. It is a shift in focus, not abandonment of care." },
    { myth: "Hospice care makes people die sooner.", truth: "Studies show that patients receiving hospice often live longer due to better symptom control and reduced stress." },
    { myth: "Only cancer patients can receive hospice.", truth: "Hospice serves people with many life limiting illnesses including heart disease, dementia, COPD, kidney failure, and stroke." },
    { myth: "Hospice takes away all medications.", truth: "Hospice provides medications for comfort and symptom relief. Pain, nausea, and anxiety are carefully managed with prescribed treatments." },
    { myth: "You can’t see your regular doctor while on hospice.", truth: "You may keep your own doctor, who can collaborate with the hospice medical team to honor your care plan and wishes." },
    { myth: "Families lose control when hospice takes over.", truth: "Families remain at the heart of all decisions. Hospice empowers patients and loved ones to choose what matters most." },
    { myth: "Hospice is too expensive.", truth: "Hospice is covered 100% by Medicare, Medicaid, and most private insurance plans, including medications, equipment, and visits." },
    { myth: "Hospice means no medical care.", truth: "Hospice provides 24/7 medical support from nurses, doctors, and aides focused on comfort, dignity, and peace." },
    { myth: "You have to stop all treatments to receive hospice.", truth: "You can still receive treatments that manage symptoms or improve comfort, even under hospice care." },
    { myth: "Hospice ends when the patient dies.", truth: "Hospice continues supporting families through bereavement care and grief counseling for at least 13 months after loss." },
    { myth: "Hospice is only for older adults.", truth: "Hospice supports anyone, regardless of age, including younger adults and children, focusing on compassion and dignity." },
    { myth: "Once you start hospice, you can’t change your mind.", truth: "You may choose to stop hospice care anytime and resume curative treatment if you wish. You can also rejoin hospice later if needed." },
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
          <source src="/myth.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Myths and Truths About Hospice Care
          </h1>
          <p className="text-white text-lg md:text-xl mt-3 drop-shadow-md max-w-2xl mx-auto">
            Clearing misconceptions, revealing the truth about compassion,
            comfort, and dignity in hospice care.
          </p>
        </div>
      </section>

      {/* ===== Myth Section ===== */}
      <section className="max-w-6xl mx-auto w-full px-6 py-20">
        <h2
          className="text-3xl md:text-4xl font-semibold text-center mb-12"
          style={{ color: "#006D66" }}
        >
          15 Common Myths and Their Truths
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {myths.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#7D5F42" }}
              >
                Myth {index + 1}: {item.myth}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <span
                  className="font-medium"
                  style={{ color: "#006D66" }}
                >
                  Truth:
                </span>{" "}
                {item.truth}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Call to Action ===== */}
      <section
        className="py-16 text-center"
        style={{
          background: "linear-gradient(90deg, #006D66, #7D5F42)",
        }}
      >
        <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
          Understanding Brings Peace.
        </h3>
        <p className="text-white mb-6 text-lg">
          Our team is always here to clarify, support, and guide with honesty
          and compassion.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-[#006D66] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Contact Hospice and Beyond
        </a>
      </section>

      <Footer />
    </div>
  );
}

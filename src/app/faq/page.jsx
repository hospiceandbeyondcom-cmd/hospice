"use client";
import { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function FAQ() {
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

  const faqs = [
    {
      question: "When should a family consider hospice care?",
      answer:
        "Hospice should be considered when a patient’s illness is no longer responding to curative treatment and the focus shifts to comfort and quality of life. Early enrollment allows families to benefit from months of medical, emotional, and spiritual support rather than only the final days.",
    },
    {
      question: "Who qualifies for hospice care?",
      answer:
        "Any individual with a life expectancy of six months or less, as certified by a physician, may be eligible for hospice. Eligibility can be extended through recertification if the condition continues to warrant comfort-focused care.",
    },
    {
      question: "Does choosing hospice mean we are giving up hope?",
      answer:
        "Not at all. Hospice is about redefining hope — from curing the illness to finding peace, comfort, and meaning in every remaining moment. Many families discover that hospice brings more time, less stress, and greater emotional connection.",
    },
    {
      question: "What is the difference between hospice and palliative care?",
      answer:
        "Palliative care can begin at any stage of a serious illness, alongside curative treatments. Hospice begins when treatment goals shift fully to comfort care for a person with a life-limiting diagnosis.",
    },
    {
      question: "Who pays for hospice care?",
      answer:
        "Hospice is typically covered 100% by Medicare, Medicaid, and most private insurance plans. This includes all related medications, supplies, equipment, and professional visits. Our financial counselors will help ensure there are no unexpected costs.",
    },
    {
      question: "Can hospice care be provided at home?",
      answer:
        "Yes. The majority of hospice care takes place wherever the patient resides — home, nursing facility, assisted living, or group home. Our team brings all necessary care, medications, and supplies directly to you.",
    },
    {
      question: "Can I keep my personal doctor while under hospice?",
      answer:
        "Absolutely. Your personal physician may continue to be involved, working alongside our hospice medical director to coordinate your care plan and ensure every decision reflects your wishes.",
    },
    {
      question: "What happens if symptoms become difficult to manage at home?",
      answer:
        "If pain or distress cannot be safely managed at home, we can arrange short-term inpatient or continuous home care. Our team remains closely involved to ensure comfort and safety until you can return home.",
    },
    {
      question: "What support is available for family members and caregivers?",
      answer:
        "Families are the heart of hospice. We provide caregiver education, 24/7 on-call nursing guidance, social work support, chaplain visits, and grief counseling — all designed to help families feel confident, supported, and never alone.",
    },
    {
      question: "How long does hospice care last?",
      answer:
        "Hospice care continues for as long as it is medically necessary and beneficial. Many patients receive hospice for months. If the condition improves, patients may be discharged — and they can re-enroll at any time if needed.",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section (Starts from Top) ===== */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden mt-0 pt-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-top will-change-transform"
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
          <source src="/FAQ.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/0"></div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className="text-white text-lg md:text-xl mt-3 drop-shadow-md max-w-2xl mx-auto">
            Compassionate answers to help you understand hospice care and make
            confident choices for you and your loved ones.
          </p>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="max-w-6xl mx-auto w-full px-6 py-20">
        <h2
          className="text-3xl md:text-4xl font-semibold text-center mb-12"
          style={{ color: "#006D66" }}
        >
          10 Important Questions and Their Answers
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#7D5F42" }}
              >
                Q{index + 1}: {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-medium" style={{ color: "#006D66" }}>
                  Answer:
                </span>{" "}
                {faq.answer}
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
          Still Have Questions?
        </h3>
        <p className="text-white mb-6 text-lg">
          Our hospice team is available 24/7 to listen, guide, and support you.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-[#006D66] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Contact Us Anytime
        </a>
      </section>

      <Footer />
    </div>
  );
}

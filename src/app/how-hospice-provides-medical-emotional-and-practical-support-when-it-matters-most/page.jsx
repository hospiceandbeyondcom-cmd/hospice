"use client";

import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HowHospiceProvidesSupport() {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #FAFAF8 0 percent, #FDFCF9 60 percent, #F7F5EF 100 percent)",
      }}
    >
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm rounded-b-[2rem]">

        {/* Text Side */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left"
        >
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 leading-snug"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            How Hospice Provides Medical Emotional and Practical Support When It Matters Most
          </h1>

          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Nov 18, 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify max-w-xl mx-auto md:mx-0">
            Hospice care surrounds patients and families with a circle of support that touches every part of life. From medical comfort to emotional presence to the everyday tasks that become overwhelming, hospice provides steady hands and compassionate hearts during the moments that matter most.
          </p>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[45vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog18.png"
            alt="How Hospice Provides Support"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
        </motion.div>
      </section>

      {/* ===== Main Content ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >
        <p className="text-lg leading-relaxed mb-6 text-justify">
          Hospice support is designed to bring comfort rather than cure. It focuses on relieving pain, easing symptoms, and bringing peace to both the patient and their family. The medical team works gently and intentionally to ensure that the final months or weeks feel as comfortable and dignified as possible.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          But hospice goes far beyond medical care. Emotional support is offered not only to the patient but also to family members who are navigating fear, uncertainty, and anticipatory grief. A hospice nurse sitting at the bedside, a social worker listening with patience, or a chaplain offering a quiet prayer can bring profound comfort.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Practical support matters too especially when daily responsibilities begin to feel overwhelming. Hospice teams assist with medication management, equipment needs, personal care tasks, and guidance on what to expect physically and emotionally. This helps families feel less alone and more prepared.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Many families say that one of the greatest gifts hospice offers is presence. Someone who answers the phone when you panic at midnight. Someone who reassures you that you are doing your best. Someone who reminds you that you do not have to carry everything by yourself. This shared care becomes a source of strength.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          When the journey feels heavy, hospice becomes a soft place to land a space where compassion, skill, and understanding come together. It is a reminder that even in the most tender chapters, you and your loved one deserve comfort, guidance, and steady support every step of the way.
        </p>

        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/hospice-eligibility-questionnaire")}
            className="px-8 py-3 rounded-full font-semibold text-white shadow-md transition hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
            }}
          >
            Take Your Eligibility Questionnaire
          </button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

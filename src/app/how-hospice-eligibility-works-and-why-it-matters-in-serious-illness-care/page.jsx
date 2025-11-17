"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HowHospiceEligibilityWorksAndWhyItMatters() {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #FAFAF8 0%, #FDFCF9 60%, #F7F5EF 100%)",
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
            className="text-3xl md:text-5xl font-bold mb-4 leading-snug"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            How Hospice Eligibility Works and Why It Matters in Serious Illness Care
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Nov 16, 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Understanding hospice eligibility can bring clarity at a time when
            families often feel overwhelmed. This gentle guide explains why
            eligibility matters and how it supports comfort dignity and peace.
          </p>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog16.png"
            alt="How Hospice Eligibility Works"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent md:hidden" />
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
          When a loved one begins to experience a serious illness families often
          try to understand what comes next. Hospice eligibility is one of the
          questions that appears early and it can feel heavy when everything
          feels uncertain. The heart of hospice eligibility is not about giving
          up. It is about choosing comfort and dignity during a time when ease
          matters deeply.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Hospice teams look at the full picture of a persons health. This
          includes noticeable changes in appetite strength energy and daily
          abilities. It also includes the natural progression of the illness.
          The goal is to understand when a person would benefit more from
          comfort focused care rather than treatments that may add strain. This
          is never a decision made alone. It is shaped by compassion clinical
          insight and the wisdom of families who know their loved one deeply.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          When someone becomes eligible for hospice the shift in care often
          brings a sense of relief. Families commonly describe the atmosphere
          becoming softer calmer and more supportive. Pain and discomfort are
          managed with skill and tenderness daily tasks become easier with help
          and families feel held rather than overwhelmed. Hospice brings a sense
          of togetherness that allows loved ones to focus on moments that truly
          matter.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Understanding eligibility means families do not wait for a crisis to
          seek support. Instead they invite comfort earlier and allow space for
          emotional connection meaningful time and gentle care. Eligibility
          does not signal an ending. It opens the door to a different kind of
          support one that honors the person and the life they have lived.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          If you are unsure whether it may be time to explore hospice a quiet
          conversation with a care team can provide clarity and reassurance.
          Every journey is unique but understanding your options can bring a
          sense of calm to the path ahead.
        </p>

        <div className="mt-12 text-center">
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

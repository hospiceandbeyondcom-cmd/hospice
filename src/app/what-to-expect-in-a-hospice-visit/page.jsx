"use client";

import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function WhatToExpectInAHospiceVisit() {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #FAFAF8 0 percent, #FDFCF9 60 percent, #F7F5EF 100 percent)",
      }}
    >
      <Header />

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
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
            What to Expect in a Hospice Visit
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">Dec 2 2025</p>

          {/* INTRO PARAGRAPH — ONLY HERE */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            A hospice visit far from being intrusive is a structured compassionate
            process designed to optimize comfort and support for the patient and
            their family during end of life care. The core focus is on understanding
            goals managing symptoms and providing comprehensive support. This process
            is standardized ensuring you know exactly what to expect from the moment
            the hospice professional arrives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog28.png"
            alt="What to Expect in a Hospice Visit"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
        </motion.div>
      </section>

      {/* MAIN CONTENT (NO INTRO HERE) */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >
        <h2 className="text-2xl font-semibold mb-6">
          Understanding Your Hospice Visit A Guide to the Care Process
        </h2>

        <h3 className="text-xl font-semibold mb-4">Key Components of a Typical Visit</h3>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          While the length and specific activities may vary based on the professional
          nurse social worker aide or chaplain a standard visit typically follows
          these steps.
        </p>

        <h3 className="text-xl font-semibold mb-4">1 Arrival and Initial Check in</h3>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          The visit begins with the caregiver usually a Registered Nurse arriving at
          your home and checking in with the primary caregiver or patient. They will
          confirm the patient's immediate comfort level and any significant changes
          since the last visit. This is a crucial opportunity to communicate any new
          concerns or symptom flare ups.
        </p>

        <h3 className="text-xl font-semibold mb-4">2 Comprehensive Patient Assessment</h3>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          The nurse will perform a thorough physical and mental status assessment.
          They will check vital signs pain nausea breathing difficulty anxiety and
          other symptoms. They will also review medications ensuring correct
          administration and preventing shortage while teaching the family how to
          give comfort medications when needed.
        </p>

        <h3 className="text-xl font-semibold mb-4">3 Care Planning and Goal Setting</h3>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Hospice care is centered on the patient's wishes. The nurse ensures the
          Plan of Care aligns with the patient's comfort goals and identifies
          equipment needs symptom changes or required team visits.
        </p>

        <h3 className="text-xl font-semibold mb-4">4 Emotional and Practical Support</h3>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          If a Social Worker or Chaplain is visiting the focus shifts to emotional
          spiritual and practical needs. The Social Worker assists with resources and
          coping while the Chaplain provides spiritual care based on the family's
          faith or preferences.
        </p>

        <h3 className="text-xl font-semibold mb-4">5 Documentation and Next Steps</h3>

        <p className="text-lg leading-relaxed text-justify">
          Before leaving the caregiver completes documentation summarizes findings
          updates the care plan and schedules the next visit. This ensures smooth
          communication across the hospice team and gives the family space to ask
          questions.
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

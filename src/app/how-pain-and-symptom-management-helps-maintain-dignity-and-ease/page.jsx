"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HowPainAndSymptomManagementHelpsMaintainDignityAndEase() {
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

      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm rounded-b-[2rem]">

        {/* TEXT SIDE */}
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
            How Pain and Symptom Management Helps Maintain Dignity and Ease
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Nov 22, 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Pain and symptom management plays a central role in helping patients remain comfortable
            and supported during advanced illness. When discomfort is controlled with care and skill,
            patients are able to experience more moments of connection, calm, and dignity.
          </p>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog22.png"
            alt="Pain and Symptom Management"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
        </motion.div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Effective pain and symptom management helps patients remain present and comfortable,
          even as their illness progresses. When discomfort is eased, patients regain the ability
          to rest, breathe calmly, and engage more fully with the people they love. Managing pain
          is not only about physical relief. It is also about restoring a sense of ease and control
          during a time that can feel unpredictable.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Hospice teams carefully tailor each plan based on the needs of the individual. Medications
          are adjusted thoughtfully, and symptoms like breathlessness, anxiety, nausea, and fatigue
          are addressed with a combination of medical expertise and compassionate care. This detailed
          attention allows patients to feel understood and supported through each moment.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Pain management also plays a powerful role in preserving dignity. When pain is controlled,
          patients are able to move more comfortably, communicate more clearly, and experience better
          quality of life. Families often notice that their loved one becomes more relaxed, more at
          peace, and more connected to their surroundings when symptoms are under control. These
          shifts create meaningful moments that would be difficult to experience without proper care.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Another important aspect of symptom management is emotional support. When patients feel
          physically calmer, fear and distress begin to soften. Hospice teams provide gentle guidance,
          clear communication, and reassurance that the patient’s comfort is always the top priority.
          Families also receive support, helping them navigate the emotional weight of seeing someone
          they love navigate illness.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Pain and symptom management ensures that comfort, dignity, and compassion remain at the
          center of care. By relieving suffering and honoring each person’s experience, hospice teams
          help patients and families feel more grounded and more connected through every part of the
          journey.
        </p>

        {/* CTA BUTTON */}
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

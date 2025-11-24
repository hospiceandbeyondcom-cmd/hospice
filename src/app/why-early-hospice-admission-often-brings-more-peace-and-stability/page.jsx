"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function WhyEarlyHospiceAdmissionOftenBringsMorePeaceAndStability() {
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
            Why Early Hospice Admission Often Brings More Peace and Stability
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Nov 25, 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Early hospice admission gives families the gift of time, support, and comfort.
            When hospice care begins sooner rather than later, patients and families often
            experience more stability, less stress, and a deeper sense of peace.
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
            src="/blog25.png"
            alt="Early Hospice Admission Peace"
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
          Many people believe hospice care is only for the final days of life, but early
          admission can make an enormous difference in comfort and emotional wellbeing.
          When hospice begins sooner, families have more time to build trust with the care
          team, more time to receive support, and more space to plan thoughtfully rather
          than under pressure.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Early hospice care helps manage symptoms more effectively. Pain, anxiety, breathing
          challenges, and discomfort can be addressed before they intensify. This creates a
          calmer, more stable environment for both the patient and their loved ones. With a
          consistent care plan in place, families feel less overwhelmed by sudden changes
          because they already have guidance and support.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Another benefit of early admission is the emotional support it provides. Hospice teams
          offer counseling, guidance, and reassurance for both patients and families. This
          support helps reduce fear, strengthens communication, and creates space for meaningful
          moments together. Families often feel more grounded when they have time to understand
          what to expect and how to navigate each stage of the journey.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Early hospice care also gives families access to essential resources such as equipment,
          medications, and home support. These tools make caregiving easier and improve overall
          comfort. When these resources are available early, families spend less energy on logistics
          and more time connecting with their loved one.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          By choosing hospice earlier, families give themselves the opportunity to experience peace,
          clarity, and stability throughout the journey. It allows loved ones to focus on presence,
          connection, and emotional closeness, rather than stress and uncertainty.
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

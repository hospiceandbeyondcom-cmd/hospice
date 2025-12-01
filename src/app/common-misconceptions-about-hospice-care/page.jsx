"use client";

import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CommonMisconceptionsAboutHospiceCare() {
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

      {/* HERO SECTION */}
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
            Common Misconceptions About Hospice Care
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">Dec 1 2025</p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Many families hesitate to consider hospice because of misunderstandings
            about what hospice truly provides. These misconceptions can delay support
            that brings comfort clarity and meaningful care during the most difficult
            stages of a serious illness.
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
            src="/blog27.png"
            alt="Common Misconceptions About Hospice Care"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >
        <p className="text-lg leading-relaxed mb-6 text-justify">
          One common misunderstanding is the idea that hospice care is only for the
          final days of life. In reality hospice is appropriate for individuals with
          a life expectancy of about six months or less. Many patients receive hospice
          care for months benefiting from greater comfort and stability over time.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Another misconception is that choosing hospice means losing hope. Hospice
          does not remove hope it redirects it toward comfort peace and meaningful
          time with loved ones. Many families feel more supported and connected once
          hospice services begin.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Some believe hospice means stopping all medications but that is not true.
          Hospice continues medications that support comfort symptom relief and
          quality of life. Care becomes more focused not withdrawn.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          It is also a misconception that hospice must be provided in a facility.
          Most hospice care happens right at home where the patient feels safest.
          The hospice team visits regularly to provide coordinated physical emotional
          and spiritual support.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Another misunderstanding is that hospice is only for the patient. Hospice is
          a family centered approach. Nurses social workers aides and chaplains help
          families navigate uncertainty with clarity compassion and guidance.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          By understanding what hospice truly offers families can make informed
          choices that bring dignity comfort and peace during lifes most tender
          chapters.
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

"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function WhatFamiliesShouldKnowInTheFirstDaysAfterASeriousDiagnosis() {
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
            What Families Should Know in the First Days After a Serious Diagnosis
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Nov 20, 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            The first days after a serious diagnosis can feel overwhelming for any family.
            There is often a mix of fear, uncertainty, and the pressure to make decisions
            that feel too big for the moment. During this time, what families need most is
            clarity, calm guidance, and reassurance that they are not facing the journey alone.
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
            src="/blog20.png"
            alt="What Families Should Know After a Diagnosis"
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
          The first thing families should understand is that they do not need to have all the
          answers at once. A serious diagnosis is difficult to process, and it takes time for
          the mind to absorb what it means. Asking questions, seeking clarity, and allowing
          information to settle is not only normal but important. Medical teams are prepared
          to explain the diagnosis, expected changes, and available treatment or support
          options more than once if needed.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Families should also be aware that support is available immediately. Many people do
          not realize how many resources exist in those early days. Nurses, social workers,
          counselors, and palliative care specialists are all available to provide comfort,
          answer questions, and guide both patients and families through the emotional weight
          of the moment. Their role is not limited to medical care alone. They also help reduce
          fear, stress, and confusion by offering steady reassurance.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Emotional reactions in the early stage can vary widely. Some people feel numb, others
          feel afraid, and some feel the immediate need to take action. All of these emotional
          responses are natural. There is no right or wrong way to feel after a difficult
          diagnosis. What matters is creating space for the emotions that appear and supporting
          one another through them. Families who communicate openly and stay connected often
          feel more prepared and more grounded as the days unfold.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          The early days are also a time for compassion. Compassion for the patient, compassion
          for the family, and compassion for yourself. It is important to remember that you do
          not need to navigate everything alone. With proper information, emotional support, 
          and the presence of a caring medical team, the next steps become clearer. Even during
          a challenging moment, there can be calm, direction, and comfort.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          If you or someone you love has just received a serious diagnosis, help is available.
          Support can begin now. You do not have to wait to receive clarity, comfort, and care.
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

"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TheQuietButEssentialRoleOfHospiceNursesInDailyPatientComfort() {
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
            The Quiet but Essential Role of Hospice Nurses in Daily Patient Comfort
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Nov 21, 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Hospice nurses bring comfort and reassurance into every moment of care. Their role is steady,
            compassionate, and deeply rooted in helping patients feel safe, supported, and understood.
            Even in silence, their presence provides a sense of calm that families never forget.
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
            src="/blog21.png"
            alt="Hospice Nurses in Daily Comfort"
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
          Hospice nurses are the steady heart of daily patient comfort. Their work may appear quiet, but
          it is filled with intention, skill, and deep compassion. They are often the first to notice small
          changes in comfort, mood, or physical needs, and they respond with calm confidence that brings
          immediate reassurance to both patients and families.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Each day, hospice nurses help manage symptoms, adjust medications, and guide physical care.
          They know how to ease discomfort gently and how to create moments of peace in the middle of
          difficult times. Their expertise helps reduce pain, calm anxiety, and support breathing and rest.
          For many families, the presence of a hospice nurse feels like a lifeline during uncertain moments.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Beyond medical care, hospice nurses also provide emotional support. They listen without rushing,
          they explain without overwhelming, and they encourage families to share their feelings openly.
          Their ability to bring clarity and comfort helps families feel more grounded and less afraid.
          Many families say that a hospice nurse’s guidance helped them find strength they did not know
          they had.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Hospice nurses also act as advocates. They coordinate care, communicate with the broader medical
          team, and make sure each patient’s wishes and comfort always remain at the center of every
          decision. Their role ensures that families never feel abandoned or unsure about what comes next.
          Everything they do is focused on preserving dignity, comfort, and connection.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          The quiet dedication of hospice nurses shapes every day of care. Their presence offers stability,
          their knowledge brings relief, and their compassion creates a space where patients and families
          can breathe. They are the calming hands and steady voices that remind families they are never
          alone on this journey.
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

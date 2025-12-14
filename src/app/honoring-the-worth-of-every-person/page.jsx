"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HonoringTheWorthOfEveryPerson() {
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
          "linear-gradient(180deg, #FAFAF8 0%, #FDFCF9 60%, #F7F5EF 100%)",
      }}
    >
      <Header />

      {/* ===== HERO SECTION ===== */}
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
            Honoring the Worth of Every Person
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Published on Dec 14, 2025
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify max-w-xl mx-auto md:mx-0">
            The words of Dame Cicely Saunders remind us that every person matters simply because they are human and that this worth remains present until the end of life. This belief stands at the heart of dignity and compassion and continues to shape the hospice movement around the world.
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
            src="/blog20.png"
            alt="Honoring the Worth of Every Person"
            fill
            priority
            className="object-contain object-center"
          />
        </motion.div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 md:px-10 py-20 text-gray-800"
      >
        <p className="text-lg leading-relaxed mb-6 text-justify">
          The profound simplicity of Dame Cicely Saunders’s words affirms that a person’s value does not depend on strength productivity or age. Worth remains present regardless of physical condition capability or circumstance. It is not earned and it is never lost.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          In a world that often ties meaning to achievement or vitality this philosophy offers a needed reminder. A person’s history identity and spirit do not fade when illness appears or when life begins to slow. Even in fragile moments life remains sacred and deserving of care.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          This is where hospice care finds its purpose. Hospice is not about giving up. It is an affirmation that the final chapter of life deserves the same respect comfort and compassion as every chapter before it. Care shifts from cure to presence allowing dignity comfort and choice to guide each day.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          To matter until the end of life means physical comfort emotional support and spiritual peace are all honored. It means listening deeply validating fears and surrounding each person with reassurance so no one feels abandoned or like a burden.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Honoring the worth of every person is a reflection of our shared humanity. It reminds us that every life from beginning to end carries immeasurable value and deserves to be met with compassion dignity and love.
        </p>

        <div className="mt-14 text-center">
          <button
            onClick={() => router.push("/hospice-eligibility-questionnaire")}
            className="px-8 py-3 rounded-full font-semibold text-white shadow-md transition hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
            }}
          >
            Take the Hospice Eligibility Questionnaire
          </button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

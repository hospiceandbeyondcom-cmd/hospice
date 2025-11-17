"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HowToPreventPressureUlcersInHospice() {
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
            How to Prevent Pressure Ulcers in Hospice
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">Nov 15, 2025</p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Gentle, thoughtful skin care is one of the most important ways we support comfort and dignity in hospice.
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
            src="/blog15.png"
            alt="How to Prevent Pressure Ulcers in Hospice"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent md:hidden"></div>
        </motion.div>
      </section>

      {/* ===== Article Content ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >
        <p className="text-lg leading-relaxed mb-6 text-justify">
          Preventing pressure ulcers in hospice is not only about medical care. It is about preserving comfort, dignity, and the gentle sense of ease that every person deserves during this stage of life. As the body grows more fragile, the skin becomes more vulnerable. Small areas of pressure can turn into painful wounds if not cared for thoughtfully. This is why pressure ulcer prevention becomes one of the most essential parts of daily comfort in hospice.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          One of the most effective ways to prevent pressure ulcers is simple and deeply caring. It involves repositioning the individual at regular intervals to relieve pressure from one area and allow the skin to breathe. This is done slowly and respectfully, with attention to the persons comfort. The goal is not to force movement but to support the body with gentle, steady adjustments. Pillows, soft cushions, and specialized mattresses can all help distribute weight so that no area of the skin is under constant pressure.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Skin care also plays an important role. Keeping the skin moisturized reduces the risk of dryness and irritation. Checking the skin daily helps caregivers notice any early signs of redness or warmth that may indicate a developing problem. These small observations can prevent discomfort before it begins, ensuring that the individual remains as comfortable as possible. Clean, dry linens and loose, soft clothing also help protect the skin by reducing friction and moisture.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Nutrition and hydration contribute to skin health as well. When possible, offering small sips of water and nourishing foods supports the bodys ability to heal and protect itself. Even when appetite changes, thoughtful attention to hydration and gentle encouragement can make a meaningful difference in maintaining skin integrity.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          At its heart, pressure ulcer prevention is an expression of tenderness. It is the quiet way caregivers communicate, You are safe, and your comfort matters. Through presence, attention, and gentle hands, hospice care becomes a space where dignity is preserved and every touch carries compassion.
        </p>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/hospice-eligibility-questionnaire")}
            className="px-8 py-3 rounded-full font-semibold text-white shadow-md transition hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #006D66, #7D5F42)" }}
          >
            Take Your Eligibility Questionnaire
          </button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

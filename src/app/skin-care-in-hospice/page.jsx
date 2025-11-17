"use client";

import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SkinCareInHospice() {
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
            Skin Care in Hospice
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">Nov 17, 2025</p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Gentle skin care brings comfort, preserves dignity, and eases discomfort during the final stages of life. In hospice, every touch and every small act carries deep meaning.
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
            src="/blog17.png"
            alt="Skin Care in Hospice"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent md:hidden"></div>
        </motion.div>
      </section>

      {/* ===== Main Content ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800 leading-relaxed text-justify"
      >
        <p className="mb-6 text-lg">
          Skin care becomes incredibly important in hospice because the body grows more fragile and sensitive as energy fades. Gentle attention to the skin helps prevent discomfort and gives warmth to moments that may feel uncertain or overwhelming. Every small action becomes an expression of compassion and respect.
        </p>

        <p className="mb-6 text-lg">
          As people spend more time resting, the skin can become delicate. Dryness, irritation, and pressure areas can appear more easily. This is why caregivers and hospice teams focus on soft bedding, frequent repositioning, and warm cleansing routines that soothe without overwhelming. These quiet acts are not medical tasks alone. They are moments of tenderness where care is felt more than spoken.
        </p>

        <p className="mb-6 text-lg">
          Moisturizing the skin with gentle lotions, protecting bony areas with pillows, and keeping the body clean and comfortable all contribute to a deep sense of dignity. Even something as simple as applying lip balm or brushing hair can help someone feel seen and valued. Loved ones often find comfort in participating in this care, discovering that closeness can be expressed through touch when words become fewer.
        </p>

        <p className="mb-6 text-lg">
          Skin care in hospice is also a way of easing emotional stress. When a person feels physically comfortable, their mind and spirit can rest more easily. Caregivers often describe these moments as some of the most tender memories they carry. The room becomes quieter, the movements slower, and everything shifts into a space where love is offered through presence and patience.
        </p>

        <p className="text-lg">
          Above all, hospice skin care is about honoring the person. It reflects the belief that comfort is not a small detail but a meaningful part of the final chapter. Through each gentle touch we say you matter, you are cared for, and you are not alone.
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

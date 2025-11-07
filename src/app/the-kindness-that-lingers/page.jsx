"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TheKindnessThatLingers() {
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
            The Kindness That Lingers
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">Nov 7, 2025</p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Sometimes it is not the grand gestures that remain with us but the quiet kindness that stays long after the moment has passed. In hospice care, it is these quiet kindnesses that become the language of love.
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
            src="/blog06.png"
            alt="The Kindness That Lingers"
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
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >
        <p className="text-lg leading-relaxed mb-6 text-justify">
          In the quiet hallways of care it is easy to notice that kindness does not disappear when words grow few. It softens the silence. It carries meaning in small gestures, a hand resting on another, a smile shared without a sound, or the gentle rhythm of someone choosing to stay close even when there is nothing left to fix. These are the moments that make hospice care sacred.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Families often come into this season afraid of what will be lost but they leave remembering what was found. The kindness that lingers does not just live in the memories of those who were cared for. It echoes in the hearts of those who gave care, those who witnessed love in its most honest form, quiet, steady, and present until the end.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          This is the work of hospice, to create space where kindness has room to breathe. It is where dignity is preserved not through perfection but through presence. Every gentle word, every hand held, every deep breath taken beside someone you love, they all tell a story that will last long after the last goodbye.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          When you think back on the people you have cared for, you may not remember every word that was said. But you will remember how their hand felt in yours, how the room felt safe, how you both found comfort in the quiet. That is kindness. That is love. And it lingers.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          May we continue to show up for one another with the same gentleness that hospice reminds us of, where every act of care, no matter how small, becomes a part of something lasting.
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

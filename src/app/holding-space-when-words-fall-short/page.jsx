"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HoldingSpaceWhenWordsFallShort() {
  const router = useRouter();

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-snug text-center md:text-left"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Holding Space When Words Fall Short
          </h1>
          <p className="text-gray-600 mb-6 text-base md:text-lg text-center md:text-left">
            Published on Nov 6, 2025
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            There are moments in care when words simply fail us. When someone we love is nearing the end of life, we often feel the pull to say the right thing, something to ease their pain or our own uncertainty. But in truth, the most powerful comfort often comes not from what we say, but from how we stay.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog05.png"
            alt="Holding Space When Words Fall Short"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
        </motion.div>
      </section>

      {/* ===== Content Section ===== */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lg leading-relaxed mb-6 text-justify">
            Holding space means being fully present without judgment, without rushing to fix, and without trying to make the pain disappear. It is a quiet act of love that allows someone to feel seen and supported, even when words are not enough.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-justify">
            Sometimes, that means sitting in silence. It means reaching for a hand instead of advice. It means letting the moment unfold without trying to change it. In hospice and palliative care, we often say that presence is a form of medicine, one that speaks directly to the heart.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-justify">
            When you hold space for someone in this way, you are saying, you are not alone. You are offering peace without condition and comfort without needing a solution. For families, this can bring deep relief, a chance to simply be without the weight of expectation.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-justify">
            In moments when life feels fragile, connection matters more than perfection. A gentle presence can soften fear, and a kind gesture can remind someone that they are cared for, body, mind, and soul.
          </p>

          <p className="text-lg leading-relaxed mb-10 text-justify">
            If you are walking beside someone in this season, remember that your love does not have to be eloquent to be felt. Your stillness speaks. Your kindness heals. And your willingness to simply stay can bring more comfort than any carefully chosen words ever could.
          </p>

          <div className="text-center mt-10">
            <button
              onClick={() => router.push("/hospice-eligibility-questionnaire")}
              className="px-8 py-3 rounded-full text-white font-semibold text-base shadow-md transition hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #006D66, #7D5F42)",
              }}
            >
              Take Your Eligibility Questionnaire
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

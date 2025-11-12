"use client";

import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

export default function HospiceIsNotTheEndItIsTheSpaceWhereLoveDeepens() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Header />

      {/* ===== Split Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        {/* Text Side */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left z-10"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hospice Is Not the End It Is the Space Where Love Deepens
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            November 12, 2025
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
            src="/blog12.png"
            alt="Hospice Is Not the End It Is the Space Where Love Deepens"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent md:hidden"></div>
        </motion.div>
      </section>

      {/* ===== Main Content ===== */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-gray-800 leading-relaxed text-justify">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6 text-[17px]"
        >
          <p>
            Hospice care is not about giving up. It is about embracing what
            matters most. It is about slowing down, honoring the moments that
            remain, and letting love take the lead. When we hear the word
            hospice, many of us think of endings. But for those who walk this
            path, hospice often becomes a sacred space where love deepens and
            peace begins to bloom.
          </p>

          <p>
            In hospice, care shifts from fighting to healing in another way.
            It becomes about comfort, dignity, and presence. Families find that
            the focus moves gently toward connection instead of correction,
            toward listening instead of rushing. It is where medicine meets
            meaning, and care becomes a language of compassion that speaks to
            both the body and the soul.
          </p>

          <p>
            Those final weeks and days are filled with quiet acts of devotion.
            A hand being held. A whisper of gratitude. A moment of laughter in
            between tears. Hospice allows space for all of this. It gives
            families permission to breathe, to feel, to remember that love does
            not fade when time feels short. It grows stronger, clearer, and
            more present than ever before.
          </p>

          <p>
            At Hospice and Beyond, we believe that hospice is not an ending.
            It is a continuation of care, of love, and of dignity. It is where
            people find grace in goodbye, strength in stillness, and courage in
            every breath that remains. Hospice is not the closing of a story.
            It is the place where love writes its most beautiful chapter.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <a
            href="https://hospiceandbeyond.com/hospice-eligibility-questionnaire"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full font-semibold text-white text-lg transition hover:opacity-90 shadow-md"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
            }}
          >
            Take the Hospice Eligibility Questionnaire
          </a>
          <div className="mt-8">
            <a
              href="/blog"
              className="text-[#006D66] font-semibold underline"
            >
              ← Return to Blog
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

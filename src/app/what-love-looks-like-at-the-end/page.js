"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function WhatLoveLooksLikeAtTheEnd() {
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

      {/* ===== Split Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
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
            What Love Looks Like at the End
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-3">
            November 2, 2025
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            A reflection on how love changes shape when time grows tender.
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
            src="/blog03.png"
            alt="What Love Looks Like at the End"
            fill
            priority
            className="object-cover object-top rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent md:hidden"></div>
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
            Love does not disappear at the end of life. It transforms. It
            becomes quieter, slower, and more deliberate. It speaks through
            presence instead of plans, through touch instead of words. For many
            families, this is the hardest lesson to learn. Love at the end is
            not about holding on. It is about letting go with grace.
          </p>

          <p>
            In hospice and palliative care, the language of love often takes new
            forms. It might be a daughter brushing her mother’s hair. A spouse
            adjusting a pillow so their partner can rest easier. A nurse pausing
            for one more gentle conversation even when the chart is full. These
            are quiet acts, but they carry the weight of whole lifetimes.
          </p>

          <p>
            What love looks like at the end is rarely loud. It is not found in
            grand gestures or perfect speeches. It lives in eye contact, in
            forgiveness whispered softly, in laughter that still finds its way
            through tears. It is the love that honors both the living and the
            leaving. The love that says, I am still here.
          </p>

          <p>
            Families often tell us they feared these moments, that they would be
            unbearable. Yet time and again, they discover something sacred
            within them. When the noise quiets and the rush fades, what remains
            is presence. There is peace in holding a hand. There is meaning in
            remembering a life well lived. And there is healing in knowing that
            even as the body grows weaker, love remains strong enough to carry
            us through.
          </p>

          <p>
            At Hospice and Beyond Palliative Care, we believe that love does not
            end. It evolves. It stretches between breaths, between goodbyes,
            between the living and the remembered. It reminds us that caring for
            a loved one at the end of life is not an act of loss, but of deep,
            enduring love.
          </p>
        </motion.div>

        {/* ===== CTA Section ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-3 rounded-full font-semibold text-white transition hover:opacity-90 shadow-md"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
            }}
          >
            ← Return to Blog
          </Link>

          <div className="mt-10 text-gray-700 text-base leading-relaxed max-w-xl mx-auto">
            <p className="mb-2">
              Take our Hospice Eligibility Questionnaire to learn more about
              care options at:
            </p>
            <a
              href="https://hospiceandbeyond.com/hospice-eligibility-questionnaire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#006D66] font-semibold underline"
            >
              hospiceandbeyond.com/hospice-eligibility-questionnaire
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

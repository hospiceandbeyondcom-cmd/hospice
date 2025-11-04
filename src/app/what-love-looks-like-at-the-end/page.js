"use client";

import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

export default function WhatLoveLooksLikeAtTheEnd() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/blog03.png"
          alt="What Love Looks Like at the End"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8 md:px-12 z-10"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight drop-shadow-lg">
            What Love Looks Like at the End
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            A reflection on how love changes shape when time grows tender.
          </p>
        </motion.div>
      </section>

      {/* ===== Article ===== */}
      <main className="flex-1 w-full px-5 sm:px-8 md:px-10 py-16 md:py-20">
        <article className="max-w-3xl mx-auto text-[#1A1A1A] leading-relaxed text-justify">
          {[
            `Love does not disappear at the end of life. It transforms. It becomes quieter, slower, and more deliberate. It speaks through presence instead of plans, through touch instead of words. For many families, this is the hardest lesson to learn. Love at the end is not about holding on. It is about letting go with grace.`,

            `In hospice and palliative care, we often see the language of love take new forms. It might be a daughter brushing her mother’s hair. A spouse adjusting a pillow so their partner can rest easier. A nurse pausing for one more gentle conversation even when the chart is full. These are quiet acts, but they carry the weight of whole lifetimes.`,

            `What love looks like at the end is rarely loud. It is not found in grand gestures or perfect speeches. It lives in eye contact, in forgiveness whispered softly, in laughter that still finds its way through tears. It is the love that honors both the living and the leaving. The love that says, I am still here.`,

            `Families often tell us they feared these moments, that they would be unbearable. Yet time and again, they discover something sacred within them. When the noise quiets and the rush fades, what remains is presence. There is peace in holding a hand. There is meaning in remembering a life well lived. And there is healing in knowing that even as the body grows weaker, love remains strong enough to carry us through.`,

            `At Hospice and Beyond Palliative Care, we believe that love does not end. It evolves. It stretches between breaths, between goodbyes, between the living and the remembered. It reminds us that caring for a loved one at the end of life is not an act of loss, but of deep, enduring love.`,
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-6"
            >
              {paragraph}
            </motion.p>
          ))}
        </article>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            href="/hospice-eligibility-questionnaire"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full font-semibold text-white text-lg transition hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #006D66, #7D5F42)" }}
          >
            Take Your Hospice Eligibility Questionnaire
          </a>
          <a
            href="/blog"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full font-semibold text-[#006D66] border border-[#006D66] text-lg hover:bg-[#006D6610] transition"
          >
            Back to Blog
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

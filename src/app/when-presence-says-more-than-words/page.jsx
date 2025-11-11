"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function WhenPresenceSaysMoreThanWords() {
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
            When Presence Says More Than Words
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            November 9, 2025
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
            src="/blog09.png"
            alt="When Presence Says More Than Words"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
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
            Sometimes there are no words that feel right. No sentences that can
            hold the weight of what we wish we could say. In those moments,
            presence becomes the most powerful language we have. In hospice
            care, presence is not silence. It is communication in its truest
            form. It is love expressed through stillness.
          </p>

          <p>
            There are times when the kindest thing we can offer is not advice or
            reassurance, but our calm and steady being. Sitting quietly beside
            someone, breathing the same air, allowing the room to soften, that
            is compassion without the need for explanation. It says, you are not
            alone, and I am here.
          </p>

          <p>
            In the final seasons of life, presence often carries more meaning
            than words ever could. It holds the power to soothe without fixing,
            to comfort without trying to control. A hand resting gently on
            another, a nod, a shared breath, these become the poetry of care.
          </p>

          <p>
            Families sometimes feel the need to fill the silence, fearing that
            stillness is empty. But silence is often where love speaks most
            clearly. In that quiet, hearts align. What was once spoken becomes
            understood through the language of closeness and care.
          </p>

          <p>
            Presence teaches us patience. It reminds us that comfort is not
            always about doing, but about being. When we let go of the pressure
            to find the right words, we make space for grace to enter, for peace
            to settle, and for love to unfold naturally in its own rhythm.
          </p>

          <p>
            In the end, being present is one of the greatest gifts we can give.
            It tells the person we love that they are seen, valued, and
            remembered. It says without speaking, your life matters, and I am
            here with you through it all.
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

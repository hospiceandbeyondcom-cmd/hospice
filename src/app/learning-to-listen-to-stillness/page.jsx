"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function LearningToListenToStillness() {
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
            Learning to Listen to Stillness
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            November 11, 2025
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
            src="/blog10.png"
            alt="Learning to Listen to Stillness"
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
            Stillness can feel uncomfortable at first. In a world that moves
            quickly, silence often feels like something to fill. But when we
            begin to listen to stillness, we discover it is not empty. It is
            full of meaning, memory, and gentle truth waiting to be heard.
          </p>

          <p>
            In hospice care, stillness is often where the most sacred moments
            happen. Between breaths, between words, between the rhythm of
            machines and the quiet of the room, something larger than sound
            begins to speak. It is peace in its simplest form, inviting us to
            slow down and notice what our hearts already know.
          </p>

          <p>
            Learning to listen to stillness is not about doing nothing. It is
            about being fully present. It is in the way you sit beside someone
            without rushing, the way you breathe when you feel helpless, or the
            way your heart softens as you realize that love does not always need
            movement to exist.
          </p>

          <p>
            Families often say that the quiet moments near the end of life feel
            the most profound. The sound of soft breathing, a hand being held,
            light through a window, these are the moments that imprint deeply.
            They remind us that connection is not always spoken. It can be felt.
          </p>

          <p>
            When you allow yourself to rest inside stillness, you begin to hear
            the wisdom it carries. You notice the subtle language of care, the
            unspoken gratitude between you and your loved one, and the peace
            that comes from simply allowing things to be as they are.
          </p>

          <p>
            Stillness is not the absence of life. It is its most honest
            reflection. It teaches us how to listen beyond words, how to feel
            beyond sight, and how to love beyond the limits of time.
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

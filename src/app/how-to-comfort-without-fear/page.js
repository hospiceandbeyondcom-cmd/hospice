"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function HowToComfortWithoutFear() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(180deg,#FAFAF8 0%,#FDFCF9 60%,#F7F5EF 100%)",
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
              background: "linear-gradient(90deg,#006D66,#7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            How to Comfort Without Fear
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-3">
            November 3, 2025
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            True comfort is not about having the right words. It is about being
            willing to stay present when words are few and hearts are tender.
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
            src="/blog02.png"
            alt="How to Comfort Without Fear"
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
            Comforting someone who is suffering can feel uncertain. Many people
            worry about saying the wrong thing or doing too little. Yet what
            most people remember from those moments is not what was said but how
            someone made them feel. Presence is often more healing than any
            sentence. To comfort without fear is to show up as you are, without
            trying to fix what cannot be fixed, trusting that care itself has
            power.
          </p>

          <p>
            In hospice and palliative care, families often ask how they can
            support a loved one who is nearing the end of life. The answer is
            simple and profound. Be there. Hold a hand. Listen. Breathe in the
            same rhythm. Allow silence. When words fall short, your presence
            becomes the language of love. It tells them that they are not alone
            and that their life still has meaning in your eyes.
          </p>

          <p>
            Comfort is not about removing pain. It is about creating space for
            peace to exist alongside it. It might be adjusting a blanket,
            helping with a sip of water, or sitting quietly while memories fill
            the room. These small gestures are what the heart remembers. They
            carry dignity and tenderness, reminding both giver and receiver that
            compassion is shared humanity in action.
          </p>

          <p>
            Fear often comes from believing that we must have control or
            solutions. But comfort does not ask for perfection. It asks for
            honesty. Sometimes the most meaningful thing you can say is, I am
            here with you. Those words, spoken sincerely, dissolve fear and
            invite calm. They bridge the gap between pain and peace, between
            what can be changed and what must simply be held with care.
          </p>

          <p>
            When you approach comfort without fear, you give a gift that
            outlasts any moment. You offer safety, understanding, and a quiet
            strength that holds space for love to do its gentle work. In this
            stillness, comfort becomes something sacred—a reminder that presence
            is the purest form of healing we can ever give.
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
              background: "linear-gradient(90deg,#006D66,#7D5F42)",
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

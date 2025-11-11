"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function TheQuietStrengthOfLettingGo() {
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
            The Quiet Strength of Letting Go
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            November 10, 2025
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
            src="/blog08.png"
            alt="The Quiet Strength of Letting Go"
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
            Letting go is one of the hardest things the heart will ever learn,
            not because love fades, but because it deepens. In hospice care,
            letting go is never a sign of weakness. It is an act of immense
            courage. It is love choosing peace over fear, trust over control,
            and tenderness over resistance.
          </p>

          <p>
            Families often imagine that holding on is strength, that keeping
            vigil, trying every possible solution, or staying awake through
            every hour somehow protects the one they love. But the truth is
            gentler. There comes a point when the most powerful thing you can do
            is to simply be there, quietly, lovingly, without trying to change
            what is already unfolding.
          </p>

          <p>
            Letting go does not mean giving up. It means honoring the natural
            rhythm of life, the way the tide returns to the sea. It means
            recognizing that you have done enough, that your love has carried
            someone as far as it can on this side of eternity. The rest is
            trust.
          </p>

          <p>
            For caregivers, letting go is often a sacred surrender. It is not
            about forgetting or turning away, but about creating space for peace
            to enter. It is in the way you adjust a pillow, whisper a prayer, or
            sit in silence holding a hand that no longer grips back. It is
            quiet. It is strong. It is love in its purest form.
          </p>

          <p>
            When we allow ourselves to release the weight of holding on,
            something profound happens. The air softens. The room fills with
            warmth. The tears that fall are no longer only about loss. They are
            about gratitude, gratitude for having loved deeply enough to feel
            the ache of goodbye.
          </p>

          <p>
            Letting go, in the end, is not the end at all. It is the final gift
            of love, a reminder that peace does not mean absence. It means
            presence, carried gently forward in memory, in spirit, and in every
            act of kindness that follows.
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

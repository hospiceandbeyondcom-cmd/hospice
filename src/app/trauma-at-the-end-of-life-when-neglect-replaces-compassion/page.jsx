"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function TraumaAtTheEndOfLifeWhenNeglectReplacesCompassion() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #FAFAF8 0percent, #FDFCF9 60percent, #F7F5EF 100percent)",
      }}
    >
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">

        {/* TEXT SIDE */}
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
            Trauma at the End of Life When Neglect Replaces Compassion
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            December 12, 2025
          </p>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog39.png"
            alt="Trauma at the End of Life When Neglect Replaces Compassion"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent md:hidden"></div>
        </motion.div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-gray-800 leading-relaxed text-justify">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6 text-[17px]"
        >

          {/* EXACT USER CONTENT — UNCHANGED */}
          <p>
            The end of life is a sacred stage where every person deserves tenderness, dignity, and the reassurance that they are not alone. Yet for many individuals, this period becomes marked by emotional pain when care slowly shifts from compassion to neglect. Trauma at the end of life is not always loud or dramatic. Sometimes it shows up as silence where comfort should be, absence where presence is needed, and indifference where humanity should be centered. When a vulnerable person senses that their needs are dismissed or overlooked, it creates a deep emotional wound that can be as heavy as any physical illness.
          </p>

          <p>
            Neglect at this stage is not simply about a lack of tasks done. It is about the absence of connection. Something as simple as a gentle conversation, a warm hand, or a moment of listening can mean everything to someone nearing the end of their journey. When these moments are missing, the person may feel invisible, afraid, or abandoned. This emotional disconnection can turn what should be a peaceful transition into an experience filled with confusion and inner distress.
          </p>

          <p>
            Families and caregivers sometimes underestimate how much emotional presence matters. Even when medical care is provided, the human heart still notices when kindness fades. The person may sense rushed interactions instead of attentive care, or cold routines instead of patient support. These patterns can quietly communicate that their life no longer carries weight. This creates a subtle form of trauma because it challenges something deeply human the desire to feel valued until the very final moment.
          </p>

          <p>
            Compassion at the end of life is not complicated. It is the practice of choosing patience, presence, and empathy even when circumstances are difficult. It is remembering that every person has a history, a story, and a longing to be treated with respect. When caregivers remain attentive, speak softly, offer reassurance, and allow the person to express their fears, they help create a space where peace can grow.
          </p>

          <p>
            Healing the trauma that comes from neglect begins with awareness. It requires caregivers, families, and health professionals to slow down, reflect, and recognize the emotional landscape of those they care for. When compassion replaces neglect, even small acts can restore dignity and comfort. No one should end their life feeling forgotten. Every person deserves to leave this world surrounded by care, warmth, and the certainty that their presence mattered.
          </p>

        </motion.div>

        {/* CTA BUTTON */}
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
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

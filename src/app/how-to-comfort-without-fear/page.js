"use client";

import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

export default function HowToComfortWithoutFear() {
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
          src="/blog02.png"
          alt="How to Comfort Without Fear"
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
            How to Comfort Without Fear
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Gentle ways to offer real presence, even when words feel small.
          </p>
        </motion.div>
      </section>

      {/* ===== Article ===== */}
      <main className="flex-1 w-full px-5 sm:px-8 md:px-10 py-16 md:py-20">
        <article className="max-w-3xl mx-auto text-[#1A1A1A] leading-relaxed text-justify">
          {[
            `When someone you love is suffering, words can suddenly feel too small. You may worry about saying the wrong thing, or that your presence might not be enough. Yet often, the most powerful comfort you can give does not come from perfect phrases. It comes from a heart that is willing to stay.`,

            `Comfort begins with presence. Just being there, sitting beside a loved one, holding a hand, offering quiet companionship, speaks volumes. You do not need to fix what cannot be fixed. You do not need to have all the right things to say. What matters most is that the person you care about feels seen, safe, and not alone in their pain.`,

            `It is natural to feel afraid, afraid of saying something that might deepen their sorrow, afraid of being overwhelmed by emotion, or afraid of facing your own discomfort with loss. But remember, fear grows in silence. When you allow yourself to show up anyway, even with trembling hands and uncertain words, your courage becomes part of the comfort you offer.`,

            `Listen more than you speak. Let them share their memories, their worries, or even their silence. Resist the urge to fill every pause. Sometimes the softest moments, a gentle nod, a shared breath, a tear wiped away, are where the deepest comfort lives.`,

            `Offer small, practical gestures of care. A warm drink, a folded blanket, a short walk outside, or a few calm words like “I am here” can mean more than grand speeches. Compassion does not require perfection, only intention. And when emotions rise, remember that tears are not failures. They are part of love’s language. Let them flow freely, both yours and theirs. They remind us that this moment, as fragile as it is, still holds meaning and connection.`,

            `Comforting without fear is not about having all the answers. It is about showing up in love’s truest form, patient, gentle, and real. You do not have to be fearless to be a comforter. You just have to care enough to stay. At Hospice and Beyond, we believe comfort is a quiet, steady gift we offer one another when words fall short. Through presence, compassion, and genuine care, we remind those we love that even in the hardest moments, love still holds us.`,
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
            href="/contact"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full font-semibold text-white text-lg transition hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #006D66, #7D5F42)" }}
          >
            Speak With Our Care Team
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

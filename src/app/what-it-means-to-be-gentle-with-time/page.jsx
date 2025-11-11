"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function GentleWithTime() {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #FAFAF8 0%, #FDFCF9 60%, #F7F5EF 100%)",
      }}
    >
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/blog07.png"
          alt="What It Means to Be Gentle With Time"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-12 z-10">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-4xl md:text-6xl font-semibold mb-4"
            style={{
              background: "linear-gradient(90deg, #E5E5E5, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What It Means to Be Gentle With Time
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-base md:text-lg max-w-2xl mx-auto"
          >
            November 8, 2025
          </motion.p>
        </div>
      </section>

      {/* ===== Blog Content ===== */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-gray-800 leading-relaxed text-justify">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="space-y-6 text-[17px]"
        >
          <p>
            There comes a point when we stop measuring time in hours and start measuring it in
            moments. In hospice care, gentleness becomes a way of living. Every touch, every pause,
            every look exchanged becomes a quiet reminder that time, though limited, can still be
            soft.
          </p>

          <p>
            To be gentle with time is to stop wrestling with it. It means allowing yourself to
            breathe, even when things feel uncertain. It is the way a nurse smooths a blanket
            without rushing, the way a family member lingers a little longer by the bedside, or the
            way laughter finds its way into even the quietest room.
          </p>

          <p>
            In these moments, time stops being something that runs out and starts being something
            that simply is. Families who learn this often find that the days do not feel
            smaller—they feel fuller. There is space for reflection, forgiveness, and even small
            joys that might have been overlooked before.
          </p>

          <p>
            Gentleness with time is not about doing less; it is about being more present in what is
            already here. When we move slower, we notice more—the warmth of a hand, the rhythm of
            breathing, the soft sound of gratitude between words.
          </p>

          <p>
            At the end of the day, time is not what defines a life; love does. And love does not
            rush. It lingers, it softens, and it transforms even the smallest moments into something
            eternal.
          </p>
        </motion.div>

        {/* ===== CTA Section ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => router.push("/blog")}
            className="px-8 py-3 rounded-full font-semibold text-white transition hover:opacity-90 shadow-md"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
            }}
          >
            ← Return to Blog
          </button>

          <div className="mt-10 text-gray-700 text-base leading-relaxed max-w-xl mx-auto">
            <p className="mb-2">
              Take our Hospice Eligibility Questionnaire to learn more about care options at:
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

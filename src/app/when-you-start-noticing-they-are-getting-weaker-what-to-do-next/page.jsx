"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function WhenYouStartNoticingTheyAreGettingWeaker() {
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
            When You Start Noticing They Are Getting Weaker What to Do Next
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-3">
            November 4, 2025
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Noticing a loved one grow weaker can be heartbreaking, but it can
            also be a gentle call to shift from fixing to caring, from doing to
            being present.
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
            src="/blog01.png"
            alt="When You Start Noticing They Are Getting Weaker"
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
            It often begins quietly. Maybe they sleep more than before. Maybe
            they eat less, move slower, or seem to lose their usual energy. It
            can feel like watching a candle dim—slowly, softly, and without
            warning. When you start noticing that someone you love is getting
            weaker, it is natural to feel fear, confusion, or helplessness. But
            this moment also carries an invitation—to lean closer with
            gentleness, to listen, and to care in new ways.
          </p>

          <p>
            The first step is not to panic but to observe. Try to notice what
            has changed and when. Is your loved one having trouble breathing?
            Are they eating less? Are they more tired than usual? These small
            details can help healthcare providers understand what is happening
            and guide you toward the right kind of support. Trust your
            instincts. You know this person deeply, and your awareness matters.
          </p>

          <p>
            The second step is to start a conversation—with your loved one, with
            family, or with their doctor. You do not have to have all the
            answers. Simply saying, I have noticed these changes and I am
            concerned, opens a door. If the changes are significant, it may be
            time to explore whether palliative or hospice care could help.
            These services focus on comfort, dignity, and quality of life—not
            just medical needs but emotional and spiritual ones too.
          </p>

          <p>
            In hospice and palliative care, weakness is not just a symptom to
            treat but a message to honor. It tells us that the body is working
            hard and needs a different kind of care. This is where compassion
            replaces correction, where being present becomes more important than
            being busy. Helping someone sit up, offering sips of water, adjusting
            a pillow, or simply being near them—these small acts are sacred.
          </p>

          <p>
            The hardest part for many caregivers is accepting that love may now
            look quieter. It is no longer about finding solutions but about
            offering peace. It is the love that watches, waits, and whispers,
            You are not alone. That is the kind of love that sustains both the
            giver and the receiver, the kind that turns fear into tenderness and
            helplessness into grace.
          </p>

          <p>
            Noticing weakness does not mean giving up. It means recognizing what
            truly matters. It means making space for rest, for connection, and
            for gentleness. And in those moments, you may discover that even in
            decline, there is still deep beauty in caring, in loving, and in
            simply being together.
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
            ← Return to Blog.
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

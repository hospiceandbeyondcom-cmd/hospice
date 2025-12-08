"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function HowToTalkWithALovedOneInHospiceWithoutItFeelingLikeAnInterview() {
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
            How to Talk With a Loved One in Hospice — Without It Feeling Like an Interview
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            December 6, 2025
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
            src="/blog33.png"
            alt="How to Talk With a Loved One in Hospice Without It Feeling Like an Interview"
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

          {/* EXACT USER CONTENT — DO NOT MODIFY */}
          <h2 className="text-2xl font-bold text-[#006D66]">
            How to Talk With a Loved One in Hospice — Without It Feeling Like an Interview
          </h2>

          <p>
            The clock ticks differently in a hospice room. There is often a sense of urgency to capture a loved one's history before it slips away, mixed with a fear of exhausting them or making the interaction feel clinical. We want their stories, but walking in with a clipboard or a mental list of questions can kill the intimacy of the moment.
          </p>

          <p>
            The goal isn't to extract data; it is to facilitate connection. Here is how to navigate these delicate conversations so they feel less like an interrogation and more like a shared journey.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42]">1. Use "Sensory Anchors" Instead of Questions</h3>

          <p>
            Direct questions ("When did you meet Dad?" or "What was your first job?") require cognitive effort. They force the brain to retrieve facts, which can be tiring for someone on medication or in a weakened state.
          </p>

          <p>
            Instead, use sensory props to trigger memories naturally.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Music:</strong> Play a song from their teenage years. Watch their reaction and simply ask, <em>"What does this make you think of?"</em></li>
            <li><strong>Photos:</strong> Don't ask <em>who</em> is in the picture. Point to a detail. <em>"I love the car in the background of this shot. Did you drive that?"</em> or <em>"Look at the kitchen table here. What did it smell like when your mom was cooking?"</em></li>
            <li><strong>Touch/Taste:</strong> If they can eat, a specific candy or meal from their childhood can unlock a flood of stories without a single question being asked.</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#7D5F42]">2. The Power of "Tell Me About..."</h3>

          <p>
            The phrasing of a question changes everything. Questions that start with <em>Who, What, Where,</em> or <em>When</em> ask for facts. The phrase <strong>"Tell me about..."</strong> asks for a story.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Instead of: "Did you like school?"</li>
            <li>Try: <strong>"Tell me about your favorite teacher."</strong></li>
          </ul>

          <p>
            This open-ended approach gives your loved one control. They can take the story in whatever direction their energy allows, focusing on feelings and impressions rather than struggling to remember specific dates or names.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42]">3. Embrace the "Micro-Conversation"</h3>

          <p>
            In hospice care, energy is a finite resource. A loved one might not have the stamina for a distinct "interview hour." Abandon the idea of a long, linear biography.
          </p>

          <p>
            Capture memories in five-minute bursts. If they are lucid and energetic while having their morning coffee, ask one thing then. If they wake up at 2:00 AM, that might be the time for a quiet chat about their childhood. Let the conversation follow their rhythm, not your schedule.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42]">4. Become Comfortable with Silence</h3>

          <p>
            In normal social interaction, silence feels awkward; we rush to fill it. In a hospice setting, silence is often where the heavy lifting happens.
          </p>

          <p>
            If you ask a question and they pause, wait. They might be resting, or they might be traveling back in their mind to retrieve the memory. If you jump in with a follow-up question too quickly, you derail that journey. Hold their hand, breathe, and wait. The most profound things are often said after a long silence.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42]">5. Focus on Wisdom, Not Just Biography</h3>

          <p>
            Sometimes, the dates and genealogy don't matter as much as the essence of the person. If they are too tired to recount history, pivot to their philosophy.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><em>"What is the bravest thing you ever did?"</em></li>
            <li><em>"What is one thing you figured out about life that you wish everyone knew?"</em></li>
          </ul>

          <h3 className="text-xl font-semibold text-[#006D66]">The Final Connection</h3>

          <p>
            Ultimately, release the pressure to get the "full story." If you are too busy trying to be a historian, you might forget to be a son, daughter, or friend. The most important thing you are doing is sitting with them. If the stories come, treat them as a bonus. If they don't, know that your presence is the story they are writing right now.
          </p>

          {/* END OF EXACT CONTENT */}

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

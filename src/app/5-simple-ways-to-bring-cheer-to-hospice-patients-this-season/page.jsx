"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function FiveSimpleWaysToBringCheer() {
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
            5 Simple Ways to Bring Cheer to Hospice Patients This Season
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            December 5, 2025
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
            src="/blog32.png"
            alt="5 Simple Ways to Bring Cheer to Hospice Patients This Season"
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

          {/* YOUR EXACT CONTENT STARTS HERE — UNEDITED */}
          <p>
            The holidays can be meaningful, even in the most delicate moments of life.
            Here are gentle, heartfelt ways to brighten a patient’s day:
          </p>

          <p>🎄 1. Create Personalized Seasonal Moments<br/>
          A soft holiday scent, warm lights, or their favorite music can instantly lift their spirits.</p>

          <p>💌 2. Share Heartfelt Notes and Memory Cards<br/>
          Short messages, prayers, or shared memories provide comfort and connection.</p>

          <p>🧁 3. Offer Comforting Seasonal Treats<br/>
          If medically appropriate, familiar tastes and aromas like warm cider or soft cookies spark joy and nostalgia.</p>

          <p>📸 4. Celebrate With Gentle Activities<br/>
          Holiday stories, soft carols, or peaceful movies create calming, meaningful experiences.</p>

          <p>🤝 5. Be Present<br/>
          A warm hand, a kind conversation, or simply sitting together can be the greatest gift of all.</p>

          <p>✨ This season, small acts of kindness can make a big difference.<br/>
          — Hospice and Beyond Palliative Care</p>
          {/* YOUR EXACT CONTENT ENDS HERE */}

        </motion.div>

        {/* CTA SECTION */}
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

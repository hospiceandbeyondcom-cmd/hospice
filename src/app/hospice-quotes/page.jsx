"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

export default function NotableHospiceQuotes() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const quotes = [
    {
      text: "You matter because you are you, and you matter to the end of your life.",
      author: "Dame Cicely Saunders",
      expansion: "This is the antidote to the 'invisible' feeling many hospice patients face. It asserts that value is not tied to productivity or health, but to existence itself. In a premium care model, we treat the patient not as a 'case,' but as a masterpiece nearing completion."
    },
    {
      text: "Death is not an enemy to be conquered; it is a transition to be honored.",
      author: "Elisabeth Kübler-Ross",
      expansion: "This shifts the narrative from 'losing a battle' to 'completing a journey.' It removes the stigma of failure from the clinical environment and replaces it with the dignity of a sacred milestone."
    },
    {
      text: "Grief is just love with no place to go.",
      author: "Jamie Anderson",
      expansion: "This reframes the heaviness of bereavement as a testament to the depth of connection. By validating grief as 'unspent love,' we help families transform their pain into a legacy of honor."
    },
    {
      text: "Being with is more important than doing for.",
      author: "Hospice Proverb",
      expansion: "In a high-speed world, the most expensive commodity is undivided presence. This highlights the Chaplain’s superpower: the ability to sit in the 'silent void' with a patient without rushing to 'fix' what is unfixable."
    },
    {
      text: "Healing is not always a cure. Sometimes healing is the peace found in the middle of the storm.",
      author: "Wisdom of the Soul",
      expansion: "This defines the 'Soul Specialist' mission. We acknowledge that while the body may be declining, the spirit can be reaching its peak of clarity and reconciliation."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#012419]">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-[#013220] shadow-2xl rounded-b-[3rem] border-b border-[#e1c16e]/30">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left"
        >
          <h1
            className="text-4xl md:text-6xl font-serif mb-6 leading-tight tracking-wide"
            style={{
              color: "#e1c16e",
            }}
          >
            Voices of Peace: <br />
            <span className="text-white italic font-light">Wisdom for the Journey</span>
          </h1>
          <p className="text-[#e1c16e]/80 uppercase tracking-[0.2em] text-sm font-semibold">
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative p-10"
        >
          {/* Ensure you have a premium high-contrast image here */}
          <Image
            src="/blog50.png" 
            alt="Cinematic portrait of peace"
            fill
            priority
            className="object-cover opacity-60 mix-blend-luminosity"
          />
        </motion.div>
      </section>

      {/* ===== Quotes Section ===== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-24 space-y-24"
      >
        {quotes.map((quote, index) => (
          <motion.div 
            key={index}
            variants={fadeUp}
            className="group relative"
          >
            <div className="border-l-2 border-[#e1c16e] pl-8 md:pl-16">
              <h2 className="text-2xl md:text-4xl font-serif italic text-white mb-6 leading-relaxed">
                "{quote.text}"
              </h2>
              <h3 className="text-[#e1c16e] font-sans uppercase tracking-widest font-bold text-sm mb-8">
                — {quote.author}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl text-justify font-light italic">
                {quote.expansion}
              </p>
            </div>
            {/* Elegant Numbering */}
            <span className="absolute -left-4 top-0 text-[#e1c16e]/10 text-8xl font-serif select-none">
              0{index + 1}
            </span>
          </motion.div>
        ))}
      </motion.section>

      {/* ===== Call to Action Section ===== */}
      <section className="bg-white py-20 px-6 text-center rounded-t-[3rem]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-[#012419] mb-6">Read More Unique Concepts</h2>
          <p className="text-gray-600 mb-10 text-lg">
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://hospiceandbeyond.com/blog"
            className="inline-block bg-[#012419] text-[#e1c16e] px-10 py-4 rounded-full font-bold tracking-widest uppercase text-sm shadow-xl"
          >
            Explore Our Blog
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
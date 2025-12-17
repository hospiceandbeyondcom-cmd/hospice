"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

export default function CognitiveChangesInHospice() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Distinguishing Dementia, Delirium, and Terminal Agitation
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog45.png"
            alt="Understanding cognitive changes in hospice care"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </section>

      {/* ===== Content Section ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >
        <p className="text-lg leading-relaxed mb-6 text-justify">
          In a hospice setting, distinguishing between dementia, delirium, and terminal agitation is critical because the management and goals of care for each differ significantly. While they all manifest as cognitive impairment or behavioral changes, their onset, duration, and reversibility vary.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#006D66]">1. Dementia: The Long Background</h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          Dementia is a chronic, progressive decline in cognitive function. In hospice, most patients with dementia are in the advanced stages. It is characterized by a slow and insidious onset, developing over years rather than days.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          The key feature is a steady decline in memory and activities of daily living. Unlike delirium, alertness is usually stable; the person is generally "themselves" but with diminished capacity and increasing word finding difficulties.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#006D66]">2. Delirium: The Acute Shift</h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          Delirium is an acute medical emergency of the brain. It is often reversible if the underlying cause such as a UTI, dehydration, or medication side effect is treated. It appears suddenly, over hours or days.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          The hallmark of delirium is fluctuating consciousness and inattention. The patient may be lucid one hour and completely disoriented the next. This can manifest as hyperactive delirium (agitation/hallucinations) or hypoactive delirium (withdrawn/sluggish), which is often mistaken for depression.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#006D66]">3. Terminal Agitation: The Final Transition</h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          Terminal agitation, or terminal restlessness, is a specific form of delirium that occurs during the active dying phase. It represents a spiritual or physical "unsettledness" as the body prepares to let go.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          This often looks like "picking" at the air or bedsheets, moaning, or attempts to climb out of bed. While delirium in other contexts might be treated to reverse the cause, the goal in terminal agitation is strictly comfort, often requiring medication to ease the profound distress.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto my-10 bg-white rounded-xl shadow-sm border border-gray-100">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 font-bold border-b">Feature</th>
                <th className="p-4 font-bold border-b">Dementia</th>
                <th className="p-4 font-bold border-b">Delirium</th>
                <th className="p-4 font-bold border-b">Terminal Agitation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b font-semibold">Onset</td>
                <td className="p-4 border-b">Years (Slow)</td>
                <td className="p-4 border-b">Hours/Days (Sudden)</td>
                <td className="p-4 border-b">Days/Hours</td>
              </tr>
              <tr>
                <td className="p-4 border-b font-semibold">Attention</td>
                <td className="p-4 border-b">Normal (until late)</td>
                <td className="p-4 border-b">Impaired/Fluctuating</td>
                <td className="p-4 border-b">Severely Impaired</td>
              </tr>
              <tr>
                <td className="p-4 border-b font-semibold">Reversibility</td>
                <td className="p-4 border-b">Irreversible</td>
                <td className="p-4 border-b">Often Reversible</td>
                <td className="p-4 border-b">Irreversible</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Primary Goal</td>
                <td className="p-4">Quality of life</td>
                <td className="p-4">Treat the cause</td>
                <td className="p-4">Symptom Comfort</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg leading-relaxed mb-6 text-justify font-semibold italic text-[#7D5F42]">
          Clinical Tip: If a patient who has been stable for months suddenly becomes aggressive or confused overnight, it is not a sudden "jump" in their dementia; it is almost certainly delirium.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Ultimately, understanding these differences allows the hospice team to provide the right care at the right time whether that means adjusting a medication or providing the gentle sedation needed for a peaceful transition.
        </p>
      </motion.section>

      <Footer />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function WhenEatingBecomesOptionalUnderstandingNutritionAtTheEndOfLife() {
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

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="w-full md:w-1/2 p-8 md:p-16 text-center md:text-left"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            When Eating Becomes Optional
            <span className="block text-2xl md:text-3xl font-semibold mt-2">
              Understanding Nutrition at the End of Life
            </span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg">
            December 13, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[38vh] md:h-[68vh] relative"
        >
          <Image
            src="/blog40.png"
            alt="When Eating Becomes Optional Understanding Nutrition at the End of Life"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent md:hidden" />
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-16 text-gray-800">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6 text-[17px] leading-relaxed text-justify"
        >
          <p>
            As life approaches its natural conclusion, a profound shift often occurs in the body's needs and signals. One of the most noticeable changes is a decreased interest in food and drink, a transition that can be deeply challenging for family members and caregivers. Understanding this phase through a nutritional lens is crucial, moving the focus from aggressive feeding to <strong>comfort and dignity</strong>.
          </p>

          <p>
            The human body is remarkably resilient, but at the end of life, its metabolism fundamentally changes. The body's energy requirements naturally plummet, and the complex machinery needed to process food including digestion, absorption, and metabolism begins to slow down significantly. In this state, the body is no longer able to effectively utilize nutrients, making attempts to force feed or provide aggressive nutritional support often <strong>counterproductive and uncomfortable</strong> for the patient.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42] mt-8">
            💡 The Misconception of Starvation
          </h3>

          <p>
            A common fear among loved ones is that the person will suffer or die from starvation or dehydration. However, medical experts emphasize that in the final stages of a terminal illness, the refusal of food is a <strong>natural and protective mechanism</strong>, not a cause of suffering. Introducing food and fluids that the body cannot process can actually lead to complications such as:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Fluid overload:</strong> Causing swelling and discomfort.</li>
            <li><strong>Aspiration:</strong> The accidental entry of food or fluid into the lungs.</li>
            <li><strong>Nausea and vomiting:</strong> Due to the slowed digestive system.</li>
          </ul>

          <p>
            Furthermore, research suggests that a state of mild ketosis, which results from reduced food intake, may even induce a feeling of <strong>euphoria and peace</strong>, acting as a natural anesthetic during the dying process.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42] mt-8">
            💖 Shifting the Goal to Comfort
          </h3>

          <p>
            The primary goal of care at this stage shifts from curative or restorative to <strong>palliative and supportive</strong>. Nutritional care transitions from a therapeutic intervention to a <strong>comfort measure</strong>.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Offer, Do Not Force:</strong> Instead of adhering to a strict meal schedule, offer small amounts of favorite foods or liquids when the patient expresses interest.</li>
            <li><strong>Oral Hygiene is Key:</strong> Focus on excellent mouth care. Keeping the mouth moist and clean with frequent swabbing or small sips of water or ice chips can greatly improve comfort.</li>
            <li><strong>Focus on the Experience:</strong> Sharing a gentle moment with a loved one becomes an act of love and companionship, not a medical task.</li>
          </ul>

          <p>
            Ultimately, accepting that eating has become optional is an act of respect for the natural process. It honors the patient’s comfort and allows caregivers to focus on emotional support, pain management, and shared presence in the final journey.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-3 rounded-full font-semibold text-white shadow-md transition hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
            }}
          >
            Return to Blog
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

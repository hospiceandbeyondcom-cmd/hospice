"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

export default function HolidayTraditionsInHospice() {
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
            Small Moments, Big Memories: Holiday Traditions You Can Still Enjoy in Hospice Care
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog46.png"
            alt="Celebrating holidays in hospice care"
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
          When a loved one is in hospice, the approaching holiday season can feel heavy. The traditions that once defined your family the bustling kitchens, the travel, the late night celebrations may now feel impossible or even painful. However, hospice is not about the end of living; it is about making the most of the time that remains. 
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          While the scale of your traditions may change, the essence of them doesn’t have to. It is often the smallest moments that carry the most profound weight. Here is how you can adapt and honor holiday traditions during this sensitive time.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#006D66]">Redefining the Gathering</h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          In years past, the holiday might have centered around a grand dinner table. In hospice, the "center" shifts to the patient's bedside or favorite chair. Instead of a single large event, consider "open house" style visits where one or two family members come at a time. This prevents the patient from becoming overwhelmed by noise and activity while ensuring they still feel part of the family circle.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#006D66]">The Power of Sensory Traditions</h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          When energy is low, sensory experiences become the primary way we connect. You can still bring the holidays to your loved one through:
        </p>
        <ul className="list-disc ml-6 mb-6 text-lg space-y-3">
          <li><strong>Scent:</strong> Bring a sprig of fresh evergreen, a bowl of cinnamon sticks, or bake a small batch of a family favorite cookie just for the aroma to fill the home.</li>
          <li><strong>Sound:</strong> Create a playlist of their favorite carols or holiday hymns. Music often reaches parts of the brain that words cannot, offering deep comfort.</li>
          <li><strong>Touch:</strong> Using a holiday-themed soft blanket or even just holding hands while watching a classic film can be a powerful tradition in itself.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-[#006D66]">Creating "Legacy" Traditions</h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          This is a beautiful time to engage in "story-catching." Ask your loved one about their favorite holiday memory from childhood. If they are able, record these stories on your phone. If they are no longer verbal, look through old photo albums together. The act of remembering is a tradition that honors their life and creates a bridge for future generations.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#006D66]">Decorating for Peace, Not Perfection</h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          You don't need a ten-foot tree to capture the spirit of the season. A small tabletop decoration, a few meaningful ornaments hung within their line of sight, or a simple string of warm lights can transform a clinical space into a sanctuary of warmth.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#006D66]">Permission to Be Different</h2>
        <p className="text-lg leading-relaxed mb-6 text-justify italic">
          Perhaps the most important tradition to embrace this year is the tradition of grace. 
        </p>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          Give yourself permission to skip the cards, the elaborate gifts, or the stressful obligations. Focus instead on the "Big Memories" found in "Small Moments"—the quiet smile during a song, the shared prayer, or the simple peace of being together. These are the gifts that will truly endure.
        </p>

        <div className="p-6 bg-[#F7F5EF] rounded-xl border-l-4 border-[#006D66] mt-10">
          <p className="text-lg font-semibold text-[#006D66] mb-2">A Note for Caregivers:</p>
          <p className="text-gray-700 italic">
            It is okay to feel sad while celebrating. Grieving and honoring a holiday can happen at the same time. Lean on your hospice chaplain or social worker if you need support navigating these complex emotions.
          </p>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
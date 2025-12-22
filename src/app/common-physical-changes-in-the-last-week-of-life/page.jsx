"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

/** * SEO CONFIGURATION
 * Title: Common Physical Changes in the Last Weeks of Life | Hospice & Beyond
 * Description: Understanding the natural physical shifts in the final weeks of life replaces fear with peace. Learn about respiratory shifts and the body's natural rhythm.
 */

const metadata = {
  title: "Common Physical Changes in the Last Weeks of Life | Hospice & Beyond",
  description: "Understanding the natural physical shifts in the final weeks of life replaces fear with peace. Learn about respiratory shifts and the body's natural rhythm.",
  keywords: [
    "physical changes before death",
    "end of life signs",
    "hospice care symptoms",
    "active dying phase",
    "respiratory changes end of life",
    "terminal restlessness",
    "final weeks of life",
    "comfort care education",
    "hospice breathing patterns",
    "quiet horizon hospice"
  ]
};

export default function PhysicalChangesBlog() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* SEO Head Implementation */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />

      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white shadow-sm border-b border-gray-50 rounded-b-[2rem]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 px-6 py-10 md:p-20 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-[#012419]">
            Common Physical Changes <br />
            <span 
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #E1C16E, #7D5F42)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              in the Last Weeks of Life
            </span>
          </h1>
          <p className="text-gray-500 text-lg font-light tracking-wide italic">
            Navigating the "Quiet Horizon" by understanding the body's natural rhythm of letting go.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[28vh] sm:h-[35vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog53.png" 
            alt="Understanding physical changes at the end of life"
            fill
            priority
            className="object-cover md:object-contain"
          />
        </motion.div>
      </section>

      {/* ===== Content Section ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-[#012419]"
      >
        <p className="text-xl leading-relaxed mb-10 text-justify font-serif italic text-gray-600 border-l-4 border-[#E1C16E] pl-6">
          When a loved one enters the final chapters of their journey, the transition can feel like navigating an unfamiliar landscape. Understanding these physical shifts is the first step toward reclaiming peace from anxiety.
        </p>

        <p className="text-lg leading-relaxed mb-12 text-justify">
          In hospice care, we view these changes not as a medical crisis, but as a specialized, internal symphony of letting go. By demystifying the biological roadmap, families can move from a state of panic to a state of sacred presence.
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#012419] border-b-2 border-[#E1C16E] inline-block pb-1">
              1. The Rhythm of Rest: Energy and Sleep
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-justify">
              One of the most profound shifts in the last weeks of life is the significant decrease in energy. The body, in its wisdom, begins to conserve its remaining strength for the most vital internal functions. It is not uncommon for a loved one to sleep for the majority of the day and night. 
            </p>
            <p className="text-lg leading-relaxed text-justify">
              This is not a sign of "giving up," but rather a transition into a deep state of rest. During this time, the need for food and water naturally diminishes. The metabolic system slows down, and forcing nourishment can actually cause discomfort.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#012419] border-b-2 border-[#E1C16E] inline-block pb-1">
              2. The Symphony of Breath: Respiratory Shifts
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-justify">
              Changes in breathing patterns are often the most distressing for families to witness. You may observe "Cheyne Stokes" breathing a cycle of shallow breaths followed by a brief pause. While this can look alarming, clinical evidence suggests the patient is typically at peace.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              The "rattling" sound occasionally heard is caused by relaxed throat muscles and natural secretions. It is a sign of deep relaxation rather than struggle. Repositioning or specialized comfort medications can ease this sound for the family's tranquility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#012419] border-b-2 border-[#E1C16E] inline-block pb-1">
              3. Sensory and Circulation Changes
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-justify">
              As the heart slows, circulation is prioritized for internal organs. Hands, arms, and legs may feel cool to the touch, and the skin may appear mottled. This is a normal physiological transition.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              Crucially, hearing is widely believed to be the last sense to leave. Even when non responsive, your loved one can still hear your voice. Familiar tones, favorite music, or simply holding a hand provides a profound layer of reassurance.
            </p>
          </section>
        </div>

        {/* ===== FAQ Section for SEO ===== */}
        <section className="mt-20 py-12 border-t border-gray-100">
          <h2 className="text-3xl font-bold mb-10 text-[#012419] text-center uppercase tracking-widest">
            Common Questions & Reassurance
          </h2>
          <div className="space-y-6">
            <div className="bg-[#FAFAF8] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#7D5F42] text-lg mb-2">What signs indicate the final weeks have begun?</h3>
              <p className="text-gray-700">Increased sleep, decreased appetite, withdrawal from social interaction, and a drop in physical strength as the body conserves energy.</p>
            </div>

            <div className="bg-[#FAFAF8] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#7D5F42] text-lg mb-2">Is the respiratory "rattle" painful?</h3>
              <p className="text-gray-700">No. It is a result of relaxed muscles. The patient is generally in a deep state of relaxation and not in distress.</p>
            </div>

            <div className="bg-[#FAFAF8] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#7D5F42] text-lg mb-2">Why do they stop eating?</h3>
              <p className="text-gray-700">The digestive system slows as the body prepares for rest. Forcing nourishment can cause discomfort; the body naturally no longer requires external fuel.</p>
            </div>
          </div>
        </section>

        <div className="mt-16 text-center">
          <p className="text-2xl font-serif italic text-[#7D5F42]">
            "When the roadmap is understood, fear is replaced by peace."
          </p>
          <div className="w-20 h-1 bg-[#E1C16E] mx-auto mt-6"></div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

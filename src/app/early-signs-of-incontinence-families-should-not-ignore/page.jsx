"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function EarlySignsOfIncontinenceFamiliesShouldNotIgnore() {
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
            Early Signs of Incontinence Families Should Not Ignore
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            December 11, 2025
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
            src="/blog38.png"
            alt="Early Signs of Incontinence Families Should Not Ignore"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent md:hidden"></div>
        </motion.div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-gray-800 leading-relaxed text-justify">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-8 text-[17px]"
        >

          {/* EXACT USER CONTENT BELOW */}
          <h2 className="text-2xl font-bold text-[#006D66]">
            Early Signs of Incontinence Families Should Not Ignore
          </h2>

          <p>
            Incontinence can develop slowly, and many families miss the early warning signs. Recognizing these changes early can help prevent skin breakdown, infections, and discomfort especially for hospice patients who may already be experiencing weakness, mobility changes, or declining health.
          </p>

          <p>Below are important early signs to watch for in a loved one:</p>

          <hr className="border-gray-300" />

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            1 Increased Urgency or Frequent Bathroom Trips
          </h3>
          <p>
            If your loved one is suddenly rushing to the bathroom or going more often than usual, this may be an early indication of bladder changes.
          </p>
          <p><strong>What families can do:</strong> Gently ask if they feel urgency or pressure, and notify the hospice nurse so we can assess for infections or medication related causes.</p>

          <hr className="border-gray-300" />

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            2 Accidents That Are Explained Away
          </h3>
          <p>
            Many seniors hide accidents due to embarrassment or fear of losing independence. Finding damp clothes, wet bedding, or hidden laundry is a common early sign.
          </p>
          <p><strong>What families can do:</strong> Respond with reassurance, not shame. Let them know it is okay and that the hospice team can help.</p>

          <hr className="border-gray-300" />

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            3 Strong Urine Odor or Changes in Laundry Patterns
          </h3>
          <p>
            Smells on clothing, bedding, or furniture may indicate urine leakage. An increase in laundry or sudden secrecy around laundry is also a sign.
          </p>
          <p><strong>What families can do:</strong> Observe gently. Avoid confronting the patient harshly offer assistance with privacy and dignity.</p>

          <hr className="border-gray-300" />

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            4 Skin Redness Irritation or Itching in the Perineal Area
          </h3>
          <p>
            Repeated moisture on the skin can cause irritation or rashes that may be mistaken for allergies. This is a serious sign because hospice patients are at higher risk for skin breakdown and pressure injuries.
          </p>
          <p><strong>What families can do:</strong> Contact the hospice nurse immediately. Early care prevents infections and discomfort.</p>

          <hr className="border-gray-300" />

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            5 Avoiding Social Visits or Activities
          </h3>
          <p>
            Some patients reduce outings because of fear of accidents. They may decline meals, car rides, or visits they normally enjoy.
          </p>
          <p><strong>What families can do:</strong> Gently ask what worries them. Allow them to express their concerns without judgment and reassure them we can help manage symptoms.</p>

          <hr className="border-gray-300" />

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            6 Decreased Fluid Intake
          </h3>
          <p>
            Many patients limit drinking to avoid accidents which can lead to dehydration, confusion, and urinary tract infections.
          </p>
          <p><strong>What families can do:</strong> Encourage regular sips of water throughout the day and notify hospice if they are avoiding fluids entirely.</p>

          <hr className="border-gray-300" />

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            7 Difficulty Reaching the Bathroom in Time
          </h3>
          <p>
            Weakness, slow walking, or trouble standing may make it hard to get to the bathroom before leakage happens.
          </p>
          <p><strong>What families can do:</strong> Ensure a clear path, nightlights, easy to remove clothing, and ask the hospice team about toileting schedules or bedside equipment.</p>

          <hr className="border-gray-300" />

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            8 Wet Spots on Chairs Wheelchairs or Bedding
          </h3>
          <p>Any unexplained wetness is a sign of early incontinence.</p>
          <p><strong>What families can do:</strong> Stay calm and discreet. Offer clean clothing or pads without making the patient feel embarrassed.</p>

          <hr className="border-gray-300" />

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            9 New Confusion or Agitation
          </h3>
          <p>
            Sudden behavior changes may indicate a UTI especially in elderly or hospice patients. UTIs often present with confusion before urinary symptoms.
          </p>
          <p><strong>What families can do:</strong> Notify hospice right away early treatment helps prevent discomfort and worsening confusion.</p>

          <hr className="border-gray-300" />

          <h3 className="text-xl font-semibold text-[#006D66]">
            Why Early Detection Matters in Hospice Care
          </h3>

          <p>
            Catching incontinence early allows the hospice team to prevent skin breakdown and pressure ulcers manage moisture related discomfort reduce infection risk maintain dignity and comfort provide the right incontinence products and support caregivers with guidance and supplies. The goal is always comfort dignity and quality of life.
          </p>

          {/* END EXACT CONTENT */}
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

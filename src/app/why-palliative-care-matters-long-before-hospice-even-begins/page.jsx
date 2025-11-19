"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function WhyPalliativeCareMattersLongBeforeHospiceEvenBegins() {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #FAFAF8 0%, #FDFCF9 60%, #F7F5EF 100%)",
      }}
    >
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        {/* TEXT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-snug"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Palliative Care Matters Long Before Hospice Even Begins
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Nov 19, 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Many families believe palliative care is only for the final days of life,
            but its purpose reaches much further. Palliative care brings comfort,
            guidance, and relief early in a serious illness, long before hospice becomes
            necessary. It focuses on improving quality of life, supporting families, and
            bringing calm to overwhelming seasons.
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
            src="/blog19.png"
            alt="Why Palliative Care Matters"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
        </motion.div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >
        <p className="text-lg leading-relaxed mb-6 text-justify">
          Palliative care is about support. It eases symptoms, lifts emotional weight,
          and gives families a sense of direction during difficult moments. It does not
          mean someone is giving up. Instead, it provides another layer of care that
          walks beside medical treatment, helping patients feel more comfortable,
          understood, and heard.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          When palliative care begins early, families often feel more confident and
          grounded. There is more time for thoughtful decisions, more space for honest
          conversations, and more clarity around what truly matters. Patients feel the
          difference as well. Pain becomes easier to manage. Stress begins to soften.
          Daily life becomes a little more calm.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          This early support also helps prepare families for the future without fear.
          It creates a bridge between treatment and comfort that makes the transition to
          hospice, when needed, much smoother and less overwhelming. By the time hospice
          becomes appropriate, families already feel connected to care that sees them,
          respects them, and honors their wishes.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          At Hospice and Beyond Palliative Care, we encourage families to reach out long
          before the final chapter. The earlier palliative care enters the journey, the
          more meaningful and steady the support becomes. It is not about the end. It is
          about living each moment with dignity, comfort, and compassion.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          If you are caring for someone with a serious illness, you do not have to wait.
          Support is available now, and comfort can begin today.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/hospice-eligibility-questionnaire")}
            className="px-8 py-3 rounded-full font-semibold text-white shadow-md transition hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
            }}
          >
            Take Your Eligibility Questionnaire
          </button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
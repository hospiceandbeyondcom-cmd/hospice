"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TheGraceWeFindInHospiceAndPalliativeMoments() {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #FAFAF8 0 percent, #FDFCF9 60 percent, #F7F5EF 100 percent)",
      }}
    >
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        
        {/* Text Side */}
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
            The Grace We Find in Hospice and Palliative Moments
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">Nov 14 2025</p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Hospice and palliative care offer a soft kind of clarity. The kind that appears in quiet rooms warm hands and moments where love becomes the language spoken without words.
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
            src="/blog14.png"
            alt="The Grace We Find in Hospice and Palliative Moments"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent md:hidden"></div>
        </motion.div>
      </section>

      {/* ===== Main Content ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >
        <p className="text-lg leading-relaxed mb-6 text-justify">
          There are moments in hospice and palliative care that feel almost silent yet they hold a depth that forever stays with us. These are the moments where time softens where presence becomes the medicine and where what truly matters rises gently to the surface.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Not the rush. Not the noise. Not the expectations we once held so tightly. But breathing together sitting close and allowing love to be seen and felt in its simplest form.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Hospice is not the end. It is the turning inward toward comfort dignity and the quiet truths we often overlook in the hurried parts of life. Palliative care extends this tenderness even earlier reminding us that relief calm and compassion are not luxuries but deep human needs.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          These moments teach us something sacred. That a soft voice holds power that a warm hand can steady the entire room and that simply being present is sometimes the greatest act of care we will ever offer.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Families often walk into this season afraid of what may be lost but they walk out remembering what was found. The grace of connection the warmth of presence and the beauty of love expressed gently and without fear.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Palliative moments teach us to slow down. Hospice moments teach us to open our hearts. Together they remind us that even in the hardest chapters there is still something deeply human taking shape. Understanding forgiveness tenderness and truth.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          If you are walking through this time may you feel the softness around you. May you notice the small gestures of care. May you remember that you do not walk alone.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Because in hospice and palliative spaces love finds room to speak. And when it does it speaks clearly with warmth with honesty and with a gentleness that stays long after the moment has passed.
        </p>

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

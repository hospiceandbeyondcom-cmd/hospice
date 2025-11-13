"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TheGentlePowerOfSayingILoveYouOutLoud() {
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
            The Gentle Power of Saying I Love You Out Loud
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">Nov 13, 2025</p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Spoken love has a way of softening even the heaviest moments. In hospice care it becomes a bridge that brings peace, comfort, and connection when words are few.
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
            src="/blog13.png"
            alt="The Gentle Power of Saying I Love You Out Loud"
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
          There is a unique softness in hearing the words I love you spoken out loud. In hospice care these words carry a deeper meaning. They are not just expressions of affection but reminders of connection, gratitude, and the memories that shaped a lifetime.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Families often say the moment they finally spoke these words freely something shifted. The room felt lighter. The tension eased. The person they loved relaxed, even if only for a moment. Love spoken out loud has a way of settling the heart.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          In the last chapters of life these simple words become gifts. They do not need to be poetic. They do not need to be perfect. They only need to be true. Saying I love you out loud gives peace to the one who hears it and healing to the one who speaks it.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          May we never underestimate the gentle power of spoken love. It is a comfort. It is a bridge. And at the end of life it often becomes the most important truth we have left to give.
        </p>

        {/* CTA */}
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

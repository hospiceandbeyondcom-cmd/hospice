"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BlogPost() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col">
      <Header />

      {/* ===== Hero Section (Two-column responsive layout) ===== */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white">
        {/* Text Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center text-center md:text-left"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-snug"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            When Goodbye Becomes a Beginning
          </h1>

          {/* Post Date */}
          <p className="text-sm md:text-base text-gray-500 mb-4">
            Posted on November 5, 2025
          </p>

          <p className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed md:text-left text-center">
            A reflection on how endings can open the quiet doors of peace, meaning, and love.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog04.png"
            alt="When Goodbye Becomes a Beginning"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </section>

      {/* ===== Article Section ===== */}
      <section className="flex justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-16">
        <div className="w-full max-w-3xl text-gray-800 leading-relaxed text-[1.05rem] md:text-lg space-y-8 text-justify">
          {[
            `Saying goodbye is one of the hardest things we ever do. It can feel final, like a door closing on a part of our heart that will never open again. Yet for many families, something gentle begins to take shape in those same moments of parting. Beneath the sadness, there is often a quiet peace waiting to be found.`,

            `When we care for someone at the end of life, love begins to speak in new ways. It is no longer about doing more or saying everything just right. It becomes about being present, about honoring each breath, and allowing love to rest instead of reach. Goodbye, in its truest form, is not about losing someone. It is about walking with them as far as love will go, and then standing still with grace.`,

            `At Hospice and Beyond Palliative Care, we often witness this beautiful transformation. Families who feared the final moments often discover that they hold something sacred. They begin to see that goodbye can carry peace, that love can exist beyond presence, and that memory can become a bridge instead of a wall.`,

            `After a goodbye, there are days that feel quiet, heavy, and unfamiliar. Yet slowly, light begins to return in small ways. A laugh remembered. A favorite song. The way sunlight hits a chair they once loved. These moments are not reminders of loss. They are reminders of connection — that love continues to live in the heart long after the touch has faded.`,

            `When goodbye becomes a beginning, it does not erase the pain. It simply changes it. It becomes softer, deeper, wiser. It becomes a kind of peace that whispers, I am still here, just differently. At Hospice and Beyond, we believe that every farewell can hold the seed of something lasting — love that does not end, but evolves into memory, meaning, and grace.`,
          ].map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mx-auto max-w-3xl"
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Call-to-Action Button with Instant Feedback */}
          <motion.div
            className="text-center pt-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <button
              onClick={() => {
                setLoading(true);
                router.push("/hospice-eligibility-questionnaire");
              }}
              disabled={loading}
              className={`px-8 py-3 rounded-full font-semibold text-white text-base md:text-lg transition hover:opacity-90 shadow-md ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              style={{
                background: "linear-gradient(90deg, #006D66, #7D5F42)",
              }}
            >
              {loading
                ? "Opening..."
                : "Take Your Hospice Eligibility Questionnaire"}
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

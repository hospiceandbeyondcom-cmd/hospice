"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function UnderstandingPainAtEndOfLife() {
  const router = useRouter();

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
            Understanding Pain at the End of Life: What Families Should Know
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            November 20, 2025
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify max-w-xl mx-auto md:mx-0">
            For many families, the most daunting aspect of a loved one’s final
            days is the fear that they will suffer. The prospect of watching
            someone you love in pain can make you feel helpless. However, modern
            palliative care has made significant strides in managing end of life
            symptoms. Understanding how pain works and how it is treated can
            empower you to be a better advocate and find a measure of peace
            during a difficult time.
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
            src="/blog42.png"
            alt="Understanding Pain at the End of Life"
            fill
            priority
            className="object-contain object-center"
          />
        </motion.div>
      </section>

      {/* ===== Main Content ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >
        <p className="text-lg leading-relaxed mb-10 text-justify">
          Here is what families should know about pain at the end of life.
        </p>

        {/* Point 1 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#006D66]">
            1. Pain is Not Inevitable
          </h2>
          <p className="text-lg leading-relaxed text-justify">
            First, it is important to dispel the myth that a painful death is
            guaranteed. Not every terminal illness involves severe physical
            pain. For those that do, pain is almost always manageable.
            Palliative care teams specialize in complex symptom management, and
            their primary goal is comfort. When pain is treated proactively,
            patients can often remain comfortable and resting peacefully.
          </p>
        </div>

        {/* Point 2 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#006D66]">
            2. Understanding "Total Pain"
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            One concept doctors often use is "Total Pain." This recognizes that
            suffering isn't just physical it is also emotional, social, and
            spiritual.
          </p>
          <ul className="list-none space-y-3 mb-6 ml-4">
            <li className="text-lg leading-relaxed">
              <span className="font-bold text-gray-900">Physical:</span> The
              actual bodily sensation caused by the illness.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-bold text-gray-900">Emotional:</span>{" "}
              Anxiety, depression, or fear of death.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-bold text-gray-900">Spiritual:</span>{" "}
              Questions about meaning, regret, or the afterlife.
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-justify">
            Families should know that high levels of anxiety can lower a
            patient's pain threshold. Sometimes, treating the physical pain
            isn't enough; simply holding their hand, playing soothing music, or
            resolving a family conflict can actually make pain medication work
            better.
          </p>
        </div>

        {/* Point 3 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#006D66]">
            3. Reading the Signs (Even in Silence)
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            As patients approach the end of life, they may become less
            responsive or unable to speak. This does not mean they cannot feel
            pain, nor does it mean you cannot help them. You must learn to look
            for non-verbal cues:
          </p>
          <ul className="list-disc list-inside space-y-3 mb-6 ml-2">
            <li className="text-lg leading-relaxed">
              <span className="font-bold text-gray-900">
                Facial Expressions:
              </span>{" "}
              Grimacing, furrowed brows, or a tightened jaw.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-bold text-gray-900">Body Language:</span>{" "}
              Clenched fists, fidgeting, or pulling at bedsheets.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-bold text-gray-900">Sounds:</span> Moaning
              or groaning, particularly when being moved.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-bold text-gray-900">Breathing:</span>{" "}
              Rapid or labored breathing can sometimes indicate distress.
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-justify">
            If you see these signs, alert the care team immediately. You are the
            expert on your loved one’s normal behavior; if they look unlike
            themselves, trust your gut.
          </p>
        </div>

        {/* Point 4 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#006D66]">
            4. Letting Go of Medication Fears
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            Families often hesitate to authorize higher doses of pain medication
            (like morphine) due to fears of addiction or "hastening death."
          </p>
          <ul className="list-none space-y-3 mb-2 ml-4">
            <li className="text-lg leading-relaxed">
              <span className="font-bold text-gray-900">Addiction:</span> At
              the end of life, addiction is not a relevant concern. The body
              processes opioids differently when in pain, and the priority is
              solely relief.
            </li>
            <li className="text-lg leading-relaxed">
              <span className="font-bold text-gray-900">Hastening Death:</span>{" "}
              Research shows that appropriate pain management often allows the
              body to rest, which can actually sustain life slightly longer than
              if the patient were exhausted by agony. Even if it causes
              drowsiness, the trade-off for a pain-free transition is usually
              what the patient would prefer.
            </li>
          </ul>
        </div>

        {/* Point 5 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#006D66]">
            5. Your Presence is Pain Relief
          </h2>
          <p className="text-lg leading-relaxed text-justify">
            Finally, never underestimate the power of your presence. Medical
            studies have shown that the presence of a trusted loved one can
            alter pain perception. Gentle touch, swabbing their mouth with a
            cool sponge, adjusting pillows, or simply sitting in silence
            provides a comfort that no medicine can replicate.
          </p>
        </div>

        {/* Conclusion */}
        <p className="text-lg leading-relaxed text-justify font-medium italic">
          Pain at the end of life is a reality we must prepare for, but it is
          not a battle you have to fight alone. By observing, advocating, and
          simply being there, you provide the greatest comfort possible.
        </p>

        {/* Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => router.push("/hospice-eligibility-questionnaire")}
            className="px-8 py-3 rounded-full font-semibold text-white shadow-md transition hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
            }}
          >
            Hospice Eligibility Questionnaire
          </button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
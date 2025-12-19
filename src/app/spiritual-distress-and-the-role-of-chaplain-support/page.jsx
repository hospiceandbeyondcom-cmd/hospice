"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

export default function SpiritualDistressInHospice() {
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
              background: "linear-gradient(90deg, #1A3C34, #C5A059)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Beyond the Physical: Addressing Spiritual Distress in Hospice
          </h1>
          <p className="text-lg text-gray-600 italic">
            Finding peace when medicine is not enough.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog49.png"
            alt="Spiritual support and chaplaincy in hospice"
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
          In the quiet rooms of hospice care, we often speak of comfort in physical terms: managing pain, easing breath, and ensuring rest. But there is another kind of pain that no medication can touch. It is an ache of the soul, a crisis of meaning, and a profound sense of disconnection that clinicians call <strong>spiritual distress</strong>. Left unaddressed, this invisible weight can manifest as physical restlessness, making a peaceful transition difficult for both the patient and the family.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#1A3C34]">
          Understanding Spiritual Distress
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          Spiritual distress is not reserved only for the religious; it is a universal human experience. It occurs when a persons sense of meaning, purpose, or connection to the world is shattered by the reality of a terminal illness. When we can no longer do or achieve, we are forced to simply be, and for many, that transition is terrifying.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          It often surfaces as existential questioning: <em>"Did my life matter?" "Why is this happening to me now?"</em> or <em>"What happens when I take my last breath?"</em> These are not just questions; they are expressions of a soul seeking solid ground as the physical world begins to fade.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#1A3C34]">
          The Anatomy of the Chaplains Role
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          One of the most common misconceptions is that a hospice chaplain is there to convert someone or perform religious rites. While they can certainly do those things for those who desire them, a professional chaplain is primarily a <strong>specialist in spiritual care and emotional presence.</strong>
        </p>

        <div className="bg-[#F7F5EF] p-8 rounded-2xl mb-8 border-l-4 border-[#C5A059]">
          <h3 className="text-xl font-bold mb-3 text-[#1A3C34]">
            The Three Pillars of Chaplain Support:
          </h3>
          <ul className="space-y-4">
            <li>
              <strong>1. Active Non Judgmental Listening:</strong> Creating a sacred space where the patient can voice fears, anger, or regrets without being fixed or corrected.
            </li>
            <li>
              <strong>2. Meaning Making & Legacy:</strong> Helping patients conduct a life review to find the golden threads of value in their personal history.
            </li>
            <li>
              <strong>3. Bridging Family Disconnect:</strong> Facilitating difficult conversations between family members, helping them find rituals of closure and forgiveness.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-[#1A3C34]">
          Common Manifestations of Distress
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          How do we recognize when someone is suffering spiritually? It rarely looks like a theological debate. More often, it looks like:
        </p>
        <ul className="list-disc pl-8 mb-8 space-y-3 text-lg">
          <li>
            <strong>Unresolved Guilt:</strong> Ruminating on a fractured relationship from twenty years ago.
          </li>
          <li>
            <strong>Existential Loneliness:</strong> A feeling that no one not even family can truly understand the journey they are on.
          </li>
          <li>
            <strong>Loss of Identity:</strong> Feeling like they are no longer a mother, worker, or provider, but merely a patient.
          </li>
          <li>
            <strong>Religious Struggle:</strong> For those with faith, feeling abandoned by the Divine or fearing judgment.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-[#1A3C34]">
          The Goal: Finding Spiritual Peace
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          When the hospice team led by the chaplain addresses these needs, the results are transformative. We often see a patient who was previously restless or agitated suddenly find a sense of settledness. This is not just a psychological shift; it is the resolution of spiritual distress.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          By allowing a patient to express their soul pain, we validate their personhood. We remind them that while their body may be failing, their spirit is still capable of growth, reconciliation, and peace. Chaplaincy is about honoring the story that is still being written, even in its final chapters.
        </p>

        <div className="overflow-x-auto my-10 bg-white rounded-xl shadow-sm border border-gray-100">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1A3C34] text-white">
                <th className="p-4 font-bold border-b">Support Type</th>
                <th className="p-4 font-bold border-b">Focus</th>
                <th className="p-4 font-bold border-b">Goal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b font-semibold">Religious</td>
                <td className="p-4 border-b">Rites, Prayers, Scripture</td>
                <td className="p-4 border-b">Adherence to Faith Traditions</td>
              </tr>
              <tr>
                <td className="p-4 border-b font-semibold">Existential</td>
                <td className="p-4 border-b">Purpose, Legacy, Value</td>
                <td className="p-4 border-b">Finding Meaning in Life</td>
              </tr>
              <tr>
                <td className="p-4 border-b font-semibold">Relational</td>
                <td className="p-4 border-b">Forgiveness, Reconciliation</td>
                <td className="p-4 border-b">Healing Broken Ties</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-[#C5A059]">Chaplaincy</td>
                <td className="p-4 text-[#C5A059] italic">All of the Above</td>
                <td className="p-4 text-[#C5A059] font-bold">
                  Holistic Soul Peace
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg leading-relaxed mb-6 text-justify font-semibold italic text-[#C5A059]">
          Key Takeaway: Addressing spiritual distress is not about having the answers to life’s mysteries; it is about providing the companionship and safety needed for the patient to find their own peace.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Ultimately, the role of the chaplain is to ensure that no one has to face the big questions alone. In the intersection of deep grief and profound love, they provide the steady presence that allows a soul to find its way home.
        </p>
      </motion.section>

      <Footer />
    </div>
  );
}

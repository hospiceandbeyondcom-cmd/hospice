"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Welcome() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.9, ease: "easeOut" },
  };

  return (
    <section className="relative bg-white py-24 sm:py-28 text-[#03271E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== ABOUT US NARRATIVE ===== */}
        <motion.div
          {...fadeUp}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-[#03271E] mb-6">
              About Hospice and Beyond
            </h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Hospice and Beyond Palliative Care is founded on a simple but
              sacred belief — that every person deserves dignity, comfort, and
              peace through every stage of life. We are a compassionate team of
              professionals who walk hand in hand with patients and their loved
              ones, creating a space where healing, presence, and hope are
              honored.
            </p>
            <p className="text-gray-700 mb-5 leading-relaxed">
              We bring care directly to where it’s most meaningful — the home.
              Our focus extends beyond medical support to emotional and
              spiritual well-being, helping families find calm even in
              difficult transitions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Hospice and Beyond, every heartbeat, every moment, and every
              story matters.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/about3.png"
              alt="About Hospice and Beyond"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* ===== MISSION / VISION / VALUES ===== */}
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#03271E] mb-3">
            Guided by Compassion, Peace, and Dignity
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission, vision, and values define who we are — rooted in love,
            service, and the belief that every life deserves honor and comfort.
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mission */}
          <motion.div
            {...fadeUp}
            className="bg-[#F9FAFB] rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.08)] hover:shadow-[0_0_35px_rgba(0,0,0,0.12)] transition"
          >
            <div className="w-full h-56 mb-6 overflow-hidden rounded-xl">
              <Image
                src="/comfort.png"
                alt="Comfort - Mission"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#E6B800] mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To bring exceptional comfort, dignity, and peace to every patient
              and family we serve. We ensure that life’s final chapter is lived
              with grace — supported by compassionate professionals who
              understand that every moment matters.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="bg-[#F9FAFB] rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.08)] hover:shadow-[0_0_35px_rgba(0,0,0,0.12)] transition"
          >
            <div className="w-full h-56 mb-6 overflow-hidden rounded-xl">
              <Image
                src="/peace.png"
                alt="Peace - Vision"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#E6B800] mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be a guiding light of hope and healing in our communities —
              where every individual experiences compassionate care, emotional
              peace, and spiritual wholeness.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="bg-[#F9FAFB] rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.08)] hover:shadow-[0_0_35px_rgba(0,0,0,0.12)] transition"
          >
            <div className="w-full h-56 mb-6 overflow-hidden rounded-xl">
              <Image
                src="/dignity.png"
                alt="Dignity - Core Values"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#E6B800] mb-3">
              Our Core Values
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Compassion | Dignity | Integrity | Family | Hope <br />
              These are the principles that shape every decision, every visit,
              and every conversation at Hospice and Beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

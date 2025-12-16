"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

export default function RepositioningForPeace() {
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
            Repositioning for Comfort Not Just Prevention
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog43.png"
            alt="Repositioning for comfort at the end of life"
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
          In the clinical world, the "turning clock" is a rigid dictator. Every two hours, like clockwork, we move patients to protect skin integrity and prevent pressure ulcers. While this remains medically vital, in hospice care, we shift the lens. We stop looking at the clock and start looking at the person. We move from repositioning for prevention to repositioning for peace.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          At the end of life, the body becomes incredibly sensitive. A wrinkle in the sheet can feel like a ridge; a stiff arm can cause profound agitation. Therefore, repositioning becomes an art form a dialogue between the caregiver and the patient, spoken through touch.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify font-semibold">
          The Art of Micro Movements
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          When the goal is comfort, we aren't always doing a full 30 degree lateral turn. Often, it is about micro adjustments. It is the subtle shifting of weight that allows the lungs to expand more fully or the joints to relax.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Consider the role of the pillow. In hospice, pillows are our primary tools of mercy.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Floating the Heels: Placing a cushion under the calves to lift heels off the mattress isn't just about sores; it’s about relieving the heavy, dragging sensation in the legs.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          The Hug: Placing a pillow against the chest or stomach for the patient to "hug" can provide a sense of security and grounding, reducing the feeling of falling that some patients experience when weak.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Unloading the Sacrum: A small wedge tucked under one hip can provide immense relief to the lower back without the invasiveness of a full-body roll.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify font-semibold">
          Touch as Reassurance
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Repositioning is also a profound opportunity for connection. As patients withdraw from the world, touch often remains the last language they understand. When we reposition for comfort, we do so with slow, deliberate, and gentle hands. We explain what we are doing, even if the patient appears unresponsive.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify italic">
          "I’m just going to place this cool pillow under your arm to help your shoulder relax."
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          This changes the dynamic from a medical procedure done to them, to a caring act done with them.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify font-semibold">
          Listening to the Body
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Ultimately, repositioning for comfort requires observation. We look for the furrowed brow, the clenched hand, or the shallow breath. These are cues that the body is tired of its current shape. By responding to these cues rather than just a timer, we offer the patient dignity. We tell them that their comfort matters to us, right up until the very end.
        </p>
      </motion.section>

      <Footer />
    </div>
  );
}

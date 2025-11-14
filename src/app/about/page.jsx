"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { Heart, Star, Compass } from "lucide-react";
import { motion } from "framer-motion";

const PRIMARY_COLOR = "#03271E";
const SECONDARY_COLOR = "#047857";
const ACCENT_COLOR = "#FFD700";

const slideUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function AboutPage() {
  const gradientHeading = {
    background: "linear-gradient(90deg, #006D66, #7D5F42)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <main className="bg-white text-gray-800 font-sans leading-relaxed antialiased">
      <Header />

      {/* === HERO SECTION === */}
      <section className="w-full bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="text-left">
            <motion.h1
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
              style={gradientHeading}
            >
              Hospice and Beyond Palliative Care
            </motion.h1>

            <motion.p
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-light italic max-w-xl text-gray-700 mt-4"
            >
              “A Legacy of Compassion Honoring Every Life Every Moment.”
            </motion.p>
          </div>

          {/* IMAGE */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/heroabout.png"
              alt="Hospice and Beyond Hero"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>

        </div>
      </section>

      {/* === WELCOME SECTION === */}
      <section className="grid md:grid-cols-2 items-center gap-10 px-6 md:px-12 py-24 max-w-7xl xl:max-w-8xl mx-auto border-b border-gray-100">

        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative h-[350px] sm:h-[450px] w-full rounded-xl shadow-xl overflow-hidden"
        >
          <Image
            src="/about3.png"
            alt="Welcome Image"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        <div>
          <motion.h2
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6 border-b-2 border-[#047857]/50 pb-2"
            style={gradientHeading}
          >
            Welcome to Our Family
          </motion.h2>

          <p className="text-gray-700 mb-6 text-lg font-medium italic">
            Dear Patient and Family,
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            At Hospice and Beyond Palliative Care our calling is more than medical. It is deeply human. We exist to surround you with expertise understanding and presence. Hospice care is not about surrendering. It is about cherishing what matters most comfort dignity and connection.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Together we will design a care plan that reflects your personal wishes values and spiritual needs. This page introduces you to our services our people and the promises we make to you that you will never be alone that your comfort is our mission and that your family will be supported every step of the way.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            You can reach our team any time day or night 247 for comfort guidance and reassurance.
          </p>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <p className="font-bold text-lg text-[#03271E]">With warm regard,</p>
            <p className="text-lg text-[#03271E]">Awau Omole</p>
            <p className="text-gray-600 text-sm">Hospice and Beyond Palliative Care</p>
          </div>
        </div>
      </section>

      {/* === MISSION SECTION === */}
      <div className="bg-[#F9FAF9] py-20 px-6 md:px-12">

        <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto pb-20">

          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[300px] sm:h-[400px] w-full rounded-xl shadow-lg overflow-hidden"
          >
            <Image
              src="/mission.png"
              alt="Mission Image"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="p-4">
            <motion.h2
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
              style={gradientHeading}
            >
              Our Mission
            </motion.h2>

            <p className="text-gray-700 text-lg border-l-4 border-[#047857] pl-4 italic">
              "To bring exceptional comfort dignity and peace to every patient and family we serve. We exist to ensure that lifes final chapter is lived with grace supported by compassionate professionals who understand that every moment matters."
            </p>
          </div>

        </section>

        <hr className="max-w-7xl mx-auto border-gray-300 my-8" />

        {/* === VISION SECTION === */}
        <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto pt-20">

          <div className="order-2 md:order-1 p-4">
            <motion.h2
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
              style={gradientHeading}
            >
              Our Vision
            </motion.h2>

            <p className="text-gray-700 text-lg border-l-4 border-[#047857] pl-4 italic">
              "To be a guiding light of hope and healing in our communities where every individual experiences compassionate care emotional peace and spiritual wholeness."
            </p>
          </div>

          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[300px] sm:h-[400px] w-full rounded-xl shadow-lg overflow-hidden order-1 md:order-2"
          >
            <Image
              src="/about2.png"
              alt="Vision Image"
              fill
              className="object-cover"
            />
          </motion.div>

        </section>

      </div>

      {/* === CORE VALUES AND DEDICATION === */}
      <section className="py-24 px-6 md:px-12 bg-white">

        <motion.h2
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={gradientHeading}
        >
          Our Foundation of Care
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* VALUES CARD */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white shadow-2xl rounded-3xl p-10 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <Compass className="text-[#047857]" size={36} strokeWidth={2.5} />
              <motion.h3
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl font-bold"
                style={gradientHeading}
              >
                Our Core Values
              </motion.h3>
            </div>

            <ul className="space-y-2 pl-5 list-disc text-gray-700">
              <li className="font-semibold text-[#03271E]">Compassion We lead with empathy.</li>
              <li className="font-semibold text-[#03271E]">Dignity We honor every patient.</li>
              <li className="font-semibold text-[#03271E]">Integrity We operate with transparency.</li>
              <li className="font-semibold text-[#03271E]">Family One circle of care for all.</li>
              <li className="font-semibold text-[#03271E]">Hope We foster emotional and spiritual peace.</li>
            </ul>
          </motion.div>

          {/* DEDICATION CARD */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white shadow-2xl rounded-3xl p-10 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <Star
                className="text-[#FFD700]"
                size={36}
                fill={ACCENT_COLOR}
                strokeWidth={0}
              />
              <motion.h3
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl font-bold"
                style={gradientHeading}
              >
                Our Dedication
              </motion.h3>
            </div>

            <p className="text-gray-700 leading-relaxed">
              This service is dedicated to families and caregivers who bring light to every moment. We honor your courage and the sacred trust you place in us. May our support comfort and empower you as we walk beside you through this journey of care.
            </p>

            <div className="mt-6 flex items-center text-[#03271E]">
              <Heart className="mr-2 text-red-500" fill="currentColor" size={20} />
              <span className="font-semibold">Caring for the Caregiver</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* === CTA === */}
      <section className="bg-[#03271E] text-white py-16 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-white"
          >
            Ready to Find Comfort
          </motion.h2>

          <p className="text-lg mb-8 text-gray-200">
            Contact our compassionate team today to discuss eligibility services and how we can bring peace and support to your family. We are here 247.
          </p>

          <a
            href="/contact"
            className="inline-block bg-[#047857] hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-xl border-2 border-white"
          >
            Start the Conversation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

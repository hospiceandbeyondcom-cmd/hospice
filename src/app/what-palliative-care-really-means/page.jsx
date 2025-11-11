"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function WhatPalliativeCareReallyMeans() {
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

      {/* ===== Split Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        {/* Text Side */}
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
            What Palliative Care Really Means
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            November 1, 2025
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
            src="/blog11.png"
            alt="What Palliative Care Really Means"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent md:hidden"></div>
        </motion.div>
      </section>

      {/* ===== Main Content ===== */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-gray-800 leading-relaxed text-justify">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6 text-[17px]"
        >
          <p>
            Palliative care is about more than the final days of life. It is a
            form of compassionate medical support that focuses on the quality of
            living while facing serious illness. It brings comfort, relief, and
            understanding not only to patients but also to families and
            caregivers. At its core, it is about honoring dignity, reducing
            suffering, and ensuring that each person is seen and supported as a
            whole being.
          </p>

          <p>
            Many people think of palliative care as something that begins when
            hope is gone, but that is not true. It can begin at any stage of an
            illness and works alongside medical treatment. It is about balance,
            helping people find peace and comfort even while continuing to seek
            healing. It reminds us that care is not only about medicine, but
            about presence, compassion, and understanding.
          </p>

          <p>
            Palliative care focuses on relief from pain, anxiety, and emotional
            stress. It offers guidance during difficult decisions and provides
            space for honest conversations between patients, families, and
            medical teams. It encourages people to speak about what truly
            matters to them and to make choices that align with their values and
            wishes.
          </p>

          <p>
            Families who receive palliative support often describe it as a
            source of strength. They find reassurance in knowing that they are
            not alone, that someone is walking beside them through uncertainty.
            The palliative care team helps with comfort, communication, and
            coordination of care, creating an environment where peace and trust
            can grow.
          </p>

          <p>
            True compassion is found in the details. It is in the way a hand is
            held, in the calm voice of a nurse, in the time a doctor takes to
            listen without rushing. These moments, though small, are what make
            palliative care powerful. They remind us that healing is not always
            about curing. Sometimes it is about being fully present in love.
          </p>

          <p>
            Palliative care is a promise that no one should suffer in silence.
            It is a reflection of humanity at its best — kind, patient, and
            deeply attentive. To choose this kind of care is to choose comfort
            and dignity, to say that every moment matters, and that every person
            deserves to be treated with gentleness and respect.
          </p>
        </motion.div>

        {/* ===== CTA Section ===== */}
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

          <div className="mt-10 text-gray-700 text-base leading-relaxed max-w-xl mx-auto">
            <p className="mb-2">
              Take our Hospice Eligibility Questionnaire to learn more about
              care options at:
            </p>
            <a
              href="https://hospiceandbeyond.com/hospice-eligibility-questionnaire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#006D66] font-semibold underline"
            >
              hospiceandbeyond.com/hospice-eligibility-questionnaire
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

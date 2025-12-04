"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function EarlySignsOfHospiceDecline() {
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
            What Are the Early Signs of Hospice Decline
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            December 4, 2025
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
            src="/blog30.png"
            alt="Early Signs of Hospice Decline"
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
            In hospice care changes in the body happen gradually then more noticeably
            as the final stages approach. Recognizing the early signs of decline helps
            families understand what is happening and allows hospice professionals to
            adjust the care plan to provide the greatest possible comfort. These signs
            rarely appear all at once. They develop slowly as the body naturally
            shifts its energy toward basic functions.
          </p>

          <p>
            One of the earliest changes is a reduction in appetite. The body does not
            require as much energy as it once did and patients often take smaller
            portions or express less interest in food. This is a normal part of the
            process. Families may also notice reduced intake of fluids. This does not
            cause discomfort. It is simply the way the body conserves energy.
          </p>

          <p>
            Another early sign is increased fatigue. Patients may sleep longer
            throughout the day or become less responsive during conversations. This is
            not a sign of giving up. It is the body choosing rest as a way to preserve
            strength. There may also be changes in mental clarity such as increased
            confusion slower responses or difficulty focusing. These shifts usually
            occur gradually.
          </p>

          <p>
            Breathing patterns may also begin to change. Early signs include slightly
            slower breathing occasional pauses or moments of shallow breaths. These
            changes are monitored closely by hospice nurses who adjust comfort
            medications and positioning to support easier breathing.
          </p>

          <p>
            A decline in mobility often appears early as well. A patient who once
            moved independently may now need assistance standing walking or turning in
            bed. This is why hospice teams emphasize safety planning and fall
            prevention early in care. Weakness in the legs or increased unsteadiness
            is common and expected.
          </p>

          <p>
            Emotional and social changes also occur. Patients may speak less withdraw
            from long conversations or show more interest in quiet environments. This
            is not a loss of connection. It is a natural inward shift as the body and
            mind begin to slow down.
          </p>

          <p>
            Understanding these early signs provides families with reassurance. None of
            these changes indicate suffering. They simply show that the body is
            entering a new phase. The hospice team uses every visit to monitor these
            signs adjust medications and provide guidance so patients remain as
            comfortable as possible while families feel supported and informed.
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
              Take our Hospice Eligibility Questionnaire to learn more about care options at:
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

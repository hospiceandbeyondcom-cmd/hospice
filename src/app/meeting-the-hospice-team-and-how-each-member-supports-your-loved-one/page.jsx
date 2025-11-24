"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function MeetingTheHospiceTeamAndHowEachMemberSupportsYourLovedOne() {
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

      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm rounded-b-[2rem]">

        {/* TEXT SIDE */}
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
            Meeting the Hospice Team and How Each Member Supports Your Loved One
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Nov 24, 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Hospice care is built on teamwork. Each professional brings a unique role that helps
            support your loved one with comfort, dignity, and compassionate attention every day.
          </p>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog24.png"
            alt="Meeting the Hospice Team"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
        </motion.div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >

        <p className="text-lg leading-relaxed mb-6 text-justify">
          When hospice care begins, families are introduced to a team of professionals who work
          together to support comfort and emotional ease. Each team member brings a different form
          of care, and together they create a circle of support that surrounds both the patient
          and the family.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Nurses are often the most visible members of the hospice team. They monitor symptoms,
          adjust medications, offer physical comfort, and guide families through changes that may
          occur. Their presence brings reassurance and a sense of calm. They are the steady hands
          and gentle voices that help families feel grounded.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Physicians oversee the overall plan of care, ensuring that comfort and medical needs
          are managed with precision and understanding. They guide decisions, answer complex
          questions, and provide clarity that helps families feel more confident and informed.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Social workers provide emotional guidance and practical support. They help families
          navigate stress, connect with resources, and feel supported through every step of the
          journey. Their role is to listen, encourage, and strengthen the emotional wellbeing of
          everyone involved.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Chaplains or spiritual counselors offer a gentle space for reflection, prayer, and
          comfort. They meet families wherever they are spiritually, providing understanding,
          compassion, and a sense of peace during difficult times.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Home health aides assist with bathing, grooming, and daily routines. Their support helps
          patients feel clean, safe, and cared for while also easing the physical demands on family
          caregivers. These small acts create meaningful comfort throughout the day.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Together, the hospice team surrounds your loved one with support that honors their comfort,
          respects their wishes, and brings ease to every moment. Families never walk the journey
          alone. Each member contributes something essential and deeply meaningful.
        </p>

        {/* CTA BUTTON */}
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

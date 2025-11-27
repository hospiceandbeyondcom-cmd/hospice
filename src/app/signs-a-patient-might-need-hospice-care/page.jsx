"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SignsAPatientMightNeedHospiceCare() {
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

      {/* ========= HERO SECTION ========= */}
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
            Signs a Patient Might Need Hospice Care
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">Nov 26, 2025</p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Hospice care becomes appropriate when a patient is entering the final stage of a
            life limiting illness and curative treatment is no longer effective. Recognizing
            early signs allows families to receive comfort, support, and coordinated care at
            the right time.
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
            src="/blog26.png"
            alt="Signs a Patient Might Need Hospice Care"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
        </motion.div>

      </section>

      {/* ========= MAIN CONTENT ========= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-gray-800"
      >

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Hospice care is recommended when a patient is approaching the final stage of a life
          limiting illness and curative treatment is no longer effective. Identifying this moment
          early helps ensure the patient receives symptom control, emotional support, and comfort
          centered care at the right time.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          One of the first major indicators is progressive functional decline. This may include
          difficulty performing daily activities such as bathing, dressing, eating, or moving
          without assistance. Patients may spend most of the day resting, show increased weakness,
          or require help with mobility. When decline continues despite treatment, hospice
          evaluation becomes appropriate.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Another important sign is uncontrolled or worsening symptoms connected to the illness.
          Persistent pain, shortness of breath, fatigue, nausea, disturbed sleep, or frequent
          infections often signal that routine care is no longer enough. Hospice teams specialize
          in managing these symptoms to bring comfort and stability.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Weight loss and reduced appetite are also significant indicators. Patients with advanced
          illness may eat less, lose muscle, or struggle with swallowing. When nutritional decline
          continues even with supportive care, it is often a sign that the illness is entering a
          terminal stage.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Frequent hospitalizations or emergency visits within a short period also point toward the
          need for hospice. Repeated admissions for infections, breathing issues, fluid buildup, or
          acute pain can indicate that the illness is no longer responding to aggressive treatment.
          Hospice reduces the need for hospital trips by managing symptoms at home.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Cognitive decline should also be considered. In advanced dementia, patients may show
          reduced communication, limited awareness, or major behavioral changes. When physical and
          cognitive decline occur together, hospice evaluation is strongly recommended.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Finally, hospice becomes appropriate when a healthcare team determines a life expectancy
          of six months or less based on the illness trajectory. Beginning hospice at the right time
          allows care to focus on comfort, dignity, and quality of life.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/hospice-eligibility-questionnaire")}
            className="px-8 py-3 rounded-full font-semibold text-white shadow-md transition hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #006D66, #7D5F42)" }}
          >
            Take Your Eligibility Questionnaire
          </button>
        </div>

      </motion.section>

      <Footer />
    </div>
  );
}

"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ASimpleUnderstandingOfHowMedicareAndInsuranceSupportHospiceCare() {
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
            A Simple Understanding of How Medicare and Insurance Support Hospice Care
          </h1>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Nov 23, 2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Medicare and most insurance plans play a major role in helping families access
            hospice care without overwhelming financial stress. Understanding how this coverage
            works can bring peace of mind during an emotional and uncertain time.
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
            src="/blog23.png"
            alt="Medicare and Insurance Support"
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
          Hospice care is fully covered by Medicare for eligible patients, and many private
          insurance plans and Medicaid programs offer similar support. This coverage ensures
          that families can focus on comfort, connection, and emotional wellbeing rather than
          worrying about financial strain. Understanding these benefits helps families feel more
          confident as they make decisions during a very sensitive time.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Medicare covers essential services such as nursing care, medications related to comfort,
          medical equipment, counseling, and support for both patients and families. This complete
          approach removes the burden of unexpected expenses and gives families access to the tools
          they need to provide the best care possible. Every service is designed to bring relief and
          ease during a difficult stage of life.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Private insurance and Medicaid programs often follow similar guidelines, offering coverage
          for the major components of hospice care. Most plans also offer support for medical supplies,
          symptom management, and clinical visits. Families are encouraged to ask questions, review
          their plan details, and speak directly with care coordinators who can clarify the full
          extent of their benefits.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          One of the greatest advantages of hospice coverage is the freedom it gives families to
          focus on what truly matters. Instead of worrying about medical costs, families can direct
          their energy toward spending meaningful time together, creating memories, and offering
          comfort to their loved one. This sense of relief can make the entire journey feel more
          grounded and supported.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Understanding how Medicare and insurance support hospice care empowers families to make
          informed decisions with clarity and confidence. Coverage is not only about finances. It is
          about giving families the space, stability, and peace they deserve during a deeply important
          time.
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

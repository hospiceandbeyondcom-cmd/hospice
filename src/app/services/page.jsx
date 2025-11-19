"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="bg-white text-gray-800 font-sans leading-relaxed">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        
        {/* TEXT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left"
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-snug"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hospice Care
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            Compassionate patient centered hospice care designed to 
            honor every life with dignity, peace, and comfort.
          </p>
        </motion.div>

        {/* VIDEO SIDE — RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[45vh] md:h-[70vh] relative"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-bl-[2rem] md:rounded-none"
          >
            <source src="/services.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay (Like Your Blog Style) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent md:hidden"></div>
        </motion.div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-justify">
          At <strong>Hospice and Beyond Palliative Care LLC</strong>, our hospice
          services provide compassionate support for patients facing life
          limiting illness and their loved ones. We focus on comfort, dignity,
          and peace, ensuring that every day is lived meaningfully,
          surrounded by care and love.
        </p>
      </section>

      {/* ===== OVERVIEW SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-[#F9FAF9] rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-[350px] w-full">
            <Image
              src="/hospice.png"
              alt="Hospice Care Overview"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 text-justify">
            <h2 className="text-3xl font-semibold text-[#03271E] mb-4">
              What Hospice Care Means
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Hospice care is specialized support that focuses on comfort
              rather than cure. It honors the physical, emotional, and
              spiritual needs of individuals at the final stage of life.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our interdisciplinary team brings care wherever you call home
              because every moment deserves compassion.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SIGNS SECTION ===== */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#F9FAF9] to-[#E8F5F2]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#03271E] mb-6">
            Recognizing When Hospice Care May Be Needed
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed text-justify">
            We provide in home assessments to help you decide if hospice care
            is the right choice. Please contact us if you observe any of the
            following signs.
          </p>

          <ul className="text-left text-gray-800 bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-3xl mx-auto space-y-4 leading-relaxed">
            <li>• Repeated hospital stays</li>
            <li>• Persistent infections</li>
            <li>• Decline in daily functioning</li>
            <li>• Multiple chronic conditions</li>
            <li>• Weight changes</li>
            <li>• Increased falls</li>
            <li>• Drops in oxygen levels</li>
          </ul>

          <div className="mt-10">
            <Link
              href="/hospice-eligibility-questionnaire"
              className="inline-block bg-[#047857] hover:bg-[#065f46] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
            >
              Take the Hospice Eligibility Questionnaire
            </Link>
          </div>
        </div>
      </section>

      {/* ===== LEVELS OF CARE ===== */}
      <section className="bg-[#F9FAF9] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#03271E] mb-10">
            The Four Levels of Hospice Care
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 text-justify">
            Hospice and Beyond provides four levels of care ensuring every
            patient receives the appropriate support.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Cards */}
            {[
              "Routine Home Care",
              "Continuous Home Care",
              "General Inpatient Care",
              "Respite Care",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 text-justify"
              >
                <h3 className="text-2xl font-semibold text-[#047857] mb-3">
                  {i + 1}. {title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {i === 0 &&
                    "Care provided wherever you call home with regular visits from our team."}
                  {i === 1 &&
                    "Round the clock nursing support during medical crises to ensure comfort and safety."}
                  {i === 2 &&
                    "Short term inpatient care for symptoms that cannot be managed at home."}
                  {i === 3 &&
                    "Temporary inpatient care that provides rest and support for family caregivers."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-6 md:px-12 bg-[#03271E] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div className="relative h-[350px] w-full rounded-2xl overflow-hidden">
            <Image
              src="/services2.png"
              alt="Contact Us CTA"
              fill
              className="object-cover opacity-90"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Compassionate Care Is Just a Call Away
            </h2>

            <p className="text-gray-200 mb-8 leading-relaxed text-justify">
              Whether you are seeking guidance, emotional support, or planning,
              our compassionate team is ready to help day or night.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-[#FFD700] text-[#03271E] px-8 py-3 rounded-full font-semibold hover:bg-[#e6c200] transition shadow-md"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

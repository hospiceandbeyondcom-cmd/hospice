"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function WaysToPreventInfectionsAtHome() {
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

      {/* ===== HERO SECTION ===== */}
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
            Ways to Prevent Infections at Home
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            December 5, 2025
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
            src="/blog31.png"
            alt="Ways to Prevent Infections at Home"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent md:hidden"></div>
        </motion.div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-gray-800 leading-relaxed text-justify">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-10 text-[17px]"
        >
          {/* --- Heading 1 --- */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Keeping Patients and Families Safe at Home
            </h2>
            <p>
              At Hospice and Beyond Palliative Care LLC infection control is an
              important part of keeping patients families and caregivers safe
              and comfortable. Many hospice patients receive care at home where
              simple precautions can help prevent infections and support a clean
              and healing environment.
            </p>
          </div>

          <hr className="border-gray-300" />

          {/* --- Heading 2 --- */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Why Infection Control Matters
            </h2>
            <p>
              Infections can cause discomfort delay recovery or lead to
              complications. Because many hospice patients have weaker immune
              systems maintaining good hygiene and safe care practices helps
              protect everyone in the home.
            </p>
          </div>

          <hr className="border-gray-300" />

          {/* --- Heading 3 --- */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Ways to Prevent Infection at Home
            </h2>

            <h3 className="text-xl font-medium mt-6 mb-2">1. Hand Hygiene</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Wash hands often with soap and warm water for at least twenty
                seconds.
              </li>
              <li>
                Always wash before and after touching the patient giving
                medication handling food or changing dressings.
              </li>
              <li>Use hand sanitizer when soap and water are not available.</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2">2. Clean Environment</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Keep the patient room clean well ventilated and free of clutter.
              </li>
              <li>
                Wipe commonly touched surfaces such as doorknobs tables and
                remote controls each day.
              </li>
              <li>Change linens and towels regularly.</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2">
              3. Safe Handling of Medical Supplies
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Store medications and supplies in clean dry areas away from pets
                or children.
              </li>
              <li>
                Dispose of used gloves dressings and other materials in a
                covered trash container.
              </li>
              <li>
                Do not reuse disposable items such as gloves or syringes.
              </li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2">
              4. Use of Personal Protective Equipment
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Caregivers should wear gloves when coming into contact with
                blood body fluids or open wounds.
              </li>
              <li>
                Masks may be used if the patient or caregiver has a cough cold
                or respiratory illness.
              </li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2">
              5. Wound and Skin Care
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Follow the hospice nurse instructions carefully when changing
                dressings.
              </li>
              <li>
                Keep wounds covered clean and dry unless instructed otherwise.
              </li>
              <li>
                Report any redness swelling or drainage to the nurse
                immediately.
              </li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2">6. Food Safety</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Wash fruits and vegetables thoroughly.</li>
              <li>Cook food to safe temperatures.</li>
              <li>Do not leave perishable foods at room temperature.</li>
            </ul>
          </div>

          <hr className="border-gray-300" />

          {/* --- Heading 4 --- */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              When to Contact the Nurse
            </h2>
            <p>
              Contact your hospice nurse right away if the patient develops
              fever chills sweating new or worsening pain redness warmth or
              drainage from a wound shortness of breath unusual coughing sudden
              confusion or weakness.
            </p>
          </div>

          <hr className="border-gray-300" />

          {/* --- Heading 5 --- */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p>
              At Hospice and Beyond Palliative Care LLC we believe infection
              control is an expression of compassion. By practicing good hygiene
              keeping the home environment clean and reporting early signs of
              infection we work together to ensure safety comfort and peace of
              mind for every patient and family.
            </p>
          </div>
        </motion.div>

        {/* ===== CTA SECTION ===== */}
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
              Learn more about our hospice and palliative care services at:
            </p>
            <a
              href="https://hospiceandbeyond.com"
              target="_blank"
              className="text-[#006D66] font-semibold underline"
            >
              hospiceandbeyond.com
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";

export default function EssentialStepsForFallPreventionInTheHospiceHome() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Header />

      {/* ===== Split Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm rounded-b-[2rem]">

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
            Essential Steps for Fall Prevention in the Hospice Home
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            December 3, 2025
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
            src="/blog29.png"
            alt="Essential Steps for Fall Prevention in the Hospice Home"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent md:hidden"></div>
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
            Falls are a major concern in any care setting but in hospice prevention
            takes on a deeper purpose. A fall for a person living with a life
            limiting illness is not just a minor accident. It can lead to fractures
            increased pain a decline in mobility and a significant loss of comfort
            and dignity. For this reason fall prevention in hospice focuses on
            creating a safe environment that protects the patient from avoidable
            harm while preserving energy for meaningful connection and comfort.
          </p>

          <p>
            The first layer of fall prevention centers on intrinsic factors which
            include the physical and cognitive changes happening within the body.
            As illness progresses strength balance and mental clarity often decline.
            The hospice team may involve a physical therapist in a consultative
            role to teach safe transfers and energy conserving movements. The goal
            is not to improve strength but to maintain essential mobility and reduce
            the risk of sudden loss of balance. Caregivers learn proper guarding
            techniques and how to use assistive devices such as walkers canes or
            gait belts correctly.
          </p>

          <p>
            Medications also play an important role. Many comfort medications such
            as opioids anti anxiety medicines sleep aids and antidepressants can
            cause dizziness drowsiness or confusion which make falls more likely.
            The hospice nurse reviews medications regularly adjusting doses to
            maintain comfort while reducing side effects that compromise stability.
            Other internal changes like orthostatic hypotension can lead to sudden
            lightheadedness when standing. Patients benefit from sitting at the
            edge of the bed for a full minute before rising. Proper footwear such
            as firm non skid slippers and clean accessible eyewear further reduce
            risk.
          </p>

          <p>
            The second layer of prevention focuses on extrinsic factors within the
            home. Caregivers can drastically reduce hazards by removing clutter
            clearing pathways and eliminating loose throw rugs. Electrical cords
            stacks of items loose papers and misplaced clothing are common
            contributors to falls. Lighting is essential especially at night.
            Installing night lights in the bedroom hallway and bathroom helps guide
            safe movement when a patient wakes up disoriented or tired.
          </p>

          <p>
            Bathrooms and bedrooms are the highest risk areas because most falls
            occur during transfers. Hospital beds should remain in the lowest
            position while the patient is resting. Grab bars should be securely
            installed near toilets and showers. Suction cup bars are unsafe and
            should not be used. A bedside commode must be stable and correctly
            positioned. A call bell or alert device should always be within reach
            clipped onto clothing or placed next to the pillow. Prompt response to
            calls helps prevent patients from attempting to stand without
            assistance.
          </p>

          <p>
            Fall prevention in hospice is a shared responsibility between the
            caregiver and the clinical team. Through careful medication management
            slow intentional movement environmental adjustments and ongoing
            education the risk of falls can be significantly reduced. These
            strategies protect the patient's comfort preserve dignity and ensure
            that their remaining time is spent in peace rather than recovering from
            preventable injury.
          </p>

        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <a
            href="/blog"
            className="text-[#006D66] font-semibold underline text-lg"
          >
            ← Return to Blog
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

// ====================================================================
// 1. External Imports (React/Next.js/Third-party)
// ====================================================================
import { motion } from "framer-motion";
// NOTE: Removed 'import Link from "next/link";'

// ====================================================================
// 2. Constants & Data
// ====================================================================

// --- Colors (Must be defined for Tailwind CSS styling) ---
const PRIMARY_TEAL = "#006D66";
const ACCENT_GOLD = "#D4881A";

// --- Service Data (Updated - Removed 'link' property) ---
const services = [
  {
    title: "Hospice Care",
    desc: "Personalized, comfort-focused medical and emotional support for individuals facing advanced or terminal illness — delivered wherever the patient calls home. Our care focuses on dignity, peace, and the human connection that matters most.",
    image: "/hospice.png",
  },
  {
    title: "Palliative Care",
    desc: "Comprehensive care that manages pain, symptoms, and emotional needs for patients at any stage of serious illness — supporting both healing and quality of life with compassion and respect.",
    image: "/palliative.png",
  },
  {
    title: "Faith & Spiritual Care",
    desc: "Respectful, non-denominational guidance and comfort for patients and families seeking peace, meaning, or strength through spiritual connection. We help each person find serenity and faith during life’s most meaningful moments.",
    image: "/faith.png",
  },
  {
    title: "Family Support",
    desc: "Assistance with care planning, counseling, and access to community resources to help patients and caregivers navigate emotional, financial, and practical challenges — ensuring families never walk alone in the journey of care.",
    image: "/family.png",
  },
  {
    title: "24/7 Compassionate Assistance",
    desc: "Our team is available around the clock to provide guidance, emotional support, and medical expertise — whenever and wherever you need us most.",
    image: "/services2.png",
  },
];

// ====================================================================
// 3. Sub-Components
// ====================================================================

/**
 * Card component for individual services.
 * Now a static div, not a link.
 */
// NOTE: Removed 'link' from props
const ServiceCard = ({ title, image }) => {
  // Find the description for this service to display it in the card
  const serviceData = services.find(s => s.title === title);
  const desc = serviceData?.desc;

  return (
    // Replaced <Link> with a static <div> element
    <div className="block group cursor-default">
      <div className="relative h-64 overflow-hidden rounded-[2rem] shadow-xl transition-transform duration-700 ease-in-out transform group-hover:scale-[1.03] group-hover:rotate-1">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Added a subtle overlay for polish, as it's not a link */}
        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20 duration-300" />
      </div>
      <div
        // 🚨 CORRECTED: Use backticks (`) for template literal
        className={`mt-6 p-2 text-center border-2 border-transparent transition-all duration-300 rounded-xl group-hover:border-[${ACCENT_GOLD}]`}
      >
        <h3
          // 🚨 CORRECTED: Use backticks (`) for template literal
          className={`font-serif text-2xl sm:text-3xl font-bold text-[${PRIMARY_TEAL}] group-hover:text-[${ACCENT_GOLD}] transition duration-300 leading-snug`}
        >
          {title}
        </h3>
        {/* Display the description */}
        {desc && (
             <p className="mt-2 text-sm text-gray-600 max-w-xs mx-auto">{desc}</p>
        )}
      </div>
    </div>
  );
};

// ====================================================================
// 4. Main Component (Services Section)
// ====================================================================

/**
 * Component for the "What We Offer (Services)" Section.
 */
export const MoladavServicesSection = () => {
  return (
    // 🚨 CORRECTED: Use backticks (`) for template literal
    <section className={`py-16 md:py-24 px-6 md:px-12 bg-white`}>
      <div className="container mx-auto text-center">
        {/* Title and Subtitle */}
        <h2
          // 🚨 CORRECTED: Use backticks (`) for template literal
          className={`font-serif text-4xl md:text-6xl font-extrabold text-[${PRIMARY_TEAL}] text-center mb-10 relative before:absolute before:content-[''] before:w-24 before:h-1.5 before:bg-gradient-to-r before:from-transparent before:via-[${ACCENT_GOLD}] before:to-transparent before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:rounded-full`}
        >
          Compassionate Care Designed to{" "}
          {/* 🚨 CORRECTED: Use backticks (`) for template literal */}
          <span className={`text-[${ACCENT_GOLD}]`}>Honor Every Life</span>
        </h2>
        <p className="text-xl mb-16 text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
          At Hospice and Beyond Palliative Care LLC, we offer a full spectrum of
          services designed to meet the diverse needs of patients and families —
          providing comfort, guidance, and heartfelt care every step of the way.
        </p>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, index) => (
            <ServiceCard
              key={index}
              title={s.title}
              image={s.image}
              // NOTE: Removed link prop
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoladavServicesSection;
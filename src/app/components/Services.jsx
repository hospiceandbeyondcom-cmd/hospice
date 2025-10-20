"use client";

// ====================================================================
// 1. External Imports (React/Next.js/Third-party)
// ====================================================================
import Link from "next/link";
import { motion } from "framer-motion";

// ====================================================================
// 2. Constants & Data
// ====================================================================

// --- Colors (Must be defined for Tailwind CSS styling) ---
const PRIMARY_TEAL = "#006D66";
const ACCENT_GOLD = "#D4881A";

// --- Service Data (Extracted from the original Page component) ---
const services = [
  { title: "Major Depressive Disorder", desc: "Find light and renewed purpose with expert, compassionate care.", image: "/depression.jpg", link: "/depression" },
  { title: "Substance Abuse", desc: "Offering a path to lasting recovery and a stable, healthy life.", image: "/substance.jpg", link: "/substance-abuse" },
  { title: "Borderline Personality Disorder", desc: "Building stability, emotional regulation, and meaningful connections.", image: "/borderline.jpg", link: "/borderline-personality" },
  { title: "PTSD", desc: "Guiding you beyond trauma with compassionate care.", image: "/section1ptsd.png", link: "/ptsd" },
  { title: "Schizophrenia", desc: "Supporting clarity, stability, and personal growth.", image: "/section1schizophrenia.png", link: "/schizophrenia" },
  { title: "Anxiety Disorders", desc: "Providing tools to quiet your mind and find calm.", image: "/section1anxiety.png", link: "/anxiety-disorder" },
  { title: "Bipolar Disorder", desc: "Creating balance through expert treatment plans.", image: "/section1bipolar.png", link: "/bipolar-disorder" },
  { title: "OCD", desc: "Offering strategies for balance and peace of mind.", image: "/section1ocd.png", link: "/ocd" },
  { title: "ADHD", desc: "Helping you focus, manage challenges, and thrive.", image: "/section1adhd.png", link: "/adhd" },
];

// ====================================================================
// 3. Sub-Components
// ====================================================================

/**
 * Card component for individual services.
 * Requires: Link (from next/link), PRIMARY_TEAL, ACCENT_GOLD
 */
const ServiceCard = ({ title, desc, image, link }) => {
  return (
    <Link href={link} className="block group">
      <div className="relative h-64 overflow-hidden rounded-[2rem] shadow-xl transition-transform duration-700 ease-in-out transform group-hover:scale-[1.03] group-hover:rotate-1">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-75"
        />
        <div
          className={`absolute inset-0 bg-[${PRIMARY_TEAL}] opacity-0 group-hover:opacity-85 transition-opacity duration-500 flex items-center justify-center p-6 text-center`}
        >
          <p className="text-white text-xl font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            {desc}
          </p>
        </div>
      </div>
      <div
        className={`mt-6 p-2 text-center border-2 border-transparent transition-all duration-300 rounded-xl group-hover:border-[${ACCENT_GOLD}]`}
      >
        <h3
          className={`font-serif text-2xl sm:text-3xl font-bold text-[${PRIMARY_TEAL}] group-hover:text-[${ACCENT_GOLD}] transition duration-300 leading-snug`}
        >
          {title}
        </h3>
        <span className="text-base font-light text-gray-500 italic mt-1 inline-block">
          Click to learn more
        </span>
      </div>
    </Link>
  );
};


// ====================================================================
// 4. Main Component (Services Section)
// ====================================================================

/**
 * Component for the "What We Offer (Services)" Section.
 * Includes all necessary imports and data for standalone use.
 */
export const MoladavServicesSection = () => {
  return (
    <section className={`py-16 md:py-24 px-6 md:px-12 bg-white`}>
      <div className="container mx-auto text-center">
        {/* Title and Subtitle */}
        <h2 className={`font-serif text-4xl md:text-6xl font-extrabold text-[${PRIMARY_TEAL}] text-center mb-10 relative before:absolute before:content-[''] before:w-24 before:h-1.5 before:bg-gradient-to-r before:from-transparent before:via-[${ACCENT_GOLD}] before:to-transparent before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:rounded-full`}>
          Support designed for your unique <span className={`text-[${ACCENT_GOLD}]`}>needs.</span>
        </h2>
        <p className="text-xl mb-16 text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
          We specialize in providing expert, compassionate care for a wide
          range of mental health conditions. Our approach is always tailored
          to your personal journey.
        </p>
        
        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, index) => (
            <ServiceCard
              key={index}
              title={s.title}
              desc={s.desc}
              image={s.image}
              link={s.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Default export for typical usage
export default MoladavServicesSection;
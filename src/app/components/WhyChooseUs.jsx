"use client";

import { motion } from "framer-motion";
import { Heart, Home, ShieldCheck } from "lucide-react";

const gradientHeading = {
  background: "linear-gradient(90deg, #006D66, #7D5F42)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function WhyChooseUs() {
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1.0, ease: "easeOut" },
  };

  const itemStagger = (delay = 0) => ({
    ...fadeUp,
    transition: { ...fadeUp.transition, delay: delay },
  });

  const features = [
    {
      icon: Heart,
      title: "Compassion at the Core",
      description:
        "Every service we offer begins with empathy. Our team listens deeply ensuring care is always human heartfelt and centered on comfort.",
    },
    {
      icon: Home,
      title: "Family Focused Support",
      description:
        "We care for the family as much as the patient providing counseling resources and emotional connection throughout the entire journey.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity and Dignity",
      description:
        "We respect every spiritual path and honor each persons story with complete privacy grace and unwavering professional dignity.",
    },
  ];

  return (
    <section className="bg-white py-32 sm:py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* GRADIENT HEADING */}
        <motion.h2
          {...fadeUp}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          style={gradientHeading}
        >
          Why Choose Hospice and Beyond?
        </motion.h2>

        {/* JUSTIFIED SUBTEXT */}
        <motion.p
          {...itemStagger(0.1)}
          className="text-xl text-gray-700 max-w-4xl mx-auto mb-20 text-justify leading-relaxed"
        >
          Choosing end of life care is a sacred decision. Heres why countless
          families trust us to walk that journey with them grounded in
          expertise and deep respect.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              {...itemStagger(index * 0.15 + 0.2)}
              className="bg-white rounded-3xl p-8 sm:p-10 text-left border border-gray-100 shadow-[0_15px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_25px_80px_rgba(4,120,87,0.1)] hover:border-[#047857]"
            >
              <div className="mb-6">
                <feature.icon
                  size={48}
                  className="text-white p-3 rounded-full bg-[#047857] shadow-xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#03271E] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.9, ease: "easeOut" },
};

const floatY = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-6, 6, -6],
    rotate: [-1, 1, -1],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Services() {
  const services = [
    {
      title: "Hospice Care",
      desc: "Compassionate end-of-life care centered on comfort, peace, and dignity — surrounded by love, family, and professional support.",
      img: "/hospice.png",
    },
    {
      title: "Palliative Care",
      desc: "Holistic support for those living with serious illness — relieving symptoms, reducing stress, and improving quality of life at every stage.",
      img: "/palliative.png",
    },
    {
      title: "Faith & Spiritual Care",
      desc: "We honor every faith tradition and provide spiritual guidance that nurtures hope, strength, and peace of mind.",
      img: "/faith.png",
    },
    {
      title: "Family Support",
      desc: "We walk beside families — offering counseling, education, and compassionate guidance every step of the journey.",
      img: "/family.png",
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-28 bg-[#03271E]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          {...fadeUp}
          className="text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFF2AE] bg-clip-text text-transparent"
        >
          Our Care Services
        </motion.h2>

        <div className="mt-14 space-y-28">
          {services.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 gap-14 items-center ${
                i % 2 !== 0 ? "md:flex-row-reverse md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                className="relative"
                variants={floatY}
                initial="initial"
                animate="animate"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={780}
                  height={520}
                  className="rounded-2xl shadow-2xl ring-1 ring-white/10 object-cover"
                />
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[#FFD70033] blur-xl" />
              </motion.div>

              {/* Text */}
              <div>
                <motion.h3
                  {...fadeUp}
                  className="text-2xl sm:text-3xl font-semibold text-white"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  {...fadeUp}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-[#E6F2EC]/90 leading-relaxed"
                >
                  {item.desc}
                </motion.p>
                <motion.div
                  {...fadeUp}
                  transition={{ delay: 0.15 }}
                  className="mt-6 h-[3px] w-28 bg-gradient-to-r from-[#FFD700] to-[#E6B800] rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

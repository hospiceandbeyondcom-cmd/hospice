"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Users, ArrowRightCircle } from "lucide-react";

export default function Hero() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);

  // ===== Detect Mobile =====
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const slides = [
    {
      id: "slide-1",
      type: "video",
      src: "/hero.mp4",
      heading: "Honoring Every Life, Every Moment",
      cta1: "Explore Our Services",
      cta2: "Meet the Team",
      href1: "/services",
      href2: "/our-team",
    },
  ];

  // ===== Desktop Hero =====
  if (!isMobile) {
    return (
      <section
        className="
          relative flex flex-col md:flex-row
          h-[70vh] overflow-hidden
          m-0 p-0
        "
      >
        {/* ===== LEFT SIDE: VIDEO ===== */}
        <div className="relative w-full md:w-1/2 h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ===== RIGHT SIDE: TEXT ===== */}
        <div
          className="
            flex flex-col justify-center
            w-full md:w-1/2 h-full
            px-10 lg:px-16
            bg-[#F9FAFB]
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              text-[2.8rem] sm:text-[3rem] md:text-[3.2rem]
              font-bold leading-[1.1] tracking-tight text-[#047857]
            "
          >
            Honoring Every Life, Every Moment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="
              mt-5 sm:mt-6 text-base sm:text-lg
              text-gray-700 leading-relaxed max-w-lg
            "
          >
            Compassionate care that brings peace, dignity, and light to families —
            right in the comfort of their homes.
          </motion.p>

          {/* ===== Buttons ===== */}
          <div className="mt-8 flex flex-row items-center gap-5">
            {/* Explore Our Services */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => router.push(slides[index]?.href1)}
              className="
                flex items-center gap-2
                px-7 py-2
                rounded-full font-semibold text-white
                bg-[#8b6c50]
                shadow-[0_0_12px_rgba(139,108,80,0.3)]
                hover:shadow-[0_0_20px_rgba(139,108,80,0.4)]
                transition
              "
            >
              <ArrowRightCircle size={18} /> {slides[index]?.cta1}
            </motion.button>

            {/* Meet the Team */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => router.push(slides[index]?.href2)}
              className="
                flex items-center gap-2
                px-7 py-2
                rounded-full font-semibold text-[#8b6c50]
                border-2 border-[#8b6c50]
                hover:bg-[#8b6c50] hover:text-white
                transition
              "
            >
              <Users size={18} /> {slides[index]?.cta2}
            </motion.button>
          </div>
        </div>
      </section>
    );
  }

  // ===== Mobile Hero =====
  return (
    <>
      {/* ==== VIDEO SECTION ==== */}
      <section className="md:hidden relative w-full aspect-video overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={slides[index]?.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src={slides[index]?.src}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </section>

      {/* ==== TEXT & BUTTONS BELOW VIDEO ==== */}
      <section className="bg-white text-center py-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-[#047857] leading-snug mb-3"
        >
          Honoring Every Life, Every Moment
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-700 mb-6 text-base leading-relaxed"
        >
          Compassionate care that brings peace, dignity, and light to families —
          right in the comfort of their homes.
        </motion.p>

        {/* ==== BUTTONS ==== */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Explore Our Services */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => router.push(slides[index]?.href1)}
            className="
              flex items-center justify-center gap-2
              px-8 py-2.5 rounded-full
              font-semibold text-white
              bg-[#8b6c50]
              shadow-md hover:shadow-lg transition
            "
          >
            <ArrowRightCircle size={18} /> {slides[index]?.cta1}
          </motion.button>

          {/* Meet the Team */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => router.push(slides[index]?.href2)}
            className="
              flex items-center justify-center gap-2
              px-8 py-2.5 rounded-full
              font-semibold text-[#8b6c50]
              border-2 border-[#8b6c50]
              hover:bg-[#8b6c50] hover:text-white
              transition
            "
          >
            <Users size={18} /> {slides[index]?.cta2}
          </motion.button>
        </div>
      </section>
    </>
  );
}

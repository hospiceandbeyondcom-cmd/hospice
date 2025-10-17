"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      className="
        relative flex justify-center items-center
        min-h-screen overflow-hidden
        m-0 p-0 !mt-0 !pt-0 !top-0
      "
    >
      {/* ===== BACKGROUND VIDEO ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ===== DARK OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* ===== CENTERED TEXT & BUTTON ===== */}
      <div className="relative z-[2] text-center px-6 sm:px-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-4xl sm:text-5xl md:text-6xl
            font-bold leading-tight
            bg-gradient-to-r from-[#047857] via-[#FFD700] to-[#E6B800]
            bg-clip-text text-transparent
          "
        >
          Honoring Every Life, Every Moment
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="
            mt-6 sm:mt-8 text-base sm:text-lg md:text-xl
            text-gray-100 leading-relaxed
          "
        >
          Compassionate care that brings peace, dignity, and light to families —
          right in the comfort of their homes.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={() => router.push("/services")}
          className="
            mt-10 sm:mt-12 px-8 sm:px-10 py-4
            rounded-full font-semibold text-white
            bg-gradient-to-r from-[#047857] to-[#0f5132]
            shadow-[0_0_30px_rgba(4,120,87,0.45)]
            hover:shadow-[0_0_45px_rgba(4,120,87,0.6)]
            transition
          "
        >
          Explore Our Services
        </motion.button>
      </div>
    </section>
  );
}

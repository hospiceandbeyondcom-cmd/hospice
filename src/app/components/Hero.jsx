"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ Added for navigation on all devices

export default function Hero() {
  const router = useRouter(); // ✅ Initialize router for navigation

  return (
    <section
      className="
        relative flex flex-col md:flex-row 
        min-h-[90vh] overflow-hidden 
        bg-gradient-to-r from-[#f9fafb] via-[#fefefe] to-[#ffffff] 
        m-0 p-0 
        mt-[-21px] /* ✅ Removes the top space below header on all screen sizes */
      "
    >
      {/* ===== LEFT SIDE: TEXT CONTENT ===== */}
      <div className="
        flex flex-col justify-center items-start 
        w-full md:w-1/2 
        px-6 sm:px-8 lg:px-16 
        py-16 sm:py-20 
        text-left
      ">
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
            mt-6 sm:mt-8 
            max-w-lg text-base sm:text-lg md:text-xl text-gray-700
          "
        >
          Compassionate care that brings peace, dignity, and light to families —
          right in the comfort of their homes.
        </motion.p>

        {/* ✅ Works perfectly on mobile & desktop */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={() => router.push("/services")} // ✅ Navigates to /services
          className="
            mt-10 sm:mt-12 
            px-8 sm:px-10 py-4 
            rounded-full font-semibold 
            text-white 
            bg-gradient-to-r from-[#047857] to-[#0f5132] 
            shadow-[0_0_30px_rgba(4,120,87,0.45)] 
            hover:shadow-[0_0_45px_rgba(4,120,87,0.6)] 
            transition
          "
        >
          Explore Our Services
        </motion.button>
      </div>

      {/* ===== RIGHT SIDE: VIDEO ===== */}
      <div className="relative w-full md:w-1/2 h-[45vh] sm:h-[50vh] md:h-auto">
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
    </section>
  );
}

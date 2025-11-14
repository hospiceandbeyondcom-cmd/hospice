"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SecondSection = () => {
  const PRIMARY_TEAL = "#006D66";
  const ACCENT_ROSEGOLD = "#7D5F42";

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative gradient corner shape */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle at top right, ${ACCENT_ROSEGOLD}, transparent 70%)`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Updated Heading — One line on desktop */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2
            className="
              text-4xl sm:text-5xl lg:text-6xl 
              font-extrabold leading-tight
              lg:whitespace-nowrap
            "
            style={{
              fontFamily: "Poppins, sans-serif",
              background: `linear-gradient(90deg, ${PRIMARY_TEAL}, ${ACCENT_ROSEGOLD})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            A simple but sacred belief
          </h2>
        </motion.div>

        {/* Layout below */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* IMAGE */}
          <div className="relative mb-12 lg:mb-0 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="/about1.png"
                alt="A compassionate team member providing care"
                width={700}
                height={500}
                className="object-cover transform group-hover:scale-105 transition duration-700 ease-out"
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `linear-gradient(to top, rgba(0, 61, 57, 0.25), transparent 60%)`,
                }}
              ></div>
            </div>

            <div
              className="hidden lg:block absolute inset-0 -top-10 -right-10 w-full h-full rounded-3xl -z-10 opacity-20"
              style={{ backgroundColor: ACCENT_ROSEGOLD }}
            ></div>
          </div>

          {/* TEXT COLUMN */}
          <div className="lg:order-1 lg:pr-12">
            <div
              className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <p>
                Hospice and Beyond Palliative Care is founded on a simple but
                sacred belief that every person deserves dignity comfort and
                peace through every stage of life. We are a compassionate team
                of professionals who walk hand in hand with patients and their
                loved ones creating a space where healing presence and hope
                are honored.
              </p>

              <p>
                We bring care directly to where it is most meaningful — the
                home. Our focus extends beyond medical support to emotional and
                spiritual well being helping families find calm even in
                difficult transitions.
              </p>

              <p className="flex flex-wrap items-center gap-4">
                <span>
                  At Hospice and Beyond every heartbeat every moment and every
                  story matters.
                </span>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                    style={{
                      background: `linear-gradient(90deg, ${PRIMARY_TEAL}, ${ACCENT_ROSEGOLD})`,
                      fontFamily: "Inter, sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Learn More About Our Care
                  </Link>
                </motion.div>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecondSection;

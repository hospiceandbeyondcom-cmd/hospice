"use client";

import { motion } from "framer-motion";
import { Trophy, Feather, PersonStanding, Download } from "lucide-react";
import Image from "next/image";

export default function Welcome() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.9, ease: "easeOut" },
  };

  const brochureLink = "/path/to/your/brochure.pdf";

  return (
    <section className="relative bg-white py-24 sm:py-28 text-[#03271E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div
            {...fadeUp}
            className="bg-[#F9FAFB] rounded-2xl text-center shadow-[0_0_20px_rgba(0,0,0,0.06)] hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] transition duration-300"
          >
            <div className="flex justify-center mb-4 mt-8">
              <div className="bg-[#047857] rounded-full p-5 shadow-md hover:scale-105 transition duration-300">
                <Feather size={48} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-[#047857] mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 px-6 pb-8 leading-relaxed">
              To bring exceptional comfort, dignity, and peace to every patient
              and family we serve. We ensure that life’s final chapter is lived
              with grace supported by compassionate professionals who
              understand that every moment matters.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="bg-[#F9FAFB] rounded-2xl text-center shadow-[0_0_20px_rgba(0,0,0,0.06)] hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] transition duration-300"
          >
            <div className="flex justify-center mb-4 mt-8">
              <div className="bg-[#047857] rounded-full p-5 shadow-md hover:scale-105 transition duration-300">
                <PersonStanding size={48} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-[#047857] mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 px-6 pb-8 leading-relaxed">
              To be a guiding light of hope and healing in our communities
              where every individual experiences compassionate care, emotional
              peace, and spiritual wholeness.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="bg-[#F9FAFB] rounded-2xl text-center shadow-[0_0_20px_rgba(0,0,0,0.06)] hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] transition duration-300"
          >
            <div className="flex justify-center mb-4 mt-8">
              <div className="bg-[#047857] rounded-full p-5 shadow-md hover:scale-105 transition duration-300">
                <Trophy size={48} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-[#047857] mb-2">
              Our Core Values
            </h3>
            <p className="text-gray-700 px-6 pb-8 leading-relaxed">
              Compassion | Dignity | Integrity | Family | Hope <br />
              These are the principles that shape every decision, every visit,
              and every conversation at Hospice and Beyond.
            </p>
          </motion.div>
        </div>

        <hr className="my-16 border-gray-100" />

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_15px_60px_rgba(0,0,0,0.08)]"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl shadow-green-200/50">
              <Image
                src="/book.png"
                alt="Download Our Detailed Hospice Brochure"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="flex flex-col justify-center py-4">
              <h2 className="text-4xl font-extrabold text-[#03271E] mb-4 leading-tight">
                Deepen Your Understanding
              </h2>
              <p className="text-xl text-[#047857] font-semibold mb-6">
                Download Our Comprehensive Brochure
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Our detailed brochure provides a complete overview of the
                compassionate care, services, and support we offer to patients
                and families. Learn more about our philosophy, our team, and how
                we bring comfort and dignity to life's final chapter.
              </p>

              <a
                href={brochureLink}
                download
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-transparent text-lg font-bold rounded-full shadow-lg text-white bg-[#047857] hover:bg-[#035b43] transition duration-300 transform hover:scale-[1.02]"
              >
                <Download size={24} className="mr-3" />
                Download Brochure
              </a>
              <p className="mt-4 text-sm text-gray-500 text-center sm:text-left">
                (PDF, 1.2MB Click to start the download)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

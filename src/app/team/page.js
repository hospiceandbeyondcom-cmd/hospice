"use client";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

export default function Team() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden mt-0 pt-0">
        <Image
          src="/team.png"
          alt="Hospice and Beyond Team"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center text-white px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Our Team of Compassion
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            A family of professionals and caregivers working together to bring
            comfort, dignity, and love to every patient we serve.
          </p>
        </div>
      </section>

      {/* ===== Founder Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Founder Image (Circular, Slightly Smaller, Starts from Top) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-[#006D66]/20">
            <Image
              src="/team1.png"
              alt="Founder of Hospice and Beyond"
              fill
              className="object-cover object-top rounded-full"
            />
          </div>
        </div>

        {/* Founder Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "#006D66" }}
          >
            Our Founder
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At the heart of Hospice and Beyond is our visionary founder — a
            compassionate leader whose mission is to restore dignity, warmth,
            and humanity to care. Her leadership inspires every nurse, chaplain,
            and caregiver to serve with love and excellence. Through her
            guidance, Hospice and Beyond has become a home of hope, healing, and
            heartfelt compassion.
          </p>
        </div>
      </section>

      {/* ===== Team Diagram Section (Animated PNG) ===== */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ color: "#006D66" }}
          >
            Our Extended Family of Care
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Compassion is a shared mission. Our team works together — blending
            medical expertise, emotional support, and spiritual care to meet
            every patient’s unique needs with grace and dedication.
          </p>

          <div className="relative flex justify-center">
            <div className="w-[70%] md:w-[60%] animate-bounce-slow">
              <Image
                src="/teams.png"
                alt="Hospice and Beyond Extended Family of Care"
                width={700}
                height={500}
                className="object-contain mx-auto drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Meta Team Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2
          className="text-3xl md:text-4xl font-semibold text-center mb-12"
          style={{ color: "#006D66" }}
        >
          Meet Our Professional Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            "Medical Director",
            "Nurse",
            "Chaplain",
            "Social Worker",
            "Physical Therapist (P.T.)",
            "Occupational Therapist (O.T.)",
            "Speech Therapist (S.T.)",
          ].map((role, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#7D5F42" }}
              >
                {role}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Dedicated to compassionate, holistic, and coordinated care.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA Section (Keep Gradient) ===== */}
      <section
        className="py-16 text-center"
        style={{
          background: "linear-gradient(90deg, #006D66, #7D5F42)",
        }}
      >
        <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
          Together, We Are Hospice and Beyond
        </h3>
        <p className="text-white mb-6 text-lg max-w-2xl mx-auto">
          Every heart that serves here is part of a shared purpose — to make
          every moment matter.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-[#006D66] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Contact Our Team
        </a>
      </section>

      <Footer />
    </div>
  );
}

/* ===== Add this animation to your globals.css or tailwind.css =====
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
*/

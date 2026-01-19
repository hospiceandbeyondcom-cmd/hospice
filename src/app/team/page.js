import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

// This is the SEO fix for your "No Canonical" report
export const metadata = {
  title: "Our Team | Hospice and Beyond",
  description: "Meet our dedicated team of professionals providing compassionate care.",
  alternates: {
    canonical: "https://hospiceandbeyond.com/team",
  },
};

export default function Team() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* ===== HERO (TEXT LEFT + VIDEO RIGHT) ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-snug"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Team of Compassion
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
            A family of professionals and caregivers working together to bring comfort,
            dignity, and love to every patient we serve.
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div className="relative w-full md:w-1/2 h-[40vh] md:h-[70vh]">
          {/* Server-side compatible video: uses autoPlay/muted attributes instead of useEffect */}
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-bl-[2rem] md:rounded-none"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/teams.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent md:hidden"></div>
        </div>
      </section>

      {/* ===== FOUNDER SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-start md:items-center gap-10">

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

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "#006D66" }}
          >
            Our Founder
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            At the heart of Hospice and Beyond is our visionary founder, a compassionate leader
            whose mission is to restore dignity, warmth, and humanity to care. Her leadership
            inspires every nurse, chaplain, and caregiver to serve with love and excellence.
            Through her guidance, Hospice and Beyond has become a home of hope, healing, and
            heartfelt compassion.
          </p>
        </div>
      </section>

      {/* ===== EXTENDED TEAM SECTION ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{ color: "#006D66" }}
            >
              Our Extended Family of Care
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
              Compassion is a shared mission. Our team works together, blending medical
              expertise, emotional support, and spiritual care to meet every patient&apos;s unique
              needs with grace and dedication.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              From physicians and nurses to chaplains and therapists, every member plays a vital
              role in creating comfort and connection when it matters most.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/teamsdetails.png"
              alt="Hospice and Beyond Extended Family of Care"
              width={800}
              height={600}
              className="object-contain w-[95%] sm:w-[90%] md:w-full h-auto max-w-[650px]"
            />
          </div>
        </div>
      </section>

      {/* ===== ROLES GRID ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2
          className="text-3xl md:text-4xl font-semibold text-center mb-12"
          style={{ color: "#006D66" }}
        >
          Our Professional Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Medical Director", text: "Provides clinical leadership and ensures every patient receives safe, thoughtful, and effective care." },
            { title: "Registered Nurse", text: "Delivers expert nursing care, monitors patient needs, and supports families with compassion and skill." },
            { title: "Nurse Practitioner", text: "Provides advanced patient care, evaluates needs, and supports treatment with clinical expertise." },
            { title: "Chaplain", text: "Provides spiritual comfort and emotional support to patients and their families." },
            { title: "Social Worker", text: "Supports families with counseling, resources, and assistance to navigate care with confidence." },
            { title: "Physical Therapist", text: "Enhances comfort and mobility through personalized movement and strength support." },
            { title: "Occupational Therapist", text: "Helps patients maintain independence through practical daily living support." },
            { title: "Speech Therapist", text: "Assists patients with communication and swallowing needs to improve comfort and quality of life." }
          ].map((role, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#7D5F42" }}>
                {role.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed text-justify">
                {role.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(90deg, #006D66, #7D5F42)" }}
      >
        <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
          Together, We Are Hospice and Beyond
        </h3>

        <p className="text-white mb-6 text-lg max-w-2xl mx-auto text-justify px-4">
          Every heart that serves here is part of a shared purpose to make every moment matter.
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
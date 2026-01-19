import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

// This metadata block fixes the "No Canonical" error in your report
export const metadata = {
  title: "Nursing Care | Hospice and Beyond",
  description: "Compassionate, skilled nursing care dedicated to comfort, dignity, and quality of life at every stage.",
  alternates: {
    canonical: "https://hospiceandbeyond.com/nursing",
  },
};

export default function NursingCare() {
  const services = [
    {
      title: "Skilled Nursing Visits and Support",
      image: "/nursing1.png",
      description:
        "Our dedicated nurses provide skilled visits two to three times weekly with access to phone support when needed. We monitor vital signs, manage medications, and ensure comfort through consistent follow up and compassionate attention. This service focuses on steady care and professional guidance rather than staying full time in your home.",
    },
    {
      title: "Personalized Care Plans",
      image: "/nursing2.png",
      description:
        "Each patient’s plan is customized based on individual needs, diagnosis, and preferences. From daily routines to medical coordination, our nurses deliver care that reflects compassion and professionalism.",
    },
    {
      title: "Wound and Symptom Management",
      image: "/nursing3.png",
      description:
        "Expert wound care and symptom control help reduce pain and prevent complications. Our nurses focus on healing, dignity, and comfort while empowering patients to live with confidence and peace.",
    },
    {
      title: "Education for Patients and Families",
      image: "/nursing4.png",
      description:
        "We believe knowledge brings peace of mind. Our nursing staff teaches families how to manage medications, recognize changes, and respond confidently to evolving care needs.",
    },
    {
      title: "Coordination with Physicians",
      image: "/nursing5.png",
      description:
        "Our nurses work hand in hand with your physician to update treatment plans, track progress, and ensure that every clinical decision supports the patient’s comfort and recovery goals.",
    },
    {
      title: "Home and Hospice Care Visits",
      image: "/nursing6.png",
      description:
        "Through home and hospice visits, our nurses bring expert care directly to you, creating an atmosphere of warmth, safety, and personal attention wherever you are.",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <main className="bg-white text-gray-800">
        {/* HERO SECTION - Native video stops 'Invalid import' errors */}
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/nursing.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
            <h1 className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
              Nursing Care
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md">
              Compassionate, skilled nursing care dedicated to comfort, dignity,
              and quality of life at every stage.
            </p>
          </div>
        </section>

        {/* SERVICES SECTION - Using Tailwind hover for movement */}
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20 space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-700 hover:translate-y-[-5px] ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-3xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-md w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-4"
                  style={{ color: "#006D66" }}
                >
                  {service.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* CTA SECTION */}
        <section
          className="relative w-full py-24 flex items-center justify-center text-center px-6"
          style={{ background: "linear-gradient(90deg, #006D66, #7D5F42)" }}
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug text-white">
              Compassion You Can Feel, Care You Can Trust
            </h2>
            <p className="text-base sm:text-lg text-white mb-8 leading-relaxed">
              Our nursing team stands beside you with clinical skill and
              heartfelt compassion, ensuring every patient experiences comfort,
              peace, and personal attention.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#006D66] font-semibold px-8 sm:px-10 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-110"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
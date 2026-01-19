import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

// Metadata works here because this is a Server Component. 
// No ': Metadata' syntax is used to avoid the parsing error.
export const metadata = {
  title: "Physician Services | Hospice and Beyond",
  description: "Compassionate medical care led by experienced physicians focused on comfort, dignity, and holistic wellness.",
  alternates: {
    canonical: "https://hospiceandbeyond.com/physician-services",
  },
};

export default function PhysicianService() {
  const services = [
    {
      title: "Comprehensive Medical Assessment",
      image: "/physician1.png",
      description: "Our physicians conduct thorough evaluations to understand your overall health, medical history, and current symptoms. This helps us create a complete picture of your needs and guide every decision with clarity and precision.",
    },
    {
      title: "Pain and Symptom Control",
      image: "/physician2.png",
      description: "Expert management of pain, nausea, shortness of breath, and other discomforts using evidence based treatments. Our goal is to bring relief while preserving dignity, independence, and comfort.",
    },
    {
      title: "Interdisciplinary Collaboration",
      image: "/physician3.png",
      description: "Our doctors work closely with nurses, therapists, and social workers to ensure every aspect of care, physical, emotional, and spiritual, is aligned and integrated for the best possible outcome.",
    },
    {
      title: "Medication Management",
      image: "/physician4.png",
      description: "We prescribe, monitor, and adjust medications with careful attention to side effects and interactions, ensuring every treatment supports your comfort and quality of life.",
    },
    {
      title: "Continuity of Care",
      image: "/physician6.png",
      description: "We coordinate care seamlessly across home, hospital, and hospice settings, ensuring you always have a trusted medical partner by your side, no matter where your journey leads.",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="bg-white text-gray-800">
        {/* HERO SECTION - Native video avoids the 'Invalid import' crash */}
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
          <video className="absolute inset-0 w-full h-full object-cover opacity-60" autoPlay muted loop playsInline preload="auto">
            <source src="/physician.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
            <h1 className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">Physician Services</h1>
            <p className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md">Compassionate medical care led by experienced physicians focused on comfort, dignity, and holistic wellness.</p>
          </div>
        </section>

        {/* SERVICES LIST - Tailwind hover effects replace client-side animations */}
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20 space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-700 hover:translate-y-[-5px] ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="w-full md:w-1/2 overflow-hidden rounded-3xl">
                <Image src={service.image} alt={service.title} width={600} height={400} className="rounded-3xl shadow-md w-full h-auto object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#006D66]">{service.title}</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">{service.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* CTA SECTION */}
        <section className="relative w-full py-24 flex items-center justify-center text-center px-6" style={{ background: "linear-gradient(90deg, #006D66, #7D5F42)" }}>
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Skilled Hands, Compassionate Hearts</h2>
            <p className="text-base sm:text-lg text-white mb-8">Ensuring every patient receives care rooted in respect, comfort, and excellence.</p>
            <a href="/contact" className="inline-block bg-white text-[#006D66] font-semibold px-10 py-3 rounded-full shadow-md hover:scale-110 transition-transform">Contact Us</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
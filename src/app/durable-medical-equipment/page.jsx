import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

// 1. Fixed Metadata (Removed TypeScript : Metadata to prevent parsing error)
export const metadata = {
  title: "Durable Medical Equipment | Hospice and Beyond",
  description: "Providing dependable hospital grade equipment that enhances comfort, safety, mobility, and independence at home.",
  alternates: {
    canonical: "https://hospiceandbeyond.com/durable-medical-equipment",
  },
};

export default function DurableEquipment() {
  const services = [
    {
      title: "Reliable Home Medical Equipment",
      image: "/ment.png",
      description: "We provide hospital grade medical equipment that ensures safety, comfort, and convenience at home, helping patients maintain independence and dignity during care.",
    },
    {
      title: "Mobility and Support Aids",
      image: "/equipment2.png",
      description: "From wheelchairs and walkers to bedside rails and patient lifts, we supply reliable mobility aids that reduce strain for patients and caregivers while improving daily comfort.",
    },
    {
      title: "Respiratory and Oxygen Therapy",
      image: "/equipment3.png",
      description: "Our respiratory support tools include oxygen concentrators- all maintained and serviced regularly for optimal performance and safety.",
    },
    {
      title: "Pressure Relief and Comfort Systems",
      image: "/equipment4.png",
      description: "We offer relief mattresses, positioning devices, and specialized cushions that prevent skin breakdown and promote relaxation for long term patients.",
    },
    {
      title: "Delivery, Setup and Maintenance",
      image: "/equipment6.png",
      description: "Our logistics team handles equipment delivery, in home setup, and training. We ensure everything is functioning properly and replace items promptly when needed.",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="bg-white text-gray-800">
        {/* HERO SECTION - Standard CSS for movement without breaking the build */}
        <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
          <div className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left transition-all duration-1000">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug" style={{ background: "linear-gradient(90deg, #006D66, #7D5F42)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Durable Medical Equipment
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify">
              Providing dependable hospital grade equipment that enhances comfort, safety, mobility, and independence for patients receiving care at home.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[45vh] md:h-[70vh] relative">
            <video className="absolute inset-0 w-full h-full object-cover rounded-bl-[2rem] md:rounded-none" autoPlay muted loop playsInline preload="auto">
              <source src="/equip.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20 space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-700 hover:translate-y-[-5px] ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="w-full md:w-1/2 overflow-hidden rounded-3xl">
                <Image src={service.image} alt={service.title} width={600} height={400} className="rounded-3xl shadow-md w-full h-auto object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#006D66" }}>{service.title}</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">{service.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* CTA SECTION */}
        <section className="relative w-full py-24 flex items-center justify-center text-center px-6" style={{ background: "linear-gradient(90deg, #006D66, #7D5F42)" }}>
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Reliable Equipment, Seamless Care</h2>
            <p className="text-base sm:text-lg text-white mb-8 text-justify">From delivery to maintenance, we ensure every piece of equipment supports comfort and safety every single day.</p>
            <a href="/contact" className="inline-block bg-white text-[#006D66] font-semibold px-10 py-3 rounded-full shadow-md hover:scale-105 transition-all">Contact Us</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
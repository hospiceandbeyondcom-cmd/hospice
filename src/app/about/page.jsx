import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { Heart, Star, Compass } from "lucide-react";

// Metadata for SSR - This handles the <title> and <link rel="canonical"> in the <head>
export const metadata = {
  title: "About | Hospice and Beyond Palliative Care",
  description: "A Legacy of Compassion Honoring Every Life Every Moment.",
  alternates: {
    canonical: "https://hospiceandbeyond.com/about", 
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Server-side CSS Animations */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 0.8s ease-out forwards;
          }
          .delay-1 { animation-delay: 0.2s; opacity: 0; }
          .delay-2 { animation-delay: 0.4s; opacity: 0; }
        `}
      </style>

      <main className="bg-white text-gray-800 font-sans leading-relaxed antialiased">
        <Header />

        {/* ===== HERO SECTION ===== */}
        <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white shadow-sm rounded-b-[2rem]">

          {/* VIDEO SIDE */}
          <div className="animate-fade-up relative w-full md:w-1/2 h-[50vh] md:h-[85vh] overflow-hidden">
            <video
              src="/aboutvid.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT SIDE */}
          <div className="animate-fade-up delay-1 w-full md:w-1/2 p-10 md:p-20 text-center md:text-left">
            <h1
              className="text-3xl md:text-6xl font-extrabold mb-4 leading-snug"
              style={{
                background: "linear-gradient(90deg, #05796B, #7D5F42)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hospice and Beyond Palliative Care
            </h1>

            <p className="text-xl sm:text-2xl font-light italic max-w-xl mx-auto md:mx-0 border-t-2 border-[#006D66]/40 pt-2 mt-2 text-justify">
              A Legacy of Compassion Honoring Every Life Every Moment.
            </p>
          </div>
        </section>

        {/* ===== SECTION TWO (WELCOME) ===== */}
        <section className="grid md:grid-cols-2 items-start gap-4 md:gap-10 px-6 md:px-12 py-8 md:py-16 max-w-7xl xl:max-w-8xl mx-auto">

          {/* TEXT COLUMN */}
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#03271E] mb-6 border-b-2 border-[#047857]/50 pb-2">
              Welcome to Our Family
            </h2>

            <p className="text-gray-700 mb-6 text-lg font-medium italic text-justify">
              Dear Patient and Family,
            </p>

            <p className="text-gray-700 mb-4 text-base leading-relaxed text-justify">
              At Hospice and Beyond Palliative Care, our calling is more than medical it is deeply human. We exist to surround you with expertise understanding and presence. Hospice care is not about surrendering it is about cherishing what matters most comfort dignity and connection.
            </p>

            <p className="text-gray-700 mb-4 text-base leading-relaxed text-justify">
              Together, we will design a care plan that reflects your personal wishes values and spiritual needs. This page introduces you to our services our people and the promises we make to you that you will never be alone that your comfort is our mission and that your family will be supported every step of the way.
            </p>

            <p className="text-gray-700 mb-6 text-base leading-relaxed text-justify">
              You can reach our team any time day or night twenty four seven for comfort guidance and reassurance.
            </p>

            <div className="pt-2 border-t border-gray-200 md:mt-8 md:pt-4">
              <p className="font-bold text-lg text-[#03271E]">With warm regard,</p>
              <p className="text-lg text-[#03271E]">Awau Omole</p>
              <p className="text-gray-600 text-sm">Hospice and Beyond Palliative Care</p>
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="animate-fade-up delay-1 relative h-[350px] sm:h-[450px] w-full overflow-hidden">
            <Image
              src="/about3.png"
              alt="Welcome Image"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* ===== MISSION & VISION ===== */}
        <div className="bg-[#F9FAF9] py-8 md:py-12 px-6 md:px-12 flex flex-col gap-10">

          {/* MISSION */}
          <section className="grid md:grid-cols-2 items-center gap-4 md:gap-10 max-w-7xl mx-auto w-full">

            <div className="animate-fade-up relative h-[300px] sm:h-[400px] w-full overflow-hidden">
              <Image src="/mission.png" alt="Mission Image" fill className="object-contain" />
            </div>

            <div className="animate-fade-up delay-1">
              <h2 className="text-3xl font-bold text-[#03271E] mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg border-l-4 border-[#047857] pl-4 italic text-justify">
                To bring exceptional comfort dignity and peace to every patient and family we serve. We exist to ensure that lifes final chapter is lived with grace supported by compassionate professionals who understand that every moment matters.
              </p>
            </div>
          </section>

          {/* VISION */}
          <section className="grid md:grid-cols-2 items-center gap-4 md:gap-10 max-w-7xl mx-auto w-full">

            <div className="animate-fade-up order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#03271E] mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg border-l-4 border-[#047857] pl-4 italic text-justify">
                To be a guiding light of hope and healing in our communities where every individual experiences compassionate care emotional peace and spiritual wholeness.
              </p>
            </div>

            <div className="animate-fade-up delay-1 relative h-[300px] sm:h-[400px] w-full overflow-hidden order-1 md:order-2">
              <Image src="/about2.png" alt="Vision Image" fill className="object-contain" />
            </div>
          </section>
        </div>

        {/* ===== FOUNDATION OF CARE ===== */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#03271E] mb-12">
            Our Foundation of Care
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            {/* VALUES */}
            <div className="animate-fade-up bg-white shadow-2xl rounded-3xl p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Compass className="text-[#047857]" size={36} />
                <h3 className="text-2xl font-bold text-[#03271E]">Our Core Values</h3>
              </div>

              <ul className="space-y-2 pl-5 list-disc text-gray-700 text-justify">
                <li className="font-semibold text-[#03271E]">
                  Compassion We lead with empathy recognizing the sacredness of every life.
                </li>
                <li className="font-semibold text-[#03271E]">
                  Dignity We ensure respect and autonomy for every patient.
                </li>
                <li className="font-semibold text-[#03271E]">
                  Integrity We operate with honesty and transparency.
                </li>
                <li className="font-semibold text-[#03271E]">
                  Family We view our patients and their loved ones as one circle of care.
                </li>
                <li className="font-semibold text-[#03271E]">
                  Hope We foster emotional and spiritual peace not just comfort.
                </li>
              </ul>
            </div>

            {/* DEDICATION */}
            <div className="animate-fade-up delay-1 bg-white shadow-2xl rounded-3xl p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Star className="text-[#FFD700]" size={36} />
                <h3 className="text-2xl font-bold text-[#03271E]">Our Dedication</h3>
              </div>

              <p className="text-gray-700 text-base leading-relaxed text-justify">
                This service is dedicated to families and caregivers who bring light to every moment. We honor your courage and the sacred trust you place in us. May our support comfort and empower you as we walk beside you through this journey of care.
              </p>

              <div className="mt-6 flex items-center text-[#03271E]">
                <Heart className="mr-2 text-red-500" size={20} />
                <span className="font-semibold">Caring for the Caregiver</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA FOOTER ===== */}
        <section className="bg-[#03271E] text-white py-16 px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Find Comfort?</h2>
            <p className="text-lg mb-8 text-gray-200 text-justify">
              Contact our compassionate team today to discuss eligibility services and how we can bring peace and support to your family. We are here twenty four seven.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#047857] hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-xl border-2 border-white"
            >
              Start the Conversation
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
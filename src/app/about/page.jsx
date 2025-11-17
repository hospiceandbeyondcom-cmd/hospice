"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { Heart, Star, Compass } from "lucide-react";

const PRIMARY_COLOR = "#03271E";
const SECONDARY_COLOR = "#047857";
const ACCENT_COLOR = "#FFD700";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 font-sans leading-relaxed antialiased">
      <Header />

      {/* ===== NEW HERO SECTION (Text Left, Image Right) ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        
        {/* Text Side */}
        <div className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left">
          <h1
            className="text-3xl md:text-5xl font-extrabold mb-4 leading-snug"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hospice and Beyond Palliative Care
          </h1>

          <p className="text-gray-700 text-lg italic max-w-xl mx-auto md:mx-0 border-t border-gray-300 pt-3">
            A Legacy of Compassion Honoring Every Life Every Moment
          </p>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative">
          <Image
            src="/heroabout.png"
            alt="Hospice and Beyond Hero"
            fill
            priority
            className="object-cover object-top rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent md:hidden"></div>
        </div>

      </section>

      {/* ===== REMAINING CONTENT (UNCHANGED) ===== */}
      <section className="grid md:grid-cols-2 items-center gap-10 px-6 md:px-12 py-24 max-w-7xl xl:max-w-8xl mx-auto border-b border-gray-100">
        <div className="relative h-[350px] sm:h-[450px] w-full rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
          <Image
            src="/about3.png"
            alt="Welcome Image"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#03271E] mb-6 border-b-2 border-[#047857]/50 pb-2">
            Welcome to Our Family
          </h2>

          <p className="text-gray-700 mb-6 text-lg font-medium italic">
            Dear Patient and Family
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-base">
            At Hospice and Beyond Palliative Care our calling is more than medical it is deeply human. 
            We exist to surround you with expertise understanding and presence. 
            Hospice care is not about surrendering it is about cherishing what matters most 
            comfort dignity and connection.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-base">
            Together we will design a care plan that reflects your personal wishes values and spiritual needs. 
            This page introduces you to our services our people and the promises we make to you 
            that you will never be alone that your comfort is our mission 
            and that your family will be supported every step of the way.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-base">
            You can reach our team any time day or night for comfort guidance and reassurance.
          </p>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <p className="font-bold text-lg text-[#03271E]">With warm regard</p>
            <p className="text-lg text-[#03271E]">Awau Omole</p>
            <p className="text-gray-600 text-sm">Hospice and Beyond Palliative Care</p>
          </div>
        </div>
      </section>

      <div className="bg-[#F9FAF9] py-20 px-6 md:px-12">
        
        <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto pb-20">
          <div className="relative h-[300px] sm:h-[400px] w-full rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/mission.png"
              alt="Mission Image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="p-4">
            <h2 className="text-3xl font-bold text-[#03271E] mb-4">Our Mission</h2>

            <p className="text-gray-700 text-lg border-l-4 border-[#047857] pl-4 italic">
              To bring exceptional comfort dignity and peace to every patient and family we serve. 
              We exist to ensure that life’s final chapter is lived with grace supported by compassionate 
              professionals who understand that every moment matters.
            </p>
          </div>
        </section>

        <hr className="max-w-7xl mx-auto border-gray-300 my-8" />

        <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto pt-20">
          <div className="order-2 md:order-1 p-4">
            <h2 className="text-3xl font-bold text-[#03271E] mb-4">Our Vision</h2>

            <p className="text-gray-700 text-lg border-l-4 border-[#047857] pl-4 italic">
              To be a guiding light of hope and healing in our communities 
              where every individual experiences compassionate care emotional peace and spiritual wholeness.
            </p>
          </div>

          <div className="relative h-[300px] sm:h-[400px] w-full rounded-xl shadow-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/about2.png"
              alt="Vision Image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>
      </div>

      <section className="py-24 px-6 md:px-12 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#03271E] mb-12">
          Our Foundation of Care
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          
          <div className="bg-white shadow-2xl rounded-3xl p-10 hover:shadow-[0_20px_50px_rgba(4,120,87,0.15)] border border-gray-100 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <Compass className="text-[#047857]" size={36} strokeWidth={2.5} />
              <h3 className="text-2xl font-bold text-[#03271E]">Our Core Values</h3>
            </div>

            <ul className="space-y-2 pl-5 list-disc text-gray-700">
              <li className="font-semibold text-[#03271E]">Compassion: We lead with empathy recognizing the sacredness of every life.</li>
              <li className="font-semibold text-[#03271E]">Dignity: We ensure respect and autonomy for every patient.</li>
              <li className="font-semibold text-[#03271E]">Integrity: We operate with honesty and transparency.</li>
              <li className="font-semibold text-[#03271E]">Family: We view our patients and their loved ones as one circle of care.</li>
              <li className="font-semibold text-[#03271E]">Hope: We foster emotional and spiritual peace not just comfort.</li>
            </ul>
          </div>

          <div className="bg-white shadow-2xl rounded-3xl p-10 hover:shadow-[0_20px_50px_rgba(255,215,0,0.15)] border border-gray-100 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <Star className="text-[#FFD700]" size={36} fill={ACCENT_COLOR} strokeWidth={0} />
              <h3 className="text-2xl font-bold text-[#03271E]">Our Dedication</h3>
            </div>

            <p className="text-gray-700 leading-relaxed text-base">
              This service is dedicated to families and caregivers who bring light to every moment. 
              We honor your courage and the sacred trust you place in us. 
              May our support comfort and empower you as we walk beside you through this journey of care.
            </p>

            <div className="mt-6 flex items-center text-[#03271E]">
              <Heart className="mr-2 text-red-500" fill="currentColor" size={20} />
              <span className="font-semibold">Caring for the Caregiver</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#03271E] text-white py-16 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Find Comfort?</h2>

          <p className="text-lg mb-8 text-gray-200">
            Contact our compassionate team today to discuss eligibility services 
            and how we can bring peace and support to your family. We are here any time.
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
  );
}

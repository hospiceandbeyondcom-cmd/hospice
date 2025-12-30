"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn";

export default function HospiceAtHomeComfortBlog() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== SEO METADATA TAGS ===== */}
      <head>
        <title>Staying Comfortable at Home with Hospice | Hospice & Beyond</title>
        <meta name="description" content="Discover how hospice care provides hospital grade comfort in the privacy of your own home. Learn about the tools and support used by soul specialists." />
        <meta name="keywords" content="hospice at home, home comfort care, terminal illness home support, soul specialist, palliative home equipment" />
        <meta property="og:title" content="How Hospice Helps Patients Stay Comfortable at Home" />
        <meta property="og:description" content="Bringing the sanctuary of care to your front door." />
        <meta property="og:image" content="/blog65.png" />
      </head>

      <Header />

      {/* ===== HERO SECTION: CINEMATIC SPLIT SCREEN ===== */}
      <section className="flex flex-col md:flex-row items-stretch justify-between overflow-hidden bg-[#FAFAF8] min-h-[60vh] border-b border-gray-100">
        <div className="w-full md:w-1/2 px-8 py-12 md:p-20 flex flex-col justify-center">
          <FadeIn>
            <span className="text-[#E1C16E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              The Sanctuary of Home
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#012419] mb-8 leading-[1.2]">
              The Home <br />
              <span className="font-light italic text-[#E1C16E]">Refuge</span>
            </h1>
            <p className="text-gray-600 text-xl font-light leading-relaxed max-w-lg border-l-2 border-[#E1C16E] pl-6">
              Transforming familiar spaces into professional environments of healing and peace and profound dignity.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[40vh]">
          <Image
            src="/blog65.png"
            alt="A sunlit living room with comfortable seating and soft textures"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* ===== INTERACTIVE TABS: PREMIUM DESIGN ===== */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <button
            onClick={() => setActiveTab("general")}
            className={`w-full md:w-64 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all border-2 ${
              activeTab === "general"
                ? "bg-[#012419] text-[#E1C16E] border-[#012419] shadow-xl scale-105"
                : "bg-transparent text-gray-400 border-gray-100 hover:border-[#E1C16E] hover:text-[#012419]"
            }`}
          >
            The Care Infrastructure
          </button>
          <button
            onClick={() => setActiveTab("drama")}
            className={`w-full md:w-64 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all border-2 ${
              activeTab === "drama"
                ? "bg-[#012419] text-[#E1C16E] border-[#012419] shadow-xl scale-105"
                : "bg-transparent text-gray-400 border-gray-100 hover:border-[#E1C16E] hover:text-[#012419]"
            }`}
          >
            A Home Restored
          </button>
        </div>

        {/* ===== TAB 1: CLINICAL/EDUCATIONAL INSIGHT ===== */}
        {activeTab === "general" && (
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#012419] font-serif">Hospital Care in Home Comfort</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  One of the greatest misconceptions about hospice is that staying at home means sacrificing quality of care. In reality hospice brings the pharmacy and the medical equipment and the expert clinical team directly to the bedside. This allows the patient to remain in the place they love most surrounded by their own memories.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  As a soul specialist we prioritize the environmental well being of the patient. We look at everything from air quality and lighting to the positioning of the bed. By creating a professional level of support within the home we remove the stress of transportation and the coldness of a clinical facility.
                </p>
              </div>
              <div className="bg-[#FAFAF8] p-10 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-[#E1C16E] font-bold mb-6 uppercase text-xs tracking-[0.3em]">The Tools of Tranquility</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">01.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Specialized Beds: Hospital grade beds that allow for elevation and pressure relief to prevent discomfort.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">02.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Oxygen Support: Portable and stationary units to ensure effortless breathing in any room of the house.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">03.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Emergency Kits: A comfort pack of medications kept in the home to address any sudden symptoms immediately.</p>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== TAB 2: NARRATIVE DRAMA ===== */}
        {activeTab === "drama" && (
          <FadeIn>
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-xs uppercase tracking-[0.6em] text-[#E1C16E] font-bold mb-4">A Narrative Experience</h2>
                <p className="text-3xl font-serif italic text-gray-900 tracking-tight">"The Bedroom Sanctuary"</p>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50 space-y-10">
                <p className="text-gray-600 font-light leading-relaxed text-xl first-letter:text-6xl first-letter:text-[#E1C16E] first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                  Thomas had spent forty years in his house. When the time came for hospice he was adamant that he did not want to leave his view of the garden. The hospice team arrived and within hours the guest room was transformed. The clinical equipment was there but it sat quietly alongside his favorite books and family photos.
                </p>

                <div className="space-y-12 py-10 border-y border-gray-50">
                  <div className="flex flex-col gap-3 text-[#E1C16E]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Thomas</span>
                    <p className="text-2xl text-gray-800 font-serif italic pl-6 border-l-4 border-[#E1C16E] leading-snug">
                      "I thought my house would feel like a hospital. But I still smell the rain on the porch and I still hear my grandchildren in the kitchen. I am just more comfortable now."
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 items-end text-right text-[#012419]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">The Care Coordinator</span>
                    <p className="text-2xl text-gray-800 font-serif italic pr-6 border-r-4 border-[#012419] leading-snug">
                      "We bring the care to you Thomas. The house does not change its heart it just gets a little extra help to keep you resting well."
                    </p>
                  </div>
                </div>

                <div className="pt-8 max-w-2xl mx-auto">
                  <p className="text-gray-700 text-lg leading-relaxed text-center italic font-light">
                    Thomas rested his eyes and listened to the familiar sounds of his home. Because the hospice team managed his pain and breathing so well he could focus on the people he loved in the place he belonged. The walls of his home became a fortress of peace.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== FAQ SECTION ===== */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#012419] mb-4 font-serif">Home Care Clarity</h2>
            <p className="text-[#E1C16E] uppercase tracking-[0.4em] font-bold text-xs">Essential Questions for Families</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { q: "Is the equipment noisy?", a: "Modern hospice equipment is designed for quiet operation. We prioritize low decibel machines to preserve the peaceful atmosphere of your home." },
              { q: "Who pays for the home supplies?", a: "The hospice benefit covers the cost of all medications and supplies and equipment related to the terminal illness." },
              { q: "Can we move the bed later?", a: "Yes. Our team can help you decide on the best location for the bed to ensure both patient comfort and ease of family interaction." },
              { q: "What about bathing and hygiene?", a: "Hospice aides visit the home several times a week to provide gentle bathing and personal care while maintaining the dignity of the patient." },
              { q: "Does someone stay 24/7?", a: "Hospice is an intermittent service. While we are always a phone call away the primary daily care is provided by family or hired caregivers with our training." },
              { q: "How do we handle medication changes?", a: "The hospice nurse monitors symptoms during every visit and works with the doctor to adjust the home medications in real time." }
            ].map((item, index) => (
              <div key={index} className="p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-xl transition-all group cursor-default">
                <h3 className="font-bold text-[#012419] group-hover:text-[#E1C16E] transition-colors mb-4 text-xl font-serif">
                  {item.q}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-md">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== EXTENSIVE CONCLUSION ===== */}
        <section className="mt-32 border-t border-gray-100 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#012419] font-serif">The Power of Presence</h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-8 text-justify font-light">
              <p>
                As a soul specialist we believe that home is where the spirit feels most anchored. By bringing professional hospice care into the residential space we honor the history and the heart of the person. Comfort at home is about more than just managing pain it is about preserving the normal rhythms of life for as long as possible.
              </p>
              <p>
                When a patient is comfortable at home they can participate in the small and beautiful moments of everyday life. They can hear the birds in the morning and see their pets and share a quiet evening with their family. This is the essence of dignity. We provide the tools and the expertise so you can provide the love and the presence.
              </p>
            </div>
            <div className="inline-block px-12 py-6 bg-[#012419] text-[#E1C16E] rounded-full text-2xl font-serif italic shadow-xl mt-8 hover:scale-105 transition-transform">
              "Home is the ultimate sanctuary for the soul"
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
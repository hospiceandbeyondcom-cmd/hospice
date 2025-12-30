"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn";

export default function TerminalSecretionsBlog() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== SEO METADATA TAGS ===== */}
      <head>
        <title>Managing Terminal Secretions with Dignity | Hospice & Beyond</title>
        <meta name="description" content="A compassionate guide to understanding and managing terminal secretions. Learn how to provide comfort and maintain dignity during the final transition." />
        <meta name="keywords" content="terminal secretions, death rattle, hospice respiratory care, end of life breathing, soul specialist, palliative comfort" />
        <meta property="og:title" content="Managing Terminal Secretions with Dignity" />
        <meta property="og:description" content="Navigating the sounds of the final transition with grace." />
        <meta property="og:image" content="/blog60.png" />
      </head>

      <Header />

      {/* ===== HERO SECTION: CINEMATIC SPLIT SCREEN ===== */}
      <section className="flex flex-col md:flex-row items-stretch justify-between overflow-hidden bg-[#FAFAF8] min-h-[60vh] border-b border-gray-100">
        <div className="w-full md:w-1/2 px-8 py-12 md:p-20 flex flex-col justify-center">
          <FadeIn>
            <span className="text-[#E1C16E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              The Breath of Transition
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#012419] mb-8 leading-[1.2]">
              Sacred <br />
              <span className="font-light italic text-[#E1C16E]">Presence</span>
            </h1>
            <p className="text-gray-600 text-xl font-light leading-relaxed max-w-lg border-l-2 border-[#E1C16E] pl-6">
              Understanding the changes in breathing and managing the sounds of the final journey with love and clinical grace.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[40vh]">
          <Image
            src="/blog60.png"
            alt="Soft curtains blowing in a gentle breeze symbolizing peaceful breath"
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
            Clinical Understanding
          </button>
          <button
            onClick={() => setActiveTab("drama")}
            className={`w-full md:w-64 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all border-2 ${
              activeTab === "drama"
                ? "bg-[#012419] text-[#E1C16E] border-[#012419] shadow-xl scale-105"
                : "bg-transparent text-gray-400 border-gray-100 hover:border-[#E1C16E] hover:text-[#012419]"
            }`}
          >
            The Quiet Room
          </button>
        </div>

        {/* ===== TAB 1: CLINICAL/EDUCATIONAL INSIGHT ===== */}
        {activeTab === "general" && (
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#012419] font-serif">The Biology of the Sound</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  Terminal secretions occur when a person is no longer able to clear or swallow the small amount of fluid that naturally collects in the back of the throat. While the sound can be distressing to family members it is important to know that the patient is not in distress.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  Because the patient is in a deep state of rest their cough reflex has relaxed. The air moving over these secretions creates a rhythmic sound. In the world of hospice we call this a normal part of the body powering down for the final transition.
                </p>
              </div>
              <div className="bg-[#FAFAF8] p-10 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-[#E1C16E] font-bold mb-6 uppercase text-xs tracking-[0.3em]">Comfort Strategies</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">01.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Repositioning: Gently turning the person onto their side allows gravity to drain fluids naturally.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">02.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Oral Care: Using moist swabs to keep the mouth and lips hydrated without adding extra fluid.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">03.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Atmosphere: Using soft music or white noise to create a peaceful environment for the family.</p>
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
                <p className="text-3xl font-serif italic text-gray-900 tracking-tight">"The Softness of the Wind"</p>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50 space-y-10">
                <p className="text-gray-600 font-light leading-relaxed text-xl first-letter:text-6xl first-letter:text-[#E1C16E] first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                  Maria leaned closer to her grandmother as the room grew quiet. Each breath sounded like a soft rattling hum. Fear began to rise in her chest and she looked at the nurse with tearful eyes wondering if her grandmother was struggling for air.
                </p>

                <div className="space-y-12 py-10 border-y border-gray-50">
                  <div className="flex flex-col gap-3 text-[#E1C16E]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Maria</span>
                    <p className="text-2xl text-gray-800 font-serif italic pl-6 border-l-4 border-[#E1C16E] leading-snug">
                      "Is she choking? It sounds like she is struggling. I do not want her to be in pain."
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 items-end text-right text-[#012419]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Nurse Sarah</span>
                    <p className="text-2xl text-gray-800 font-serif italic pr-6 border-r-4 border-[#012419] leading-snug">
                      "She is not choking Maria. Her body is just very relaxed. Think of this as the sound of a ship gently rippling the water as it leaves the harbor. She is resting deeply while her body handles the rest."
                    </p>
                  </div>
                </div>

                <div className="pt-8 max-w-2xl mx-auto">
                  <p className="text-gray-700 text-lg leading-relaxed text-center italic font-light">
                    Nurse Sarah gently helped Maria turn her grandmother to the side and propped her head with a soft pillow. Within minutes the sound softened. Maria took a deep breath herself realizing that the sound was just a part of the song of the soul going home.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== FAQ SECTION ===== */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#012419] mb-4 font-serif">Guidance and Clarity</h2>
            <p className="text-[#E1C16E] uppercase tracking-[0.4em] font-bold text-xs">Answering Questions with Dignity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { q: "Is suctioning a good idea?", a: "Generally no. Suctioning can be very invasive and often causes more secretions to form as a trauma response. Repositioning is the gentler choice." },
              { q: "Does the sound mean death is minutes away?", a: "Not necessarily. It indicates that the patient is in a very deep state of rest. This phase can last for hours or sometimes even days." },
              { q: "Are there medications to help?", a: "Yes. Small doses of medications can be used to dry the secretions if the sound is causing significant distress to the family at the bedside." },
              { q: "Is the patient aware of the sound?", a: "Clinical evidence suggests that the patient is far too deep in their retreat to be bothered by the sound or the presence of secretions." },
              { q: "How can I help as a family member?", a: "Focus on the comfort of the hands and brow. Gentle touch and soft words are more helpful than focusing on the sound of the breathing." },
              { q: "Why does the sound come and go?", a: "Secretions move as the person shifts or as their breathing depth changes. It is a natural and variable process." }
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012419] font-serif">Holding the Sacred Space</h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-8 text-justify font-light">
              <p>
                As a Soul Specialist we know that the sounds of the final transition can feel overwhelming for those who love the patient. Our goal is to shift the focus from the clinical noise to the sacred presence of the person. By managing terminal secretions with dignity we create an environment where the family can stay present and connected.
              </p>
              <p>
                Dignity is found in the way we touch and the way we speak and the way we honor the natural rhythms of the body. When we demystify these sounds we remove the fear that keeps us from the bedside. Trust in the process and know that your calm presence is the greatest gift you can offer during these final hours of the journey.
              </p>
            </div>
            <div className="inline-block px-12 py-6 bg-[#012419] text-[#E1C16E] rounded-full text-2xl font-serif italic shadow-xl mt-8 hover:scale-105 transition-transform">
              "Every breath is a sacred bridge"
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
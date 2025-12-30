"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn";

export default function HospiceQuotesBlog() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== SEO METADATA TAGS ===== */}
      <head>
        <title>Echoes of the Heart: Wisdom for the Journey | Hospice & Beyond</title>
        <meta name="description" content="Discover the power of words in hospice care. Explore inspirational quotes that provide comfort, clarity, and peace during the final transition." />
        <meta name="keywords" content="hospice quotes, end of life inspiration, comfort words for dying, grief wisdom, soul specialist, terminal care encouragement" />
        <meta property="og:title" content="Echoes of the Heart: Wisdom for the Journey" />
        <meta property="og:description" content="Words that illuminate the path home." />
        <meta property="og:image" content="/blog59.png" />
      </head>

      <Header />

      {/* ===== HERO SECTION: CINEMATIC SPLIT SCREEN ===== */}
      <section className="flex flex-col md:flex-row items-stretch justify-between overflow-hidden bg-[#FAFAF8] min-h-[60vh] border-b border-gray-100">
        <div className="w-full md:w-1/2 px-8 py-12 md:p-20 flex flex-col justify-center">
          <FadeIn>
            <span className="text-[#E1C16E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              The Power of the Spoken Word
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#012419] mb-8 leading-[1.2]">
              Echoes of <br />
              <span className="font-light italic text-[#E1C16E]">The Heart</span>
            </h1>
            <p className="text-gray-600 text-xl font-light leading-relaxed max-w-lg border-l-2 border-[#E1C16E] pl-6">
              When breath becomes short words must become deep. Finding the language of peace in the final chapter of life.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[40vh]">
          <Image
            src="/blog59.png"
            alt="Soft golden hour light illuminating an open book"
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
            The Healing Power
          </button>
          <button
            onClick={() => setActiveTab("drama")}
            className={`w-full md:w-64 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all border-2 ${
              activeTab === "drama"
                ? "bg-[#012419] text-[#E1C16E] border-[#012419] shadow-xl scale-105"
                : "bg-transparent text-gray-400 border-gray-100 hover:border-[#E1C16E] hover:text-[#012419]"
            }`}
          >
            A Shared Moment
          </button>
        </div>

        {/* ===== TAB 1: CLINICAL/EDUCATIONAL INSIGHT ===== */}
        {activeTab === "general" && (
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#012419] font-serif">Why Quotes Matter in Hospice</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  In hospice care we often encounter the wall of silence. Families want to say something meaningful but the weight of the situation leaves them breathless. Inspirational wisdom acts as a bridge between the physical and the spiritual.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  Scientifically rhythmic and positive language can lower stress levels and regulate heart rates for both the patient and the caregiver. It provides a shared anchor that validates the experience of the soul.
                </p>
              </div>
              <div className="bg-[#FAFAF8] p-10 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-[#E1C16E] font-bold mb-6 uppercase text-xs tracking-[0.3em]">The Pillars of Comfort</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">01.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Affirmation: Validating that their life had profound meaning.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">02.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Permission: Using words to let them know it is okay to let go.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">03.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Continuity: Reminding them that love survives the physical transition.</p>
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
                <p className="text-3xl font-serif italic text-gray-900 tracking-tight">"The Book on the Nightstand"</p>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50 space-y-10">
                <p className="text-gray-600 font-light leading-relaxed text-xl first-letter:text-6xl first-letter:text-[#E1C16E] first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                  James sat in the dim light of the hospice suite clutching a small notebook. The breathing of his father was the only sound in the room rhythmic and labored yet strangely peaceful. James wanted to speak but the words felt like dry sand in his throat.
                </p>

                <div className="space-y-12 py-10 border-y border-gray-50">
                  <div className="flex flex-col gap-3 text-[#E1C16E]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">James (Son)</span>
                    <p className="text-2xl text-gray-800 font-serif italic pl-6 border-l-4 border-[#E1C16E] leading-snug">
                      "What do I even say? Goodbye feels too final. I love you does not seem big enough for seventy years of life."
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 items-end text-right text-[#012419]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">The Chaplain</span>
                    <p className="text-2xl text-gray-800 font-serif italic pr-6 border-r-4 border-[#012419] leading-snug">
                      "Do not worry about being original James. Lean on the giants who walked this path before you. Let their words be the wind beneath your wings."
                    </p>
                  </div>
                </div>

                <div className="pt-8 max-w-2xl mx-auto">
                  <p className="text-gray-700 text-lg leading-relaxed text-center italic font-light">
                    James opened the notebook and read a single line from Rumi: Goodbyes are only for those who love with their eyes because for those who love with heart and soul there is no such thing as separation. He felt the hand of his father twitch in response. The bridge was built.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== QUOTES SELECTION SECTION ===== */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#012419] mb-4 font-serif">Inscriptions for the Soul</h2>
            <p className="text-[#E1C16E] uppercase tracking-[0.4em] font-bold text-xs">Timeless Wisdom for the Final Journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { q: "Death is not extinguishing the light it is only putting out the lamp because the dawn has come", a: "Rabindranath Tagore. A perfect quote for those fearing the darkness of the transition." },
              { q: "Love is how you stay alive even after you are gone", a: "Mitch Albom. Focuses on the legacy of the heart and the continuity of connection." },
              { q: "The soul always knows what to do to heal itself. The challenge is to silence the mind", a: "Caroline Myss. Encourages a peaceful release and trusting the biological process." },
              { q: "What the caterpillar calls the end of the world the master calls a butterfly", a: "Richard Bach. A classic metaphor for the transformation from physical to spiritual." },
              { q: "You matter because you are you and you matter to the end of your life", a: "Dame Cicely Saunders. The foundational truth of all hospice care." },
              { q: "There are no goodbyes for us. Wherever you are you will always be in my heart", a: "Mahatma Gandhi. Providing comfort to the family left behind." }
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012419] font-serif">A Legacy of Light</h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-8 text-justify font-light">
              <p>
                As Soul Specialists we believe that words are more than just vibrations in the air they are the architecture of our memories. Inspirational quotes in hospice serve as a sanctuary where the mind can rest and the heart can expand. They remind us that while the body may be failing the narrative of the person is reaching its most profound crescendo.
              </p>
              <p>
                When you find yourself lost for words at the bedside do not be afraid to use the wisdom of the ages. These quotes are not just sayings they are keys that unlock the doors to peace and forgiveness and unconditional love. Let them be spoken softly let them be read frequently and let them become the echoes that linger long after the room has grown still.
              </p>
            </div>
            <div className="inline-block px-12 py-6 bg-[#012419] text-[#E1C16E] rounded-full text-2xl font-serif italic shadow-xl mt-8 hover:scale-105 transition-transform">
              "The heart has its own vocabulary"
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn";

export default function AppetiteChangesBlog() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== SEO METADATA TAGS ===== */}
      <head>
        <title>Why Appetite Changes in Hospice | Hospice & Beyond</title>
        <meta name="description" content="Understand why appetite decreases during the final stages of life. Learn how to provide comfort without the pressure of eating." />
        <meta name="keywords" content="hospice appetite loss, end of life nutrition, why dying patients stop eating, soul specialist, comfort care feeding" />
        <meta property="og:title" content="Why Appetite Changes in Hospice and Why It is Okay" />
        <meta property="og:description" content="Moving from physical hunger to spiritual peace." />
        <meta property="og:image" content="/blog63.png" />
      </head>

      <Header />

      {/* ===== HERO SECTION: CINEMATIC SPLIT SCREEN ===== */}
      <section className="flex flex-col md:flex-row items-stretch justify-between overflow-hidden bg-[#FAFAF8] min-h-[60vh] border-b border-gray-100">
        <div className="w-full md:w-1/2 px-8 py-12 md:p-20 flex flex-col justify-center">
          <FadeIn>
            <span className="text-[#E1C16E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              The Wisdom of the Body
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#012419] mb-8 leading-[1.2]">
              A Gentle <br />
              <span className="font-light italic text-[#E1C16E]">Release</span>
            </h1>
            <p className="text-gray-600 text-xl font-light leading-relaxed max-w-lg border-l-2 border-[#E1C16E] pl-6">
              Exploring why the desire for food fades and how to honor the natural rhythm of a body in transition.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[40vh]">
          <Image
            src="/blog63.png"
            alt="A single candle flame and a quiet table setting symbolizing the shift in needs"
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
            Clinical Insight
          </button>
          <button
            onClick={() => setActiveTab("drama")}
            className={`w-full md:w-64 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all border-2 ${
              activeTab === "drama"
                ? "bg-[#012419] text-[#E1C16E] border-[#012419] shadow-xl scale-105"
                : "bg-transparent text-gray-400 border-gray-100 hover:border-[#E1C16E] hover:text-[#012419]"
            }`}
          >
            A Table for One
          </button>
        </div>

        {/* ===== TAB 1: CLINICAL/EDUCATIONAL INSIGHT ===== */}
        {activeTab === "general" && (
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#012419] font-serif">The Biology of Less</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  When a person enters the final stages of life their body begins to prioritize internal preservation over external fuel intake. Digestion is a high energy process. By naturally reducing the desire for food the body can redirect its remaining strength toward the comfort of the heart and spirit.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  As a soul specialist we help families understand that this is not starvation. Starvation is a painful deprivation of food for a healthy body. In hospice the lack of appetite is a biological signal that the body is preparing for a different kind of journey where physical fuel is no longer required.
                </p>
              </div>
              <div className="bg-[#FAFAF8] p-10 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-[#E1C16E] font-bold mb-6 uppercase text-xs tracking-[0.3em]">The Natural Shift</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">01.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Diminished Taste: Flavors often become muted or metallic which naturally decreases interest in meals.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">02.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Early Satiety: Feeling full after only a few sips or bites because the stomach has slowed its movement.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">03.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Energy Conservation: The body avoids the labor of chewing and swallowing to maintain tranquility.</p>
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
                <p className="text-3xl font-serif italic text-gray-900 tracking-tight">"The Gift of the Smallest Bite"</p>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50 space-y-10">
                <p className="text-gray-600 font-light leading-relaxed text-xl first-letter:text-6xl first-letter:text-[#E1C16E] first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                  Robert sat by his father with a tray of all the foods they used to share. He felt a deep knot in his stomach every time his father turned away from the spoon. For Robert food was love and he felt like his love was being rejected.
                </p>

                <div className="space-y-12 py-10 border-y border-gray-50">
                  <div className="flex flex-col gap-3 text-[#E1C16E]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Robert</span>
                    <p className="text-2xl text-gray-800 font-serif italic pl-6 border-l-4 border-[#E1C16E] leading-snug">
                      "I just want him to have one more good meal. I am worried he is suffering because I cannot get him to eat anything."
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 items-end text-right text-[#012419]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Nurse David</span>
                    <p className="text-2xl text-gray-800 font-serif italic pr-6 border-r-4 border-[#012419] leading-snug">
                      "He is not suffering from hunger Robert. He is finding a different kind of fullness now. Think of this as his body packing light for a very important flight. He only needs the essentials now."
                    </p>
                  </div>
                </div>

                <div className="pt-8 max-w-2xl mx-auto">
                  <p className="text-gray-700 text-lg leading-relaxed text-center italic font-light">
                    Robert put the tray down and took a slow breath. Instead of feeding his father he began to read him an old family story. He noticed his father’s breathing become more relaxed and peaceful. The hunger for food had been replaced by a hunger for connection.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== FAQ SECTION ===== */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#012419] mb-4 font-serif">Grace and Understanding</h2>
            <p className="text-[#E1C16E] uppercase tracking-[0.4em] font-bold text-xs">Answering the Questions of the Heart</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { q: "Is it okay to stop forcing meals?", a: "Yes. Forcing food can lead to aspiration or physical discomfort. Trust that the body will ask for what it needs when it needs it." },
              { q: "How can I show love if not through food?", a: "Gentle touch and reading and music and presence are the new ways to provide nourishment for the soul." },
              { q: "What about dehydration?", a: "Dehydration near the end of life can actually be a natural anesthetic. It often leads to a more peaceful and less congested transition." },
              { q: "Should we try an appetite stimulant?", a: "These are rarely helpful in the final days as the metabolic system is no longer set up to process a large intake of nutrients." },
              { q: "Can they still have a treat?", a: "Absolutely. If they ask for a specific taste give it to them with joy but without any pressure for them to finish the portion." },
              { q: "What if their mouth is dry?", a: "Use small misting bottles or moist oral swabs. Keeping the mouth comfortable is much more important than the intake of calories." }
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012419] font-serif">Nourishing the Spirit</h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-8 text-justify font-light">
              <p>
                As a soul specialist we know that the change in appetite is one of the most visible markers of the coming transition. It can be a difficult shift for families who have spent a lifetime caring for their loved ones through food. But there is a deep and quiet wisdom in this physical withdrawal.
              </p>
              <p>
                By honoring the choice of the body to rest from the work of eating we allow the focus to shift to the work of the spirit. We move from the kitchen to the bedside and from the tray to the heart. This is not a loss of care but a more refined and profound way of providing comfort. Trust the silence and trust the stillness and know that love is the only thing that remains.
              </p>
            </div>
            <div className="inline-block px-12 py-6 bg-[#012419] text-[#E1C16E] rounded-full text-2xl font-serif italic shadow-xl mt-8 hover:scale-105 transition-transform">
              "Love is the bread of the final journey"
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
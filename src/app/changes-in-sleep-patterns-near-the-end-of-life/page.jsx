"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn";

export default function SleepPatternsBlog() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== SEO METADATA TAGS ===== */}
      <head>
        <title>The Deep Retreat: Changes in Sleep Patterns | Hospice & Beyond</title>
        <meta name="description" content="Understand the shift from physical rest to the sacred stillness of the final journey. Explore how sleep patterns change and how to provide comfort." />
        <meta name="keywords" content="sleep patterns near end of life, terminal somnolence, hospice sleep changes, increased sleep before death, soul specialist" />
        <meta property="og:title" content="The Deep Retreat: Changes in Sleep Patterns" />
        <meta property="og:description" content="Navigating the sacred transition of final rest." />
        <meta property="og:image" content="/blog54.png" />
      </head>

      <Header />

      {/* ===== HERO SECTION: CINEMATIC SPLIT SCREEN ===== */}
      <section className="flex flex-col md:flex-row items-stretch justify-between overflow-hidden bg-[#FAFAF8] min-h-[75vh] border-b border-gray-100">
        <div className="w-full md:w-1/2 px-8 py-16 md:p-24 flex flex-col justify-center">
          <FadeIn>
            <span className="text-[#E1C16E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              The Soul's Internal Work
            </span>
            <h1 className="text-5xl md:text-8xl font-extrabold text-[#012419] mb-8 leading-[1.1]">
              The Deep <br />
              <span className="font-light italic text-[#E1C16E]">Retreat</span>
            </h1>
            <p className="text-gray-600 text-2xl font-light leading-relaxed max-w-lg border-l-2 border-[#E1C16E] pl-6">
              Navigating the transition from physical rest to the sacred stillness of the final journey.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[45vh]">
          <Image
            src="/blog54.png"
            alt="Soft light through a window symbolizing final rest"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* ===== INTERACTIVE TABS: PREMIUM DESIGN ===== */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20">
          <button
            onClick={() => setActiveTab("general")}
            className={`w-full md:w-72 py-6 rounded-full text-sm uppercase tracking-[0.2em] font-bold transition-all border-2 ${
              activeTab === "general"
                ? "bg-[#012419] text-[#E1C16E] border-[#012419] shadow-2xl scale-105"
                : "bg-transparent text-gray-400 border-gray-100 hover:border-[#E1C16E] hover:text-[#012419]"
            }`}
          >
            The Clinical Insight
          </button>
          <button
            onClick={() => setActiveTab("drama")}
            className={`w-full md:w-72 py-6 rounded-full text-sm uppercase tracking-[0.2em] font-bold transition-all border-2 ${
              activeTab === "drama"
                ? "bg-[#012419] text-[#E1C16E] border-[#012419] shadow-2xl scale-105"
                : "bg-transparent text-gray-400 border-gray-100 hover:border-[#E1C16E] hover:text-[#012419]"
            }`}
          >
            Read The Story
          </button>
        </div>

        {/* ===== TAB 1: CLINICAL INSIGHT CONTENT ===== */}
        {activeTab === "general" && (
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mb-24">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-[#012419] font-serif">The Biology of Withdrawal</h2>
                <p className="text-gray-700 text-xl leading-relaxed text-justify font-light">
                  In the final weeks of life, the body undergoes a profound metabolic shift. As external energy demands decrease, the body redirects its remaining resources toward internal, vital functions. This often results in a state known as **terminal somnolence**.
                </p>
                <p className="text-gray-700 text-xl leading-relaxed text-justify font-light">
                  For many families, this deep sleep feels like a loss of connection. However, in hospice, we understand this as a protective retreat. The body is "powering down" its external senses to prioritize the tranquility required for the spirit's transition.
                </p>
              </div>
              <div className="bg-[#FAFAF8] p-12 rounded-[3rem] border border-gray-100 shadow-sm">
                <h3 className="text-[#E1C16E] font-bold mb-8 uppercase text-xs tracking-[0.3em]">Signs of the Retreat</h3>
                <ul className="space-y-8">
                  <li className="flex items-start gap-6">
                    <span className="text-[#012419] font-bold text-2xl">01.</span>
                    <p className="text-gray-600 italic leading-relaxed text-lg">Extended periods of deep sleep lasting 20+ hours a day.</p>
                  </li>
                  <li className="flex items-start gap-6">
                    <span className="text-[#012419] font-bold text-2xl">02.</span>
                    <p className="text-gray-600 italic leading-relaxed text-lg">Significantly decreased responsiveness to light and sound.</p>
                  </li>
                  <li className="flex items-start gap-6">
                    <span className="text-[#012419] font-bold text-2xl">03.</span>
                    <p className="text-gray-600 italic leading-relaxed text-lg">A natural, peaceful cessation of the desire for food and thirst.</p>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== TAB 2: THE SACRED STORY (EXTENSIVE DRAMA) ===== */}
        {activeTab === "drama" && (
          <FadeIn>
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="text-center mb-16">
                <h2 className="text-xs uppercase tracking-[0.6em] text-[#E1C16E] font-bold mb-6">A Narrative Experience</h2>
                <p className="text-4xl font-serif italic text-gray-900 tracking-tight">"Between Two Worlds"</p>
              </div>

              <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-xl border border-gray-50 space-y-12">
                <p className="text-gray-600 font-light leading-relaxed text-2xl first-letter:text-7xl first-letter:text-[#E1C16E] first-letter:font-bold first-letter:mr-4 first-letter:float-left">
                  The afternoon sun cast long, amber shadows across the quiet room. Sarah sat by the bedside, her hand resting over her mother’s. The silence felt heavy, a stark contrast to the lively Texas wind outside. Her mother hadn't opened her eyes in two days.
                </p>

                <div className="space-y-16 py-12 border-y border-gray-50">
                  <div className="flex flex-col gap-4 text-[#E1C16E]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Sarah (Daughter)</span>
                    <p className="text-3xl text-gray-800 font-serif italic pl-8 border-l-4 border-[#E1C16E] leading-snug">
                      "I keep talking, Nurse Emily... but I feel like I'm talking to an empty room. Is she already gone? Why won't she just look at me one last time?"
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 items-end text-right text-[#012419]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Nurse Emily</span>
                    <p className="text-3xl text-gray-800 font-serif italic pr-8 border-r-4 border-[#012419] leading-snug">
                      "She is right here, Sarah. But she is busy. Think of this as the soul's 'Deep Retreat.' She is unplugging from the noise of the physical world to find the stillness she needs for the journey ahead."
                    </p>
                  </div>
                  
                  {/* Additional dialogue for extensiveness */}
                  <div className="flex flex-col gap-4 text-[#E1C16E]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Sarah</span>
                    <p className="text-3xl text-gray-800 font-serif italic pl-8 border-l-4 border-[#E1C16E] leading-snug">
                      "But the silence... it feels like a wall I can't climb. How do I reach her if she can't hear me?"
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 items-end text-right text-[#012419]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Nurse Emily</span>
                    <p className="text-3xl text-gray-800 font-serif italic pr-8 border-r-4 border-[#012419] leading-snug">
                      "You reach her with your presence. Hearing is the last sense to fade. Your voice isn't falling on empty ears; it’s a lighthouse in the fog. Speak your love, hold her hand, and let her know it’s safe to rest."
                    </p>
                  </div>
                </div>

                <div className="pt-10 max-w-2xl mx-auto">
                  <p className="text-gray-700 text-xl leading-relaxed text-center italic font-light">
                    Sarah took a slow breath, the weight in her chest finally loosening. She realized the silence wasn't a wall, but a sacred bridge. She leaned in, whispered a childhood memory, and for the first time in days, the air in the room felt light.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== FAQ SECTION ===== */}
        <section className="mt-40">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#012419] mb-6 font-serif">Guidance & Clarity</h2>
            <p className="text-[#E1C16E] uppercase tracking-[0.4em] font-bold text-xs">Answering the Sacred Questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { q: "Is it okay to wake them for meals?", a: "No. At this stage, sleep is more nourishing than sustenance. The body no longer requires external fuel; forcing wakefulness can cause confusion or agitation." },
              { q: "Do they still hear our voices?", a: "Yes. Clinical evidence suggests hearing remains intact long after other senses fade. Your voice is a vital source of reassurance." },
              { q: "What is 'Terminal Dreamwork'?", a: "It’s when a loved one mutters or gestures in sleep. They are often reviewing their life or 'packing' for the transition. It is a healthy soul-dialogue." },
              { q: "Is this sleep caused by morphine?", a: "While comfort meds facilitate rest, the deep sleep is primarily a biological result of the metabolic system naturally powering down." },
              { q: "Should we keep the room silent?", a: "Not necessarily. Familiar sounds—gentle music or the hum of family life—can prevent a sense of isolation and provide comfort." },
              { q: "How do I know they are peaceful?", a: "Look for 'Clinical Ease': a relaxed brow, soft hands, and even breathing. If the physical body is calm, the spirit is at peace." }
            ].map((item, index) => (
              <div key={index} className="p-12 bg-white border border-gray-100 rounded-[3rem] hover:shadow-2xl transition-all group cursor-default">
                <h3 className="font-bold text-[#012419] group-hover:text-[#E1C16E] transition-colors mb-6 text-2xl font-serif">
                  {index + 1}. {item.q}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-lg">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== EXTENSIVE CONCLUSION ===== */}
        <section className="mt-40 border-t border-gray-100 pt-24">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-6xl font-bold text-[#012419] font-serif">Honoring the Stillness</h2>
            <div className="text-2xl text-gray-700 leading-relaxed space-y-10 text-justify font-light">
              <p>
                As a Soul Specialist, we understand that the changes in sleep patterns near the end of life are not a symptom to be cured, but a transition to be honored. When a loved one enters this Deep Retreat, they are giving us a final lesson in the power of presence. They are teaching us that connection doesn't always require words, and that peace is found in the quiet moments of the soul.
              </p>
              <p>
                Our role is to curate an environment where this rest can happen without fear. By demystifying the biology of the retreat and leaning into the sacred narrative of the journey, we empower families to stay present in the room. Your love is the only language that transcends the silence. Honor the rest, trust the process, and know that in the quietest hours, the most profound healing takes place.
              </p>
            </div>
            <div className="inline-block px-14 py-8 bg-[#012419] text-[#E1C16E] rounded-full text-3xl font-serif italic shadow-2xl mt-12 hover:scale-105 transition-transform">
              "Love is the only language that remains."
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
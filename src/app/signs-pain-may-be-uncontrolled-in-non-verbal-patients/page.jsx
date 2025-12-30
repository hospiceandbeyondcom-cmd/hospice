"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn";

export default function NonVerbalPainBlog() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== SEO METADATA TAGS ===== */}
      <head>
        <title>Signs of Uncontrolled Pain in Non Verbal Patients | Hospice & Beyond</title>
        <meta name="description" content="Learn how to identify and manage pain in hospice patients who cannot communicate verbally. A guide to the silent language of comfort." />
        <meta name="keywords" content="non verbal pain signs, hospice pain management, silent pain signals, soul specialist, palliative care comfort" />
        <meta property="og:title" content="The Silent Vocabulary: Signs of Pain in Non Verbal Patients" />
        <meta property="og:description" content="Translating the subtle signals of the body into paths of peace." />
        <meta property="og:image" content="/blog60.png" />
      </head>

      <Header />

      {/* ===== HERO SECTION: CINEMATIC SPLIT SCREEN ===== */}
      <section className="flex flex-col md:flex-row items-stretch justify-between overflow-hidden bg-[#FAFAF8] min-h-[60vh] border-b border-gray-100">
        <div className="w-full md:w-1/2 px-8 py-12 md:p-20 flex flex-col justify-center">
          <FadeIn>
            <span className="text-[#E1C16E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              The Language of the Body
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#012419] mb-8 leading-[1.2]">
              Silent <br />
              <span className="font-light italic text-[#E1C16E]">Signals</span>
            </h1>
            <p className="text-gray-600 text-xl font-light leading-relaxed max-w-lg border-l-2 border-[#E1C16E] pl-6">
              When words fade the body begins to speak in a different way. Learning to listen to the quiet cues of discomfort.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[40vh]">
          <Image
            src="/blog60.png"
            alt="Soft light reflecting on a calm surface symbolizing inner peace"
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
            The Observation Map
          </button>
          <button
            onClick={() => setActiveTab("drama")}
            className={`w-full md:w-64 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all border-2 ${
              activeTab === "drama"
                ? "bg-[#012419] text-[#E1C16E] border-[#012419] shadow-xl scale-105"
                : "bg-transparent text-gray-400 border-gray-100 hover:border-[#E1C16E] hover:text-[#012419]"
            }`}
          >
            An Intuitive Moment
          </button>
        </div>

        {/* ===== TAB 1: CLINICAL/EDUCATIONAL INSIGHT ===== */}
        {activeTab === "general" && (
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#012419] font-serif">Decoding Discomfort</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  Pain management in hospice does not stop just because a patient can no longer tell us where it hurts. The body has its own protective responses that act as indicators of distress. As a soul specialist we teach caregivers to look for micro movements and changes in rhythm that signal a need for intervention.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  Uncontrolled pain can manifest as agitation or restlessness which families often mistake for terminal anxiety. By identifying the physical source of the pain we can provide the correct comfort medication and return the patient to a state of profound tranquility.
                </p>
              </div>
              <div className="bg-[#FAFAF8] p-10 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-[#E1C16E] font-bold mb-6 uppercase text-xs tracking-[0.3em]">The Signs of Distress</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">01.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Facial Tension: Furrowed brows or tightly closed eyes or a clenched jaw during movement.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">02.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Body Guarding: Tensing the muscles or pulling away when a specific area is touched or adjusted.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">03.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Vocal Cues: Moaning or groaning or rhythmic breathing patterns that change when the body is shifted.</p>
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
                <p className="text-3xl font-serif italic text-gray-900 tracking-tight">"Listening with the Eyes"</p>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50 space-y-10">
                <p className="text-gray-600 font-light leading-relaxed text-xl first-letter:text-6xl first-letter:text-[#E1C16E] first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                  Linda watched her mother sleep but something felt off. Her mother was not speaking anymore but her forehead was creased into a deep line. Every few minutes her hands would tighten around the edge of the blanket. Linda felt a knot of worry in her own chest.
                </p>

                <div className="space-y-12 py-10 border-y border-gray-50">
                  <div className="flex flex-col gap-3 text-[#E1C16E]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Linda</span>
                    <p className="text-2xl text-gray-800 font-serif italic pl-6 border-l-4 border-[#E1C16E] leading-snug">
                      "She looks like she is working so hard even while she is asleep. I do not want her to be fighting through pain alone."
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 items-end text-right text-[#012419]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">The Hospice Nurse</span>
                    <p className="text-2xl text-gray-800 font-serif italic pr-6 border-r-4 border-[#012419] leading-snug">
                      "You are right to notice that Linda. Those tight hands and that brow are her way of telling us she needs more support. We will adjust her medication now to smooth those lines away."
                    </p>
                  </div>
                </div>

                <div className="pt-8 max-w-2xl mx-auto">
                  <p className="text-gray-700 text-lg leading-relaxed text-center italic font-light">
                    Within thirty minutes of the adjustment the face of the mother softened. The grip on the blanket relaxed and her hands fell open like petals. Linda realized that even in the silence she could still hear exactly what her mother needed.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== FAQ SECTION ===== */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#012419] mb-4 font-serif">Deepening the Connection</h2>
            <p className="text-[#E1C16E] uppercase tracking-[0.4em] font-bold text-xs">Understanding Silent Cries for Help</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { q: "Can vital signs show pain?", a: "Yes. An increased heart rate or faster breathing can be a physiological response to uncontrolled pain even when the patient is asleep." },
              { q: "What if they are just restless?", a: "Restlessness can be a sign of pain or terminal agitation. We usually treat for pain first to see if the restlessness subsides." },
              { q: "Does a moan always mean pain?", a: "Not always but it is a primary indicator. We look for rhythmic moaning that matches the breath as a sign that comfort needs to be increased." },
              { q: "How do I know if the dose worked?", a: "Watch for the softening of the facial muscles and the slowing of the breath. A peaceful expression is the best indicator of success." },
              { q: "Is it okay to medicate if I am unsure?", a: "In hospice we follow the philosophy of 'anticipatory care'. It is better to prevent pain than to try and catch up once it becomes severe." },
              { q: "Can touch increase the pain?", a: "For some patients simple touch can be overwhelming. Watch for flinching or tensing as a sign to use a gentler approach." }
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012419] font-serif">The Promise of Comfort</h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-8 text-justify font-light">
              <p>
                As a soul specialist our most sacred duty is to ensure that no one suffers in silence. The transition from life should be a time of release and peace not a battle with physical distress. By learning the subtle signs of pain you become the voice for your loved one when they can no longer speak for themselves.
              </p>
              <p>
                Trust your intuition and your observations. You know the face and the spirit of the person better than anyone. When you see the signals do not hesitate to reach out to your hospice team. Together we can ensure that the path remains clear of pain and filled with the dignity that every human soul deserves.
              </p>
            </div>
            <div className="inline-block px-12 py-6 bg-[#012419] text-[#E1C16E] rounded-full text-2xl font-serif italic shadow-xl mt-8 hover:scale-105 transition-transform">
              "Comfort is a language all its own"
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
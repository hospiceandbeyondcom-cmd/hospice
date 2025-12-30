"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn";

export default function HospiceWeightLossBlog() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== SEO METADATA TAGS ===== */}
      <head>
        <title>Weight Loss in Hospice: What is Normal | Hospice & Beyond</title>
        <meta name="description" content="Understand the metabolic shifts and natural weight loss that occur during the end of life journey. Learn how to support your loved one with dignity." />
        <meta name="keywords" content="hospice weight loss, terminal cachexia, end of life nutrition, metabolic changes in dying, soul specialist, palliative care food" />
        <meta property="og:title" content="Weight Loss in Hospice: What is Normal and What is Not" />
        <meta property="og:description" content="Navigating the natural thinning of the physical vessel." />
        <meta property="og:image" content="/blog61.png" />
      </head>

      <Header />

      {/* ===== HERO SECTION: CINEMATIC SPLIT SCREEN ===== */}
      <section className="flex flex-col md:flex-row items-stretch justify-between overflow-hidden bg-[#FAFAF8] min-h-[60vh] border-b border-gray-100">
        <div className="w-full md:w-1/2 px-8 py-12 md:p-20 flex flex-col justify-center">
          <FadeIn>
            <span className="text-[#E1C16E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              The Thinning of the Veil
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#012419] mb-8 leading-[1.2]">
              The Lightened <br />
              <span className="font-light italic text-[#E1C16E]">Journey</span>
            </h1>
            <p className="text-gray-600 text-xl font-light leading-relaxed max-w-lg border-l-2 border-[#E1C16E] pl-6">
              Understanding how the body releases its physical weight as the soul prepares for the final transition.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[40vh]">
          <Image
            src="/blog61.png"
            alt="An empty porcelain bowl in soft light symbolizing the release of physical needs"
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
            The Kitchen Table
          </button>
        </div>

        {/* ===== TAB 1: CLINICAL/EDUCATIONAL INSIGHT ===== */}
        {activeTab === "general" && (
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#012419] font-serif">The Metabolic Shift</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  In the final stages of a terminal illness the body undergoes a process called cachexia. Unlike simple starvation this is a metabolic change where the body can no longer process calories into muscle or fat. No matter how much a person eats the body continues to thin.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  This is a natural part of the powering down process. As the organs slow their work the demand for fuel decreases. Food often becomes a burden rather than a source of energy. Understanding this helps families shift from the role of the provider to the role of the presence.
                </p>
              </div>
              <div className="bg-[#FAFAF8] p-10 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-[#E1C16E] font-bold mb-6 uppercase text-xs tracking-[0.3em]">Normal vs Not Normal</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">01.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Normal: A slow and steady decline in appetite and weight over weeks or months.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">02.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Normal: Preferring soft foods or liquids over heavy proteins and solids.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">03.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Not Normal: Sudden weight loss accompanied by acute pain or severe nausea which may need intervention.</p>
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
                <p className="text-3xl font-serif italic text-gray-900 tracking-tight">"Love Without the Spoon"</p>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50 space-y-10">
                <p className="text-gray-600 font-light leading-relaxed text-xl first-letter:text-6xl first-letter:text-[#E1C16E] first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                  Elena stood in the kitchen cooking her famous chicken soup. She carried a small bowl to her husband but he only looked at it and shook his head softly. She felt a surge of panic as she realized how loose his wedding ring had become on his finger.
                </p>

                <div className="space-y-12 py-10 border-y border-gray-50">
                  <div className="flex flex-col gap-3 text-[#E1C16E]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Elena</span>
                    <p className="text-2xl text-gray-800 font-serif italic pl-6 border-l-4 border-[#E1C16E] leading-snug">
                      "If he does not eat he will just wither away. I feel like I am failing him by letting him go hungry."
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 items-end text-right text-[#012419]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">The Hospice Aide</span>
                    <p className="text-2xl text-gray-800 font-serif italic pr-6 border-r-4 border-[#012419] leading-snug">
                      "He is not hungry Elena. His body is becoming light for the journey. You are not failing him. You are now feeding his soul with your company instead of his body with your soup."
                    </p>
                  </div>
                </div>

                <div className="pt-8 max-w-2xl mx-auto">
                  <p className="text-gray-700 text-lg leading-relaxed text-center italic font-light">
                    Elena set the bowl aside and simply sat on the edge of the bed. She took his hand and they watched the sunset together. She realized that her presence was the only nourishment he truly needed now.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== FAQ SECTION ===== */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#012419] mb-4 font-serif">Common Questions</h2>
            <p className="text-[#E1C16E] uppercase tracking-[0.4em] font-bold text-xs">Understanding the Changing Body</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { q: "Are they suffering from hunger?", a: "No. The natural chemical changes in the body actually suppress hunger. Most patients report feeling full after just a tiny bite." },
              { q: "Should we use a feeding tube?", a: "In most hospice cases a feeding tube does not prolong life or improve comfort. It can actually cause fluid overload and physical distress." },
              { q: "Is it okay to offer their favorite foods?", a: "Yes. But do so without expectation. If they take one bite and stop that is a success. Let them guide the process." },
              { q: "Why does their skin look different?", a: "As weight is lost the skin becomes more fragile. This is why gentle repositioning and soft fabrics are so important for dignity." },
              { q: "What if they only want ice chips?", a: "Ice chips are wonderful. They provide moisture and comfort without the physical effort of swallowing a meal." },
              { q: "Will supplements stop the weight loss?", a: "High calorie drinks may be used for a while but they will not stop the metabolic shift of terminal cachexia." }
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012419] font-serif">Honoring the Physical Release</h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-8 text-justify font-light">
              <p>
                As a Soul Specialist we recognize that weight loss is the visible sign of the spirit becoming more prominent than the body. It is a thinning of the vessel so the light within can shine through more clearly. While it is difficult to watch we must remember that the body knows how to close its doors with grace.
              </p>
              <p>
                Our role is to provide comfort and dignity and love during this release. By letting go of the need to feed the physical form we create space to nourish the emotional and spiritual connection. Trust that the body is doing exactly what it needs to do for a peaceful transition.
              </p>
            </div>
            <div className="inline-block px-12 py-6 bg-[#012419] text-[#E1C16E] rounded-full text-2xl font-serif italic shadow-xl mt-8 hover:scale-105 transition-transform">
              "The spirit needs no bread for its flight"
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
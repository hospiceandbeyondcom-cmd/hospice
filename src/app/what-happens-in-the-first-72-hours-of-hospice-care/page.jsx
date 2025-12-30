"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn";

export default function HospiceFirst72HoursBlog() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== SEO METADATA TAGS ===== */}
      <head>
        <title>The First 72 Hours of Hospice Care | Hospice & Beyond</title>
        <meta name="description" content="What to expect during the first three days of hospice. Learn about the transition from curative care to the comfort focused approach of the soul specialist." />
        <meta name="keywords" content="first 72 hours of hospice, starting hospice care, hospice admission process, end of life transition, soul specialist, comfort care initial steps" />
        <meta property="og:title" content="What Happens in the First 72 Hours of Hospice Care" />
        <meta property="og:description" content="Setting the foundation for a peaceful journey home." />
        <meta property="og:image" content="/blog64.png" />
      </head>

      <Header />

      {/* ===== HERO SECTION: CINEMATIC SPLIT SCREEN ===== */}
      <section className="flex flex-col md:flex-row items-stretch justify-between overflow-hidden bg-[#FAFAF8] min-h-[60vh] border-b border-gray-100">
        <div className="w-full md:w-1/2 px-8 py-12 md:p-20 flex flex-col justify-center">
          <FadeIn>
            <span className="text-[#E1C16E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              The Threshold of Comfort
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#012419] mb-8 leading-[1.2]">
              The First <br />
              <span className="font-light italic text-[#E1C16E]">Seventy Two Hours</span>
            </h1>
            <p className="text-gray-600 text-xl font-light leading-relaxed max-w-lg border-l-2 border-[#E1C16E] pl-6">
              Navigating the critical transition from the noise of the clinical world to the sanctuary of comfort care.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[40vh]">
          <Image
            src="/blog64.png"
            alt="A gentle pathway leading into a sunlit forest symbolizing the hospice transition"
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
            The Clinical Roadmap
          </button>
          <button
            onClick={() => setActiveTab("drama")}
            className={`w-full md:w-64 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all border-2 ${
              activeTab === "drama"
                ? "bg-[#012419] text-[#E1C16E] border-[#012419] shadow-xl scale-105"
                : "bg-transparent text-gray-400 border-gray-100 hover:border-[#E1C16E] hover:text-[#012419]"
            }`}
          >
            A Family Breath
          </button>
        </div>

        {/* ===== TAB 1: CLINICAL/EDUCATIONAL INSIGHT ===== */}
        {activeTab === "general" && (
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#012419] font-serif">Establishing the Sanctuary</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  The first seventy two hours are about stabilization and education. During this window the hospice team moves quickly to assess pain and order comfort medications and deliver essential equipment like hospital beds or oxygen. The goal is to stop the cycle of crisis and begin the cycle of peace.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  As a soul specialist we believe this period is when the family starts to exhale. We shift the focus from cure to comfort. You will meet the nurse and the social worker and the chaplain who will help you create a personalized map for the journey ahead ensuring that dignity is maintained at every step.
                </p>
              </div>
              <div className="bg-[#FAFAF8] p-10 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-[#E1C16E] font-bold mb-6 uppercase text-xs tracking-[0.3em]">The 72 Hour Checklist</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">01.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Medication Audit: Replacing curative drugs with those focused on symptom management and ease.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">02.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Environment Setup: Optimizing the room for safety and tranquility and ease of caregiving.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">03.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Care Plan Design: Defining the goals of the patient and the support needs of the family unit.</p>
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
                <p className="text-3xl font-serif italic text-gray-900 tracking-tight">"The Shift in the Air"</p>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50 space-y-10">
                <p className="text-gray-600 font-light leading-relaxed text-xl first-letter:text-6xl first-letter:text-[#E1C16E] first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                  The first morning after hospice arrived felt different. The hospital bed had been tucked into the corner of the living room where the sunlight hit the floor. For the first time in months Sarah did not have to worry about the next appointment or the next lab result.
                </p>

                <div className="space-y-12 py-10 border-y border-gray-50">
                  <div className="flex flex-col gap-3 text-[#E1C16E]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Sarah</span>
                    <p className="text-2xl text-gray-800 font-serif italic pl-6 border-l-4 border-[#E1C16E] leading-snug">
                      "It feels strange to just sit here. I feel like I should be doing something clinical. Is it really okay to just focus on his comfort now?"
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 items-end text-right text-[#012419]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Nurse Elena</span>
                    <p className="text-2xl text-gray-800 font-serif italic pr-6 border-r-4 border-[#012419] leading-snug">
                      "It is more than okay Sarah. It is the mission. We handle the clinical burden so you can return to being his daughter. These first few days are about reclaiming your relationship."
                    </p>
                  </div>
                </div>

                <div className="pt-8 max-w-2xl mx-auto">
                  <p className="text-gray-700 text-lg leading-relaxed text-center italic font-light">
                    Sarah watched as the nurse gently adjusted the pillows. The room no longer felt like a waiting area but like a home again. By the third day the house was quiet and the panic had started to fade into a gentle and focused love.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== FAQ SECTION ===== */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#012419] mb-4 font-serif">Clarity and Compassion</h2>
            <p className="text-[#E1C16E] uppercase tracking-[0.4em] font-bold text-xs">Navigating the Initial Days</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { q: "Will doctors still be involved?", a: "Yes. The hospice medical director works closely with the nurses and your primary physician to oversee the comfort plan." },
              { q: "What if an emergency happens at night?", a: "Hospice provides twenty four hour support. You will be given a direct number to call so a nurse can help you through any crisis immediately." },
              { q: "Do we have to buy the equipment?", a: "No. Hospice covers the cost and delivery of all equipment and supplies related to the terminal diagnosis." },
              { q: "How often will the nurse visit?", a: "In the first seventy two hours visits are frequent to ensure comfort. After that a schedule is set based on the needs of the patient." },
              { q: "Can we change our minds?", a: "Always. Hospice is a choice and you can revoke the benefit at any time if you decide to seek curative treatment again." },
              { q: "Who helps with the emotional side?", a: "The social worker and chaplain are available from day one to help with the emotional and spiritual weight of the transition." }
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012419] font-serif">A Foundation of Peace</h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-8 text-justify font-light">
              <p>
                As a soul specialist we know that the first seventy two hours of hospice care can feel like a whirlwind of activity. There are many new faces and many new conversations. But every action taken is designed to build a fortress of comfort around your loved one.
              </p>
              <p>
                Once the medications are in place and the equipment is settled the real work of hospice begins. This is the work of presence and memory and unconditional love. Trust the team and trust the process and allow yourself to lean into the support. You do not have to walk this path alone and these first three days are the start of a more peaceful and dignified chapter.
              </p>
            </div>
            <div className="inline-block px-12 py-6 bg-[#012419] text-[#E1C16E] rounded-full text-2xl font-serif italic shadow-xl mt-8 hover:scale-105 transition-transform">
              "Peace begins with the first step of support"
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
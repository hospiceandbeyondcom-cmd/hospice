"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn";

export default function HospiceDurationBlog() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== SEO METADATA TAGS ===== */}
      <head>
        <title>How Long Can Someone Be on Hospice? | Hospice & Beyond</title>
        <meta name="description" content="A factual guide to hospice timelines and the Medicare benefit periods for long term end of life care." />
        <meta name="keywords" content="hospice eligibility, hospice timeline, medicare hospice benefit, hospice recertification, end of life care" />
        <meta property="og:title" content="How Long Can Someone Be on Hospice?" />
        <meta property="og:description" content="Clear information regarding the length of stay and recertification process for hospice care." />
        <meta property="og:image" content="/blog66.png" />
      </head>

      <Header />

      {/* ===== HERO SECTION: CINEMATIC SPLIT SCREEN ===== */}
      <section className="flex flex-col md:flex-row items-stretch justify-between overflow-hidden bg-[#FAFAF8] min-h-[60vh] border-b border-gray-100">
        <div className="w-full md:w-1/2 px-8 py-12 md:p-20 flex flex-col justify-center">
          <FadeIn>
            <span className="text-[#E1C16E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              Clinical Guidelines
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#012419] mb-8 leading-[1.2]">
              How Long Can Someone <br />
              <span className="font-light italic text-[#E1C16E]">Be on Hospice?</span>
            </h1>
            <p className="text-gray-600 text-xl font-light leading-relaxed max-w-lg border-l-2 border-[#E1C16E] pl-6">
              Understanding the regulatory requirements and clinical milestones for continued hospice eligibility and patient care.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[40vh]">
          <Image
            src="/blog66.png"
            alt="Clear professional setting illustrating healthcare coordination"
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
            The Benefit Periods
          </button>
          <button
            onClick={() => setActiveTab("drama")}
            className={`w-full md:w-64 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all border-2 ${
              activeTab === "drama"
                ? "bg-[#012419] text-[#E1C16E] border-[#012419] shadow-xl scale-105"
                : "bg-transparent text-gray-400 border-gray-100 hover:border-[#E1C16E] hover:text-[#012419]"
            }`}
          >
            Clinical Example
          </button>
        </div>

        {/* ===== TAB 1: EDUCATIONAL INSIGHT ===== */}
        {activeTab === "general" && (
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#012419] font-serif">Eligibility Requirements</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  To qualify for hospice a physician must certify that a patient has a terminal illness with a life expectancy of six months or less if the disease runs its normal course. However this is a clinical estimate and not a hard deadline for the termination of services. As long as a patient shows clinical evidence of decline they remain eligible for care.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  Hospice care is delivered in specific benefit periods. At the end of each period the hospice team must perform a clinical assessment to determine if the patient still meets the criteria for care. This ensures that every patient receives the appropriate level of medical and support services based on their current health status.
                </p>
              </div>
              <div className="bg-[#FAFAF8] p-10 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-[#E1C16E] font-bold mb-6 uppercase text-xs tracking-[0.3em]">Technical Breakdown</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">01.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">The 90 Day Rule: The first two benefit periods each last ninety days. These require physician recertification at each interval.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">02.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">60 Day Extensions: After the first six months the benefit moves into sixty day periods which can be renewed an unlimited number of times.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">03.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Face To Face Visits: For the third period and beyond a nurse practitioner or physician must visit the patient in person to verify continued eligibility.</p>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== TAB 2: PRACTICAL EXAMPLE ===== */}
        {activeTab === "drama" && (
          <FadeIn>
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-xs uppercase tracking-[0.6em] text-[#E1C16E] font-bold mb-4">Educational Scenario</h2>
                <p className="text-3xl font-serif italic text-gray-900 tracking-tight">"The Recertification Process"</p>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50 space-y-10">
                <p className="text-gray-600 font-light leading-relaxed text-xl first-letter:text-6xl first-letter:text-[#E1C16E] first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                  Mr. Miller has been receiving hospice care for six months due to advanced heart failure. While he has had several episodes of respiratory distress the intensive nursing care has helped him stabilize at home. His family is concerned that since he has reached the six month mark he will lose his coverage.
                </p>

                <div className="space-y-12 py-10 border-y border-gray-50">
                  <div className="flex flex-col gap-3 text-[#E1C16E]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Patient Family</span>
                    <p className="text-2xl text-gray-800 font-serif italic pl-6 border-l-4 border-[#E1C16E] leading-snug">
                      "We reached the 180 day mark today. Does Medicare automatically stop paying for his nursing visits and medications now?"
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 items-end text-right text-[#012419]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">Medical Director</span>
                    <p className="text-2xl text-gray-800 font-serif italic pr-6 border-r-4 border-[#012419] leading-snug">
                      "No. We have documented his recent weight loss and decreased cardiac output. Based on this clinical data he still qualifies for hospice for another sixty days."
                    </p>
                  </div>
                </div>

                <div className="pt-8 max-w-2xl mx-auto">
                  <p className="text-gray-700 text-lg leading-relaxed text-center italic font-light">
                    As long as the medical documentation supports the diagnosis of a terminal condition the hospice benefit continues to provide support and supplies without any specific cap on the total number of days.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== FAQ SECTION ===== */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#012419] mb-4 font-serif">Frequently Asked Questions</h2>
            <p className="text-[#E1C16E] uppercase tracking-[0.4em] font-bold text-xs">Clear Answers on Benefit Duration</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { q: "Is there a limit on total days?", a: "There is no total limit. Patients can remain on hospice for years if they continue to show clinical decline and meet the prognosis requirements." },
              { q: "What if the patient stabilizes?", a: "If a patient improves or their disease plateaus they may be discharged. They can return to hospice later if their condition begins to decline again." },
              { q: "Who decides if someone stays on hospice?", a: "The hospice medical director and the patient's attending physician review clinical notes and physical exams to determine ongoing eligibility." },
              { q: "What is a discharge for cause?", a: "This is rare and occurs if the patient moves out of the service area or if they choose to seek curative treatment that is not covered under the hospice benefit." },
              { q: "Can a patient revoke hospice?", a: "Yes. A patient or their legal representative can sign a revocation form at any time to return to traditional health insurance coverage." },
              { q: "Do benefit periods reset?", a: "If a patient is discharged and later re-enrolled they typically start a new benefit period sequence based on current clinical findings." }
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012419] font-serif">Understanding Your Rights</h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-8 text-justify font-light">
              <p>
                Hospice is a flexible benefit designed to meet the changing needs of patients with life limiting illnesses. The primary goal is to provide continuous support and symptom management without the stress of arbitrary time limits. By working closely with the hospice team families can ensure they are maximizing the resources available to them.
              </p>
              <p>
                If you have questions about a specific timeline or the recertification process always consult with your hospice case manager. They can provide the specific clinical data that supports the plan of care and help you understand the next steps in the journey of care.
              </p>
            </div>
            <div className="inline-block px-12 py-6 bg-[#012419] text-[#E1C16E] rounded-full text-2xl font-serif italic shadow-xl mt-8 hover:scale-105 transition-transform">
              "Care dictated by clinical need"
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
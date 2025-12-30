"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn";

export default function InclusiveFestivitiesBlog() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== SEO METADATA TAGS ===== */}
      <head>
        <title>Inclusive Festivities: Cultural Traditions in Hospice | Hospice & Beyond</title>
        <meta name="description" content="Explore the importance of honoring cultural and faith traditions in hospice care. Learn how to celebrate life and heritage during the final journey." />
        <meta name="keywords" content="hospice cultural care, faith traditions end of life, inclusive hospice celebrations, soul specialist, spiritual comfort in hospice" />
        <meta property="og:title" content="Inclusive Festivities: Celebrating Cultural and Faith Traditions" />
        <meta property="og:description" content="Honoring the diverse threads of the human spirit." />
        <meta property="og:image" content="/blog62.png" />
      </head>

      <Header />

      {/* ===== HERO SECTION: CINEMATIC SPLIT SCREEN ===== */}
      <section className="flex flex-col md:flex-row items-stretch justify-between overflow-hidden bg-[#FAFAF8] min-h-[60vh] border-b border-gray-100">
        <div className="w-full md:w-1/2 px-8 py-12 md:p-20 flex flex-col justify-center">
          <FadeIn>
            <span className="text-[#E1C16E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              The Tapestry of Faith
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#012419] mb-8 leading-[1.2]">
              Sacred <br />
              <span className="font-light italic text-[#E1C16E]">Heritage</span>
            </h1>
            <p className="text-gray-600 text-xl font-light leading-relaxed max-w-lg border-l-2 border-[#E1C16E] pl-6">
              Celebrating the diverse ways the soul finds its way home through ritual and community and deep rooted belief.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[40vh]">
          <Image
            src="/blog62.png"
            alt="Intertwined hands and diverse symbolic items representing multiple faiths"
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
            The Soul Spectrum
          </button>
          <button
            onClick={() => setActiveTab("drama")}
            className={`w-full md:w-64 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all border-2 ${
              activeTab === "drama"
                ? "bg-[#012419] text-[#E1C16E] border-[#012419] shadow-xl scale-105"
                : "bg-transparent text-gray-400 border-gray-100 hover:border-[#E1C16E] hover:text-[#012419]"
            }`}
          >
            A Living Ritual
          </button>
        </div>

        {/* ===== TAB 1: CLINICAL/EDUCATIONAL INSIGHT ===== */}
        {activeTab === "general" && (
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#012419] font-serif">Cultural Safety in Care</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  Inclusive care means recognizing that the end of life is not just a biological event but a cultural and spiritual milestone. Every tradition brings its own language of comfort and its own rituals for the transition. When we honor these we reduce anxiety and provide a sense of belonging.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-light">
                  Whether it involves specific prayers or sacred scents or traditional music these elements act as an anchor for the spirit. In the world of hospice being a soul specialist means curating a space where every faith and culture feels seen and heard and respected.
                </p>
              </div>
              <div className="bg-[#FAFAF8] p-10 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-[#E1C16E] font-bold mb-6 uppercase text-xs tracking-[0.3em]">Elements of Inclusion</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">01.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Sensory Rituals: Incorporating familiar sounds and smells that align with the heritage of the person.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">02.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Community Presence: Allowing space for spiritual leaders or extended family to participate in traditional ways.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#012419] font-bold text-xl">03.</span>
                    <p className="text-gray-600 italic leading-relaxed text-md">Symbolic Decor: Respecting the placement of religious icons or cultural symbols that provide peace.</p>
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
                <p className="text-3xl font-serif italic text-gray-900 tracking-tight">"The Candle and the Song"</p>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50 space-y-10">
                <p className="text-gray-600 font-light leading-relaxed text-xl first-letter:text-6xl first-letter:text-[#E1C16E] first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                  The room was filled with the soft hum of ancient chants. Mrs. Chen lay peacefully as her daughter placed a small silk tapestry near the window. It was a festival day in their culture and the family wanted to ensure the room reflected the joy of their ancestors.
                </p>

                <div className="space-y-12 py-10 border-y border-gray-50">
                  <div className="flex flex-col gap-3 text-[#E1C16E]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">The Daughter</span>
                    <p className="text-2xl text-gray-800 font-serif italic pl-6 border-l-4 border-[#E1C16E] leading-snug">
                      "We were afraid that being in hospice meant we had to leave our traditions at the door. We did not want her to feel lost in a clinical world."
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 items-end text-right text-[#012419]">
                    <span className="font-bold text-xs uppercase tracking-[0.3em]">The Hospice Chaplain</span>
                    <p className="text-2xl text-gray-800 font-serif italic pr-6 border-r-4 border-[#012419] leading-snug">
                      "Her culture is her home. By bringing these traditions here you are ensuring she never leaves the place where she feels most safe and loved."
                    </p>
                  </div>
                </div>

                <div className="pt-8 max-w-2xl mx-auto">
                  <p className="text-gray-700 text-lg leading-relaxed text-center italic font-light">
                    As the sun set the family shared a traditional tea in small sips. The clinical walls seemed to vanish and the room became a sacred temple of memory and faith. Mrs. Chen smiled in her sleep as if she could hear the echoes of a thousand years of celebration.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ===== FAQ SECTION ===== */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#012419] mb-4 font-serif">Honoring All Paths</h2>
            <p className="text-[#E1C16E] uppercase tracking-[0.4em] font-bold text-xs">Questions on Cultural Inclusion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { q: "Can we perform specific religious rites?", a: "Absolutely. Hospice teams work to accommodate priests or imams or rabbis and any specific rituals that bring the family peace." },
              { q: "What about traditional medicines?", a: "We aim for an integrative approach. As long as it does not cause physical harm we support the use of cultural healing practices alongside clinical care." },
              { q: "How do we handle dietary traditions?", a: "Food is a powerful connection to culture. We encourage families to bring in traditional aromas and small tastes that honor their heritage." },
              { q: "Can we have large family gatherings?", a: "Many cultures value communal presence. We coordinate with families to ensure their need for community is met with dignity." },
              { q: "How do we talk about death in our way?", a: "Every culture has a different vocabulary for the end of life. We listen and learn your language so we can support you in your own words." },
              { q: "Are sacred symbols allowed in the room?", a: "Yes. Icons and prayer rugs and sacred beads are all vital parts of creating a spiritual sanctuary for the soul." }
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#012419] font-serif">Unity in the Final Hour</h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-8 text-justify font-light">
              <p>
                As a Soul Specialist we believe that the beauty of humanity is found in our diverse ways of honoring the sacred. Inclusive festivities are not just about decorations but about validating the entire life story of the person. When we embrace cultural and faith traditions we weave a stronger safety net for the family and the patient.
              </p>
              <p>
                No matter the path chosen or the creed followed the goal remains the same to find peace and meaning in the transition. By opening our hearts to the rituals of others we create a world where every soul can fly home on the wings of their own tradition. Honor the culture and trust the ritual and let love be the universal language.
              </p>
            </div>
            <div className="inline-block px-12 py-6 bg-[#012419] text-[#E1C16E] rounded-full text-2xl font-serif italic shadow-xl mt-8 hover:scale-105 transition-transform">
              "Faith is the bridge that spans all borders"
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
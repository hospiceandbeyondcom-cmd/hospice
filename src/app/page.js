"use client";

import Header from "./Header";
import Hero from "./components/Hero";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Final from "./components/Final";
import Footer from "./Footer";


export default function Home() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-[#03271E] text-white font-sans overflow-hidden m-0 p-0">
        <Hero />
        <SecondSection />
        <ThirdSection />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Final />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

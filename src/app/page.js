"use client";

import Header from "./Header";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
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
        <Welcome />
        <Services />
        <Final />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

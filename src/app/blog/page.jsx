"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";

export default function Blog() {
  const [activeModal, setActiveModal] = useState(null);

  const blogs = [
    {
      title: "Hospice Care Insights",
      image: "/blog2.png",
      text: "Gentle reflections and guidance on end-of-life care — stories that remind us that compassion never fades.",
    },
    {
      title: "Palliative Care Perspectives",
      image: "/blog3.png",
      text: "Daily thoughts and resources to help families, patients, and caregivers navigate comfort-centered living.",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/blog.png"
            alt="Hospice and Beyond Blog"
            fill
            priority
            className="object-cover object-top" // keeps head fully visible
          />
        </div>

        {/* Subtle overlay for text clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00000055] via-[#00000022] to-transparent"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-12 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Hospice & Beyond Blog
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Reflections, guidance, and heartfelt stories on care, compassion, and
            connection.
          </p>
        </div>
      </section>

      {/* ===== Blog Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-6"
          style={{
            background: "linear-gradient(90deg, #006D66, #7D5F42)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Explore Our Blog
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          We release new posts daily — each one written with warmth, clarity, and
          purpose. Our blog shares insights from hospice and palliative care
          professionals, helping you stay connected to the heart of compassionate
          care.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {blogs.map((blog, i) => (
            <div
              key={i}
              onClick={() => setActiveModal(blog.title)}
              className="bg-white border border-[#E6E6E6] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover object-center transform hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{
                    background: "linear-gradient(90deg, #006D66, #7D5F42)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {blog.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {blog.text}
                </p>
                <button
                  className="mt-5 px-6 py-2 rounded-full font-semibold text-white transition"
                  style={{
                    background: "linear-gradient(90deg, #006D66, #7D5F42)",
                  }}
                  onClick={() => setActiveModal(blog.title)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Modal (refined blur + tone) ===== */}
      {activeModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[2px] bg-white/30 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-fadeIn border border-[#E6E6E6]">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{
                background: "linear-gradient(90deg, #006D66, #7D5F42)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Blog Update in Progress
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our writers are currently preparing thoughtful, compassionate
              articles designed to bring light, learning, and comfort. <br />
              Each post will be published soon — crafted with care to help you
              connect deeply with what matters most.
            </p>
            <button
              onClick={() => setActiveModal(null)}
              className="px-6 py-2 rounded-full font-semibold text-white transition"
              style={{
                background: "linear-gradient(90deg, #006D66, #7D5F42)",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden mt-[70px]">
        <Image
          src="/contacthero.png"
          alt="Contact Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Hospice and Beyond
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
            We&apos;re here to listen, support, and guide you every step of the way.
          </p>
        </div>
      </section>

      {/* ✅ Contact Section (Image + Form) */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Image Side */}
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/about3.png"
            alt="Contact illustration"
            fill
            className="object-cover"
          />
        </div>

        {/* Form Side */}
        <div className="bg-[#F9FAF9] shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-[#03271E] mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6">
            Have a question or need help with our hospice and palliative care
            services? Send us a message and our team will respond promptly.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#047857] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#047857] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#047857] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#047857] transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#047857] to-[#0f5132] text-white font-semibold py-3 rounded-full hover:opacity-90 transition shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ✅ Learn More Section */}
      <section className="py-20 px-6 md:px-12 bg-[#03271E] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Want to Learn More About Our Services?
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-10">
          Discover how Hospice and Beyond Palliative Care can bring peace,
          comfort, and compassion to you and your loved ones.
        </p>
        <Link
          href="/services"
          className="inline-block bg-[#FFD700] text-[#03271E] px-8 py-3 rounded-full font-semibold hover:bg-[#e6c200] transition shadow-md"
        >
          View Our Services
        </Link>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </main>
  );
}

"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Hero Section with Video */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden mt-[70px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/services.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
            Compassionate, patient-centered hospice and palliative care designed
            to honor every life with dignity, peace, and comfort.
          </p>
        </div>
      </section>

      {/* ✅ Intro Section */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At <strong>Hospice and Beyond Palliative Care LLC</strong>, we offer a
          full spectrum of services designed to meet the diverse needs of
          patients and families — providing comfort, guidance, and heartfelt
          care every step of the way.
        </p>
      </section>

      {/* ✅ Hospice Care Card */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-[#F9FAF9] rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-[350px] w-full">
            <Image
              src="/hospice.png"
              alt="Hospice Care"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-[#03271E] mb-4">
              Hospice Care
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Personalized, comfort-focused medical and emotional support for
              individuals facing advanced or terminal illness — delivered
              wherever the patient calls home. Our care focuses on dignity,
              peace, and the human connection that matters most.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Palliative Care Card */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-[#F9FAF9] rounded-2xl shadow-lg overflow-hidden">
          <div className="order-2 md:order-1 p-8">
            <h2 className="text-3xl font-semibold text-[#03271E] mb-4">
              Palliative Care
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive care that manages pain, symptoms, and emotional
              needs for patients at any stage of serious illness — supporting
              both healing and quality of life with compassion and respect.
            </p>
          </div>
          <div className="relative h-[350px] w-full order-1 md:order-2">
            <Image
              src="/palliative.png"
              alt="Palliative Care"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ✅ Faith & Spiritual Care Card */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-[#F9FAF9] rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-[350px] w-full">
            <Image
              src="/faith.png"
              alt="Faith and Spiritual Care"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-[#03271E] mb-4">
              Faith & Spiritual Care
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Respectful, non-denominational guidance and comfort for patients
              and families seeking peace, meaning, or strength through spiritual
              connection. We help each person find serenity and faith during
              life’s most meaningful moments.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Family Support Card */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-[#F9FAF9] rounded-2xl shadow-lg overflow-hidden">
          <div className="order-2 md:order-1 p-8">
            <h2 className="text-3xl font-semibold text-[#03271E] mb-4">
              Family Support
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Assistance with care planning, counseling, and access to community
              resources to help patients and caregivers navigate emotional,
              financial, and practical challenges — ensuring families never walk
              alone in the journey of care.
            </p>
          </div>
          <div className="relative h-[350px] w-full order-1 md:order-2">
            <Image
              src="/family.png"
              alt="Family Support"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ✅ Call to Action Section */}
      <section className="py-20 px-6 md:px-12 bg-[#03271E] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div className="relative h-[350px] w-full rounded-2xl overflow-hidden">
            <Image
              src="/services2.png"
              alt="Contact Us CTA"
              fill
              className="object-cover opacity-90"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Compassionate Care Is Just a Call Away
            </h2>
            <p className="text-gray-200 mb-8 leading-relaxed">
              Whether you’re seeking guidance, emotional support, or planning
              hospice care for a loved one, our compassionate team is ready to
              help — day or night.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#FFD700] text-[#03271E] px-8 py-3 rounded-full font-semibold hover:bg-[#e6c200] transition shadow-md"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </main>
  );
}

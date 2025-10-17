"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { Heart, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 font-sans leading-relaxed">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Hero Section — removed mt-[70px] */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/heroabout.png"
          alt="Hospice and Beyond Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hospice and Beyond Palliative Care
          </h1>
          <p className="text-xl md:text-2xl font-medium italic max-w-2xl">
            “A Legacy of Compassion – Honoring Every Life, Every Moment.”
          </p>
        </div>
      </section>

      {/* ✅ Welcome (moved here, image left, text right) */}
      <section className="grid md:grid-cols-2 items-center gap-10 px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
          <Image
            src="/about3.png"
            alt="Welcome Image"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-[#03271E] mb-6">
            Welcome
          </h2>
          <p className="text-gray-700 mb-6">Dear Patient and Family,</p>
          <p className="text-gray-700 mb-4">
            At Hospice and Beyond Palliative Care, our calling is more than
            medical — it’s deeply human. We exist to surround you with expertise,
            understanding, and presence. Hospice care is not about surrendering;
            it’s about cherishing what matters most — comfort, dignity, and
            connection.
          </p>
          <p className="text-gray-700 mb-4">
            Together, we will design a care plan that reflects your personal
            wishes, values, and spiritual needs. This handbook introduces you to
            our services, our people, and the promises we make to you: that you’ll
            never be alone, that your comfort is our mission, and that your family
            will be supported every step of the way.
          </p>
          <p className="text-gray-700 mb-4">
            If family caregiving is limited or unavailable, our social worker will
            help coordinate assistance — whether through community resources,
            private caregivers, or volunteer programs.
          </p>
          <p className="text-gray-700 mb-6">
            You can reach our team any time — day or night — 24/7 for comfort,
            guidance, and reassurance.
          </p>
          <p className="font-semibold text-[#03271E]">With warm regard,</p>
          <p className="text-[#03271E]">Awau Omole</p>
          <p className="text-gray-700">Hospice and Beyond Palliative Care</p>
        </div>
      </section>

      {/* ✅ Our Mission (Image Left, Text Right) */}
      <section className="grid md:grid-cols-2 items-center gap-10 px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
          <Image
            src="/about1.png"
            alt="Mission Image"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-[#03271E] mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700">
            To bring exceptional comfort, dignity, and peace to every patient
            and family we serve. We exist to ensure that life’s final chapter is
            lived with grace — supported by compassionate professionals who
            understand that every moment matters.
          </p>
        </div>
      </section>

      {/* ✅ Our Vision (Text Left, Image Right) */}
      <section className="grid md:grid-cols-2 items-center gap-10 px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-semibold text-[#03271E] mb-6">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To be a guiding light of hope and healing in our communities —
            where every individual experiences compassionate care, emotional
            peace, and spiritual wholeness.
          </p>
        </div>
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden order-1 md:order-2">
          <Image
            src="/about2.png"
            alt="Vision Image"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ✅ Core Values & Dedication (Two Cards) */}
      <section className="py-20 px-6 md:px-12 bg-[#F9FAF9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Core Values Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Heart className="text-[#047857]" size={32} />
              <h3 className="text-2xl font-semibold text-[#03271E]">
                Our Core Values
              </h3>
            </div>
            <p className="text-gray-700 mb-3">
              <strong>Compassion | Dignity | Integrity | Family | Hope</strong>
            </p>
            <p className="text-gray-700">
              These are the principles that shape every decision, every visit,
              and every conversation at Hospice and Beyond.
            </p>
          </div>

          {/* Dedication Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Star className="text-[#FFD700]" size={32} />
              <h3 className="text-2xl font-semibold text-[#03271E]">
                Dedication
              </h3>
            </div>
            <p className="text-gray-700">
              Dedicated to families and caregivers who bring light to every
              moment. This honors your courage, love, and the sacred trust you
              place in us. May it comfort, guide, and empower you as we walk
              beside you in this journey of care.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Understanding Hospice Care (Now the last section) */}
      <section className="py-20 px-6 md:px-12 bg-[#F9FAF9]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#03271E] mb-6 text-center">
            Understanding Hospice Care
          </h2>
          <p className="text-gray-700 mb-4">
            Hospice care is about quality, not quantity, of life. It is
            compassionate support for people with life-limiting illness who
            choose comfort and peace rather than hospital-based treatments.
            Our care focuses on pain relief, symptom management, emotional
            balance, and spiritual wellness — helping each person live fully,
            surrounded by love.
          </p>

          <h3 className="text-2xl font-semibold text-[#03271E] mt-10 mb-4">
            Our Approach vs. Traditional Palliative Care
          </h3>
          <p className="text-gray-700 mb-4">
            While palliative care may begin at any stage of illness, hospice
            care begins when curative treatment is no longer effective and
            comfort becomes the focus. At Hospice and Beyond, this shift is
            embraced as a time for reflection, connection, and peace.
          </p>
          <p className="text-gray-700 mb-4">
            Our team — physician, nurse, hospice aide, social worker, chaplain,
            bereavement specialist, volunteers, and therapists — works together
            to design a personalized care plan honoring your story. Every voice
            matters — yours, your family’s, and your caregivers’.
          </p>

          <h3 className="text-2xl font-semibold text-[#03271E] mt-10 mb-4">
            Family Care is the Heart of Hospice
          </h3>
          <p className="text-gray-700 mb-4">
            Families are the cornerstone of care. We provide teaching, emotional
            support, and practical tools so loved ones can feel confident and
            capable. If caregiving isn’t possible, our social worker assists
            with arranging safe, affordable alternatives — always reviewing
            resources before any out-of-pocket expense.
          </p>

          <h3 className="text-2xl font-semibold text-[#03271E] mt-10 mb-4">
            Where We Serve You
          </h3>
          <p className="text-gray-700">
            Hospice and Beyond Palliative Care brings services to where you call
            home — your residence, assisted living community, or nursing
            facility. If symptoms cannot be managed at home, we coordinate
            short-term inpatient care or respite options to ensure safety and
            comfort.
          </p>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </main>
  );
}


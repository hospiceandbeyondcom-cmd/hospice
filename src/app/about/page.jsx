"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { Heart, Star, Compass, Handshake, Shield } from "lucide-react";

const PRIMARY_COLOR = "#03271E";
const SECONDARY_COLOR = "#047857";
const ACCENT_COLOR = "#FFD700";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 font-sans leading-relaxed antialiased">
      <Header />

      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden shadow-xl">
        <Image
          src="/heroabout.png"
          alt="Hospice and Beyond Hero"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6 py-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg max-w-4xl">
            Hospice and Beyond Palliative Care
          </h1>
          <p className="text-xl sm:text-2xl font-light italic max-w-3xl border-t-2 border-white/50 pt-2 mt-2">
            “A Legacy of Compassion – Honoring Every Life, Every Moment.”
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 items-center gap-10 px-6 md:px-12 py-24 max-w-7xl xl:max-w-8xl mx-auto border-b border-gray-100">
        <div className="relative h-[350px] sm:h-[450px] w-full rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
          <Image
            src="/about3.png"
            alt="Welcome Image"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#03271E] mb-6 border-b-2 border-[#047857]/50 pb-2">
            Welcome to Our Family
          </h2>
          <p className="text-gray-700 mb-6 text-lg font-medium italic">
            Dear Patient and Family,
          </p>
          <p className="text-gray-700 mb-4 text-base leading-relaxed">
            At Hospice and Beyond Palliative Care, our calling is more than
            medical — it’s deeply human. We exist to surround you with
            expertise, understanding, and presence. Hospice care is not about
            surrendering; it’s about cherishing what matters most — comfort,
            dignity, and connection.
          </p>
          <p className="text-gray-700 mb-4 text-base leading-relaxed">
            Together, we will design a care plan that reflects your personal
            wishes, values, and spiritual needs. This page introduces you to our
            services, our people, and the promises we make to you: that you’ll
            never be alone, that your comfort is our mission, and that your
            family will be supported every step of the way.
          </p>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            You can reach our team any time — day or night — 24/7 for comfort,
            guidance, and reassurance.
          </p>
          <div className="mt-8 pt-4 border-t border-gray-200">
            <p className="font-bold text-lg text-[#03271E]">
              With warm regard,
            </p>
            <p className="text-lg text-[#03271E]">Awau Omole</p>
            <p className="text-gray-600 text-sm">
              Hospice and Beyond Palliative Care
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#F9FAF9] py-20 px-6 md:px-12">
        <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto pb-20">
          <div className="relative h-[300px] sm:h-[400px] w-full rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/about1.png"
              alt="Mission Image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-4">
            <h2 className="text-3xl font-bold text-[#03271E] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg border-l-4 border-[#047857] pl-4 italic">
              "To bring exceptional comfort, dignity, and peace to every
              patient and family we serve. We exist to ensure that life’s final
              chapter is lived with grace — supported by compassionate
              professionals who understand that every moment matters."
            </p>
          </div>
        </section>

        <hr className="max-w-7xl mx-auto border-gray-300 my-8" />

        <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto pt-20">
          <div className="order-2 md:order-1 p-4">
            <h2 className="text-3xl font-bold text-[#03271E] mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg border-l-4 border-[#047857] pl-4 italic">
              "To be a guiding light of hope and healing in our communities —
              where every individual experiences compassionate care, emotional
              peace, and spiritual wholeness."
            </p>
          </div>
          <div className="relative h-[300px] sm:h-[400px] w-full rounded-xl shadow-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/about2.png"
              alt="Vision Image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>
      </div>

      <section className="py-24 px-6 md:px-12 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#03271E] mb-12">
          Our Foundation of Care
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-2xl rounded-3xl p-10 transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(4,120,87,0.15)] border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Compass className="text-[#047857]" size={36} strokeWidth={2.5} />
              <h3 className="text-2xl font-bold text-[#03271E]">
                Our Core Values
              </h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Our work is guided by five foundational values:
            </p>
            <ul className="space-y-2 pl-5 list-disc text-gray-700">
              <li className="font-semibold text-[#03271E]">
                Compassion: We lead with empathy, recognizing the sacredness of
                every life.
              </li>
              <li className="font-semibold text-[#03271E]">
                Dignity: We ensure respect and autonomy for the patient at all
                times.
              </li>
              <li className="font-semibold text-[#03271E]">
                Integrity: We operate with honesty and transparency in every
                action.
              </li>
              <li className="font-semibold text-[#03271E]">
                Family: We view the patient and their loved ones as a single unit
                of care.
              </li>
              <li className="font-semibold text-[#03271E]">
                Hope: We foster emotional and spiritual peace, not just medical
                comfort.
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-2xl rounded-3xl p-10 transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,215,0,0.15)] border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Star
                className="text-[#FFD700]"
                size={36}
                fill={ACCENT_COLOR}
                strokeWidth={0}
              />
              <h3 className="text-2xl font-bold text-[#03271E]">
                Our Dedication
              </h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              This service is wholeheartedly dedicated to the families and
              caregivers who bring light to every moment. We honor your courage,
              love, and the sacred trust you place in us. May our support
              comfort, guide, and empower you as we walk beside you in this
              journey of care. We are committed to supporting you both before
              and after the loss.
            </p>
            <div className="mt-6 flex items-center text-[#03271E]">
              <Heart className="mr-2 text-red-500" fill="currentColor" size={20} />
              <span className="font-semibold">Caring for the Caregiver</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-[#F9FAF9] border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#03271E] mb-12 text-center">
            Understanding Hospice Care
          </h2>

          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg border-l-4 border-[#047857]">
            <p className="text-gray-700 mb-4 text-lg italic font-medium">
              Hospice care is about quality, not quantity, of life. It is
              compassionate support for people with life-limiting illness who
              choose comfort and peace rather than aggressive treatments. Our
              care focuses on pain relief, symptom management, emotional balance,
              and spiritual wellness — helping each person live fully,
              surrounded by love.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#03271E] flex items-center mb-4">
                <Shield className="text-[#047857] mr-3" size={24} />
                Our Approach vs. Traditional Palliative Care
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                While palliative care may begin at any stage of illness, hospice
                care begins when curative treatment is no longer effective and
                comfort becomes the primary focus. At Hospice and Beyond, this
                shift is embraced as a time for reflection, connection, and
                peace. Our dedicated team of physician, nurse, social worker,
                chaplain, and specialists works together to design a personalized
                care plan honoring your unique story and wishes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#03271E] flex items-center mb-4">
                <Handshake className="text-[#047857] mr-3" size={24} />
                Family Care is the Heart of Hospice
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Families are the cornerstone of care. We provide teaching,
                emotional support, and practical tools so loved ones can feel
                confident and capable in their role. If caregiving isn’t
                possible, our social worker assists with arranging safe,
                affordable alternatives, always reviewing resources before any
                out-of-pocket expense is incurred.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#03271E] flex items-center mb-4">
                <Star className="text-[#FFD700] mr-3" size={24} fill={ACCENT_COLOR} />
                Where We Serve You
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Hospice and Beyond Palliative Care brings services to where you
                call home — your residence, assisted living community, or nursing
                facility. If symptoms cannot be managed at home, we coordinate
                short-term inpatient care or respite options to ensure continuous
                safety and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#03271E] text-white py-16 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Find Comfort?
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            Contact our compassionate team today to discuss eligibility,
            services, and how we can bring peace and support to your family. We
            are here 24/7.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#047857] hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-xl border-2 border-white"
          >
            Start the Conversation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

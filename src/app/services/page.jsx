"use client";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
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
            Hospice Care
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
            Compassionate, patient centered hospice care designed to honor every
            life with dignity, peace, and comfort.
          </p>
        </div>
      </section>

      {/* ===== Intro Section ===== */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At <strong>Hospice and Beyond Palliative Care LLC</strong>, our hospice
          services provide compassionate support for patients facing life limiting
          illness and their loved ones. We focus on comfort, dignity, and peace,
          ensuring that every day is lived meaningfully, surrounded by care and love.
        </p>
      </section>

      {/* ===== Hospice Care Overview ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-[#F9FAF9] rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-[350px] w-full">
            <Image
              src="/hospice.png"
              alt="Hospice Care Overview"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-[#03271E] mb-4">
              What Hospice Care Means
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hospice care is specialized support that focuses on comfort rather
              than cure, honoring the physical, emotional, and spiritual needs of
              individuals at the final stage of life. It is about living fully and
              peacefully, surrounded by a circle of love and understanding.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our interdisciplinary team of nurses, physicians, chaplains,
              social workers, and volunteers works together to bring comfort to
              both patients and families. We bring care wherever you call home,
              because every moment deserves compassion.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Recognizing When Hospice Care May Be Needed ===== */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#F9FAF9] to-[#E8F5F2]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#03271E] mb-6">
            Recognizing When Hospice Care May Be Needed
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            We provide caring in-home assessments to help you decide if hospice care
            is the right choice for yourself or someone you care about. Please contact
            us if you observe any of the following signs:
          </p>

          <ul className="text-left text-gray-800 bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-3xl mx-auto space-y-4 leading-relaxed">
            <li>• Repeated hospital stays or visits to the emergency room</li>
            <li>• Persistent or recurring infections</li>
            <li>• Difficulty or noticeable decline in managing everyday tasks</li>
            <li>• Multiple long-term health conditions</li>
            <li>• Unexpected weight loss or significant changes in weight</li>
            <li>• More frequent falls or decreased ability to move around</li>
            <li>• Changes or drops in oxygen levels</li>
          </ul>

          <div className="mt-10">
            <Link
              href="/hospice-eligibility-questionnaire"
              className="inline-block bg-[#047857] hover:bg-[#065f46] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Take the Hospice Eligibility Questionnaire
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Four Types of Hospice Care ===== */}
      <section className="bg-[#F9FAF9] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#03271E] mb-10">
            The Four Levels of Hospice Care
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16">
            Hospice and Beyond provides four levels of hospice care, ensuring
            every patient receives the right level of comfort and support based
            on their unique needs.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Routine Home Care */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#047857] mb-3">
                1. Routine Home Care
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The most common level of hospice care, provided wherever you call
                home, whether that is a private residence, nursing facility, or
                assisted living community. Our team visits regularly to manage
                symptoms, monitor comfort, and provide emotional and spiritual
                support.
              </p>
            </div>

            {/* Continuous Home Care */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#047857] mb-3">
                2. Continuous Home Care
              </h3>
              <p className="text-gray-700 leading-relaxed">
                For times of medical crisis when symptoms become difficult to
                manage, continuous home care offers round-the-clock nursing
                support at home. Our skilled professionals remain by your side,
                ensuring relief, comfort, and safety.
              </p>
            </div>

            {/* General Inpatient Care */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#047857] mb-3">
                3. General Inpatient Care
              </h3>
              <p className="text-gray-700 leading-relaxed">
                When pain or symptoms cannot be managed at home, we provide
                inpatient care in a hospital or hospice facility. This temporary
                level ensures close medical attention until the patient’s
                comfort is restored and home care can safely continue.
              </p>
            </div>

            {/* Respite Care */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#047857] mb-3">
                4. Respite Care
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Short-term inpatient care that provides temporary relief for
                family caregivers. It allows loved ones to rest, recharge, and
                focus on their own well-being while knowing their family member
                is receiving exceptional care and attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Call to Action ===== */}
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
              Whether you are seeking guidance, emotional support, or hospice
              planning for a loved one, our compassionate team is ready to help
              day or night.
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

      <Footer />
    </main>
  );
}

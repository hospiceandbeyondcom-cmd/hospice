"use client";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#03271E] mb-10">
          Why Choose Hospice and Beyond
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-16">
          Choosing end-of-life care is a sacred decision. Here’s why countless families trust us to walk that journey with them.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#F9FAF9] rounded-2xl shadow-md p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-[#047857] mb-3">
              Compassion at the Core
            </h3>
            <p className="text-gray-700">
              Every service we offer begins with empathy. Our team listens deeply, ensuring care is always human and heartfelt.
            </p>
          </div>

          <div className="bg-[#F9FAF9] rounded-2xl shadow-md p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-[#047857] mb-3">
              Family-Focused Support
            </h3>
            <p className="text-gray-700">
              We care for the family as much as the patient — providing counseling, comfort, and connection throughout the journey.
            </p>
          </div>

          <div className="bg-[#F9FAF9] rounded-2xl shadow-md p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-[#047857] mb-3">
              Faith & Dignity
            </h3>
            <p className="text-gray-700">
              We respect every spiritual path and honor each person’s story with grace, privacy, and dignity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

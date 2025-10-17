"use client";

export default function HowItWorks() {
  return (
    <section className="bg-[#F9FAF9] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#03271E] mb-10">
          How Our Care Works
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-16">
          At Hospice and Beyond, we’ve simplified compassionate care into a
          clear, supportive process that guides you from the first call to
          complete peace of mind.
        </p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-[#047857] text-4xl font-bold mb-3">1</div>
            <h3 className="text-2xl font-semibold text-[#03271E] mb-3">
              Connect
            </h3>
            <p className="text-gray-700">
              Reach out to our care team — by phone, email, or online — to share
              your needs and get guidance within minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-[#047857] text-4xl font-bold mb-3">2</div>
            <h3 className="text-2xl font-semibold text-[#03271E] mb-3">
              Assessment
            </h3>
            <p className="text-gray-700">
              A nurse or care coordinator meets you to understand your goals,
              symptoms, and family preferences — creating a care plan tailored
              to you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-[#047857] text-4xl font-bold mb-3">3</div>
            <h3 className="text-2xl font-semibold text-[#03271E] mb-3">
              Personalized Care
            </h3>
            <p className="text-gray-700">
              We provide ongoing medical, emotional, and spiritual support at
              home — ensuring dignity, comfort, and presence every day.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-[#047857] text-4xl font-bold mb-3">4</div>
            <h3 className="text-2xl font-semibold text-[#03271E] mb-3">
              Continued Support
            </h3>
            <p className="text-gray-700">
              Even beyond care, we stand beside families with grief support,
              counseling, and meaningful remembrance services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

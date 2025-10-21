"use client";

export default function OurCareJourney() {
  return (
    <section className="bg-[#03271E] py-20 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-[#FFD700]">
          Our Care Journey
        </h2>
        <p className="text-gray-200 max-w-3xl mx-auto mb-16">
          Every journey we walk with our patients and families is guided by one
          purpose — to bring light, peace, and dignity to every moment.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white/10 rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition">
            <h3 className="text-2xl font-semibold text-[#FFD700] mb-3">
              Listening
            </h3>
            <p>
              It starts with listening — to fears, to hopes, to the simple
              truths that define what truly matters most.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition">
            <h3 className="text-2xl font-semibold text-[#FFD700] mb-3">
              Guiding
            </h3>
            <p>
              We guide each family through care transitions, offering wisdom,
              clarity, and support that feels personal and steady.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition">
            <h3 className="text-2xl font-semibold text-[#FFD700] mb-3">
              Honoring
            </h3>
            <p>
              We honor life — every story, every smile, every goodbye — with
              compassion that continues beyond the moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

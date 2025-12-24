import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn"; 

/** * SEO CONFIGURATION
 * Title: Small Moments, Big Memories: Holiday Traditions in Hospice Care
 * Description: Discover how to adapt holiday traditions during hospice care. Focus on legacy, connection, and the beauty of small, meaningful moments.
 */

export const metadata = {
  title: "Small Moments, Big Memories: Holiday Traditions in Hospice | Hospice & Beyond",
  description: "Discover how to adapt holiday traditions during hospice care. Focus on legacy, connection, and the beauty of small, meaningful moments.",
  openGraph: {
    title: "Small Moments, Big Memories: Holiday Traditions in Hospice Care",
    description: "Honoring traditions and creating lasting memories during the holidays.",
    images: [
      {
        url: "/blog55.png",
        width: 1200,
        height: 630,
        alt: "Holiday Traditions in Hospice Care",
      },
    ],
  },
  keywords: [
    "hospice holiday traditions",
    "celebrating holidays in hospice",
    "end of life legacy ideas",
    "hospice christmas ideas",
    "meaningful holiday moments",
    "adapting traditions for illness",
    "hospice family support",
    "creating memories end of life",
    "hospice and beyond holidays",
    "holiday grief support"
  ],
};

export default function HolidayTraditionsBlog() {
  return (
    <div className="min-h-screen flex flex-col bg-white"> {/* Updated to White Background */}
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-[#F9F6F0] border-b border-[#012419]/5">
        <div className="w-full md:w-1/2 px-6 py-12 md:p-20 text-center md:text-left">
          <FadeIn>
            <h1
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[#012419]"
            >
              Small Moments, <br />
              <span className="font-light italic text-[#7D5F42]">Big Memories</span>
            </h1>
            <p className="text-[#012419] text-xl font-medium tracking-wide">
              Holiday traditions you can still enjoy during the hospice journey.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 h-[35vh] md:h-[70vh] relative">
          <Image
            src="/blog55.png" 
            alt="Warm holiday candle and soft decorations"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* ===== Main Article Content ===== */}
      <main className="max-w-4xl mx-auto px-6 md:px-10 py-20 bg-white">
        
        <FadeIn>
          <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-3xl shadow-sm border border-[#E1C16E]/20 mb-12">
            <p className="text-xl leading-relaxed mb-8 text-justify font-serif italic text-[#7D5F42] border-l-4 border-[#012419] pl-6">
              The holidays often carry a heavy weight when a loved one is in hospice care. We worry that the joy of the season is out of reach, or that traditions are a thing of the past.
            </p>
            <p className="text-lg leading-relaxed mb-0 text-[#012419] text-justify">
              At Hospice & Beyond, we believe that the holidays aren't about the grand gestures or the elaborate parties they are about the sacred thread of connection. While the "how" of your traditions may change, the "why" remains the same. By scaling down the physical demands and scaling up the emotional presence, families can discover that the smallest moments often create the biggest memories.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Refining the Tradition</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Hospice care is about meeting a person where they are. If a five course holiday dinner is too taxing, consider a "tasting menu" of favorite treats by the bedside. Traditions are flexible vessels; they can be poured into smaller containers without losing their essence. 
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify font-light">
              Instead of traveling to see lights, bring the glow to the room. Use warm LED candles or a small, decorated tabletop tree. The goal is to stimulate the senses the smell of cinnamon, the sound of a favorite hymn, or the soft texture of a holiday blanket to bring the spirit of the season into the space of rest.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mb-16 bg-[#012419] text-white p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-[#E1C16E]">The Gift of Legacy</h2>
            <p className="text-lg leading-relaxed mb-6 text-justify opacity-90">
              One of the most powerful traditions to embrace in hospice is the "Legacy of Story." Use this time to record favorite holiday memories. Ask about the best gift they ever received, or the funniest thing that happened during a past celebration. 
            </p>
            <p className="text-lg leading-relaxed text-justify opacity-90">
              These recordings or written notes become priceless heirlooms. They shift the focus from the grief of the present to the celebration of a life well lived. This tradition doesn't require physical strength only the willingness to listen and the heart to remember.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">The Presence over Presents</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              In the final stages of life, the clutter of material gifts often fades away, leaving behind the pure gold of presence. A "tradition" can simply be an afternoon of reading holiday stories aloud or watching a classic film together, even if the loved one is drifting in and out of sleep.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify">
              Remember that it is okay to feel a mix of joy and sadness. Celebrating in hospice isn't about ignoring the reality of the situation; it's about honoring the love that exists within that reality. Your presence in the room is the greatest gift ever given.
            </p>
          </div>
        </FadeIn>

        {/* ===== FAQ SECTION ===== */}
        <section className="my-20 bg-[#F9F6F0] p-10 rounded-3xl border border-[#E1C16E]/30">
          <h2 className="text-3xl font-bold mb-10 text-[#012419] text-center uppercase tracking-widest">Holiday Guidance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">How do we handle guests?</h3>
              <p className="text-[#012419] leading-relaxed">Limit visitors to small groups and short durations. Prioritize quiet, one-on-one time to prevent your loved one from becoming overstimulated or fatigued.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">What if we don't feel like celebrating?</h3>
              <p className="text-[#012419] leading-relaxed">That is perfectly okay. Traditions should serve you, not pressure you. Sometimes the best tradition is simply a quiet day of shared peace and reflection.</p>
            </div>
          </div>
        </section>

        <FadeIn delay={0.5}>
          <div className="text-center bg-[#012419] p-12 rounded-[3rem]">
            <p className="text-2xl font-serif italic text-[#E1C16E] mb-4">"The holidays are not found in the bustle, but in the breath we share with those we love."</p>
            <div className="w-24 h-1 bg-[#E1C16E] mx-auto mt-6"></div>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn"; 

/** * SEO CONFIGURATION
 * Title: Managing Swelling (Edema) in Hospice Patients | Hospice & Beyond
 * Description: A comprehensive guide to understanding and managing edema in hospice. Learn why comfort first care is the priority for fluid retention.
 */

export const metadata = {
  title: "Managing Swelling (Edema) in Hospice Patients | Hospice & Beyond",
  description: "A comprehensive guide to understanding and managing edema in hospice. Learn why comfort first care is the priority for fluid retention.",
  openGraph: {
    title: "Managing Swelling (Edema) in Hospice Patients",
    description: "Expert guidance on providing comfort for swelling at the end of life.",
    images: [
      {
        url: "/blog56.png",
        width: 1200,
        height: 630,
        alt: "Managing Edema in Hospice Care",
      },
    ],
  },
  keywords: [
    "hospice edema care",
    "swelling at end of life",
    "managing fluid retention",
    "terminal edema symptoms",
    "hospice comfort measures",
    "swollen feet hospice",
    "caregiver guide edema",
    "skin integrity hospice",
    "palliative care swelling",
    "Hospice & Beyond edema"
  ],
};

export default function EdemaManagementBlog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white border-b border-[#012419]/5">
        <div className="w-full md:w-1/2 px-6 py-12 md:p-20 text-center md:text-left">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[#012419]">
              Managing <br />
              <span className="font-light italic text-[#7D5F42]">Swelling (Edema)</span>
            </h1>
            <p className="text-[#7D5F42] text-xl font-medium tracking-wide">
              Prioritizing sensory comfort and dignity in fluid management.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 h-[35vh] md:h-[70vh] relative">
          <Image
            src="/blog56.png" 
            alt="Gentle hospice care and comfort"
            fill
            priority
            className="object-cover transition-opacity duration-700"
          />
        </div>
      </section>

      {/* ===== Main Article Content ===== */}
      <main className="max-w-4xl mx-auto px-6 md:px-10 py-20 bg-white">
        
        <FadeIn>
          <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-3xl shadow-sm border border-[#E1C16E]/30 mb-12">
            <p className="text-xl leading-relaxed mb-8 text-justify font-serif italic text-[#7D5F42] border-l-4 border-[#012419] pl-6">
              When a loved one experiences swelling, it can be one of the most visually distressing changes for a family. However, in the sacred space of hospice, we view edema not as a crisis to be solved, but as a symptom to be comforted.
            </p>
            <p className="text-lg leading-relaxed mb-0 text-[#012419] text-justify">
              At Hospice & Beyond, we believe that education is the antidote to fear. Edema the medical term for fluid retention is a frequent companion during the body&apos;s natural slowing down. As the heart and kidneys begin their final retreat, the body&apos;s ability to circulate and process fluids changes. Understanding the biological &quot;why&quot; allows us to shift our focus from clinical intervention to deep, soul centered care.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">The Biological Shift</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              In the final stages of life, the heart doesn&apos;t pump with the same vigor it once did. Gravity begins to play a larger role, causing fluid to settle in the feet, legs, and hands. While this can look uncomfortable, it is often a silent symptom. Because the swelling usually happens slowly, the body adapts, and the patient rarely feels acute pain from the fluid itself.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify font-light">
              Our clinical priority is ensuring that the skin the envelope of the soul remains protected. When swelling occurs, the skin can become thin and fragile. We treat this with the highest level of reverence, using premium emollients to maintain elasticity and prevent any discomfort from tension.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mb-16 bg-[#012419] text-white p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-[#E1C16E]">Comfort First Management</h2>
            <p className="text-lg leading-relaxed mb-6 text-justify opacity-90">
              In traditional medicine, edema is often treated with aggressive diuretics to &quot;flush&quot; the system. In hospice, we pivot. Aggressive fluid removal can lead to dehydration, extreme thirst, and kidney strain all of which decrease the quality of life. 
            </p>
            <p className="text-lg leading-relaxed text-justify opacity-90">
              Instead, we use gentle elevation. By propping the limbs with soft, silk like pillows, we allow gravity to assist the body without the stress of medication. We emphasize &quot;being&quot; over &quot;doing,&quot; ensuring that every movement is intentional and every touch is soft.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Knowing When to Act</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              The primary indicator for medical intervention in edema is the ease of breath. If the swelling begins to impact the patient&apos;s ability to breathe comfortably, our medical team steps in with precision. Otherwise, if the patient is resting peacefully and their skin is intact, we allow the body to remain in its state of quietude.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify">
              We encourage families to focus on the connection rather than the clinical observation. Hold their hand, share a story, and trust that the care plan is designed to preserve their dignity above all else.
            </p>
          </div>
        </FadeIn>

        {/* ===== FAQ SECTION ===== */}
        <section className="my-20 bg-white p-10 rounded-3xl border border-[#E1C16E]/30 shadow-sm">
          <h2 className="text-3xl font-bold mb-10 text-[#012419] text-center uppercase tracking-widest">Guidance for Families</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">Is massage helpful?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Vigorous massage should be avoided as it can damage fragile skin. However, very light, feather like strokes towards the heart can be soothing and promote comfort.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">When should I call the nurse?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Call us if you notice the skin looks shiny or &quot;weeps&quot; (leaks fluid), if the swelling is sudden, or if there is any change in their breathing patterns.</p>
            </div>
          </div>
        </section>

        <FadeIn delay={0.5}>
          <div className="text-center bg-[#012419] p-12 rounded-[3rem]">
            <p className="text-2xl font-serif italic text-[#E1C16E] mb-4">&quot;Comfort is not the absence of symptoms, but the presence of peace within them.&quot;</p>
            <div className="w-24 h-1 bg-[#E1C16E] mx-auto mt-6"></div>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}

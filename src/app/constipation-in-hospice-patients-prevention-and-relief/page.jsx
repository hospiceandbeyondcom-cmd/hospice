import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn"; 

/** * SEO CONFIGURATION
 * Title: Constipation in Hospice Patients: Prevention & Relief | Hospice & Beyond
 * Description: A gentle guide for managing constipation in hospice care. Learn about prevention, comfort focused relief, and supporting your loved one.
 */

export const metadata = {
  title: "Constipation in Hospice Patients: Prevention & Relief | Hospice & Beyond",
  description: "A gentle guide for managing constipation in hospice care. Learn about prevention, comfort focused relief, and supporting your loved one.",
  openGraph: {
    title: "Constipation in Hospice Patients: Prevention and Relief",
    description: "Prioritizing comfort and dignity while managing digestive health in hospice.",
    images: [
      {
        url: "/blog57.png",
        width: 1200,
        height: 630,
        alt: "Managing Comfort in Hospice Care",
      },
    ],
  },
  keywords: [
    "hospice constipation relief",
    "end of life digestive health",
    "managing constipation in elderly",
    "hospice comfort measures",
    "opioid induced constipation hospice",
    "caregiver guide constipation",
    "palliative care bowel management",
    "preventing constipation in hospice",
    "Hospice & Beyond",
    "terminal illness comfort"
  ],
};

export default function ConstipationManagementBlog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white border-b border-[#012419]/5">
        <div className="w-full md:w-1/2 px-6 py-12 md:p-20 text-center md:text-left">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[#012419]">
              Managing <br />
              <span className="font-light italic text-[#7D5F42]">Constipation</span>
            </h1>
            <p className="text-[#7D5F42] text-xl font-medium tracking-wide">
              Restoring ease and dignity through gentle prevention and relief.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 h-[35vh] md:h-[70vh] relative">
          <Image
            src="/blog57.png" 
            alt="Gentle and supportive hospice care"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* ===== Main Article Content ===== */}
      <main className="max-w-4xl mx-auto px-6 md:px-10 py-20 bg-white">
        
        <FadeIn>
          <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-3xl shadow-sm border border-[#E1C16E]/30 mb-12">
            <p className="text-xl leading-relaxed mb-8 text-justify font-serif italic text-[#7D5F42] border-l-4 border-[#012419] pl-6">
              In hospice care, comfort is our primary language. While constipation is a common challenge, it is one that we can manage with proactive, gentle care.
            </p>
            <p className="text-lg leading-relaxed mb-0 text-[#012419] text-justify">
              At Hospice & Beyond, we understand that physical discomfort can interrupt the peace of the final journey. Constipation in hospice is often caused by a combination of reduced mobility, decreased fluid intake, and the very medications that keep pain at bay. Our goal is to prevent the crisis of discomfort by creating a consistent, gentle routine that prioritizes the patient’s dignity and ease.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Understanding the Causes</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              It is helpful to know that most pain medications (opioids) naturally slow down the digestive system. When the body is resting more and moving less, the muscles in the digestive tract also slow their pace. This is a common side effect of providing a pain free environment.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify font-light">
              Because the body is focusing its energy on the heart and spirit, digestion takes a backseat. Our role is to provide the support the body needs to stay comfortable without causing unnecessary stress or exertion for the patient.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mb-16 bg-[#012419] text-white p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-[#E1C16E]">The Comfort Protocol</h2>
            <p className="text-lg leading-relaxed mb-6 text-justify opacity-90">
              Prevention is the most loving approach. We advocate for a mush and push strategy ensuring that stool softeners and gentle stimulants are used consistently rather than waiting for discomfort to arise. 
            </p>
            <p className="text-lg leading-relaxed text-justify opacity-90">
              Hydration, even in small sips or ice chips, remains vital. If the patient is still eating, soft foods and natural juices like prune or pear can provide gentle assistance. We prioritize the least invasive methods first, always honoring the patient&apos;s personal space and comfort levels.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Dignity in Daily Care</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Managing bowel movements is a deeply personal part of care. We encourage families to maintain a calm, private environment. Simple things like a warm compress on the abdomen or gentle repositioning can stimulate the body naturally.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify">
              The focus is never just on the clinical outcome it is on the person. By staying ahead of constipation, we remove a layer of restlessness, allowing the patient to remain focused on what matters most their family, their memories, and their peace.
            </p>
          </div>
        </FadeIn>

        {/* ===== FAQ SECTION ===== */}
        <section className="my-20 bg-white p-10 rounded-3xl border border-[#E1C16E]/30 shadow-sm">
          <h2 className="text-3xl font-bold mb-10 text-[#012419] text-center uppercase tracking-widest">Caregiver Guidance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">How often should a movement happen?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">In hospice, every 2 3 days is a common goal, but the true measure is the patient&apos;s comfort. If they aren&apos;t in pain or distressed, we don&apos;t rush the body.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">When do we call the nurse?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Reach out if you notice abdominal hardness, pain, nausea, or if it has been more than three days without a movement.</p>
            </div>
          </div>
        </section>

        <FadeIn delay={0.5}>
          <div className="text-center bg-[#012419] p-12 rounded-[3rem]">
            <p className="text-2xl font-serif italic text-[#E1C16E] mb-4">&quot;By easing the burdens of the body, we create space for the peace of the soul.&quot;</p>
            <div className="w-24 h-1 bg-[#E1C16E] mx-auto mt-6"></div>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}

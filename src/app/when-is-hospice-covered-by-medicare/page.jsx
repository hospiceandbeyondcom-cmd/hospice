import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn"; 

/** * SEO CONFIGURATION
 * Title: When Is Hospice Covered by Medicare? Qualifications and Costs | Hospice & Beyond
 * Description: Understand the specific requirements for Medicare hospice coverage. Learn about eligibility, covered services, and how to access care without financial stress.
 */

export const metadata = {
  title: "When Is Hospice Covered by Medicare? Qualifications and Costs | Hospice & Beyond",
  description: "Understand the specific requirements for Medicare hospice coverage. Learn about eligibility, covered services, and how to access care without financial stress.",
  openGraph: {
    title: "When Is Hospice Covered by Medicare?",
    description: "A guide to Medicare hospice benefits and eligibility rules for families and patients.",
    images: [
      {
        url: "/blog68.png",
        width: 1200,
        height: 630,
        alt: "Medicare coverage for hospice care",
      },
    ],
  },
  keywords: [
    "Medicare hospice coverage",
    "hospice eligibility",
    "Medicare Part A hospice",
    "paying for hospice",
    "hospice benefit periods",
    "terminal illness care",
    "Hospice & Beyond",
    "Medicare costs"
  ],
};

export default function MedicareHospiceBlog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white border-b border-[#012419]/5">
        <div className="w-full md:w-1/2 px-6 py-12 md:p-20 text-center md:text-left">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[#012419]">
              Medicare <br />
              <span className="font-light italic text-[#7D5F42]">Hospice Coverage</span>
            </h1>
            <p className="text-[#7D5F42] text-xl font-medium tracking-wide">
              Understanding how and when your benefits cover end of life care.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 h-[35vh] md:h-[70vh] relative">
          <Image
            src="/blog68.png" 
            alt="An elderly person discussing medical benefits"
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
              Medicare provides a robust benefit for hospice care. It is designed to ensure that patients receive comfort and dignity without heavy financial burdens.
            </p>
            <p className="text-lg leading-relaxed mb-0 text-[#012419] text-justify">
              At Hospice & Beyond, we help families navigate the complexities of Medicare. Most people pay nearly nothing for hospice services. Medicare Part A covers the costs of the hospice team, medical supplies, and equipment related to the terminal illness. Knowing when you qualify is the first step toward peace of mind during a difficult time.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Meeting Eligibility Rules</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              To use the Medicare hospice benefit, certain criteria must be met. A person must be enrolled in Medicare Part A. A doctor and the hospice medical director must certify that the patient has a terminal illness. This means the life expectancy is six months or less if the illness runs its normal course. 
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify font-light">
              The patient must also choose palliative care over curative care. This means the focus shifts from curing the disease to managing pain and symptoms. You must sign a statement choosing the hospice benefit instead of other Medicare covered benefits for the terminal illness.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mb-16 bg-[#012419] text-white p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-[#E1C16E]">What Medicare Covers</h2>
            <p className="text-lg leading-relaxed mb-6 text-justify opacity-90">
              The coverage is very broad. It includes nursing care and social services. It covers physical therapy and dietary counseling. You will receive medications for pain relief and symptom management at little to no cost. 
            </p>
            <p className="text-lg leading-relaxed text-justify opacity-90">
              Medical equipment like hospital beds or wheelchairs is included. Supplies such as bandages and catheters are also covered. Even spiritual care and grief support for the family are parts of the benefit. Medicare aims to support the whole person and their loved ones through this journey.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Benefit Periods</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Hospice care is provided in periods. The first two periods last ninety days each. After that, there are unlimited sixty day periods. At the start of each period, a doctor must certify the terminal illness again. This allows care to continue as long as the patient remains eligible.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify">
              If a patient lives longer than six months, they do not lose coverage. As long as the medical director confirms the terminal prognosis, Medicare continues to pay for care. This flexibility ensures that support remains available for as long as it is truly needed.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Potential Out of Pocket Costs</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              While coverage is extensive, some small costs may exist. There might be a copayment for outpatient prescription drugs used for pain. This amount is usually very small. There might also be a small payment for inpatient respite care. Medicare does not cover room and board if you live in a nursing home or assisted living facility while on hospice.
            </p>
          </div>
        </FadeIn>

        {/* ===== FAQ SECTION ===== */}
        <section className="my-20 bg-white p-10 rounded-3xl border border-[#E1C16E]/30 shadow-sm">
          <h2 className="text-3xl font-bold mb-10 text-[#012419] text-center uppercase tracking-widest">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">Is hospice free with Medicare?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Most services are covered at one hundred percent. Patients rarely pay more than a few dollars for certain medications.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">Can I keep my regular doctor?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Yes. You can choose your attending physician to work with the hospice team to manage your care.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">Does Medicare pay for a caregiver?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Medicare covers the hospice team visits, but it does not pay for a full time person to live in the home.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">What if I change my mind?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">You can stop hospice at any time. You can return to regular Medicare coverage for curative treatments whenever you wish.</p>
            </div>
          </div>
        </section>

        <FadeIn delay={0.5}>
          <div className="text-center bg-[#012419] p-12 rounded-[3rem]">
            <p className="text-2xl font-serif italic text-[#E1C16E] mb-4">&quot;Financial concerns should never stand in the way of compassionate care.&quot;</p>
            <div className="w-24 h-1 bg-[#E1C16E] mx-auto mt-6"></div>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}
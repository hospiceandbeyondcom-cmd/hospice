import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn"; 

/** * SEO CONFIGURATION
 * Title: Hospice Care and Medicaid: What Families Should Know | Hospice & Beyond
 * Description: Understanding the Medicaid hospice benefit for families. Learn about eligibility, covered services, and how Medicaid supports patients in nursing facilities.
 */

export const metadata = {
  title: "Hospice Care and Medicaid: What Families Should Know | Hospice & Beyond",
  description: "Understanding the Medicaid hospice benefit for families. Learn about eligibility, covered services, and how Medicaid supports patients in nursing facilities.",
  openGraph: {
    title: "Hospice Care and Medicaid: What Families Should Know",
    description: "A guide for families to understand Medicaid hospice coverage, room and board, and eligibility requirements.",
    images: [
      {
        url: "/blog69.png",
        width: 1200,
        height: 630,
        alt: "Family discussing healthcare options",
      },
    ],
  },
  keywords: [
    "hospice care and Medicaid",
    "Medicaid hospice benefit",
    "Medicaid hospice eligibility",
    "hospice nursing home coverage",
    "Medicaid room and board",
    "end of life care Medicaid",
    "Hospice & Beyond",
    "Medicaid hospice services"
  ],
};

export default function MedicaidHospiceBlog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white border-b border-[#012419]/5">
        <div className="w-full md:w-1/2 px-6 py-12 md:p-20 text-center md:text-left">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[#012419]">
              Hospice Care <br />
              <span className="font-light italic text-[#7D5F42]">and Medicaid</span>
            </h1>
            <p className="text-[#7D5F42] text-xl font-medium tracking-wide">
              What Families Should Know
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 h-[35vh] md:h-[70vh] relative">
          <Image
            src="/blog69.png" 
            alt="Family members consulting about medical care"
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
              Medicaid provides essential support for end of life care. It ensures that every person can access comfort and dignity regardless of their financial situation.
            </p>
            <p className="text-lg leading-relaxed mb-0 text-[#012419] text-justify">
              At Hospice & Beyond, we help families navigate the bridge between healthcare needs and financial resources. Medicaid is a vital program that covers the full range of hospice services for those who meet the eligibility rules. While many people associate hospice with Medicare, the Medicaid benefit is equally comprehensive and often provides additional support for those living in nursing facilities.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Qualifying for Coverage</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Eligibility for Medicaid hospice care generally follows the same medical guidelines as Medicare. A physician must certify that the patient has a terminal illness. This means the life expectancy is six months or less if the illness runs its natural course. The patient must also choose comfort care over curative treatments.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify font-light">
              Beyond the medical requirement, a patient must meet the financial criteria set by their state Medicaid program. This usually involves a review of income and assets. If a patient is not already enrolled in Medicaid, our team can help explain the process for applying so that care can begin as soon as possible.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mb-16 bg-[#012419] text-white p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-[#E1C16E]">Room and Board Support</h2>
            <p className="text-lg leading-relaxed mb-6 text-justify opacity-90">
              One of the most important things for families to know is that Medicaid can help with facility costs. Medicare covers the hospice medical team, but it does not pay for room and board in a nursing home. For many families, this is a significant financial burden.
            </p>
            <p className="text-lg leading-relaxed text-justify opacity-90">
              If a patient has Medicaid, the state program may cover the cost of staying in the nursing facility while the hospice team provides specialized care. This allows a patient to stay in a familiar setting with round the clock support without the family facing high monthly bills for the facility stay.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Services Included</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              The Medicaid hospice benefit is designed to be all inclusive for needs related to the terminal illness. This includes visits from registered nurses, medical social workers, and certified nursing assistants. It also covers medical equipment such as hospital beds, wheelchairs, and oxygen supplies.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify">
              All medications for pain and symptom management are covered. Furthermore, families receive support through spiritual counseling and bereavement services. Medicaid ensures that the physical, emotional, and spiritual aspects of care are addressed for both the patient and their loved ones.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">State Differences</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Because Medicaid is managed by each state, some details may vary depending on where you live. Some states have different rules for how they handle income limits or specific services like physical therapy. However, the core hospice benefit remains a mandatory or highly prioritized option in nearly every state plan.
            </p>
          </div>
        </FadeIn>

        {/* ===== FAQ SECTION ===== */}
        <section className="my-20 bg-white p-10 rounded-3xl border border-[#E1C16E]/30 shadow-sm">
          <h2 className="text-3xl font-bold mb-10 text-[#012419] text-center uppercase tracking-widest">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">Can I have both Medicare and Medicaid?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Yes. People with both are often called dual eligible. Medicare usually pays for the hospice care, while Medicaid may help with other costs like facility room and board.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">Does Medicaid cover home care?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Yes. You can receive the Medicaid hospice benefit in your private home, an assisted living facility, or a nursing home.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">Are there any copays?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Under Medicaid, there are typically no out of pocket costs for hospice services or medications related to the terminal illness.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">What about respite care?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Medicaid covers short term respite care to allow family caregivers to take a rest while the patient is cared for in a facility for a few days.</p>
            </div>
          </div>
        </section>

        <FadeIn delay={0.5}>
          <div className="text-center bg-[#012419] p-12 rounded-[3rem]">
            <p className="text-2xl font-serif italic text-[#E1C16E] mb-4">&quot;Compassion should have no price tag, and Medicaid ensures care is available to all.&quot;</p>
            <div className="w-24 h-1 bg-[#E1C16E] mx-auto mt-6"></div>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}
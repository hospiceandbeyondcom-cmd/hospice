import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn";

/** * SEO CONFIGURATION
 * Title: Hospice Admission Process Step by Step | Hospice & Beyond
 * Description: Understand the journey into hospice care. From the initial referral to the first clinical visit, learn what to expect during the admission process.
 */

export const metadata = {
  title: "Hospice Admission Process Step by Step | Hospice & Beyond",
  description: "Understand the journey into hospice care. From the initial referral to the first clinical visit, learn what to expect during the admission process.",
  openGraph: {
    title: "Hospice Admission Process Step by Step",
    description: "A clear guide to the hospice intake journey, helping families navigate the clinical and administrative steps with ease.",
    images: [
      {
        url: "/blog79.png",
        width: 1200,
        height: 630,
        alt: "A healthcare professional explaining the intake paperwork to a family",
      },
    ],
  },
  keywords: [
    "hospice admission process",
    "hospice intake steps",
    "how to start hospice",
    "hospice referral process",
    "hospice evaluation visit",
    "signing up for hospice",
    "Hospice & Beyond",
    "end of life care transition"
  ],
};

export default function HospiceAdmissionProcessBlog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white border-b border-[#012419]/5">
        <div className="w-full md:w-1/2 px-6 py-12 md:p-20 text-center md:text-left">
          <FadeIn>
            <p className="text-[#7D5F42] font-bold tracking-widest uppercase mb-4 text-sm">Published January 17, 2026</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-[#012419]">
              Hospice Admission <br />
              <span className="font-light italic text-[#7D5F42]">A Step by Step Guide</span>
            </h1>
            <p className="text-[#7D5F42] text-xl font-medium tracking-wide">
              Navigating the Transition with Clarity and Care
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 h-[35vh] md:h-[70vh] relative">
          <Image
            src="/blog79.png" 
            alt="Intake nurse meeting with a patient and their daughter"
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
              The transition to hospice is not a closing of doors but the opening of a specialized support system designed to maximize quality of life.
            </p>
            <p className="text-lg leading-relaxed mb-0 text-[#012419] text-justify">
              Deciding to begin hospice care is a profound step and the logistics of how to start should be the least of your worries. Families often fear that admission is a long bureaucratic process but in reality it is designed to be swift and supportive. At Hospice & Beyond our goal is to move from the initial conversation to active care as quickly as possible ensuring that comfort measures are in place without delay. Understanding each step of the admission process can help lower anxiety and allow you to focus on what truly matters spending meaningful time with your loved one.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Step 1 The Referral and Consultation</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              The process begins with a referral which can come from a physician a hospital discharge planner or even a family member. Once the referral is received a hospice care consultant from Hospice & Beyond will reach out to schedule an initial consultation. This meeting is not a commitment it is an opportunity for the family to ask questions understand the services available and determine if the patient meets the clinical criteria for hospice care. We often meet families in the home the hospital or even via a secure video call to accommodate their needs.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify font-light">
              During this stage we also coordinate with the patient’s primary physician to obtain the necessary medical orders. To be eligible for hospice a doctor must certify that the patient has a life limiting illness with a prognosis of six months or less if the disease runs its normal course. This is a clinical guideline not a countdown and many patients continue to receive care well beyond six months if their condition remains eligible.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mb-16 bg-[#012419] text-white p-10 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-[#E1C16E]">Step 2 The Clinical Evaluation and Election</h2>
            <p className="text-lg leading-relaxed mb-6 text-justify opacity-90">
              Once the family decides to move forward a registered nurse performs a comprehensive clinical evaluation. This visit involves assessing the patient’s physical condition pain levels and immediate needs for equipment or medication. Simultaneously the Election of Benefits is signed. This is the official paperwork that transitions the patient’s insurance such as the Medicare Hospice Benefit to focus on palliative care rather than curative treatment.
            </p>
            
            <p className="text-lg leading-relaxed text-justify opacity-90">
              At this point the hospice team takes over the management of medications and supplies related to the hospice diagnosis. We coordinate the delivery of medical equipment like a hospital bed oxygen concentrator or wheelchair directly to the home. Our team handles the logistics so the family does not have to worry about transport or assembly.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Step 3 Creating the Plan of Care</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Within the first 48 hours of admission the interdisciplinary team consisting of the nurse social worker chaplain and medical director collaborates to create a personalized Plan of Care. This plan is not a static document it is a living guide that evolves with the patient’s needs. It outlines the frequency of visits from each team member and identifies specific goals for comfort and emotional support.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify">
              The final step in the admission process is the orientation of the family. We provide you with a Comfort Kit which includes emergency medications and teach you how to use it. We also provide the direct numbers for our 24/7 on call staff. From this moment on you are never alone. Whether it is a question about medication or a need for an emergency visit the full resources of Hospice & Beyond are just a phone call away.
            </p>
          </div>
        </FadeIn>

        <section className="my-20 bg-white p-10 rounded-3xl border border-[#E1C16E]/30 shadow-sm">
          <h2 className="text-2xl font-bold mb-10 text-[#012419] text-center uppercase tracking-widest">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">1. Do I need a doctor's permission to call hospice?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Anyone can request an evaluation. However a physician must ultimately certify the patient's eligibility for care to officially begin.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">2. How long does the admission visit take?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">The initial clinical evaluation and paperwork usually take between 1.5 to 3 hours depending on the complexity of the patient's needs.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">3. What if my loved one is still in the hospital?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">We can perform the evaluation in the hospital and coordinate with the discharge team to ensure care and equipment are waiting at home.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">4. Can we change our minds after signing the paperwork?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Yes. A patient can revoke hospice at any time if they choose to pursue curative treatment or change providers.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">5. Who signs the paperwork if the patient cannot?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">If the patient is unable to sign their legally designated Healthcare Power of Attorney or next of kin can sign on their behalf.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">6. What is a Comfort Kit?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">It is a small package of medications kept in the home to quickly treat symptoms like pain nausea or anxiety if they arise suddenly.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">7. Will the nurse show us how to use the equipment?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Absolutely. Education is a core part of the admission process. We ensure every caregiver feels confident using the provided tools.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">8. Is there a waiting list for hospice?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Generally no. Most admissions happen within 24 to 48 hours of the initial referral and often on the same day in urgent cases.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">9. What if the patient does not have Medicare?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">We work with Medicaid and most private insurance companies. We also provide care regardless of ability to pay in many circumstances.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">10. Does starting hospice mean we are giving up?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Not at all. It means you are choosing to prioritize comfort dignity and specialized support for the best quality of life possible.</p>
            </div>
          </div>
        </section>

        <FadeIn delay={0.5}>
          <div className="text-center bg-[#012419] p-12 rounded-[3rem]">
            <p className="text-2xl font-serif italic text-[#E1C16E] mb-4">&quot;Transitioning to hospice is a journey from uncertainty to support ensuring every moment is met with professional care.&quot;</p>
            <div className="w-24 h-1 bg-[#E1C16E] mx-auto mt-6"></div>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}
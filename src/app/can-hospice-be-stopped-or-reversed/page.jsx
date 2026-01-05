import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn"; 

/** * SEO CONFIGURATION
 * Title: Can Hospice Be Stopped or Reversed? Understanding Your Rights | Hospice & Beyond
 * Description: Hospice is a choice, not a permanent decision. Learn how to stop hospice, return to curative care, or graduate from the program if health improves.
 */

export const metadata = {
  title: "Can Hospice Be Stopped or Reversed? Understanding Your Rights | Hospice & Beyond",
  description: "Hospice is a choice, not a permanent decision. Learn how to stop hospice, return to curative care, or graduate from the program if health improves.",
  openGraph: {
    title: "Can Hospice Be Stopped or Reversed?",
    description: "Understanding your right to stop hospice care and explore other medical options at any time.",
    images: [
      {
        url: "/blog667.png",
        width: 1200,
        height: 630,
        alt: "Understanding Hospice Choice",
      },
    ],
  },
  keywords: [
    "stopping hospice care",
    "reversing hospice",
    "leaving hospice",
    "hospice discharge",
    "curative treatment after hospice",
    "hospice rights",
    "graduating from hospice",
    "Hospice & Beyond",
    "Medicare hospice benefit revocation"
  ],
};

export default function HospiceReversalBlog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white border-b border-[#012419]/5">
        <div className="w-full md:w-1/2 px-6 py-12 md:p-20 text-center md:text-left">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[#012419]">
              Stopping <br />
              <span className="font-light italic text-[#7D5F42]">Hospice Care</span>
            </h1>
            <p className="text-[#7D5F42] text-xl font-medium tracking-wide">
              You always have the right to change your mind about your medical care.
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 h-[35vh] md:h-[70vh] relative">
          <Image
            src="/blog667.png" 
            alt="Person considering medical options"
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
              Hospice care is a voluntary choice. It is never a permanent trap. You can choose to leave the program at any time for any reason.
            </p>
            <p className="text-lg leading-relaxed mb-0 text-[#012419] text-justify">
              At Hospice & Beyond, we believe in patient choice. Many families worry that starting hospice means they can never see their specialist again. This is not true. You stay in control of your healthcare journey. If you want to try a new treatment or if your health gets better, you can stop hospice services immediately. Your rights as a patient are protected by law.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">The Right to Revoke</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Stopping hospice is called revoking the benefit. You simply sign a form to end the service. You can do this if you want to go back to curative care. You might find a new clinical trial. You might want a surgery that hospice does not cover. There is no penalty for revoking your hospice care. 
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify font-light">
              The process is simple and fast. Your regular insurance or Medicare will go back to the way it was before. You do not lose your right to use hospice again later. If you need us in the future, we can help you again. You are always welcome back if your health needs change.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mb-16 bg-[#012419] text-white p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-[#E1C16E]">Graduating from Care</h2>
            <p className="text-lg leading-relaxed mb-6 text-justify opacity-90">
              Sometimes the body surprises everyone. A patient might get stronger while on hospice care. This happens when symptoms like pain and stress are managed well. Good nutrition and consistent care can lead to improvement.
            </p>
            <p className="text-lg leading-relaxed text-justify opacity-90">
              If a patient no longer meets the medical rules for hospice, they are discharged. We call this graduating. The doctor will look at your health. If you are stable and not declining, you might not need hospice anymore. This is a positive moment for many families. It means you are doing well enough to live without this level of support for now.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Moving Forward</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              When you stop hospice, we help you plan for the next step. We can talk to your primary doctor. We make sure you have the supplies you need for the transition. We want to make sure you are safe and comfortable after the service ends.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify">
              The focus is always on your goals. Your medical needs might change over time. It is okay to change your mind about the type of care you want. We support your decision to pursue different treatments or to stay home without hospice support. You are the leader of your medical team.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Seeking New Treatments</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Science is always moving forward. A new medicine or trial might become available while you are on hospice. If you want to try it, you can leave hospice to do so. You can focus on fighting the disease again. Hospice is here to support you, but it should never stand in the way of your wishes.
            </p>
          </div>
        </FadeIn>

        {/* ===== FAQ SECTION ===== */}
        <section className="my-20 bg-white p-10 rounded-3xl border border-[#E1C16E]/30 shadow-sm">
          <h2 className="text-3xl font-bold mb-10 text-[#012419] text-center uppercase tracking-widest">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">Can I go back to the hospital?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Yes. If you stop hospice, you can go to the hospital for any treatment. Your standard insurance will cover your visit just like before.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">Can I return to hospice later?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Yes. You can start hospice again if you meet the medical requirements. There is no limit on how many times you can choose this care.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">Do I lose my doctors?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">No. You can always go back to your regular doctors. Leaving hospice restores your regular benefits and medical relationships.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">How long does it take?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">The process is immediate once you sign the paperwork. Your care team will help you make the change quickly.</p>
            </div>
          </div>
        </section>

        <FadeIn delay={0.5}>
          <div className="text-center bg-[#012419] p-12 rounded-[3rem]">
            <p className="text-2xl font-serif italic text-[#E1C16E] mb-4">&quot;Your journey belongs to you and you have the power to choose your path.&quot;</p>
            <div className="w-24 h-1 bg-[#E1C16E] mx-auto mt-6"></div>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}
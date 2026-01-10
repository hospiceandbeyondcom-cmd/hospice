import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn";

/** * SEO CONFIGURATION
 * Title: What Hospice Care Looks Like Day to Day | Hospice & Beyond
 * Description: Explore the daily reality of hospice care. From clinical visits to emotional support, learn how our team provides comfort and dignity every single day.
 */

export const metadata = {
  title: "What Hospice Care Looks Like Day to Day | Hospice & Beyond",
  description: "Explore the daily reality of hospice care. From clinical visits to emotional support, learn how our team provides comfort and dignity every single day.",
  openGraph: {
    title: "What Hospice Care Looks Like Day to Day",
    description: "A comprehensive guide to the daily rhythm of hospice care, focusing on comfort, clinical support, and family involvement.",
    images: [
      {
        url: "/blog72.png",
        width: 1200,
        height: 630,
        alt: "A peaceful home environment for hospice care",
      },
    ],
  },
  keywords: [
    "daily hospice care",
    "hospice routine",
    "what to expect hospice",
    "hospice nurse visits",
    "hospice home care daily life",
    "end of life care day to day",
    "Hospice & Beyond",
    "hospice support system"
  ],
};

export default function HospiceDayToDayBlog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white border-b border-[#012419]/5">
        <div className="w-full md:w-1/2 px-6 py-12 md:p-20 text-center md:text-left">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[#012419]">
              What Hospice <br />
              <span className="font-light italic text-[#7D5F42]">Looks Like Day to Day</span>
            </h1>
            <p className="text-[#7D5F42] text-xl font-medium tracking-wide">
              A Glimpse into the Rhythm of Compassion
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 h-[35vh] md:h-[70vh] relative">
          <Image
            src="/blog72.png" 
            alt="Compassionate healthcare provider holding a patient's hand"
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
              Hospice care is not about a physical destination but a specialized way of living each day with the highest possible quality of life.
            </p>
            <p className="text-lg leading-relaxed mb-0 text-[#012419] text-justify">
              When a family transitions to hospice, the most common question is what the actual experience will look like on a Tuesday morning or a Friday night. Many people fear that hospice means a sterile environment or a total loss of normalcy. In reality, hospice care at Hospice & Beyond is designed to wrap around your existing lifestyle, enhancing comfort while preserving the familiar rhythms of home. It is a collaborative dance between clinical experts, emotional support specialists, and the family unit.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Morning: Personal Care and Dignity</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              The day often begins with a visit from a hospice aide. These professionals focus on the essential tasks that maintain a patient’s dignity and physical well being. A typical morning might involve assistance with bathing, grooming, and dressing in fresh clothes. This visit is far more than just a clinical task; it is a time for gentle interaction and social connection. The aide monitors skin health and physical comfort, providing immediate feedback to the nursing team if any changes are noted.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify font-light">
              For many families, this morning visit provides a much needed period of respite. While the aide assists the patient, family caregivers might take a moment to enjoy a cup of coffee, handle personal errands, or simply rest, knowing their loved one is in capable and compassionate hands. This structure helps prevent caregiver burnout and ensures the patient starts their day feeling refreshed and cared for.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mb-16 bg-[#012419] text-white p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-[#E1C16E]">Midday: Clinical Support and Symptom Management</h2>
            <p className="text-lg leading-relaxed mb-6 text-justify opacity-90">
              Throughout the week, a registered nurse will visit to conduct thorough clinical assessments. Unlike a hospital setting where monitors beep constantly, the hospice nurse focuses on the person. They check vital signs, evaluate pain levels, and manage medications to ensure that symptoms like nausea, anxiety, or shortness of breath are kept at bay. The goal is always proactive management rather than reactive crisis control.
            </p>
            
            <p className="text-lg leading-relaxed text-justify opacity-90">
              The nurse also acts as a teacher. Much of the daily routine involves empowering family members to understand the progression of the illness and how to use the "comfort kit" of medications provided. By midday, the hospice team ensures that all necessary supplies, from oxygen tanks to hospital beds, are functioning correctly and that the home environment is optimized for peace and safety.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Afternoon: Emotional and Spiritual Enrichment</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Afternoon hours in hospice are often dedicated to the "whole person" care that defines this philosophy. This might include a visit from a social worker to discuss emotional hurdles or help with legacy planning. It could also involve a spiritual counselor who provides a non judgmental presence for reflection, prayer, or simply quiet companionship. These visits are tailored to the patient’s beliefs and preferences, focusing on finding meaning and peace.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify">
              In some cases, a hospice volunteer may stop by in the afternoon. They might read a book aloud, play favorite music, or engage in a hobby the patient still enjoys. This social layer of care ensures that the day is filled with life and connection rather than just medical appointments. It highlights the hospice mission: adding life to days when days can no longer be added to life.
            </p>
          </div>
        </FadeIn>

        {/* ===== 10 FAQ SECTION ===== */}
        <section className="my-20 bg-white p-10 rounded-3xl border border-[#E1C16E]/30 shadow-sm">
          <h2 className="text-3xl font-bold mb-10 text-[#012419] text-center uppercase tracking-widest">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">1. Does a nurse stay in the house 24/7?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">No. Hospice care is provided through scheduled visits. Family or facility staff handle daily care, while the hospice team provides clinical oversight and support.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">2. What if pain increases in the middle of the night?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Hospice & Beyond provides a 24/7 on call service. A nurse is always available by phone to guide you or make an emergency visit if needed.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">3. Can we still see our regular primary doctor?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Yes. You can choose to keep your primary physician as the attending doctor who collaborates with the hospice medical director.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">4. Are medications for other conditions stopped?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Only medications that no longer provide comfort or are unrelated to the terminal diagnosis might be reviewed. Comfort is the primary goal.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">5. Who provides the medical equipment?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Hospice coordinates and covers the cost of all medical equipment related to the terminal illness, such as hospital beds and walkers.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">6. Can a patient ever leave hospice care?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Yes. If a patient’s condition improves or they decide to seek curative treatment, they can be discharged from hospice at any time.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">7. How often does the social worker visit?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">The frequency of visits from social workers and spiritual counselors is based on the family’s specific needs and desires.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">8. Does hospice provide food or meal prep?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Hospice aides may help with light meal preparation for the patient during their visit, but they do not provide full grocery or meal services.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">9. Is hospice care only for the very last days?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">No. Hospice is most effective when started early, allowing the team to manage symptoms and build a relationship over several months.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">10. What is the role of the hospice volunteer?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Volunteers provide companionship, help with small tasks, and offer a supportive presence to both the patient and the family caregivers.</p>
            </div>
          </div>
        </section>

        <FadeIn delay={0.5}>
          <div className="text-center bg-[#012419] p-12 rounded-[3rem]">
            <p className="text-2xl font-serif italic text-[#E1C16E] mb-4">&quot;The day to day of hospice is not defined by the illness, but by the love and care that surrounds the patient.&quot;</p>
            <div className="w-24 h-1 bg-[#E1C16E] mx-auto mt-6"></div>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import FadeIn from "../components/FadeIn"; 

/** * SEO CONFIGURATION
 * Title: What Families Should Expect During the Final Days of Life | Hospice & Beyond
 * Description: A comprehensive 1000 word guide detailing the physical, emotional, and spiritual changes during the final days of life to support and educate families.
 */

export const metadata = {
  title: "What Families Should Expect During the Final Days of Life | Hospice & Beyond",
  description: "A comprehensive 1000 word guide detailing the physical, emotional, and spiritual changes during the final days of life to support and educate families.",
  openGraph: {
    title: "What Families Should Expect During the Final Days of Life",
    description: "An educational deep dive into the end of life journey, symptoms of active dying, and how to provide comfort for loved ones.",
    images: [
      {
        url: "/blog71.png",
        width: 1200,
        height: 630,
        alt: "A peaceful and supportive environment for end of life care",
      },
    ],
  },
  keywords: [
    "signs of active dying",
    "end of life symptoms",
    "hospice care journey",
    "comfort measures at end of life",
    "emotional support for families",
    "palliative care stages",
    "Hospice & Beyond",
    "final days of life education"
  ],
};

export default function FinalDaysOfLifeBlog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white border-b border-[#012419]/5">
        <div className="w-full md:w-1/2 px-6 py-12 md:p-20 text-center md:text-left">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[#012419]">
              What Families <br />
              <span className="font-light italic text-[#7D5F42]">Should Expect During the Final Days of Life</span>
            </h1>
            <p className="text-[#7D5F42] text-xl font-medium tracking-wide">
              An Educational Guide for the End of Life Journey
            </p>
          </FadeIn>
        </div>

        <div className="w-full md:w-1/2 h-[35vh] md:h-[70vh] relative">
          <Image
            src="/blog71.png" 
            alt="Compassionate support for families in their final days together"
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
              Understanding the natural process of transition allows families to move from a place of fear to a place of presence and peace. Knowledge is the most powerful tool we have for providing a dignified end of life experience.
            </p>
            <p className="text-lg leading-relaxed mb-0 text-[#012419] text-justify">
              At Hospice & Beyond, we understand that the final days of a loved one’s life are among the most profound and challenging moments a family will ever face. It is a time filled with deep emotion, sacred quiet, and often a lot of uncertainty. This guide is designed to provide you with a detailed educational roadmap of the physical and emotional changes that typically occur during the active dying process. By knowing what to look for, you can focus less on the unknown and more on the precious time you have left together.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Physical Changes and Comfort</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              As the body begins its natural process of shutting down, energy is conserved for the most vital functions. One of the first things you might notice is a significant decrease in appetite and thirst. It is important to understand that this is a natural part of the journey. The body no longer requires the same fuel as it once did. Forcing food or liquids can actually cause discomfort or lead to complications like aspiration. You can provide comfort by using small sponges to keep the mouth moist or applying lip balm to prevent dryness.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Sleep patterns will also shift dramatically. Your loved one may spend the vast majority of the day sleeping and may eventually become difficult to rouse. This is not a sign of depression but rather a sign that the body is focusing its remaining strength on the internal transition. Even when they appear to be in a deep sleep, we encourage families to keep talking to them. Hearing is widely believed to be the last sense to leave, so your voice can be a source of immense comfort.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify font-light">
              Changes in circulation are also common. You may notice that the hands and feet feel cool to the touch or that the skin begins to look slightly blue or mottled. This happens because the body is pulling blood toward the heart and brain. While the skin may feel cold to you, the patient is usually unaware of it. Keeping them covered with a light blanket is usually enough to maintain their comfort.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mb-16 bg-[#012419] text-white p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-[#E1C16E]">Navigating Respiratory Shifts</h2>
            <p className="text-lg leading-relaxed mb-6 text-justify opacity-90">
              One of the most noticeable changes during the final days involves breathing. The rhythm of breath may become irregular, with long pauses followed by several quick breaths. This is often referred to as Cheyne Stokes breathing. While it can be startling for family members to observe, it is a normal part of the dying process and does not necessarily indicate that the person is in distress.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-justify opacity-90">
              You may also hear a sound often described as congestion or a rattle in the throat. This occurs because the person is no longer able to clear or swallow the small amounts of fluid that naturally collect in the back of the throat. While the sound can be loud, it is usually not painful for the patient. Elevating the head of the bed or gently turning the person to their side can help reduce this sound and ease any anxiety the family may feel.
            </p>
            <p className="text-lg leading-relaxed text-justify opacity-90">
              Our hospice team works closely with you to manage these symptoms using specialized medications that reduce secretions or help regulate breathing. The goal is always to ensure that the patient remains in a state of tranquil rest. If you notice any signs of restlessness or agitation, communicating this immediately to your nurse allows for quick adjustments to the care plan.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">The Emotional and Spiritual Transition</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              The journey through the final days is as much an emotional transition as it is a physical one. It is common for individuals to experience what some call terminal restlessness or agitation. This might manifest as picking at blankets or trying to get out of bed despite being very weak. Often, this is the brain’s way of processing the deep changes occurring within. Creating a calm environment with soft lighting and familiar music can help settle this restlessness.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Families often report that their loved ones speak of seeing people who have passed away before them or talk about taking a journey. These experiences are very real to the patient and should be handled with gentle validation. Rather than trying to correct them with logic, it is more helpful to listen and offer a supportive presence. These moments often provide the patient with a sense of peace and preparation for what is next.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#012419] text-justify">
              There is also a period of inward withdrawal. The person may stop interacting with those in the room and focus entirely on their internal experience. This is not a rejection of the family but a necessary step in their departure. Your role during this time is simply to be there. Holding a hand, praying together, or sharing quiet memories are all powerful ways to support them as they begin to let go of the physical world.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#012419] border-b-2 border-[#E1C16E] pb-2 inline-block">Supporting the Family Unit</h2>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              While much of the focus is on the patient, the well being of the family is equally important. The exhaustion that comes with caregiving during the final days can be overwhelming. It is vital to remember that you cannot pour from an empty cup. Taking breaks to eat, sleep, or step outside for fresh air is not only okay but necessary. Our team provides respite support to give you these moments of rest.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Communication within the family is also key. This is a time to share stories and offer forgiveness if needed. Saying the five things that matter most—I love you, I forgive you, please forgive me, thank you, and goodbye—can provide a sense of closure and peace for everyone involved. Our social workers and chaplains are available to help facilitate these conversations and provide emotional grounding during the most intense moments.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-[#012419] text-justify">
              Education remains your best ally. When you understand that the changes you are seeing are a natural part of a body completing its journey, the fear begins to lift. You are then able to create a sacred space that honors the life of your loved one. Every moment of presence and every act of care becomes a part of a beautiful legacy of love.
            </p>
          </div>
        </FadeIn>

        {/* ===== FAQ SECTION ===== */}
        <section className="my-20 bg-white p-10 rounded-3xl border border-[#E1C16E]/30 shadow-sm">
          <h2 className="text-3xl font-bold mb-10 text-[#012419] text-center uppercase tracking-widest">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">1. Is my loved one in pain if they cannot speak?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">We look for non verbal cues such as furrowed brows or tension in the body. If these are absent, it is likely they are comfortable even if they cannot speak.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">2. Should I try to wake them up to give them water?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">No. It is better to let them sleep. Forcing fluids can lead to choking. Using mouth swabs to keep the mouth moist is a safer and more comfortable alternative.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">3. How do I know if death is very near?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">The signs usually include very shallow or irregular breathing, a change in skin color, and a significant drop in responsiveness or blood pressure.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">4. Is the rattle sound painful for them?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Evidence suggests the rattle is more distressing for those listening than for the person dying. It is a result of relaxed throat muscles and does not indicate choking.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">5. Can they still hear me when they are unresponsive?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Yes. We always advise families to keep talking and sharing love. Hearing is often the last sense to remain active throughout the transition.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">6. What is terminal restlessness?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">It is a state of agitation that can occur as the body shuts down. It is managed with a calm environment and medication to ensure the person remains peaceful.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">7. Why are their hands and feet so cold?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">This is due to the body focusing its blood flow on the core organs. It is a normal sign that the circulatory system is slowing down.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">8. How can the hospice team help during this time?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">The team provides symptom management, emotional support for the family, and guidance on what to expect as things change hour by hour.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">9. Is it okay to leave the room for a break?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">Absolutely. You must care for yourself too. Sometimes loved ones even wait for a quiet moment alone to complete their final transition.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#7D5F42] text-xl">10. What happens immediately after death?</h3>
              <p className="text-[#012419] leading-relaxed text-justify">The hospice nurse will come to the home to confirm the passing and help you with the next steps, including contacting the funeral home of your choice.</p>
            </div>
          </div>
        </section>

        <FadeIn delay={0.5}>
          <div className="text-center bg-[#012419] p-12 rounded-[3rem]">
            <p className="text-2xl font-serif italic text-[#E1C16E] mb-4">&quot;Presence is the greatest gift you can offer during the final journey home.&quot;</p>
            <div className="w-24 h-1 bg-[#E1C16E] mx-auto mt-6"></div>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}
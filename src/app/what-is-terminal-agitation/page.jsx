import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";

/**
 * SEO CONFIGURATION
 * Title: What Is Terminal Agitation? Understanding End-of-Life Delirium | Hospice and Beyond
 * Description: Understand terminal agitation, its causes, and how to provide comfort. Learn the signs of end-of-life delirium and how Hospice and Beyond supports families.
 */

export const metadata = {
  title: "What Is Terminal Agitation? Understanding End-of-Life Delirium | Hospice and Beyond",
  description: "Understand terminal agitation, its causes, and how to provide comfort. Learn the signs of end-of-life delirium and how Hospice and Beyond supports families.",
  keywords: [
    "what is terminal agitation",
    "end of life delirium signs",
    "hospice terminal restlessness",
    "terminal agitation symptoms",
    "managing end of life confusion",
    "hospice and beyond education",
    "comfort care for agitation"
  ],
  alternates: {
    canonical: "https://hospiceandbeyond.com/what-is-terminal-agitation",
  },
};

export default function TerminalAgitationBlog() {
  const fadeUpClass = "animate-[fadeUp_0.8s_ease-out_forwards]";
  const fadeInClass = "animate-[fadeIn_1s_ease-in_forwards]";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white shadow-sm border-b border-gray-50 rounded-b-[2rem]">
        <div className={`w-full md:w-1/2 px-6 py-10 md:p-20 text-center md:text-left ${fadeUpClass}`}>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-[#012419]">
            What Is <br />
            <span 
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #E1C16E, #7D5F42)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Terminal Agitation?
            </span>
          </h1>
          <p className="text-gray-500 text-lg font-light tracking-wide italic">
            Understanding the symptoms and providing compassionate care during the final transition with Hospice and Beyond.
          </p>
        </div>

        <div className={`w-full md:w-1/2 h-[28vh] sm:h-[35vh] md:h-[70vh] relative ${fadeInClass}`}>
          <Image
            src="/hospiceandbeyond5.png" 
            alt="Understanding Terminal Agitation in Hospice Care"
            fill
            priority
            className="object-cover md:object-contain"
          />
        </div>
      </section>

      {/* ===== Content Section ===== */}
      <section className={`max-w-4xl mx-auto px-6 md:px-10 py-16 text-[#012419] ${fadeUpClass}`}>
        
        <div className="space-y-8 text-lg leading-relaxed text-justify">
          <p className="text-xl font-serif italic text-gray-600 border-l-4 border-[#E1C16E] pl-6 mb-10">
            Terminal agitation is more than just restlessness—it is a complex state of delirium that requires a gentle heart and expert clinical oversight.
          </p>

          <p>
            Terminal agitation, often referred to as terminal delirium, is a distressing syndrome that some patients experience in the final days of life. It is characterized by emotional and physical turmoil, manifesting as confusion, anxiety, and sometimes aggressive behavior. At Hospice and Beyond, we recognize that while these symptoms are difficult for loved ones to witness, they are a biological part of the body’s natural slowing process. Understanding the "why" behind the agitation is the first step toward restoring peace.
          </p>

          <p>
            The signs of terminal agitation can vary. Some patients may experience "picking" behaviors—reaching for objects that aren’t there or tugging at their clothing. Others may experience hallucinations or become vocal in ways that seem out of character. This state is different from typical anxiety; it is an acute change in mental status. Our team at Hospice and Beyond is trained to distinguish between physical pain and terminal delirium, ensuring that the intervention matches the specific need of the patient.
          </p>

          <p>
            
            There are many factors that contribute to this state. As the body’s organs begin to function differently, metabolic changes occur. Liver and kidney fluctuations can lead to a buildup of toxins that affect brain function. Additionally, decreased oxygen levels or changes in blood sugar can trigger episodes of confusion. At Hospice and Beyond, we focus on managing these physiological shifts with specialized comfort medications that "quiet" the overactive nervous system without stripping away the patient's dignity.
          </p>

          <p>
            Environmental factors play a massive role in how terminal agitation manifests. A person in this state is often hypersensitive to their surroundings. What might seem like a normal household sound can be perceived as jarring or frightening. We guide families in creating a "sanctuary space"—minimizing foot traffic, dimming lights, and playing soft, familiar music. At Hospice and Beyond, we emphasize that the goal is not just to medicate, but to create a peaceful atmosphere where the spirit can settle.
          </p>

          <p>
            The emotional toll on caregivers cannot be understated. Seeing a loved one who was once calm become agitated or unrecognizable in their behavior is deeply painful. Hospice and Beyond provides dedicated support for the family, offering education and presence. We teach you how to remain a "calm anchor"—holding their hand, speaking gently, and offering reassurance, even if they don't seem to recognize you in the moment. Your presence is a powerful form of therapy.
          </p>

          <p>
            It is also important to consider the "soul work" involved. Sometimes terminal agitation is the result of internal struggle or a lack of resolution. At Hospice and Beyond, our interdisciplinary team includes spiritual counselors who help navigate these waters. Addressing fears, facilitating forgiveness, or simply providing a space for a final "I love you" can often resolve the agitation in ways that medicine cannot.
          </p>

          <p>
            At Hospice and Beyond, our mission is to ensure that terminal agitation does not define the end of a loved one's journey. Through a combination of expert medical management, environmental adjustments, and emotional support, we work to transition the patient from a state of turmoil to a state of rest. We are here to carry the burden of the clinical details so that you can focus on the most important thing: being present with your loved one in their final moments.
          </p>
        </div>

        {/* ===== FAQ Section ===== */}
        <section className="mt-20 py-12 border-t border-gray-100">
          <h2 className="text-3xl font-bold mb-10 text-[#012419] text-center uppercase tracking-widest">
            Understanding the Signs
          </h2>
          <div className="space-y-6">
            <div className="bg-[#FAFAF8] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#7D5F42] text-lg mb-2">How long does terminal agitation last?</h3>
              <p className="text-gray-700">It varies for every individual. It can last for a few hours or several days. Our Hospice and Beyond nurses monitor the patient closely to ensure the duration is managed with maximum comfort.</p>
            </div>

            <div className="bg-[#FAFAF8] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#7D5F42] text-lg mb-2">Is the patient in pain when they are agitated?</h3>
              <p className="text-gray-700">While agitation can be caused by pain, it is often a separate neurological event. We perform thorough assessments to rule out physical pain and treat the agitation specifically.</p>
            </div>

            <div className="bg-[#FAFAF8] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#7D5F42] text-lg mb-2">Will they remember being agitated?</h3>
              <p className="text-gray-700">Most patients in a state of terminal delirium are not aware of their actions or behavior in a way that creates lasting memory. Our focus is on making sure they are comfortable in the present moment.</p>
            </div>
          </div>
        </section>

        <div className="mt-16 text-center">
          <p className="text-2xl font-serif italic text-[#7D5F42]">
            Compassion is the bridge to a peaceful goodbye.
          </p>
          <div className="w-20 h-1 bg-[#E1C16E] mx-auto mt-6"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
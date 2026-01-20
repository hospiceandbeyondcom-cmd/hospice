import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";

/**
 * SEO CONFIGURATION
 * Title: Managing Anxiety at End of Life | Hospice and Beyond
 * Description: Discover how Hospice and Beyond addresses emotional distress and anxiety during terminal illness with compassionate support and specialized care.
 */

export const metadata = {
  title: "Managing Anxiety at End of Life | Hospice and Beyond",
  description: "Discover how Hospice and Beyond addresses emotional distress and anxiety during terminal illness with compassionate support and specialized care.",
  keywords: [
    "hospice anxiety management",
    "end of life emotional support",
    "terminal illness anxiety",
    "hospice psychological care",
    "calming techniques for hospice",
    "spiritual comfort end of life",
    "hospice and beyond services"
  ],
  alternates: {
    canonical: "https://hospiceandbeyond.com/managing-anxiety-at-end-of-life",
  },
};

export default function AnxietyManagementBlog() {
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
            Managing Anxiety <br />
            <span 
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg, #E1C16E, #7D5F42)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              at End of Life
            </span>
          </h1>
          <p className="text-gray-500 text-lg font-light tracking-wide italic">
            Nurturing the spirit and calming the mind with the compassionate team at Hospice and Beyond
          </p>
        </div>

        <div className={`w-full md:w-1/2 h-[28vh] sm:h-[35vh] md:h-[70vh] relative ${fadeInClass}`}>
          <Image
            src="/hospiceandbeyond3.png" 
            alt="Managing Anxiety at End of Life"
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
            Physical comfort is only one piece of the journey. At Hospice and Beyond we recognize that emotional and spiritual peace are essential for a dignified and tranquil transition.
          </p>

          <p>
            Anxiety at the end of life is a natural response to the profound changes occurring in a persons world. It can manifest as restlessness or racing thoughts or a deep sense of unease. For many this existential distress arises from fears of the unknown or concerns for loved ones left behind or the process of reflecting on the legacy of a life. At Hospice and Beyond we treat anxiety with the same urgency as physical pain. Our interdisciplinary team is trained to look past the surface symptoms to understand the heart of the distress. We believe that emotional comfort is a right and not a luxury and we work tirelessly to create a sense of safety for every patient in our care.
          </p>

          <p>
            The environment plays a pivotal role in settling an anxious mind. A chaotic or overly clinical setting can heighten the response of the body making it difficult for a patient to rest. We guide families in transforming their homes into sanctuaries of peace. This often involves simple but powerful changes such as dimming the lights or diffusing calming scents like lavender or playing soft and familiar music. At Hospice and Beyond we advocate for a space that reflects the life and preferences of the individual. When the surroundings are predictable and soothing the nervous system can begin to relax which allows for more meaningful moments of connection with family and friends.
          </p>

          <p>
            Open and honest communication is often the most effective remedy for fear. Many patients carry unspoken worries that grow heavier in silence. Our social workers and chaplains are experts in facilitating courageous conversations. We provide a space for patients to express their fears and share their stories and seek closure. By addressing these concerns directly we often see a visible release of tension in the patient. Hospice and Beyond prioritizes these emotional check ins to ensure that no person has to carry the burden of anxiety alone. We are here to listen and to validate and to hold space for the complex emotions that emerge during this time.
          </p>

          <p>
            In some instances anxiety is linked to physical symptoms like pain or shortness of breath. When the body feels under threat the mind follows suit. Our clinical team works to ensure that physical distress is managed proactively. When a patient knows their physical needs will be met quickly their baseline anxiety often decreases. At Hospice and Beyond we use a balanced approach that may include gentle medications designed to ease the edge of panic without clouding the consciousness of the patient. Our goal is always to find the perfect middle ground where the patient feels calm enough to engage with life but remains present for the people they love.
          </p>

          <p>
            Mindfulness and relaxation techniques are powerful tools we share with both patients and their caregivers. Simple breathing exercises or guided imagery or gentle touch can ground a person in the present moment. We teach families how to use these comfort measures so they can actively participate in the peace of their loved one. At Hospice and Beyond we believe that the power of a calming presence cannot be overstated. Sometimes simply holding a hand and breathing together can do more than any clinical intervention. We provide the education and support necessary for families to become anchors of stability for their loved ones.
          </p>

          <p>
            As the final stages of life approach restlessness can occur. This can be distressing for families to witness but it is a documented phase of the journey. At Hospice and Beyond we prepare families for these changes so they are not caught off guard. We explain the physiological and psychological reasons behind the restlessness and intervene with compassionate care strategies. Our nurses are available at all times to adjust care plans in real time. Knowing that expert help is just a phone call away provides a significant safety net that reduces anxiety for the entire family unit.
          </p>

          <p>
            The legacy of a peaceful transition is a gift that lasts a lifetime. When anxiety is managed effectively the final days can be filled with words of love and forgiveness and gratitude rather than fear and tension. At Hospice and Beyond we are honored to be the guardians of this peace. We see our role as more than medical providers because we are companions on a sacred journey. By addressing the mind and body and spirit as one we ensure that every person can face the end of life with the dignity and tranquility they deserve. Your peace is our mission and we stand ready to support you every step of the way.
          </p>
        </div>

        {/* ===== FAQ Section ===== */}
        <section className="mt-20 py-12 border-t border-gray-100">
          <h2 className="text-3xl font-bold mb-10 text-[#012419] text-center uppercase tracking-widest">
            Truths About Anxiety Care
          </h2>
          <div className="space-y-6">
            <div className="bg-[#FAFAF8] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#7D5F42] text-lg mb-2">Is anxiety a sign of pain</h3>
              <p className="text-gray-700">It can be. Sometimes the body expresses physical pain through restlessness or anxiety. Our team carefully assesses both possibilities to ensure we are treating the root cause of the distress.</p>
            </div>

            <div className="bg-[#FAFAF8] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#7D5F42] text-lg mb-2">Can spiritual care help if you are not religious</h3>
              <p className="text-gray-700">Absolutely. Spiritual care at Hospice and Beyond is about finding meaning and purpose and peace regardless of religious affiliation. It is about honoring the unique values and beliefs of the person.</p>
            </div>

            <div className="bg-[#FAFAF8] p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#7D5F42] text-lg mb-2">How can I help when they seem restless</h3>
              <p className="text-gray-700">Providing a calm voice and reducing noise and using gentle touch are often the best first steps. We also provide specialized medications that can be used to settle the mind during periods of high agitation.</p>
            </div>
          </div>
        </section>

        <div className="mt-16 text-center">
          <p className="text-2xl font-serif italic text-[#7D5F42]">
            Our mission is to add life to days not just days to life
          </p>
          <div className="w-20 h-1 bg-[#E1C16E] mx-auto mt-6"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
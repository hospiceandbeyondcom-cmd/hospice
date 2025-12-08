"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function PreciousMemoriesTalkingWithALovedOne() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #FAFAF8 0%, #FDFCF9 60%, #F7F5EF 100%)",
      }}
    >
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">

        {/* TEXT SIDE */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left z-10"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-snug"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Precious Memories Talking With a Hospice Loved One About the Life They Lived
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-2">
            December 6, 2025
          </p>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog33.png"
            alt="Precious Memories"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent md:hidden"></div>
        </motion.div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-gray-800 leading-relaxed text-justify">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6 text-[17px]"
        >

          {/* EXACT USER CONTENT STARTS — NOT MODIFIED */}
          <h2 className="text-2xl font-bold text-[#006D66]">
            Precious Memories Talking With a Hospice Loved One About the Life They Lived
          </h2>

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            The Gentle Power of Reminiscing
          </h3>

          <p>
            There is something deeply beautiful about sitting with a loved one in hospice and gently reminiscing about the life they lived. In hospice care, especially here in Texas, these conversations become soft therapeutic moments that help families connect in meaningful ways. As they share stories, their eyes brighten and a cheerful warmth fills the room, reminding them that their life had purpose value and fulfillment.
          </p>

          <p>
            Encouraging sensory memories like a favorite song the smell of a childhood kitchen or the taste of a traditional meal often brightens their spirit. These life review conversations are one of the most compassionate ways to support emotional well being during end of life care.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            When Memories Carry Guilt or Regret
          </h3>

          <p>
            Not all memories are joyful. Sometimes a loved one recalls moments filled with guilt or regret and that’s where compassionate listening matters most. In hospice and palliative care emotional support is just as important as physical comfort.
          </p>

          <p>
            You are not trying to fix their past you are simply giving them room to release old emotions. Silence patience and presence create a therapeutic space where healing can gently unfold. These are some of the most meaningful conversations families experience when supporting a hospice patient.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            Stories That Brighten the Heart
          </h3>

          <p>
            Most stories shared in hospice are filled with joy childhood adventures early dreams family traditions friendships and accomplishments that shaped their identity. Talking about these cherished memories helps reinforce their sense of dignity.
          </p>

          <p>
            Photos keepsakes and old letters can spark cheerful storytelling. This kind of reminiscence therapy is known to brighten mood reduce anxiety and strengthen the emotional bond between the patient and family. It becomes a celebration of life a way to honor their journey.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            A Sense of Purpose in Sharing Their Story
          </h3>

          <p>
            Life review is a powerful tool in end of life care. It gives hospice patients a renewed sense of purpose and helps them reflect with pride on the legacy they are leaving behind. Many families in Katy Cypress Houston and across Texas choose to write down these memories or record short audio clips to preserve their loved one’s wisdom for future generations.
          </p>

          <p>
            Sharing their story becomes a gift something they pass forward that lives on long after they are gone.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            Supporting Their Emotional and Physical Needs
          </h3>

          <p>
            Reminiscing can be therapeutic but it can also be tiring. Watch for signs that they need a break and honor their energy level. Encourage gentle pauses and moments of silence.
          </p>

          <p>
            When appropriate involving multiple family members can turn storytelling into a meaningful family connection moment. Each person may remember something differently creating warmth unity and shared healing.
          </p>

          <h3 className="text-xl font-semibold text-[#006D66]">
            The Gift of Presence
          </h3>

          <p>Sometimes the most powerful words you can offer are simple:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>“Thank you for sharing that with me.”</li>
            <li>“Your life has been meaningful.”</li>
            <li>“I love hearing your stories.”</li>
          </ul>

          <p>
            These affirmations help them feel seen valued and honored. Respect what they choose not to share every memory holds weight and some remain private.
          </p>

          <p>
            Ending each conversation with warmth touch and sincere reassurance brings peace to their heart. It reminds them that their life mattered and that they are deeply loved.
          </p>

          <h3 className="text-2xl font-bold text-[#7D5F42]">
            Questions that can be asked
          </h3>

          <p className="font-semibold text-[#006D66]">1. Tell Me About Your Childhood</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Who raised you?</li>
            <li>What was your hometown like?</li>
            <li>What games did you love as a child?</li>
            <li>What made you feel happiest growing up?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">2. The People Who Shaped Your Life</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Who influenced you the most?</li>
            <li>Who taught you the biggest lessons?</li>
            <li>Which friendships meant the most?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">3. Your Greatest Adventures</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Favorite places you traveled</li>
            <li>A moment you felt brave or proud</li>
            <li>Something new you tried that changed you</li>
          </ul>

          <p className="font-semibold text-[#006D66]">4. Love Relationships and Family Stories</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>How did you meet your partner or closest friend?</li>
            <li>What does love mean to you now?</li>
            <li>What is your favorite memory with your children or grandchildren?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">5. Lessons You Have Learned in Life</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What do you wish more people understood?</li>
            <li>What advice would you give younger generations?</li>
            <li>What helped you through hard times?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">6. Career and Accomplishments</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What job made you feel most fulfilled?</li>
            <li>What are you proudest of in your working years?</li>
            <li>What was the most valuable lesson your career taught you?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">7. Your Favorite Things</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Favorite songs foods hobbies traditions</li>
            <li>Favorite season or holiday and why</li>
            <li>What always made you laugh?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">8. Spiritual Moments or Turning Points</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A moment in life that gave you deep peace</li>
            <li>A time you felt guided protected or uplifted</li>
            <li>A lesson your faith taught you</li>
          </ul>

          <p className="font-semibold text-[#006D66]">9. The Best Decisions You Ever Made</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Choices that changed your life</li>
            <li>Something you are grateful you did</li>
            <li>Someone you are glad came into your life</li>
          </ul>

          <p className="font-semibold text-[#006D66]">10. What You Want Your Family to Remember</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What message do you want to leave behind?</li>
            <li>What do you hope they know about you?</li>
            <li>How would you like to be remembered?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">11. Joyful Memories That Still Make You Smile</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A funny family story</li>
            <li>A time you laughed until you cried</li>
            <li>A moment you will never forget</li>
          </ul>

          <p className="font-semibold text-[#006D66]">12. Legacy Questions</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What values do you hope your family carries on?</li>
            <li>What traditions should continue?</li>
            <li>What part of you do you hope they see in themselves?</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            Gentle Ways to Start the Conversation
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>“I would love to hear more about your life. What memory comes to your mind right now?”</li>
            <li>“What story do you want the family to keep sharing?”</li>
            <li>“What moments are you most grateful for?”</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#006D66]">
            A Final Reflection
          </h3>

          <p>
            As life slows down these conversations become sacred. They are reminders that every person carries a lifetime of stories lessons joy triumphs hardships and hope. Sitting with them and listening is one of the most loving acts you can offer.
          </p>

          <p>
            In hospice care remembering is not just looking back it is healing. It creates connection eases fear and helps families find peace during one of life’s most tender seasons.
          </p>

          {/* EXACT CONTENT ENDS HERE */}
        </motion.div>

        {/* CTA BUTTON */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-3 rounded-full font-semibold text-white transition hover:opacity-90 shadow-md"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
            }}
          >
            ← Return to Blog
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";
import Head from "next/head"; // Added for Metadata

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
      {/* SEO METADATA INJECTION */}
      <Head>
        <title>Talking with Hospice Loved Ones: Precious Memories & Life Review</title>
        <meta name="description" content="Discover the power of reminiscence therapy in hospice care. Learn how to talk to loved ones about their life story with these 12 meaningful conversation starters." />
        <meta name="keywords" content="hospice care Texas, end of life conversations, life review therapy, talking to hospice patients Houston, emotional support palliative care" />
      </Head>

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
            Precious Memories: Talking With a Hospice Loved One About Their Life Journey
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-2">
            Updated: December 6, 2025 | <strong>Palliative Care Resources</strong>
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
            alt="Family member engaging in hospice reminiscence therapy"
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
          <h2 className="text-2xl font-bold text-[#006D66]">
            The Role of Reminiscence Therapy in End-of-Life Hospice Care
          </h2>

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            The Gentle Power of Life Review for Families in Texas
          </h3>

          <p>
            There is something deeply beautiful about sitting with a loved one in hospice and gently reminiscing about the life they lived. In <strong>hospice care, especially here in Texas</strong>, these conversations become soft therapeutic moments known as <em>life review</em> that help families connect in meaningful ways. As they share stories, their eyes brighten and a cheerful warmth fills the room, reminding them that their life had purpose, value, and fulfillment.
          </p>

          <p>
            Encouraging sensory memories—like a favorite song, the smell of a childhood kitchen, or the taste of a traditional meal—often brightens their spirit. These <strong>life review conversations</strong> are one of the most compassionate ways to support emotional well-being during <strong>end-of-life palliative care</strong>.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            Navigating Guilt and Regret in Palliative Conversations
          </h3>

          <p>
            Not all memories are joyful. Sometimes a loved one recalls moments filled with guilt or regret, and that’s where compassionate listening matters most. In hospice and palliative care, <strong>emotional and spiritual support</strong> is just as important as physical comfort.
          </p>

          <p>
            You are not trying to fix their past; you are simply giving them room to release old emotions. Silence, patience, and presence create a therapeutic space where healing can gently unfold. These are some of the most meaningful conversations families experience when supporting a <strong>hospice patient in Houston, Katy, or Cypress</strong>.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            Reminiscence Therapy: Stories That Brighten the Heart
          </h3>

          <p>
            Most stories shared in hospice are filled with joy: childhood adventures, early dreams, family traditions, friendships, and accomplishments that shaped their identity. Talking about these cherished memories helps reinforce their sense of dignity.
          </p>

          <p>
            Photos, keepsakes, and old letters can spark cheerful storytelling. This kind of <strong>reminiscence therapy</strong> is known to brighten mood, reduce anxiety, and strengthen the emotional bond between the patient and family. It becomes a celebration of life—a way to honor their journey.
          </p>

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            Preserving Wisdom: Legacy and Purpose
          </h3>

          <p>
            Life review is a powerful tool in <strong>geriatric and hospice care</strong>. It gives hospice patients a renewed sense of purpose and helps them reflect with pride on the legacy they are leaving behind. Many families in <strong>Katy, Cypress, Houston,</strong> and across Texas choose to write down these memories or record short audio clips to preserve their loved one’s wisdom for future generations.
          </p>

          <p>
            Sharing their story becomes a gift—something they pass forward that lives on long after they are gone.
          </p>

          <h3 className="text-2xl font-bold text-[#7D5F42]">
            12 Questions to Ask Your Loved One in Hospice
          </h3>

          <p className="font-semibold text-[#006D66]">1. Tell Me About Your Childhood Hometown</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Who raised you and what were they like?</li>
            <li>What was your childhood hometown like?</li>
            <li>What games did you love as a child?</li>
            <li>What made you feel happiest growing up?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">2. The People Who Shaped Your Life</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Who influenced you the most in your youth?</li>
            <li>Who taught you the biggest life lessons?</li>
            <li>Which friendships meant the most throughout the years?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">3. Your Greatest Adventures & Travels</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Favorite places you traveled or explored.</li>
            <li>A moment you felt brave or incredibly proud.</li>
            <li>Something new you tried that changed your perspective.</li>
          </ul>

          <p className="font-semibold text-[#006D66]">4. Love, Relationships, and Family Heritage</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>How did you meet your partner or closest friend?</li>
            <li>What does love mean to you at this stage of life?</li>
            <li>What is your favorite memory with your children or grandchildren?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">5. Wisdom and Lessons Learned</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What do you wish more people understood about life?</li>
            <li>What advice would you give younger generations in Texas?</li>
            <li>What helped you through your hardest times?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">6. Career and Professional Fulfillment</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What job or role made you feel most fulfilled?</li>
            <li>What are you proudest of in your working years?</li>
            <li>What was the most valuable lesson your career taught you?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">7. Sensory Joys and Traditions</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Favorite songs, foods, hobbies, and family traditions.</li>
            <li>Favorite season or holiday and the reason why.</li>
            <li>What always made you laugh out loud?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">8. Spiritual Moments or Turning Points</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A moment in life that gave you deep, lasting peace.</li>
            <li>A time you felt guided, protected, or uplifted.</li>
            <li>A core lesson your faith or values taught you.</li>
          </ul>

          <p className="font-semibold text-[#006D66]">9. Life-Changing Decisions</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Which choices changed the trajectory of your life?</li>
            <li>Something you are deeply grateful you chose to do.</li>
            <li>Someone you are glad came into your life at the right time.</li>
          </ul>

          <p className="font-semibold text-[#006D66]">10. Messages for the Future</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What message do you want to leave behind for your family?</li>
            <li>What do you hope the younger generation knows about you?</li>
            <li>How would you like to be remembered in family stories?</li>
          </ul>

          <p className="font-semibold text-[#006D66]">11. Unforgettable Laughter</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A funny family story that never gets old.</li>
            <li>A time you laughed until you cried.</li>
            <li>A moment of pure joy you will never forget.</li>
          </ul>

          <p className="font-semibold text-[#006D66]">12. Continuing Your Legacy</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What values do you hope your family carries on?</li>
            <li>What traditions should our family continue?</li>
            <li>What part of you do you hope your children see in themselves?</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#7D5F42]">
            How to Start an End-of-Life Conversation
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>“I would love to hear more about your life. What memory is on your mind today?”</li>
            <li>“What story do you want our family to keep sharing for years to come?”</li>
            <li>“What moments in your journey are you most grateful for?”</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#006D66]">
            A Final Reflection on Hospice Support
          </h3>

          <p>
            As life slows down, these conversations become sacred. They are reminders that every person carries a lifetime of triumphs, hardships, and hope. Sitting with them and listening is one of the most loving acts you can offer.
          </p>

          <p>
            In <strong>hospice care</strong>, remembering is not just looking back—it is healing. It creates connection, eases fear, and helps families find peace during one of life’s most tender seasons.
          </p>

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
            ← View More Hospice Resources
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
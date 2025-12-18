"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Blog() {
  const router = useRouter();
  const [loading, setLoading] = useState(null);
  const [filterDate, setFilterDate] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  // ======================================================
  // FULL BLOG LIST (NOV 1 → DEC 12)
  // ======================================================
  const blogs = [

    // ⭐ NEW POST ADDED HERE ⭐

      {
  title: "Small Moments, Big Memories: Holiday Traditions You Can Still Enjoy in Hospice Care",
  image: "/blog47.png",
  link: "/Small-Moments-big-memories-holiday-traditions-you-can-still-enjoy-in-hospice-care",
  dateDisplay: "Dec 18, 2025",
  dateISO: "2025-12-18",
  objectPosition: "object-center",
},
      {
  title: "Delirium vs dementia vs. terminal agitation: how to tell the difference",
  image: "/blog45.png",
  link: "/Delirium-vs-dementia-vs.-terminal-agitation-how-to-tell-the-difference",
  dateDisplay: "Dec 17, 2025",
  dateISO: "2025-12-17",
  objectPosition: "object-center",
},
     {
  title: "Repositioning for comfort not just prevention",
  image: "/blog43.png",
  link: "/Repositioning-for-comfort-not-just-prevention",
  dateDisplay: "Dec 15, 2025",
  dateISO: "2025-12-15",
  objectPosition: "object-center",
},

     {
  title: "Understanding pain at end of life:what families should know",
  image: "/blog42.png",
  link: "/understanding-pain-at-end-of-life-what-families-should-know",
  dateDisplay: "Dec 15, 2025",
  dateISO: "2025-12-15",
  objectPosition: "object-center",
},
   {
  title: "Honoring the Worth of Every Person",
  image: "/blog41.png",
  link: "/honoring-the-worth-of-every-person",
  dateDisplay: "Dec 14, 2025",
  dateISO: "2025-12-14",
  objectPosition: "object-center",
},
   
    {
  title: "When Eating Becomes Optional Understanding Nutrition at the End of Life",
  image: "/blog40.png",
  link: "/when-eating-becomes-optional-understanding-nutrition-at-the-end-of-life",
  dateDisplay: "Dec 13, 2025",
  dateISO: "2025-12-13",
  objectPosition: "object-center",
    },

     
    {
      title: "Trauma at the End of Life: When Neglect Replaces Compassion",
      image: "/blog39.png",
      link: "/trauma-at-the-end-of-life-when-neglect-replaces-compassion",
      dateDisplay: "Dec 12, 2025",
      dateISO: "2025-12-12",
      objectPosition: "object-center",
    },

    {
      title: "Early Signs of Incontinence Families Should Not Ignore",
      image: "/blog38.png",
      link: "/early-signs-of-incontinence-families-should-not-ignore",
      dateDisplay: "Dec 11, 2025",
      dateISO: "2025-12-11",
      objectPosition: "object-center",
    },

    {
      title: "Precious Memories Talking With a Hospice Loved One About the Life They Lived",
      image: "/blog33.png",
      link: "/precious-memories-talking-with-a-hospice-loved-one-about-the-life-they-lived",
      dateDisplay: "Dec 6, 2025",
      dateISO: "2025-12-06",
      objectPosition: "object-center",
    },

    {
      title: "5 Simple Ways to Bring Cheer to Hospice Patients This Season",
      image: "/blog32.png",
      link: "/5-simple-ways-to-bring-cheer-to-hospice-patients-this-season",
      dateDisplay: "Dec 5, 2025",
      dateISO: "2025-12-05",
      objectPosition: "object-center",
    },

    {
      title: "What Are the Early Signs of Hospice Decline",
      image: "/blog30.png",
      link: "/what-are-the-early-signs-of-hospice-decline",
      dateDisplay: "Dec 4, 2025",
      dateISO: "2025-12-04",
      objectPosition: "object-center",
    },

    {
      title: "Essential Steps for Fall Prevention in the Hospice Home",
      image: "/blog29.png",
      link: "/essential-steps-for-fall-prevention-in-the-hospice-home",
      dateDisplay: "Dec 3, 2025",
      dateISO: "2025-12-03",
      objectPosition: "object-center",
    },

    {
      title: "What to Expect in a Hospice Visit",
      image: "/blog28.png",
      link: "/what-to-expect-in-a-hospice-visit",
      dateDisplay: "Dec 2, 2025",
      dateISO: "2025-12-02",
      objectPosition: "object-center",
    },

    {
      title: "Common Misconceptions About Hospice Care",
      image: "/blog27.png",
      link: "/common-misconceptions-about-hospice-care",
      dateDisplay: "Dec 1, 2025",
      dateISO: "2025-12-01",
      objectPosition: "object-center",
    },

    {
      title: "Signs a Patient Might Need Hospice Care",
      image: "/blog26.png",
      link: "/signs-a-patient-might-need-hospice-care",
      dateDisplay: "Nov 26, 2025",
      dateISO: "2025-11-26",
      objectPosition: "object-center",
    },

    {
      title: "Why Early Hospice Admission Often Brings More Peace and Stability",
      image: "/blog25.png",
      link: "/why-early-hospice-admission-often-brings-more-peace-and-stability",
      dateDisplay: "Nov 25, 2025",
      dateISO: "2025-11-25",
      objectPosition: "object-center",
    },

    {
      title: "Meeting the Hospice Team and How Each Member Supports Your Loved One",
      image: "/blog24.png",
      link: "/meeting-the-hospice-team-and-how-each-member-supports-your-loved-one",
      dateDisplay: "Nov 24, 2025",
      dateISO: "2025-11-24",
      objectPosition: "object-center",
    },

    {
      title: "A Simple Understanding of How Medicare and Insurance Support Hospice Care",
      image: "/blog23.png",
      link: "/a-simple-understanding-of-how-medicare-and-insurance-support-hospice-care",
      dateDisplay: "Nov 23, 2025",
      dateISO: "2025-11-23",
      objectPosition: "object-center",
    },

    {
      title: "How Pain and Symptom Management Helps Maintain Dignity and Ease",
      image: "/blog22.png",
      link: "/how-pain-and-symptom-management-helps-maintain-dignity-and-ease",
      dateDisplay: "Nov 22, 2025",
      dateISO: "2025-11-22",
      objectPosition: "object-center",
    },

    {
      title: "The Quiet but Essential Role of Hospice Nurses in Daily Patient Comfort",
      image: "/blog21.png",
      link: "/the-quiet-but-essential-role-of-hospice-nurses-in-daily-patient-comfort",
      dateDisplay: "Nov 21, 2025",
      dateISO: "2025-11-21",
      objectPosition: "object-center",
    },

    {
      title: "What Families Should Know in the First Days After a Serious Diagnosis",
      image: "/blog20.png",
      link: "/what-families-should-know-in-the-first-days-after-a-serious-diagnosis",
      dateDisplay: "Nov 20, 2025",
      dateISO: "2025-11-20",
      objectPosition: "object-center",
    },

    {
      title: "Why Palliative Care Matters Long Before Hospice Even Begins",
      image: "/blog19.png",
      link: "/why-palliative-care-matters-long-before-hospice-even-begins",
      dateDisplay: "Nov 19, 2025",
      dateISO: "2025-11-19",
      objectPosition: "object-center",
    },

    {
      title: "How Hospice Provides Medical Emotional and Practical Support When It Matters Most",
      image: "/blog18.png",
      link: "/how-hospice-provides-medical-emotional-and-practical-support-when-it-matters-most",
      dateDisplay: "Nov 18, 2025",
      dateISO: "2025-11-18",
      objectPosition: "object-center",
    },

    {
      title: "Skin Care in Hospice",
      image: "/blog17.png",
      link: "/skin-care-in-hospice",
      dateDisplay: "Nov 17, 2025",
      dateISO: "2025-11-17",
      objectPosition: "object-center",
    },

    {
      title: "How Hospice Eligibility Works and Why It Matters in Serious Illness Care",
      image: "/blog16.png",
      link: "/how-hospice-eligibility-works-and-why-it-matters-in-serious-illness-care",
      dateDisplay: "Nov 16, 2025",
      dateISO: "2025-11-16",
      objectPosition: "object-center",
    },

    {
      title: "How to Prevent Pressure Ulcers in Hospice",
      image: "/blog15.png",
      link: "/how-to-prevent-pressure-ulcers-in-hospice",
      dateDisplay: "Nov 15, 2025",
      dateISO: "2025-11-15",
      objectPosition: "object-center",
    },

    {
      title: "The Grace We Find in Hospice and Palliative Moments",
      image: "/blog14.png",
      link: "/the-grace-we-find-in-hospice-and-palliative-moments",
      dateDisplay: "Nov 14, 2025",
      dateISO: "2025-11-14",
      objectPosition: "object-center",
    },

    {
      title: "The Gentle Power of Saying I Love You Out Loud",
      image: "/blog13.png",
      link: "/the-gentle-power-of-saying-i-love-you-out-loud",
      dateDisplay: "Nov 13, 2025",
      dateISO: "2025-11-13",
      objectPosition: "object-center",
    },

    {
      title: "Hospice Is Not the End It Is the Space Where Love Deepens",
      image: "/blog12.png",
      link: "/hospice-is-not-the-end-it-is-the-space-where-love-deepens",
      dateDisplay: "Nov 12, 2025",
      dateISO: "2025-11-12",
      objectPosition: "object-center",
    },

    {
      title: "Learning to Listen to Stillness",
      image: "/blog10.png",
      link: "/learning-to-listen-to-stillness",
      dateDisplay: "Nov 11, 2025",
      dateISO: "2025-11-11",
      objectPosition: "object-center",
    },

    {
      title: "When Presence Says More Than Words",
      image: "/blog09.png",
      link: "/when-presence-says-more-than-words",
      dateDisplay: "Nov 10, 2025",
      dateISO: "2025-11-10",
      objectPosition: "object-center",
    },

    {
      title: "The Quiet Strength of Letting Go",
      image: "/blog08.png",
      link: "/the-quiet-strength-of-letting-go",
      dateDisplay: "Nov 9, 2025",
      dateISO: "2025-11-09",
      objectPosition: "object-top",
    },

    {
      title: "What It Means to Be Gentle With Time",
      image: "/blog07.png",
      link: "/what-it-means-to-be-gentle-with-time",
      dateDisplay: "Nov 8, 2025",
      dateISO: "2025-11-08",
      objectPosition: "object-center",
    },

    {
      title: "The Kindness That Lingers",
      image: "/blog06.png",
      link: "/the-kindness-that-lingers",
      dateDisplay: "Nov 7, 2025",
      dateISO: "2025-11-07",
      objectPosition: "object-top",
    },

    {
      title: "Holding Space When Words Fall Short",
      image: "/blog05.png",
      link: "/holding-space-when-words-fall-short",
      dateDisplay: "Nov 6, 2025",
      dateISO: "2025-11-06",
      objectPosition: "object-top",
    },

    {
      title: "When Goodbye Becomes a Beginning",
      image: "/blog04.png",
      link: "/when-goodbye-becomes-a-beginning",
      dateDisplay: "Nov 5, 2025",
      dateISO: "2025-11-05",
      objectPosition: "object-top",
    },

    {
      title: "When You Start Noticing They Are Getting Weaker What to Do Next",
      image: "/blog01.png",
      link: "/when-you-start-noticing-they-are-getting-weaker-what-to-do-next",
      dateDisplay: "Nov 4, 2025",
      dateISO: "2025-11-04",
      objectPosition: "object-center",
    },

    {
      title: "How to Comfort Without Fear",
      image: "/blog02.png",
      link: "/how-to-comfort-without-fear",
      dateDisplay: "Nov 3, 2025",
      dateISO: "2025-11-03",
      objectPosition: "object-top",
    },

    {
      title: "What Love Looks Like at the End",
      image: "/blog03.png",
      link: "/what-love-looks-like-at-the-end",
      dateDisplay: "Nov 2, 2025",
      dateISO: "2025-11-02",
      objectPosition: "object-center",
    },

    {
      title: "What Palliative Care Really Means",
      image: "/blog11.png",
      link: "/what-palliative-care-really-means",
      dateDisplay: "Nov 1, 2025",
      dateISO: "2025-11-01",
      objectPosition: "object-center",
    },
  ];

  // DATE FILTER
  const handleFilter = (e) => {
  const selectedDate = e.target.value;
  setFilterDate(selectedDate);

  const filtered = blogs.filter(
    (post) => post.dateISO === selectedDate
  );

  setFilteredPosts(filtered);
  setCurrentPage(1); // ✅ THIS LINE FIXES IT
};



  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  useEffect(() => {
    const updatePostsPerPage = () => {
      if (window.innerWidth < 768) setPostsPerPage(10);
      else setPostsPerPage(12);
    };
    updatePostsPerPage();
    window.addEventListener("resize", updatePostsPerPage);
    return () =>
      window.removeEventListener("resize", updatePostsPerPage);
  }, []);

  const list = filterDate ? filteredPosts : blogs;

  const totalPages = Math.ceil(list.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const pagePosts = list.slice(startIndex, endIndex);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 },
    },
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

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 p-10 md:p-20"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-6 leading-snug"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hospice and Beyond Blog
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Reflections and insights from hospice and palliative care professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog.png"
            alt="Hospice and Beyond Blog Hero"
            fill
            className="object-cover object-center rounded-bl-[2rem]"
          />
        </motion.div>
      </section>

      {/* BLOGS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* FILTER */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <label className="text-gray-700 font-medium text-base">
            Filter by Date:
          </label>
          <input
            type="date"
            min="2025-11-01"
            max="2028-12-31"
            onChange={handleFilter}
            value={filterDate}
            className="border border-[#ccc] rounded-lg px-4 py-2 w-[230px]"
          />
        </div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key="posts"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {pagePosts.map((blog, i) => (
              <motion.div
                key={i}
                className="bg-white/90 border border-[#E6E6E6] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                variants={fadeUp}
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className={`object-cover ${blog.objectPosition}`}
                  />
                  <div className="absolute bottom-4 left-4 text-[#006D66] bg-white px-3 py-1 rounded-md text-xs shadow-md">
                    {blog.dateDisplay}
                  </div>
                </div>

                <div className="p-6 text-left">
                  <h3 className="text-xl font-normal text-[#222] mb-4">
                    {blog.title}
                  </h3>

                  <button
                    onClick={() => {
                      setLoading(i);
                      router.push(blog.link);
                    }}
                    disabled={loading === i}
                    className="px-6 py-2 rounded-full text-white font-semibold"
                    style={{
                      background:
                        "linear-gradient(90deg, #006D66, #7D5F42)",
                    }}
                  >
                    {loading === i ? "Opening..." : "Read More"}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md border font-medium ${
                currentPage === page
                  ? "bg-[#006D66] text-white"
                  : "bg-white text-[#006D66] border-[#006D66]"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

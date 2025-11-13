"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Blog() {
  const router = useRouter();
  const [loading, setLoading] = useState(null);
  const [filterDate, setFilterDate] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  // ===== BLOG LIST up to NOVEMBER 13 =====
  const blogs = [
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
      title: "When You Start Noticing They’re Getting Weaker What to Do Next",
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

  // ===== HANDLE DATE FILTER =====
  const handleFilter = (e) => {
    const selectedDate = new Date(e.target.value);
    setFilterDate(e.target.value);
    const filtered = blogs.filter(
      (post) => new Date(post.dateISO).toDateString() === selectedDate.toDateString()
    );
    setFilteredPosts(filtered);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const postsToDisplay =
    filterDate && filteredPosts.length === 0 ? [] : filterDate ? filteredPosts : blogs;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #FAFAF8 0%, #FDFCF9 60%, #F7F5EF 100%)",
      }}
    >
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm rounded-b-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 p-10 md:p-20 text-center md:text-left"
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
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Reflections, guidance, and heartfelt stories on care, compassion, and connection.
            Discover gentle insights and uplifting perspectives from hospice and palliative care professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative"
        >
          <Image
            src="/blog.png"
            alt="Hospice and Beyond Blog Hero"
            fill
            priority
            className="object-cover object-center rounded-bl-[2rem] md:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent md:hidden"></div>
        </motion.div>
      </section>

      {/* ===== BLOG SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{
              background: "linear-gradient(90deg, #006D66, #7D5F42)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Explore Our Blog
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            We release new posts regularly, each one written with warmth, clarity, and purpose.
            Our blog shares insights from hospice and palliative care professionals,
            helping you stay connected to the heart of compassionate care.
          </p>
        </motion.div>

        {/* ===== Filter and Cards ===== */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <label className="text-gray-700 font-medium text-base">Filter by Date:</label>
          <input
            type="date"
            min="2025-11-01"
            max="2025-11-30"
            onChange={handleFilter}
            value={filterDate}
            className="border border-[#ccc] rounded-lg px-4 py-2 w-[230px] focus:outline-none focus:border-[#006D66] transition-all shadow-sm bg-white/70 backdrop-blur-sm"
          />
        </div>

        <AnimatePresence mode="wait">
          {filterDate && filteredPosts.length === 0 ? (
            <motion.div
              key="no-posts"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="text-center mt-12 bg-white/70 backdrop-blur-sm p-10 rounded-2xl shadow-md inline-block"
            >
              <p className="text-gray-700 text-lg mb-6">No posts found for the selected date.</p>
              <button
                onClick={() => {
                  setFilterDate("");
                  setFilteredPosts([]);
                }}
                className="px-6 py-2 rounded-full font-semibold text-white transition hover:opacity-90 shadow-md"
                style={{
                  background: "linear-gradient(90deg, #006D66, #7D5F42)",
                }}
              >
                Return to Full Blog
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="posts"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              {postsToDisplay.map((blog, i) => (
                <motion.div
                  key={i}
                  className="bg-white/90 border border-[#E6E6E6] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative backdrop-blur-sm"
                  variants={fadeUp}
                >
                  <div className="relative w-full h-48 md:h-56 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className={`object-cover ${blog.objectPosition} transform hover:scale-105 transition duration-700`}
                    />
                    <div
                      className="absolute bottom-4 left-4 text-[#006D66] text-xs md:text-sm px-3 py-1 rounded-md shadow-md bg-white"
                      style={{
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      }}
                    >
                      {blog.dateDisplay}
                    </div>
                  </div>

                  <div className="p-6 text-left">
                    <h3
                      className="text-xl md:text-2xl font-normal text-[#222] mb-4 leading-snug"
                      style={{ fontWeight: 400 }}
                    >
                      {blog.title}
                    </h3>
                    <button
                      onClick={() => {
                        setLoading(i);
                        router.push(blog.link);
                      }}
                      disabled={loading === i}
                      className={`px-6 py-2 rounded-full font-semibold text-white text-base transition hover:opacity-90 shadow-md ${
                        loading === i ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                      style={{
                        background: "linear-gradient(90deg, #006D66, #7D5F42)",
                      }}
                    >
                      {loading === i ? "Opening..." : "Read More"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
}

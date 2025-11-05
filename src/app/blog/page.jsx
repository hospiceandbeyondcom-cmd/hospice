"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";

export default function Blog() {
  const router = useRouter();

  const blogs = [
    {
      title: "When You Start Noticing They’re Getting Weaker What to Do Next",
      image: "/blog01.png",
      link: "/when-you-start-noticing-they-are-getting-weaker-what-to-do-next",
      objectPosition: "object-center",
    },
    {
      title: "How to Comfort Without Fear",
      image: "/blog02.png",
      link: "/how-to-comfort-without-fear",
      objectPosition: "object-top",
    },
    {
      title: "What Love Looks Like at the End",
      image: "/blog03.png",
      link: "/what-love-looks-like-at-the-end",
      objectPosition: "object-center",
    },
    {
      title: "When Goodbye Becomes a Beginning",
      image: "/blog04.png",
      link: "/when-goodbye-becomes-a-beginning",
      objectPosition: "object-top",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/blog.png"
          alt="Hospice and Beyond Blog Hero"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-12 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Hospice and Beyond Blog
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Reflections, guidance, and heartfelt stories on care, compassion, and connection.
          </p>
        </div>
      </section>

      {/* ===== Blog Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Section Intro */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Explore Our Blog
          </h2>
          <p className="text-gray-700 max-w-3xl text-lg leading-relaxed">
            We release new posts regularly each one written with warmth, clarity, and purpose.
            Our blog shares insights from hospice and palliative care professionals,
            helping you stay connected to the heart of compassionate care.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="bg-white border border-[#E6E6E6] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Blog Image */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className={`object-cover ${blog.objectPosition} transform hover:scale-105 transition duration-700`}
                />
              </div>

              {/* Blog Details */}
              <div className="p-6 text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                  {blog.title}
                </h3>
                <button
                  onClick={() => router.push(blog.link)}
                  className="px-6 py-2 rounded-full font-semibold text-white transition hover:opacity-90"
                  style={{
                    background: "linear-gradient(90deg, #006D66, #7D5F42)",
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

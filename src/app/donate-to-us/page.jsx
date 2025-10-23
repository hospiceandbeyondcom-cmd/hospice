"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";

export default function Donate() {
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
          setVideoReady(true);
        } catch (err) {
          console.warn("Autoplay blocked:", err);
        }
      };
      playVideo();
    }
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-[65vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          muted
          loop
          playsInline
          preload="none"
          decoding="async"
          style={{
            transform: videoReady ? "scale(1)" : "scale(1.02)",
            transition: "transform 1s ease-out",
          }}
        >
          <source src="/donate.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

        <div className="relative z-10 text-center text-white px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Donate to Hospice & Beyond
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Every act of generosity helps us bring comfort, dignity, and care to
            those who need it most.
          </p>
        </div>
      </section>

      {/* ===== Content Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/donate1.png"
              alt="Donation Image"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col items-start justify-center text-left">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                background: "linear-gradient(90deg, #006D66, #7D5F42)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Gift Creates Comfort
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              When you donate to Hospice & Beyond, you help us continue our
              mission of providing compassionate care, emotional support, and
              peace to families in need. Every contribution directly supports
              patient comfort, family assistance, and community programs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Whether it’s medical equipment, home visits, or grief support,
              your kindness makes a lasting difference.
            </p>

            {/* Subtle Slow Pulse Button */}
            <style jsx>{`
              @keyframes slowPulse {
                0% {
                  transform: scale(1);
                  box-shadow: 0 0 0 0 rgba(0, 109, 102, 0.4);
                }
                50% {
                  transform: scale(1.05);
                  box-shadow: 0 0 20px 5px rgba(125, 95, 66, 0.25);
                }
                100% {
                  transform: scale(1);
                  box-shadow: 0 0 0 0 rgba(0, 109, 102, 0.4);
                }
              }
              .animate-slowPulse {
                animation: slowPulse 4s ease-in-out infinite;
              }
            `}</style>

            <button
              onClick={() => setShowModal(true)}
              className="px-10 py-4 rounded-full font-semibold text-white text-lg shadow-lg transition-transform duration-500 hover:scale-105 animate-slowPulse"
              style={{
                background: "linear-gradient(90deg, #006D66, #7D5F42)",
              }}
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* ===== Modal ===== */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/40 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center border border-[#e5e5e5] animate-fadeIn">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{
                background: "linear-gradient(90deg, #006D66, #7D5F42)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Donation System in Progress
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We’re currently upgrading our online donation system to make giving
              easier and more secure. <br />
              Please check back soon — your support means the world to us and
              makes every moment of care possible.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-8 py-3 bg-[#006D66] text-white rounded-full font-semibold hover:bg-[#7D5F42] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

"use client";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Career() {
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);

  const jobs = [
    {
      title: "Registered Nurse (RN)",
      details:
        "We’re seeking compassionate nurses with at least one year of experience and an active Texas Board of Nursing (T-BON) license. Our RNs are at the heart of every patient’s comfort plan—delivering care, teaching families, and guiding with empathy.",
    },
    {
      title: "Certified Caregiver / Home Health Aide",
      details:
        "If you have at least one year of experience providing personal care and a genuine love for helping others, we’d love to meet you. Join a team where every act of kindness creates comfort and dignity.",
    },
    {
      title: "Chaplain / Spiritual Counselor",
      details:
        "We welcome ordained or certified chaplains from all faith backgrounds to bring comfort, prayer, and spiritual guidance to patients and families. Your presence helps people find peace in every moment.",
    },
    {
      title: "Social Worker (MSW / BSW)",
      details:
        "Support patients and families with counseling, resources, and advocacy. We’re looking for social workers with strong hearts, listening ears, and at least one year of hospice or healthcare experience.",
    },
    {
      title: "Physical Therapist",
      details:
        "Help patients maintain mobility, comfort, and independence during their hospice journey. One year of professional experience is required, along with a compassionate, collaborative spirit.",
    },
    {
      title: "Occupational Therapist",
      details:
        "Bring creativity and comfort to daily living. Our occupational therapists help patients adapt, thrive, and rediscover joy in meaningful activities.",
    },
  ];

  const volunteers = [
    "Reading to patients or sharing comforting stories",
    "Playing gentle music or singing to brighten the day",
    "Helping with crafts, knitting, or small creative activities",
    "Simply sitting with someone and offering companionship",
    "Sharing scriptures, prayers, or words of encouragement",
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* ===== Hero ===== */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        >
          <source src="/career.mp4" type="video/mp4" />
        </video>

        {/* remove black overlay */}
        <div className="relative z-10 text-center px-6 md:px-12 text-white drop-shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Join the Hospice & Beyond Family
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Whether you’re a nurse, therapist, or volunteer — your compassion
            can bring peace, dignity, and hope to someone’s life today.
          </p>
        </div>
      </section>

      {/* ===== Volunteer Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-6"
          style={{ color: "#006D66" }}
        >
          Volunteer With Us
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
          Do you love reading, playing music, knitting, or simply being there
          for someone in need? Whether you’re a student, retiree, or just a
          compassionate neighbor — your time can make a world of difference.
        </p>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {volunteers.map((v, i) => (
            <li
              key={i}
              className="p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <span
                className="block text-lg font-medium"
                style={{ color: "#7D5F42" }}
              >
                • {v}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 mt-8 text-lg">
          We also welcome{" "}
          <span className="font-semibold" style={{ color: "#006D66" }}>
            high school students
          </span>{" "}
          who wish to volunteer and learn the value of compassionate care.
        </p>

        <button
          onClick={() => setShowVolunteerModal(true)}
          className="inline-block mt-8 px-8 py-3 bg-[#006D66] text-white rounded-full font-semibold hover:bg-[#7D5F42] transition"
        >
          Become a Volunteer
        </button>
      </section>

      {/* ===== Job Openings ===== */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(90deg, #006D66, #7D5F42)" }}
      >
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
            Current Openings
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#006D66" }}
                >
                  {job.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{job.details}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowJobModal(true)}
              className="inline-block px-8 py-3 bg-white text-[#006D66] font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* ===== Volunteer Modal (blur background) ===== */}
      {showVolunteerModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/10 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-fadeIn">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#006D66" }}
            >
              Thank You for Choosing to Volunteer!
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Your willingness to share time and kindness truly makes a
              difference. <br />
              Please send your message of interest to{" "}
              <span className="font-medium text-[#7D5F42]">
                hr@hospiceandbeyond.com
              </span>
              .
            </p>
            <button
              onClick={() => setShowVolunteerModal(false)}
              className="px-6 py-2 bg-[#006D66] text-white rounded-full font-semibold hover:bg-[#7D5F42] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ===== Job Modal (blur background) ===== */}
      {showJobModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/10 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-fadeIn">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#006D66" }}
            >
              Thank You for Wanting to Join Our Team!
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We’re honored by your interest in serving with compassion. <br />
              Please send your resume or CV to{" "}
              <span className="font-medium text-[#7D5F42]">
                hr@hospiceandbeyond.com
              </span>
              .
            </p>
            <button
              onClick={() => setShowJobModal(false)}
              className="px-6 py-2 bg-[#006D66] text-white rounded-full font-semibold hover:bg-[#7D5F42] transition"
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

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer";

const BRAND_GREEN = "#03271E";
const BRAND_GOLD = "#7D5F42";

export default function HospiceEligibilityPage() {
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState({ type: "", message: "" });
  const videoRef = useRef(null);

  /* ---------- load/save progress ---------- */
  useEffect(() => {
    const saved = localStorage.getItem("hospiceFormData");
    if (saved) setShowModal(true);
  }, []);

  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem("hospiceFormData", JSON.stringify(formData));
    }
  }, [formData]);

  const onChange = (name, value) => setFormData((p) => ({ ...p, [name]: value }));
  const loadSaved = () => {
    const saved = localStorage.getItem("hospiceFormData");
    if (saved) setFormData(JSON.parse(saved));
    setShowModal(false);
  };
  const startOver = () => {
    localStorage.removeItem("hospiceFormData");
    setFormData({});
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const res = await fetch("/api/hospice-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(await res.text());
      setNotice({
        type: "success",
        message:
          "Thank you. Your questionnaire has been received. Our care team will reach out shortly.",
      });
      localStorage.removeItem("hospiceFormData");
      setFormData({});
    } catch (e) {
      setNotice({ type: "error", message: e.message });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  const healthQs = [
    "Have you or your loved one been admitted to the hospital or emergency room multiple times in the past 6 months?",
    "Are you experiencing more frequent infections (e.g., pneumonia, urinary tract infections)?",
    "Have you been calling or visiting your healthcare providers more often?",
    "Have you begun taking new or stronger medications to manage physical pain?",
    "Are you spending most of the day sitting or lying down due to fatigue or weakness?",
    "Have you fallen several times in the past few months?",
    "Are you noticing a decline in mobility or balance?",
  ];
  const dailyQs = [
    "Do you now need assistance with daily tasks such as bathing, dressing, eating, walking, or getting out of bed?",
    "Have you noticed significant or unintentional weight loss or that your clothes fit looser?",
    "Are you experiencing shortness of breath, even when resting or speaking?",
    "Do you tire easily or feel weaker than before?",
    "Have you noticed a decrease in appetite or difficulty swallowing?",
  ];
  const commQs = [
    "Are you or your loved one struggling to discuss care preferences or end-of-life decisions with your doctor or family?",
    "Do you want to learn more about the comfort, dignity, and support hospice can provide?",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F8] text-gray-900">
      <Header />

      {/* ===== Hero ===== */}
      <section className="relative h-[60vh] overflow-hidden">
        <video
          ref={videoRef}
          src="/eligibility2.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#03271E]/80" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
          >
            Hospice Eligibility Questionnaire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-2xl text-lg text-gray-200"
          >
            A legacy of compassion — honoring every life, every moment.
          </motion.p>
        </div>
      </section>

      {/* ===== Form ===== */}
      <main className="flex-1 py-16 px-4 sm:px-8 flex justify-center bg-[#F9F9F8]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl w-full bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-10 border-t-8"
          style={{ borderColor: BRAND_GOLD }}
        >
          {notice.message && (
            <div
              className={`p-4 rounded-xl text-sm mb-6 ${
                notice.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {notice.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10">
            <Section title="Health & Medical History" color={BRAND_GREEN}>
              {healthQs.map((q, i) => (
                <YesNo
                  key={i}
                  name={`q${i + 1}`}
                  question={q}
                  value={formData[`q${i + 1}`] || ""}
                  onChange={onChange}
                  color={BRAND_GOLD}
                />
              ))}
            </Section>

            <Section title="Daily Living & Function" color={BRAND_GREEN}>
              {dailyQs.map((q, i) => (
                <YesNo
                  key={i + 8}
                  name={`q${i + 8}`}
                  question={q}
                  value={formData[`q${i + 8}`] || ""}
                  onChange={onChange}
                  color={BRAND_GOLD}
                />
              ))}
            </Section>

            <Section title="Communication & Planning" color={BRAND_GREEN}>
              {commQs.map((q, i) => (
                <YesNo
                  key={i + 13}
                  name={`q${i + 13}`}
                  question={q}
                  value={formData[`q${i + 13}`] || ""}
                  onChange={onChange}
                  color={BRAND_GOLD}
                />
              ))}
            </Section>

            <Section title="Contact Information" color={BRAND_GREEN}>
              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName || ""}
                onChange={onChange}
                color={BRAND_GOLD}
              />
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email || ""}
                onChange={onChange}
                color={BRAND_GOLD}
              />
              <Input
                label="Phone Number"
                name="phone"
                value={formData.phone || ""}
                onChange={onChange}
                color={BRAND_GOLD}
              />
            </Section>

            <div className="bg-[#FFFDF9] border border-[#E7D7C4] text-gray-700 rounded-xl p-4 text-sm leading-relaxed">
              By submitting this form, you consent to be contacted by Hospice
              and Beyond Palliative Care LLC regarding your hospice eligibility
              and available care options. To withdraw consent, email{" "}
              <a
                href="mailto:beyondhospicehpcare@gmail.com"
                className="text-[var(--gold)] font-semibold"
                style={{ color: BRAND_GOLD }}
              >
                beyondhospicehpcare@gmail.com
              </a>{" "}
              or call <span className="font-semibold">325-249-2748</span>.
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 text-lg font-semibold rounded-xl shadow-md transition-transform transform hover:scale-[1.01]"
              style={{
                backgroundColor: BRAND_GREEN,
                color: "white",
                borderBottom: `4px solid ${BRAND_GOLD}`,
              }}
            >
              {submitting ? "Sending..." : "Submit Questionnaire"}
            </button>
          </form>
        </motion.div>
      </main>

      <Footer />

      {/* Continue Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm border-t-4"
              style={{ borderColor: BRAND_GOLD }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Continue your questionnaire?
              </h2>
              <p className="text-gray-600 mb-6">
                We found a saved session. Would you like to continue where you
                left off or start fresh?
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={loadSaved}
                  className="px-4 py-2 text-white rounded-lg"
                  style={{ backgroundColor: BRAND_GREEN }}
                >
                  Continue
                </button>
                <button
                  onClick={startOver}
                  className="px-4 py-2 text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Start Over
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Subcomponents ---------- */

const Section = ({ title, color, children }) => (
  <div>
    <h3
      className="text-xl font-semibold mb-4 pb-2 border-b-2"
      style={{ borderColor: color, color }}
    >
      {title}
    </h3>
    <div className="space-y-4">{children}</div>
  </div>
);

const YesNo = ({ name, question, value, onChange, color }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#FDFBF8] border border-[#E8E4DE] rounded-xl p-4 hover:shadow-sm transition">
    <p className="text-gray-700 sm:w-3/4">{question}</p>
    <div className="flex gap-4 sm:w-1/4 justify-end">
      {["Yes", "No"].map((opt) => (
        <label key={opt} className="flex items-center gap-1 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={(e) => onChange(name, e.target.value)}
            className="accent-[var(--green)]"
            style={{ accentColor: color }}
          />
          <span className="text-gray-800">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

const Input = ({ label, name, value, onChange, type = "text", color }) => (
  <div>
    <label
      className="block font-semibold mb-1"
      style={{ color }}
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      className="w-full border border-[#DDD2C0] rounded-lg p-3 focus:outline-none focus:ring-2"
      style={{ focusRingColor: color }}
    />
  </div>
);

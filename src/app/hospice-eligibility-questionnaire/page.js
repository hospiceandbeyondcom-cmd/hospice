"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, HeartPulse, ShieldCheck, Feather } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

const BRAND_GREEN = "#03271E";
const BRAND_GOLD = "#7D5F42";

export default function HospiceEligibilityPage() {
  const [formData, setFormData] = useState({});
  const [showSavedModal, setShowSavedModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const videoRef = useRef(null);

  // ---------- Load saved progress ----------
  useEffect(() => {
    const saved = localStorage.getItem("hospiceFormData");
    if (saved) setShowSavedModal(true);
  }, []);

  // ---------- Save progress on change ----------
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem("hospiceFormData", JSON.stringify(formData));
    }
  }, [formData]);

  const onChange = (name, value) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const loadSaved = () => {
    const saved = localStorage.getItem("hospiceFormData");
    if (saved) setFormData(JSON.parse(saved));
    setShowSavedModal(false);
  };

  const startOver = () => {
    localStorage.removeItem("hospiceFormData");
    setFormData({});
    setShowSavedModal(false);
  };

  // ---------- Video autoplay ----------
  useEffect(() => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  }, []);

  // ---------- Questions ----------
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

  // ---------- Submit ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/hospice-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(await res.text());
      setShowSuccess(true);
      localStorage.removeItem("hospiceFormData");
      setFormData({});
    } catch (err) {
      alert("❌ " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0f1413] text-gray-900">
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative h-[60vh] overflow-hidden">
        <video
          ref={videoRef}
          src="/eligibility2.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover md:object-top"
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#03271E]/85" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-tight"
          >
            Hospice Eligibility Questionnaire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-4 max-w-2xl text-lg text-gray-200"
          >
            A legacy of compassion — honoring every life, every moment.
          </motion.p>
        </div>
      </section>

      {/* ===== MODERN PREMIUM FORM WRAPPER ===== */}
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1413] to-[#13201b]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-6xl"
        >
          {/* Two-tone card */}
          <div className="grid grid-cols-1 md:grid-cols-12 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-[#2a3b35]">
            {/* Left brand panel */}
            <div
              className="md:col-span-5 relative p-8 md:p-10 text-white"
              style={{
                background:
                  "linear-gradient(160deg, rgba(3,39,30,1) 0%, rgba(9,52,42,1) 50%, rgba(3,39,30,1) 100%)",
              }}
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(600px_200px_at_-10%_-10%,#7D5F42_10%,transparent_50%)] pointer-events-none" />
              <div className="relative">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Compassion • Dignity • Clarity
                </h3>
                <p className="mt-3 text-sm/relaxed text-gray-200">
                  Start a gentle conversation about care needs. Answering these
                  questions helps our team understand where support can bring the
                  most comfort.
                </p>

                <div className="mt-8 space-y-5">
                  <BrandPoint icon={HeartPulse} title="Nurse-led Guidance" />
                  <BrandPoint icon={ShieldCheck} title="Privacy First" />
                  <BrandPoint icon={Feather} title="Comfort-Focused Support" />
                </div>

                <div className="mt-10 rounded-2xl border border-[#7D5F42]/30 bg-white/5 backdrop-blur p-4">
                  <p className="text-sm text-gray-100">
                    Not sure if hospice is needed now? That’s okay. We provide{" "}
                    <span className="text-[#F3E4D2] font-medium">
                      free in-home assessments
                    </span>{" "}
                    to help you make the best decision.
                  </p>
                </div>
              </div>
            </div>

            {/* Right form panel */}
            <div className="md:col-span-7 bg-white">
              <form onSubmit={handleSubmit} className="p-6 md:p-10">
                {/* Health */}
                <FormSection title="Health & Medical History">
                  {healthQs.map((q, i) => (
                    <YesNoPill
                      key={i}
                      name={`health-${i}`}
                      question={q}
                      value={formData[`health-${i}`] || ""}
                      onChange={onChange}
                    />
                  ))}
                </FormSection>

                {/* Daily */}
                <FormSection title="Daily Living & Function">
                  {dailyQs.map((q, i) => (
                    <YesNoPill
                      key={i}
                      name={`daily-${i}`}
                      question={q}
                      value={formData[`daily-${i}`] || ""}
                      onChange={onChange}
                    />
                  ))}
                </FormSection>

                {/* Communication */}
                <FormSection title="Communication & Planning">
                  {commQs.map((q, i) => (
                    <YesNoPill
                      key={i}
                      name={`comm-${i}`}
                      question={q}
                      value={formData[`comm-${i}`] || ""}
                      onChange={onChange}
                    />
                  ))}
                </FormSection>

                {/* Contact */}
                <FormSection title="Contact Information">
                  <Input
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName || ""}
                    onChange={onChange}
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email || ""}
                    onChange={onChange}
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={onChange}
                  />
                </FormSection>

                {/* Consent */}
                <div className="rounded-xl p-4 bg-[#FFF9F3] border border-[#E8D7C3] text-gray-700 text-sm leading-relaxed">
                  By submitting this form, you consent to be contacted by
                  Hospice and Beyond Palliative Care LLC regarding your hospice
                  eligibility and available care options. To withdraw consent,
                  email{" "}
                  <a
                    href="mailto:beyondhospicehpcare@gmail.com"
                    className="font-semibold"
                    style={{ color: BRAND_GOLD }}
                  >
                    beyondhospicehpcare@gmail.com
                  </a>{" "}
                  or call <span className="font-semibold">325-249-2748</span>.
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 w-full py-4 text-lg font-semibold rounded-xl shadow-md transition-transform hover:scale-[1.01] text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, #03271E 0%, #0b3b32 60%)",
                    borderBottom: `4px solid ${BRAND_GOLD}`,
                  }}
                >
                  {submitting ? "Sending..." : "Submit Questionnaire"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />

      {/* ===== Restore Saved Modal ===== */}
      <AnimatePresence>
        {showSavedModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm border border-[#E6D5BA]"
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

      {/* ===== Success Popup ===== */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 20 }}
              className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md border border-[#E6D5BA] relative"
            >
              <div
                className="absolute -inset-0.5 rounded-3xl blur-md"
                style={{ background: `${BRAND_GOLD}33` }}
              />
              <div className="relative z-10">
                <CheckCircle className="mx-auto mb-5" size={60} color={BRAND_GREEN} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: BRAND_GREEN }}>
                  Submission Successful
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Thank you. Our care team has received your submission and will
                  reach out shortly.
                </p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:scale-[1.03]"
                  style={{
                    backgroundColor: BRAND_GREEN,
                    borderBottom: `3px solid ${BRAND_GOLD}`,
                  }}
                >
                  Close
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

function BrandPoint({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-9 w-9 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: "rgba(125,95,66,0.18)", border: "1px solid rgba(125,95,66,0.35)" }}
      >
        <Icon size={18} color="#F3E4D2" />
      </div>
      <span className="text-sm font-medium text-[#F3E4D2]">{title}</span>
    </div>
  );
}

function FormSection({ title, children }) {
  return (
    <section className="mb-10">
      <h4 className="text-[15px] font-semibold tracking-wide text-[#03271E] flex items-center gap-2">
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{ backgroundColor: BRAND_GOLD }}
        />
        {title}
      </h4>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function YesNoPill({ name, question, value, onChange }) {
  const opt = (label) => {
    const active = value === label;
    return (
      <button
        type="button"
        onClick={() => onChange(name, label)}
        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
          active
            ? "text-white shadow-md"
            : "text-gray-700 bg-white hover:bg-gray-50"
        }`}
        style={{
          borderColor: active ? BRAND_GOLD : "#E5E7EB",
          background: active ? `linear-gradient(90deg, ${BRAND_GREEN}, #0b3b32)` : undefined,
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="rounded-xl border border-gray-200 p-4 hover:shadow-sm transition bg-white">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-gray-800 sm:max-w-[70%]">{question}</p>
        <div className="flex gap-3">{opt("Yes")}{opt("No")}</div>
      </div>
    </div>
  );
}

function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block font-semibold mb-2 text-[#03271E] text-sm">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full rounded-xl p-3 border bg-white text-gray-900 outline-none transition shadow-[inset_0_0_0_0_rgba(0,0,0,0)]"
        style={{
          borderColor: "#E5E7EB",
          boxShadow:
            "inset 0 0 0 0 rgba(0,0,0,0)",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = BRAND_GOLD;
          e.currentTarget.style.boxShadow = "0 0 0 4px rgba(125,95,66,0.15)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#E5E7EB";
          e.currentTarget.style.boxShadow = "inset 0 0 0 0 rgba(0,0,0,0)";
        }}
        placeholder={label}
      />
    </div>
  );
}

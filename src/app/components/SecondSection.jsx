"use client";
import Image from "next/image";
import Link from "next/link";

export default function BeliefSection() {
  return (
    <section className="belief-section">
      <div className="belief-inner">
        {/* Left Image */}
        <div className="belief-image">
          <Image
            src="/section2.png"
            alt="Hospice and Beyond care"
            width={540}
            height={400}
            className="belief-photo"
          />
        </div>

        {/* Right Text */}
        <div className="belief-text">
          <h2>
            Founded on a <span className="gold">simple but sacred belief</span>
          </h2>
          <p>
            Hospice and Beyond Palliative Care is founded on a simple but sacred
            belief — that every person deserves dignity, comfort, and peace
            through every stage of life. We are a compassionate team of
            professionals who walk hand in hand with patients and their loved
            ones, creating a space where healing, presence, and hope are
            honored.
          </p>
          <p>
            We bring care directly to where it’s most meaningful — the home. Our
            focus extends beyond medical support to emotional and spiritual
            well-being, helping families find calm even in difficult
            transitions.
          </p>
          <p>
            At Hospice and Beyond, every heartbeat, every moment, and every
            story matters.
          </p>
          <Link href="/about" className="belief-btn">
            Learn More
          </Link>
        </div>
      </div>

      {/* INLINE STYLING */}
      <style jsx>{`
        .belief-section {
          background: #ffffff;
          padding: 120px 0;
          width: 100%;
          overflow: hidden;
        }

        .belief-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .belief-image {
          flex: 1 1 480px;
          text-align: center;
        }

        .belief-photo {
          width: 100%;
          max-width: 540px;
          border-radius: 25px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          height: auto;
        }

        .belief-text {
          flex: 1 1 500px;
          max-width: 540px;
        }

        .belief-text h2 {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
          font-family: "Inter", "Segoe UI", sans-serif;
          color: #003d39;
        }

        .belief-text .gold {
          color: #d4881a;
        }

        .belief-text p {
          color: #2c2c2c;
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 30px;
          font-family: "Inter", sans-serif;
        }

        .belief-btn {
          display: inline-block;
          background-color: #006d66;
          color: #ffffff;
          padding: 14px 34px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .belief-btn:hover {
          background-color: #004e49;
        }

        @media (max-width: 900px) {
          .belief-inner {
            flex-direction: column;
            gap: 60px;
          }

          .belief-text h2 {
            font-size: 2.2rem;
          }

          .belief-text p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

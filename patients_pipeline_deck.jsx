import { useState } from "react";

const slides = [
  {
    id: 1,
    phase: "Phase 01",
    title: "High-Converting Ads",
    subtitle: "Built for your agency. Run in your market.",
    color: "#1B3A6B",
    accent: "#3B7DD8",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="4" y="12" width="56" height="40" rx="6" fill="#3B7DD8" fillOpacity="0.15" stroke="#3B7DD8" strokeWidth="1.5"/>
        <rect x="12" y="20" width="18" height="24" rx="3" fill="#3B7DD8" fillOpacity="0.4"/>
        <rect x="34" y="28" width="18" height="16" rx="3" fill="#3B7DD8" fillOpacity="0.25"/>
        <circle cx="48" cy="18" r="6" fill="#3B7DD8"/>
        <path d="M45 18l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    points: [
      { label: "Custom Creative", desc: "Scroll-stopping image & video ads built around your agency's unique advantages — not templates." },
      { label: "Prequalified Inbound Leads", desc: "Prospects go through a micro pre-screen before they can become a lead — filtering out unwanted businesses and caregivers." },
      { label: "Hyper-Local Targeting", desc: "Your ads reach the right families in your specific market — not shared with any competitor." },
    ],
    footer: "Meta Ads · Google Ads · 2 Campaigns Running Simultaneously",
  },
  {
    id: 2,
    phase: "Phase 02",
    title: "AI Intake System",
    subtitle: "Your front-end runs on autopilot — 24/7.",
    color: "#1A3D2E",
    accent: "#2EAD72",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="20" fill="#2EAD72" fillOpacity="0.12" stroke="#2EAD72" strokeWidth="1.5"/>
        <circle cx="32" cy="32" r="10" fill="#2EAD72" fillOpacity="0.2"/>
        <circle cx="32" cy="32" r="4" fill="#2EAD72"/>
        <path d="M32 8v8M32 48v8M8 32h8M48 32h8" stroke="#2EAD72" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 17l5.6 5.6M41.4 41.4L47 47M47 17l-5.6 5.6M22.6 41.4L17 47" stroke="#2EAD72" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    points: [
      { label: "Instant Lead Capture", desc: "AI responds to every inquiry in seconds — day or night. No lead ever waits or slips through." },
      { label: "Automatic Qualification", desc: "Age, location, care needs, insurance — all gathered and scored before your team sees a single lead." },
      { label: "Nurture & Follow-Up", desc: "Automated SMS and email sequences keep prospects warm until they're ready to book." },
    ],
    footer: "SMS · Email · Social · CRM — All Automated",
  },
  {
    id: 3,
    phase: "Phase 03",
    title: "Trained Intake Team",
    subtitle: "Warm leads dialed. Consultations booked.",
    color: "#3B1A5A",
    accent: "#9B59D0",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="24" cy="22" r="8" fill="#9B59D0" fillOpacity="0.2" stroke="#9B59D0" strokeWidth="1.5"/>
        <circle cx="40" cy="22" r="8" fill="#9B59D0" fillOpacity="0.1" stroke="#9B59D0" strokeWidth="1" strokeDasharray="3 2"/>
        <path d="M10 46c0-7.73 6.27-14 14-14s14 6.27 14 14" stroke="#9B59D0" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M40 34c3.87 0 7 3.13 7 7" stroke="#9B59D0" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 2"/>
        <circle cx="50" cy="42" r="6" fill="#9B59D0" fillOpacity="0.2" stroke="#9B59D0" strokeWidth="1.5"/>
        <path d="M48 42l1.5 1.5L53 40" stroke="#9B59D0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    points: [
      { label: "Dedicated Intake Specialists", desc: "We hire and train a team that knows your agency, your criteria, and your ideal patient profile." },
      { label: "Pre-Qualified Conversations", desc: "Every call is to a warm, AI-qualified lead. Your team skips cold outreach and goes straight to closing." },
      { label: "Booked Assessments", desc: "The goal of every call: an in-home assessment on your calendar — turning interest into active patients." },
    ],
    footer: "In-Home Assessments · Care Plan Kickoffs · Patient Onboarding",
  },
  {
    id: 4,
    phase: "Phase 04",
    title: "Reviews & Referrals",
    subtitle: "Every patient becomes a growth engine.",
    color: "#3A2210",
    accent: "#E8843A",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M32 8l4.9 9.9L48 19.5l-8 7.8 1.9 11-9.9-5.2-9.9 5.2 1.9-11L16 19.5l11.1-1.6L32 8z" fill="#E8843A" fillOpacity="0.2" stroke="#E8843A" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M18 44c-2 0-3 1-3 3s1 3 3 3h28c2 0 3-1 3-3s-1-3-3-3" stroke="#E8843A" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="22" cy="47" r="1.5" fill="#E8843A"/>
        <circle cx="32" cy="47" r="1.5" fill="#E8843A"/>
        <circle cx="42" cy="47" r="1.5" fill="#E8843A"/>
      </svg>
    ),
    points: [
      { label: "Automatic Review Requests", desc: "After care begins, a review request goes out automatically. 4–5 stars publish to Google instantly." },
      { label: "Negative Review Interception", desc: "3 stars or below never goes public — it goes straight to you so you can resolve it privately." },
      { label: "Referral Incentive Engine", desc: "Happy patients are automatically asked to refer friends and family for a reward — paid only when a new patient starts services." },
    ],
    footer: "Google My Business · Word of Mouth · Organic Lead Flow",
  },
  {
    id: 5,
    phase: "Phase 05",
    title: "Quarterly Reactivation",
    subtitle: "Dead leads. Live pipeline. Zero extra ad spend.",
    color: "#1A2E3B",
    accent: "#3AAECC",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="20" fill="#3AAECC" fillOpacity="0.1" stroke="#3AAECC" strokeWidth="1.5" strokeDasharray="4 3"/>
        <path d="M42 32a10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10" stroke="#3AAECC" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 22l-4 4 4 4" stroke="#3AAECC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45 42 26)"/>
        <circle cx="32" cy="32" r="3" fill="#3AAECC"/>
        <path d="M32 20v3M32 41v3M20 32h3M41 32h3" stroke="#3AAECC" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    points: [
      { label: "Database Mining", desc: "Every lead that didn't convert gets stored. Every quarter, we run a fresh campaign to bring them back." },
      { label: "New Offers & Incentives", desc: "Timing matters. People who said no six months ago may be ready now — we reach them with the right message." },
      { label: "Compounding Pipeline", desc: "Your pipeline gets stronger every quarter. More assets, more data, more second chances — at near-zero cost." },
    ],
    footer: "SMS · Email · Every Quarter · Costs Nothing Extra",
  },
];

const OVERVIEW_STEPS = [
  { num: "01", label: "Paid Ads", color: "#3B7DD8" },
  { num: "02", label: "AI System", color: "#2EAD72" },
  { num: "03", label: "Intake Team", color: "#9B59D0" },
  { num: "04", label: "Reviews & Referrals", color: "#E8843A" },
  { num: "05", label: "Reactivation", color: "#3AAECC" },
];

export default function PitchDeck() {
  const [current, setCurrent] = useState(0); // 0 = overview, 1-5 = slides

  const isOverview = current === 0;
  const isInvestment = current === 6;
  const slide = (!isOverview && !isInvestment) ? slides[current - 1] : null;

  const goNext = () => setCurrent((c) => Math.min(c + 1, 6));
  const goPrev = () => setCurrent((c) => Math.max(c - 1, 0));

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      background: "#0A0F1C",
      fontFamily: "'Georgia', serif",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      {/* Header bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative", zIndex: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg, #1B3A6B 0%, #3B7DD8 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ color: "white", fontSize: 15, fontFamily: "sans-serif", fontWeight: 600, letterSpacing: "0.02em" }}>
            Patients Pipeline
          </span>
        </div>

        <div style={{ display: "flex", gap: 6 }}>
          {[0,1,2,3,4,5,6].map(i => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === 0 ? 28 : 22, height: 6, borderRadius: 3,
              background: current === i ? "white" : "rgba(255,255,255,0.15)",
              border: "none", cursor: "pointer", transition: "all 0.2s",
              padding: 0,
            }} />
          ))}
        </div>

        <div style={{ color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif", fontSize: 13 }}>
          {isOverview ? "Overview" : isInvestment ? "Investment" : `${current} of 5`}
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 5 }}>
        {isOverview ? (
          <OverviewSlide setCurrent={setCurrent} />
        ) : isInvestment ? (
          <InvestmentSlide />
        ) : (
          <SlideContent slide={slide} />
        )}
      </div>

      {/* Navigation */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
        padding: "20px 40px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative", zIndex: 10,
      }}>
        <button onClick={goPrev} disabled={current === 0} style={{
          background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
          color: current === 0 ? "rgba(255,255,255,0.2)" : "white",
          borderRadius: 8, padding: "10px 24px", cursor: current === 0 ? "default" : "pointer",
          fontFamily: "sans-serif", fontSize: 13, transition: "all 0.15s",
        }}>← Back</button>

        <span style={{ fontFamily: "sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
          {isOverview ? "THE SYSTEM" : isInvestment ? "INVESTMENT" : slides[current-1].phase.toUpperCase()}
        </span>

        <button onClick={goNext} disabled={current === 6} style={{
          background: current === 6 ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.9)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: current === 6 ? "rgba(255,255,255,0.2)" : "#0A0F1C",
          borderRadius: 8, padding: "10px 24px", cursor: current === 6 ? "default" : "pointer",
          fontFamily: "sans-serif", fontSize: 13, fontWeight: 600, transition: "all 0.15s",
        }}>Next →</button>
      </div>
    </div>
  );
}

function OverviewSlide({ setCurrent }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 60px", gap: 48 }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: "rgba(255,255,255,0.35)", fontFamily: "sans-serif", fontSize: 12, letterSpacing: "0.2em", marginBottom: 16 }}>
          THE PREDICTABLE PATIENT FORMULA
        </div>
        <h1 style={{ color: "white", fontSize: 42, fontWeight: 400, margin: 0, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
          A Done-For-You System<br/>
          <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 34 }}>Built to Fill Your Agency.</span>
        </h1>
      </div>

      {/* Flow diagram */}
      <div style={{ display: "flex", alignItems: "center", gap: 0, width: "100%", maxWidth: 760 }}>
        {OVERVIEW_STEPS.map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <button onClick={() => setCurrent(i + 1)} style={{
              flex: 1, background: "rgba(255,255,255,0.04)",
              border: `1px solid ${step.color}33`,
              borderRadius: 12, padding: "20px 14px",
              cursor: "pointer", textAlign: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = `${step.color}18`; e.currentTarget.style.borderColor = step.color; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = `${step.color}33`; }}
            >
              <div style={{ fontFamily: "sans-serif", fontSize: 11, color: step.color, letterSpacing: "0.15em", marginBottom: 8, fontWeight: 600 }}>
                {step.num}
              </div>
              <div style={{ color: "white", fontFamily: "sans-serif", fontSize: 13, fontWeight: 500, lineHeight: 1.3 }}>
                {step.label}
              </div>
            </button>
            {i < 4 && (
              <div style={{ color: "rgba(255,255,255,0.15)", fontSize: 18, padding: "0 4px", flexShrink: 0 }}>→</div>
            )}
          </div>
        ))}
      </div>

      {/* Guarantee banner */}
      <div style={{
        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12, padding: "18px 36px", textAlign: "center",
        maxWidth: 500,
      }}>
        <div style={{ color: "rgba(255,255,255,0.5)", fontFamily: "sans-serif", fontSize: 11, letterSpacing: "0.15em", marginBottom: 6 }}>
          BACKED BY A HARD GUARANTEE
        </div>
        <div style={{ color: "white", fontFamily: "sans-serif", fontSize: 17, fontWeight: 600 }}>
          40 New Patients in 90 Days
        </div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif", fontSize: 13, marginTop: 4 }}>
          or you don't pay — written into the contract
        </div>
      </div>
    </div>
  );
}

function SlideContent({ slide }) {
  return (
    <div style={{ flex: 1, display: "flex", gap: 0, overflow: "hidden" }}>
      {/* Left panel */}
      <div style={{
        width: "42%", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "48px 52px",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
      }}>
        {/* Accent glow */}
        <div style={{
          position: "absolute", top: "50%", left: 0,
          width: 200, height: 200,
          background: `radial-gradient(circle, ${slide.accent}18 0%, transparent 70%)`,
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 24 }}>{slide.icon}</div>

          <div style={{
            fontFamily: "sans-serif", fontSize: 11, letterSpacing: "0.2em",
            color: slide.accent, marginBottom: 14, fontWeight: 600,
          }}>
            {slide.phase}
          </div>

          <h2 style={{
            color: "white", fontSize: 38, fontWeight: 400, margin: "0 0 12px",
            lineHeight: 1.15, letterSpacing: "-0.02em",
          }}>
            {slide.title}
          </h2>

          <p style={{
            color: "rgba(255,255,255,0.45)", fontFamily: "sans-serif", fontSize: 15,
            margin: "0 0 40px", lineHeight: 1.5,
          }}>
            {slide.subtitle}
          </p>

          {/* Footer tag */}
          <div style={{
            background: `${slide.accent}12`, border: `1px solid ${slide.accent}30`,
            borderRadius: 8, padding: "10px 16px",
            fontFamily: "sans-serif", fontSize: 11, color: slide.accent, letterSpacing: "0.05em",
          }}>
            {slide.footer}
          </div>
        </div>
      </div>

      {/* Right panel — points */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "48px 52px", gap: 20,
      }}>
        {slide.points.map((pt, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderLeft: `3px solid ${slide.accent}`,
            borderRadius: "0 12px 12px 0",
            padding: "22px 26px",
            transition: "all 0.2s",
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10, marginBottom: 8,
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: "50%",
                background: `${slide.accent}20`, border: `1px solid ${slide.accent}50`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "sans-serif", fontSize: 11, color: slide.accent, fontWeight: 700, flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <div style={{ color: "white", fontFamily: "sans-serif", fontSize: 15, fontWeight: 600 }}>
                {pt.label}
              </div>
            </div>
            <div style={{
              color: "rgba(255,255,255,0.5)", fontFamily: "sans-serif", fontSize: 14,
              lineHeight: 1.6, paddingLeft: 32,
            }}>
              {pt.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvestmentSlide() {
  const adTiers = [
    { spend: "$1,000/mo", patients: "10 Patients", color: "#3B7DD8", width: "25%" },
    { spend: "$2,000/mo", patients: "20 Patients", color: "#2EAD72", width: "50%" },
    { spend: "$3,000/mo", patients: "30 Patients", color: "#E8843A", width: "75%" },
    { spend: "$4,000/mo", patients: "40 Patients", color: "#C0A030", width: "100%" },
  ];

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "36px 52px", gap: 28 }}>
      <div>
        <div style={{ color: "rgba(255,255,255,0.35)", fontFamily: "sans-serif", fontSize: 11, letterSpacing: "0.2em", marginBottom: 10 }}>
          PHASE 06 · INVESTMENT
        </div>
        <h2 style={{ color: "white", fontSize: 34, fontWeight: 400, margin: 0, letterSpacing: "-0.02em" }}>
          Choose Your Plan
        </h2>
      </div>

      <div style={{ display: "flex", gap: 20 }}>
        {/* Gold */}
        <div style={{
          flex: 1, borderRadius: 16, padding: "28px 28px 24px",
          background: "linear-gradient(145deg, rgba(192,160,48,0.12) 0%, rgba(192,160,48,0.04) 100%)",
          border: "1px solid rgba(192,160,48,0.35)",
          display: "flex", flexDirection: "column", gap: 16, position: "relative",
        }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{
              background: "rgba(192,160,48,0.15)", border: "1px solid rgba(192,160,48,0.4)",
              borderRadius: 8, padding: "4px 12px",
              fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#C0A030",
            }}>GOLD</div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ color: "white", fontSize: 32, fontWeight: 300 }}>$997</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif", fontSize: 13 }}>every 15 days</span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.3)", fontFamily: "sans-serif", fontSize: 12, marginTop: 2 }}>≈ $1,994 / month</div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {["Paid Ad Campaigns (Meta)","AI Intake & Lead Capture System","Automated CRM & Workflows","Review & Referral Engine","Quarterly Reactivation Campaigns"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
                <span style={{ color: "#C0A030", marginTop: 1, flexShrink: 0 }}>✓</span>{item}
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "sans-serif", fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
              <span style={{ flexShrink: 0 }}>✗</span>Hired & Trained Intake Staff
            </div>
          </div>
        </div>

        {/* Platinum */}
        <div style={{
          flex: 1, borderRadius: 16, padding: "28px 28px 24px",
          background: "linear-gradient(145deg, rgba(160,200,255,0.1) 0%, rgba(100,160,255,0.04) 100%)",
          border: "1px solid rgba(160,200,255,0.35)",
          display: "flex", flexDirection: "column", gap: 16, position: "relative",
        }}>
          <div style={{ position: "absolute", top: -12, right: 24, background: "linear-gradient(90deg, #3B7DD8, #7EB8FF)", borderRadius: 20, padding: "4px 14px", fontFamily: "sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "white" }}>RECOMMENDED</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ background: "rgba(160,200,255,0.12)", border: "1px solid rgba(160,200,255,0.4)", borderRadius: 8, padding: "4px 12px", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#A0C8FF" }}>PLATINUM</div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ color: "white", fontSize: 32, fontWeight: 300 }}>$5,000</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif", fontSize: 13 }}>upfront</span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.3)", fontFamily: "sans-serif", fontSize: 12, marginTop: 2 }}>then $2,500 / month management</div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {["Paid Ad Campaigns (Meta)","AI Intake & Lead Capture System","Automated CRM & Workflows","Review & Referral Engine","Quarterly Reactivation Campaigns","Hired & Trained Intake Staff"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "sans-serif", fontSize: 13, color: i === 5 ? "white" : "rgba(255,255,255,0.65)" }}>
                <span style={{ color: "#A0C8FF", marginTop: 1, flexShrink: 0 }}>✓</span>
                {item}
                {i === 5 && <span style={{ background: "rgba(160,200,255,0.15)", border: "1px solid rgba(160,200,255,0.3)", borderRadius: 4, padding: "1px 7px", fontSize: 10, color: "#A0C8FF", marginLeft: 4, letterSpacing: "0.05em" }}>PLATINUM ONLY</span>}
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(160,200,255,0.07)", border: "1px solid rgba(160,200,255,0.2)", borderRadius: 8, padding: "10px 14px", fontFamily: "sans-serif", fontSize: 12, color: "#A0C8FF" }}>
            🔒 Guaranteed results backed by contract
          </div>
        </div>
      </div>

      {/* Ad Spend Tiers */}
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "20px 24px" }}>
        <div style={{ fontFamily: "sans-serif", fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>
          MONTHLY AD SPEND · GUARANTEED PATIENT RESULTS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {adTiers.map((tier, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 90, fontFamily: "sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", flexShrink: 0 }}>{tier.spend}</div>
              <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: tier.width, height: "100%", borderRadius: 4, background: `linear-gradient(90deg, ${tier.color}99, ${tier.color})` }} />
              </div>
              <div style={{ width: 90, fontFamily: "sans-serif", fontSize: 13, fontWeight: 600, color: tier.color, flexShrink: 0, textAlign: "right" }}>{tier.patients}</div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: "sans-serif", fontSize: 11, color: "rgba(255,255,255,0.2)", marginTop: 14 }}>
          * Ad spend paid directly to Meta. Guarantees apply to Platinum plan with full compliance to campaign requirements.
        </div>
      </div>
    </div>
  );
}

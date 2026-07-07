import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  ArrowLeft,
  Shield,
  Users,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Equal Housing Opportunity | Grace 101 Independent Living Home",
  description:
    "Grace 101 Independent Living Home is committed to Equal Housing Opportunity. We do not discriminate on the basis of race, color, national origin, religion, sex, familial status, or disability.",
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const commitments = [
  {
    icon: Shield,
    title: "Non-Discrimination Policy",
    body: "We provide housing and services to all persons without regard to race, color, national origin, religion, sex, familial status, or disability. Every resident and applicant is treated with equal dignity, respect, and opportunity — no exceptions, no conditions.",
  },
  {
    icon: Users,
    title: "Accessibility & Accommodation",
    body: "We are committed to making reasonable accommodations and modifications for persons with disabilities as required by the Fair Housing Act. We believe every person deserves a home environment that works for them.",
  },
  {
    icon: MessageSquare,
    title: "Reporting Concerns",
    body: "If you believe you have experienced housing discrimination, we take your concern seriously. Please contact us directly or reach the U.S. Department of Housing and Urban Development (HUD) at 1-800-669-9777 or hud.gov.",
  },
];

const actPoints = [
  "Race, Color, and National Origin",
  "Religion and Creed",
  "Sex and Gender",
  "Familial Status",
  "Disability and Physical Limitation",
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function EqualHousingPage() {
  return (
    <div
      style={{ backgroundColor: "var(--color-warm-white)", color: "var(--color-text)" }}
      className="min-h-screen font-sans"
    >
      {/* ── STICKY NAV ── */}
      <nav
        style={{
          backgroundColor: "var(--color-navy-900)",
          borderBottom: "1px solid rgba(216,163,51,0.18)",
        }}
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
      >
        <Link
          href="/"
          style={{ color: "var(--color-gold-400)" }}
          className="flex items-center gap-2 text-sm font-medium tracking-wide transition-opacity hover:opacity-75"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          <span className="font-sans">Back to Home</span>
        </Link>

        <span
          style={{ fontFamily: "var(--font-display)", color: "var(--color-warm-white)" }}
          className="text-lg font-semibold tracking-wide"
        >
          Grace 101
        </span>

        <div className="flex items-center gap-2">
          <div
            style={{
              backgroundColor: "rgba(216,163,51,0.15)",
              border: "1px solid rgba(216,163,51,0.35)",
            }}
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5"
          >
            <Home size={13} style={{ color: "var(--color-gold-500)" }} />
            <span
              style={{ color: "var(--color-gold-400)", fontSize: "11px" }}
              className="font-sans font-medium tracking-widest uppercase"
            >
              Equal Housing
            </span>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{ backgroundColor: "var(--color-navy-900)" }}
        className="relative overflow-hidden px-6 pb-28 pt-24 text-center md:pb-36 md:pt-32"
      >
        {/* Radial gold glow — top-center */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
          style={{
            width: "700px",
            height: "420px",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(216,163,51,0.22) 0%, transparent 70%)",
          }}
        />
        {/* Ambient corner glow — bottom left */}
        <div
          className="pointer-events-none absolute bottom-0 left-0"
          style={{
            width: "400px",
            height: "300px",
            background:
              "radial-gradient(ellipse at 0% 100%, rgba(216,163,51,0.10) 0%, transparent 60%)",
          }}
        />

        {/* Home icon badge */}
        <div className="relative z-10 mb-8 flex justify-center">
          <div
            style={{
              background: "rgba(216,163,51,0.12)",
              border: "1.5px solid rgba(216,163,51,0.45)",
              boxShadow: "0 0 60px rgba(216,163,51,0.22), inset 0 1px 0 rgba(216,163,51,0.25)",
            }}
            className="flex h-24 w-24 items-center justify-center rounded-full md:h-28 md:w-28"
          >
            <Home
              size={48}
              strokeWidth={1.25}
              style={{ color: "var(--color-gold-500)" }}
            />
          </div>
        </div>

        {/* Eyebrow */}
        <p
          style={{
            color: "var(--color-gold-400)",
            letterSpacing: "0.25em",
            fontSize: "12px",
          }}
          className="relative z-10 mb-5 font-sans font-semibold uppercase"
        >
          Our Commitment
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-warm-white)",
            lineHeight: 1.08,
          }}
          className="relative z-10 mx-auto max-w-3xl text-5xl font-light md:text-7xl lg:text-8xl"
        >
          Equal Housing
          <br />
          <span style={{ color: "var(--color-gold-400)" }}>Opportunity</span>
        </h1>

        {/* Gold script accent */}
        <p
          style={{
            fontFamily: "var(--font-script)",
            color: "var(--color-gold-300)",
            fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
          }}
          className="relative z-10 mt-2 leading-none"
        >
          For All
        </p>

        {/* Divider line */}
        <div className="relative z-10 mx-auto mt-8 mb-8 flex items-center gap-4 max-w-md justify-center">
          <div
            style={{ backgroundColor: "rgba(216,163,51,0.35)" }}
            className="h-px flex-1"
          />
          <Home size={12} style={{ color: "var(--color-gold-500)" }} />
          <div
            style={{ backgroundColor: "rgba(216,163,51,0.35)" }}
            className="h-px flex-1"
          />
        </div>

        {/* Subheading */}
        <p
          style={{
            color: "rgba(255,253,248,0.78)",
            fontFamily: "var(--font-sans)",
            maxWidth: "640px",
            lineHeight: 1.75,
          }}
          className="relative z-10 mx-auto text-base md:text-lg"
        >
          Grace 101 Independent Living Home is proudly committed to fair housing
          for all people — regardless of{" "}
          <span style={{ color: "var(--color-gold-400)" }}>race, color, national origin,
          religion, sex, familial status, or disability</span>.
          Every door we open is opened equally.
        </p>

        {/* Bottom wave divider */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
            style={{ height: "64px" }}
          >
            <path
              d="M0 64L1440 64L1440 32C1200 64 960 0 720 32C480 64 240 0 0 32L0 64Z"
              fill="#FFFDF8"
            />
          </svg>
        </div>
      </section>

      {/* ── STATEMENT OF COMMITMENT ── */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div
            style={{
              backgroundColor: "var(--color-ivory)",
              borderLeft: "5px solid var(--color-gold-500)",
              boxShadow: "0 8px 40px rgba(0,23,47,0.08)",
            }}
            className="rounded-xl rounded-l-none p-10 md:p-14"
          >
            <p
              style={{
                color: "var(--color-gold-500)",
                letterSpacing: "0.2em",
                fontSize: "11px",
              }}
              className="mb-5 font-sans font-semibold uppercase"
            >
              Statement of Commitment
            </p>

            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-navy-900)",
                lineHeight: 1.35,
              }}
              className="text-3xl font-light md:text-4xl lg:text-5xl"
            >
              "We believe every person deserves a safe, stable, dignified place
              to call home — and that belief does not waver based on who you are
              or where you come from."
            </blockquote>

            <div
              style={{ backgroundColor: "rgba(216,163,51,0.25)" }}
              className="mt-8 h-px w-24"
            />

            <p
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-gold-dark, #A97514)",
                fontSize: "20px",
              }}
              className="mt-4 font-medium italic"
            >
              — Grace 101 Independent Living Home
            </p>

            <p
              style={{ color: "var(--color-muted)", lineHeight: 1.75 }}
              className="mt-8 max-w-2xl text-base"
            >
              As an independent living home rooted in Houston's community, we
              hold this truth at the center of everything we do. Fair housing is
              not merely a legal obligation — it is a moral one. We welcome
              every woman who walks through our doors with open arms and an
              equal opportunity to rebuild her life in safety and dignity.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT THIS MEANS TO US ── */}
      <section
        style={{ backgroundColor: "var(--color-cream)" }}
        className="px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="mb-16 text-center">
            <p
              style={{
                color: "var(--color-gold-500)",
                letterSpacing: "0.2em",
                fontSize: "11px",
              }}
              className="mb-4 font-sans font-semibold uppercase"
            >
              Our Practice
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-navy-900)",
                lineHeight: 1.15,
              }}
              className="text-4xl font-light md:text-5xl lg:text-6xl"
            >
              What This Means
              <br />
              <span
                style={{ fontFamily: "var(--font-script)", color: "var(--color-gold-500)", fontSize: "0.85em" }}
              >
                to Us
              </span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {commitments.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: "var(--color-navy-900)",
                    borderTop: "3px solid var(--color-gold-500)",
                    boxShadow: "0 24px 60px rgba(0,23,47,0.22)",
                  }}
                  className="flex flex-col rounded-xl p-8 md:p-10"
                >
                  {/* Icon ring */}
                  <div
                    style={{
                      background: "rgba(216,163,51,0.12)",
                      border: "1px solid rgba(216,163,51,0.3)",
                    }}
                    className="mb-7 flex h-14 w-14 items-center justify-center rounded-full"
                  >
                    <Icon size={24} style={{ color: "var(--color-gold-500)" }} strokeWidth={1.5} />
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-warm-white)",
                      lineHeight: 1.2,
                    }}
                    className="mb-4 text-2xl font-light"
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{ backgroundColor: "rgba(216,163,51,0.3)" }}
                    className="mb-5 h-px w-12"
                  />

                  <p
                    style={{ color: "rgba(255,253,248,0.68)", lineHeight: 1.8 }}
                    className="flex-1 text-sm"
                  >
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAIR HOUSING ACT ── */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Left: decorative */}
            <div className="relative flex items-center justify-center">
              {/* Large background circle */}
              <div
                style={{
                  background:
                    "radial-gradient(circle, rgba(216,163,51,0.08) 0%, transparent 70%)",
                }}
                className="absolute h-72 w-72 rounded-full"
              />
              {/* Badge */}
              <div
                style={{
                  backgroundColor: "var(--color-navy-900)",
                  border: "2px solid rgba(216,163,51,0.4)",
                  boxShadow: "0 20px 60px rgba(0,23,47,0.25)",
                }}
                className="relative z-10 flex flex-col items-center rounded-2xl px-10 py-12 text-center"
              >
                {/* SVG Equal Housing Opportunity logo — house + person */}
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  {/* House shape */}
                  <path
                    d="M8 30L32 10L56 30"
                    stroke="#D8A333"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect x="14" y="30" width="36" height="26" rx="2" stroke="#D8A333" strokeWidth="3" />
                  {/* Door */}
                  <rect x="25" y="42" width="14" height="14" rx="1.5" stroke="#D8A333" strokeWidth="2.5" />
                  {/* Person silhouette */}
                  <circle cx="32" cy="21" r="4" fill="#D8A333" />
                  <path
                    d="M26 33c0-3.314 2.686-6 6-6s6 2.686 6 6"
                    stroke="#D8A333"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>

                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-gold-400)",
                    lineHeight: 1.2,
                    fontSize: "28px",
                  }}
                  className="font-light"
                >
                  Equal
                  <br />
                  Housing
                  <br />
                  Opportunity
                </p>
              </div>
            </div>

            {/* Right: text */}
            <div>
              <p
                style={{
                  color: "var(--color-gold-500)",
                  letterSpacing: "0.2em",
                  fontSize: "11px",
                }}
                className="mb-4 font-sans font-semibold uppercase"
              >
                Federal Law
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy-900)",
                  lineHeight: 1.2,
                }}
                className="mb-6 text-4xl font-light md:text-5xl"
              >
                The Fair
                <br />
                Housing Act
              </h2>

              <p
                style={{ color: "var(--color-muted)", lineHeight: 1.8 }}
                className="mb-8 text-base"
              >
                Grace 101 Independent Living Home operates in full compliance
                with the Fair Housing Act of 1968 and its amendments. This
                landmark federal law prohibits discrimination in the sale,
                rental, and financing of housing based on the following
                protected characteristics:
              </p>

              <ul className="space-y-3">
                {actPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      style={{ color: "var(--color-gold-500)", flexShrink: 0 }}
                      strokeWidth={2}
                    />
                    <span
                      style={{ color: "var(--color-text)" }}
                      className="font-sans text-sm font-medium"
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PROMISE ── */}
      <section
        style={{ backgroundColor: "var(--color-navy-900)" }}
        className="relative overflow-hidden px-6 py-24 text-center md:py-36"
      >
        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(216,163,51,0.10) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p
            style={{
              color: "var(--color-gold-400)",
              letterSpacing: "0.2em",
              fontSize: "11px",
            }}
            className="mb-8 font-sans font-semibold uppercase"
          >
            Our Promise
          </p>

          <p
            style={{
              fontFamily: "var(--font-script)",
              color: "var(--color-gold-300)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
            className="mb-6 leading-snug"
          >
            Dignity Has No Exceptions
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-warm-white)",
              lineHeight: 1.2,
            }}
            className="mb-8 text-4xl font-light md:text-5xl lg:text-6xl"
          >
            Every Woman Deserves a
            <br />
            <span style={{ color: "var(--color-gold-400)" }}>
              Place to Call Home
            </span>
          </h2>

          <div
            style={{ backgroundColor: "rgba(216,163,51,0.3)" }}
            className="mx-auto mb-8 h-px w-24"
          />

          <p
            style={{
              color: "rgba(255,253,248,0.75)",
              lineHeight: 1.85,
              maxWidth: "560px",
            }}
            className="mx-auto mb-10 text-base"
          >
            At Grace 101, equal housing opportunity is not a box we check —
            it's a value woven into the fabric of who we are. We are an
            organization born from the belief that safety, stability, and
            dignity are universal human rights. Our doors are open, our hearts
            are open, and our home is open — to all who qualify, without
            prejudice.
          </p>

          <Link
            href="/"
            style={{
              backgroundColor: "var(--color-gold-500)",
              color: "var(--color-navy-900)",
            }}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-85"
          >
            <Home size={16} strokeWidth={2} />
            Return to Grace 101 Home
          </Link>
        </div>
      </section>

      {/* ── CONTACT / REPORTING ── */}
      <section
        style={{ backgroundColor: "var(--color-ivory)" }}
        className="px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p
              style={{
                color: "var(--color-gold-500)",
                letterSpacing: "0.2em",
                fontSize: "11px",
              }}
              className="mb-4 font-sans font-semibold uppercase"
            >
              We're Here for You
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-navy-900)",
                lineHeight: 1.2,
              }}
              className="mb-5 text-4xl font-light md:text-5xl"
            >
              Report a Concern
            </h2>
            <p
              style={{ color: "var(--color-muted)", maxWidth: "540px", lineHeight: 1.75 }}
              className="mx-auto text-base"
            >
              If you believe you have been subjected to housing discrimination
              by Grace 101 or any other housing provider, please reach out.
              Every concern is taken seriously and investigated promptly.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Phone */}
            <a
              href="tel:+13468808696"
              style={{
                backgroundColor: "var(--color-warm-white)",
                border: "1px solid rgba(216,163,51,0.25)",
                boxShadow: "0 8px 30px rgba(0,23,47,0.07)",
              }}
              className="group flex flex-col items-center rounded-xl p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div
                style={{
                  backgroundColor: "var(--color-navy-900)",
                  boxShadow: "0 8px 24px rgba(0,23,47,0.18)",
                }}
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
              >
                <Phone size={22} style={{ color: "var(--color-gold-500)" }} strokeWidth={1.75} />
              </div>
              <p
                style={{ color: "var(--color-muted)", fontSize: "11px", letterSpacing: "0.15em" }}
                className="mb-2 font-semibold uppercase"
              >
                Call Us
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy-900)",
                }}
                className="text-xl font-medium"
              >
                346.880.8696
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:dominque@grace101ilh.org"
              style={{
                backgroundColor: "var(--color-warm-white)",
                border: "1px solid rgba(216,163,51,0.25)",
                boxShadow: "0 8px 30px rgba(0,23,47,0.07)",
              }}
              className="group flex flex-col items-center rounded-xl p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div
                style={{
                  backgroundColor: "var(--color-navy-900)",
                  boxShadow: "0 8px 24px rgba(0,23,47,0.18)",
                }}
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
              >
                <Mail size={22} style={{ color: "var(--color-gold-500)" }} strokeWidth={1.75} />
              </div>
              <p
                style={{ color: "var(--color-muted)", fontSize: "11px", letterSpacing: "0.15em" }}
                className="mb-2 font-semibold uppercase"
              >
                Email Us
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy-900)",
                  wordBreak: "break-all",
                }}
                className="text-lg font-medium leading-snug"
              >
                dominque@grace101ilh.org
              </p>
            </a>

            {/* HUD */}
            <a
              href="https://www.hud.gov/program_offices/fair_housing_equal_opp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "var(--color-warm-white)",
                border: "1px solid rgba(216,163,51,0.25)",
                boxShadow: "0 8px 30px rgba(0,23,47,0.07)",
              }}
              className="group flex flex-col items-center rounded-xl p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div
                style={{
                  backgroundColor: "var(--color-navy-900)",
                  boxShadow: "0 8px 24px rgba(0,23,47,0.18)",
                }}
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
              >
                <Shield size={22} style={{ color: "var(--color-gold-500)" }} strokeWidth={1.75} />
              </div>
              <p
                style={{ color: "var(--color-muted)", fontSize: "11px", letterSpacing: "0.15em" }}
                className="mb-2 font-semibold uppercase"
              >
                File with HUD
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy-900)",
                }}
                className="text-xl font-medium"
              >
                1-800-669-9777
              </p>
              <p
                style={{ color: "var(--color-gold-500)", fontSize: "12px" }}
                className="mt-1 font-sans"
              >
                hud.gov →
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER STRIP ── */}
      <footer
        style={{ backgroundColor: "var(--color-navy-900)" }}
        className="px-6 py-12"
      >
        <div className="mx-auto max-w-4xl">
          {/* Top row */}
          <div className="mb-8 flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-3">
              <div
                style={{ backgroundColor: "rgba(216,163,51,0.2)", border: "1px solid rgba(216,163,51,0.3)" }}
                className="flex h-10 w-10 items-center justify-center rounded-full"
              >
                <Home size={18} style={{ color: "var(--color-gold-500)" }} strokeWidth={1.5} />
              </div>
              <span
                style={{ fontFamily: "var(--font-display)", color: "var(--color-warm-white)" }}
                className="text-xl font-light"
              >
                Grace 101 Independent Living Home
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--color-gold-400)",
                fontSize: "22px",
              }}
            >
              Equal Housing Opportunity Provider
            </p>
          </div>

          {/* Divider */}
          <div
            style={{ backgroundColor: "rgba(216,163,51,0.18)" }}
            className="mb-8 h-px"
          />

          {/* Contact details */}
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-10">
            <a
              href="tel:+13468808696"
              className="flex items-center gap-2 transition-opacity hover:opacity-75"
            >
              <Phone size={14} style={{ color: "var(--color-gold-500)" }} />
              <span style={{ color: "rgba(255,253,248,0.65)" }} className="text-sm">
                346.880.8696
              </span>
            </a>
            <a
              href="mailto:dominque@grace101ilh.org"
              className="flex items-center gap-2 transition-opacity hover:opacity-75"
            >
              <Mail size={14} style={{ color: "var(--color-gold-500)" }} />
              <span style={{ color: "rgba(255,253,248,0.65)" }} className="text-sm">
                dominque@grace101ilh.org
              </span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} style={{ color: "var(--color-gold-500)" }} />
              <span style={{ color: "rgba(255,253,248,0.65)" }} className="text-sm">
                P.O. Box 60194, Houston, TX 77205
              </span>
            </div>
          </div>

          {/* Legal line */}
          <p
            style={{ color: "rgba(255,253,248,0.35)", fontSize: "11px" }}
            className="mt-8 text-center font-sans"
          >
            © {new Date().getFullYear()} Grace 101 Independent Living Home. All rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp;
            Equal Housing Opportunity Provider&nbsp;&nbsp;|&nbsp;&nbsp;
            We comply fully with the Fair Housing Act.
          </p>
        </div>
      </footer>
    </div>
  );
}

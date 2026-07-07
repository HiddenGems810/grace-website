import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Grace 101 Independent Living Home",
  description:
    "Learn how Grace 101 Independent Living Home collects, uses, and protects your personal information. We are committed to your privacy and dignity.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Grace 101 Independent Living Home",
    description:
      "Grace 101 Independent Living Home's commitment to protecting your personal information and privacy.",
    type: "website",
  },
};

const EFFECTIVE_DATE = "July 1, 2026";

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    body: [
      "We may collect personal information you voluntarily provide when you contact us, inquire about our services, or interact with our website. This may include your name, email address, phone number, mailing address, and any details you share in a message or inquiry form.",
      "We may also automatically collect certain non-personal technical information when you visit our site — such as browser type, referring URLs, pages visited, and general geographic location — through standard web analytics tools.",
    ],
  },
  {
    number: "02",
    title: "How We Use Your Information",
    body: [
      "Information you provide is used solely to respond to your inquiries, provide information about our independent living services, and communicate with you about Grace 101 Independent Living Home programs and updates.",
      "We do not use your personal information for automated decision-making, profiling, or any commercial advertising targeting. Every communication we send is intended to serve and inform — not to sell.",
    ],
  },
  {
    number: "03",
    title: "Information Sharing",
    body: [
      "Grace 101 Independent Living Home does not sell, trade, rent, or otherwise transfer your personal information to outside parties for their marketing or commercial purposes.",
      "We may share information only where required by law, to protect our legal rights, or with trusted service providers who assist us in operating our website and serving you — each bound by strict confidentiality obligations.",
    ],
  },
  {
    number: "04",
    title: "Data Security",
    body: [
      "We implement a variety of security measures to maintain the safety of your personal information. All sensitive data is transmitted via Secure Socket Layer (SSL) technology and stored behind firewalls with restricted access.",
      "While we make every effort to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure. We strive to use commercially acceptable means to protect your data.",
    ],
  },
  {
    number: "05",
    title: "Your Rights",
    body: [
      "You have the right to request access to the personal information we hold about you, to request corrections of inaccurate data, and to request deletion of your personal information where it is no longer necessary for the purposes for which it was collected.",
      "To exercise any of these rights, please contact us using the information at the bottom of this page. We will respond to all requests within 30 days.",
    ],
  },
  {
    number: "06",
    title: "Cookies & Tracking",
    body: [
      "Our website may use cookies — small text files stored on your device — to enhance your browsing experience, remember preferences, and gather aggregate analytics data. Cookies do not contain personally identifiable information.",
      "You may choose to disable cookies through your browser settings at any time. Doing so may affect the functionality of certain features of our website, but will not prevent you from accessing our core content.",
    ],
  },
  {
    number: "07",
    title: "Third-Party Links",
    body: [
      "Our website may contain links to third-party websites for your convenience and reference. These external sites are not operated by Grace 101 Independent Living Home, and we have no control over their content, privacy practices, or policies.",
      "We encourage you to review the privacy policy of every website you visit. Inclusion of a link on our site does not imply our endorsement of that site's privacy practices.",
    ],
  },
  {
    number: "08",
    title: "Children's Privacy",
    body: [
      "Our services are designed for adults seeking independent living support, and our website is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13.",
      "If you believe we have inadvertently received information from a child under 13, please contact us immediately so we can promptly remove such information from our records.",
    ],
  },
  {
    number: "09",
    title: "Changes to This Policy",
    body: [
      "Grace 101 Independent Living Home reserves the right to update or modify this Privacy Policy at any time. When we do, we will revise the effective date at the top of this page.",
      "We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting the personal information we collect. Your continued use of our website after any changes constitutes your acceptance of those changes.",
    ],
  },
  {
    number: "10",
    title: "Contact Us",
    body: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please do not hesitate to reach out to us. We are committed to addressing all privacy-related inquiries promptly and with the care and respect you deserve.",
    ],
    isContact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-warm-white, #FFFDF8)" }}
    >
      {/* ─── Sticky Nav ─────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md"
        style={{
          backgroundColor: "rgba(0,23,47,0.95)",
          borderBottom: "1px solid rgba(216,163,51,0.2)",
        }}
      >
        {/* Back button */}
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
          style={{
            border: "1px solid rgba(216,163,51,0.4)",
            color: "#D8A333",
          }}
          aria-label="Return to homepage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Back to Home</span>
        </Link>

        {/* Logo */}
        <Link
          href="/"
          className="text-center"
          aria-label="Grace 101 Independent Living Home homepage"
        >
          <span
            className="block text-xs font-medium uppercase tracking-[0.3em]"
            style={{ color: "rgba(216,163,51,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            Est. with Grace
          </span>
          <span
            className="block text-xl font-bold tracking-wide"
            style={{
              color: "#FFFDF8",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              letterSpacing: "0.08em",
            }}
          >
            Grace 101
          </span>
        </Link>

        {/* Spacer to center logo */}
        <div className="w-[120px] sm:w-[140px]" aria-hidden="true" />
      </nav>

      {/* ─── Hero ───────────────────────────────────────────────────────────── */}
      <header
        className="relative overflow-hidden px-6 py-24 text-center md:py-36"
        style={{ backgroundColor: "#00172F" }}
      >
        {/* Radial glow accents */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: "900px",
              height: "600px",
              background:
                "radial-gradient(ellipse at center, rgba(216,163,51,0.18) 0%, rgba(216,163,51,0.04) 50%, transparent 75%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0"
            style={{
              width: "500px",
              height: "400px",
              background:
                "radial-gradient(ellipse at bottom left, rgba(216,163,51,0.1) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0"
            style={{
              width: "500px",
              height: "400px",
              background:
                "radial-gradient(ellipse at bottom right, rgba(216,163,51,0.08) 0%, transparent 70%)",
            }}
          />
          {/* Decorative horizontal line */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "1px",
              height: "100%",
              background:
                "linear-gradient(to bottom, transparent, rgba(216,163,51,0.15), transparent)",
            }}
          />
        </div>

        {/* Gold script accent */}
        <p
          className="relative mb-2 text-5xl md:text-7xl"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: "rgba(216,163,51,0.55)",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          Privacy
        </p>

        {/* Thin gold rule */}
        <div className="relative mx-auto mb-6 flex items-center justify-center gap-4">
          <div
            className="h-px flex-1"
            style={{
              maxWidth: "80px",
              background:
                "linear-gradient(to right, transparent, rgba(216,163,51,0.6))",
            }}
          />
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="5.5"
              y="0.5"
              width="7"
              height="7"
              rx="0.5"
              transform="rotate(45 5.5 0.5)"
              fill="#D8A333"
              fillOpacity="0.7"
            />
          </svg>
          <div
            className="h-px flex-1"
            style={{
              maxWidth: "80px",
              background:
                "linear-gradient(to left, transparent, rgba(216,163,51,0.6))",
            }}
          />
        </div>

        {/* Main heading */}
        <h1
          className="relative mx-auto max-w-3xl text-4xl font-light leading-tight md:text-6xl lg:text-7xl"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: "#FFFDF8",
            letterSpacing: "0.02em",
          }}
        >
          Your Privacy{" "}
          <em
            className="not-italic"
            style={{ color: "#D8A333", fontStyle: "italic" }}
          >
            Matters
          </em>
        </h1>

        {/* Subtitle */}
        <p
          className="relative mx-auto mt-6 max-w-xl text-sm leading-relaxed md:text-base"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "rgba(255,253,248,0.6)",
            letterSpacing: "0.05em",
          }}
        >
          Grace 101 Independent Living Home is committed to protecting the
          personal information of every individual we serve.
        </p>

        {/* Effective date badge */}
        <div className="relative mt-8 flex justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium uppercase tracking-widest"
            style={{
              border: "1px solid rgba(216,163,51,0.35)",
              color: "#D8A333",
              backgroundColor: "rgba(216,163,51,0.08)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#D8A333",
              }}
            />
            Effective {EFFECTIVE_DATE}
          </span>
        </div>

        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--color-warm-white, #FFFDF8))",
          }}
        />
      </header>

      {/* ─── Main Content ────────────────────────────────────────────────────── */}
      <main className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        {/* ── Introduction Card ──────────────────────────────────────── */}
        <section
          className="relative mb-16 overflow-hidden rounded-2xl p-8 md:p-12"
          style={{
            backgroundColor: "#FAF7EF",
            border: "1px solid rgba(216,163,51,0.25)",
            boxShadow:
              "0 4px 40px rgba(0,23,47,0.06), 0 1px 4px rgba(0,23,47,0.04)",
          }}
          aria-labelledby="intro-heading"
        >
          {/* Gold left accent bar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
            style={{
              background: "linear-gradient(to bottom, #D8A333, rgba(216,163,51,0.3))",
            }}
            aria-hidden="true"
          />
          {/* Decorative corner motif */}
          <div
            className="pointer-events-none absolute right-6 top-6 opacity-10"
            aria-hidden="true"
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="30" stroke="#D8A333" strokeWidth="1.5" />
              <circle cx="32" cy="32" r="20" stroke="#D8A333" strokeWidth="1" />
              <path d="M32 2 L32 62 M2 32 L62 32" stroke="#D8A333" strokeWidth="0.75" />
            </svg>
          </div>

          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "#D8A333", fontFamily: "Inter, sans-serif" }}
            id="intro-heading"
          >
            Our Commitment
          </p>
          <p
            className="mb-4 text-2xl font-light leading-snug md:text-3xl"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "#00172F",
            }}
          >
            Privacy is a cornerstone of dignity.
          </p>
          <p
            className="text-sm leading-loose md:text-base"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(0,23,47,0.7)",
            }}
          >
            This Privacy Policy describes how{" "}
            <strong style={{ color: "#00172F" }}>
              Grace 101 Independent Living Home
            </strong>{" "}
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and protects the
            information you share with us through our website and communications.
            We ask that you read this policy carefully, as it forms the basis of
            our relationship of trust with you.
          </p>
          <p
            className="mt-4 text-sm leading-loose md:text-base"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(0,23,47,0.7)",
            }}
          >
            By using this website, you consent to the data practices described
            in this policy. If you do not agree with any of these terms, please
            do not use our website.
          </p>
        </section>

        {/* ── Policy Section Cards ────────────────────────────────────── */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <section
              key={section.number}
              aria-labelledby={`section-${section.number}`}
              className="group relative overflow-hidden rounded-2xl transition-shadow duration-300"
              style={{
                backgroundColor:
                  idx % 2 === 0 ? "#FFFDF8" : "#F3EBDD",
                border: "1px solid rgba(216,163,51,0.18)",
                boxShadow:
                  "0 2px 20px rgba(0,23,47,0.04), 0 1px 3px rgba(0,23,47,0.03)",
              }}
            >
              {/* Gold left accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{
                  background:
                    "linear-gradient(to bottom, #D8A333 0%, rgba(216,163,51,0.2) 100%)",
                }}
                aria-hidden="true"
              />

              <div className="px-8 py-8 pl-12 md:px-12 md:pl-14">
                {/* Section number + title row */}
                <div className="mb-5 flex flex-wrap items-baseline gap-4">
                  <span
                    className="shrink-0 text-4xl font-light md:text-5xl"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: "rgba(216,163,51,0.35)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    {section.number}
                  </span>
                  <h2
                    id={`section-${section.number}`}
                    className="text-2xl font-light leading-tight md:text-3xl"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: "#00172F",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {section.title}
                  </h2>
                </div>

                {/* Thin rule */}
                <div
                  className="mb-6 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(216,163,51,0.4), rgba(216,163,51,0.05) 80%, transparent)",
                  }}
                  aria-hidden="true"
                />

                {/* Body text */}
                <div className="space-y-4">
                  {section.body.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm leading-[1.9] md:text-[15px]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "rgba(0,23,47,0.72)",
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Contact section extras */}
                {section.isContact && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      {
                        icon: (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        ),
                        label: "Email",
                        value: "dominque@grace101ilh.org",
                        href: "mailto:dominque@grace101ilh.org",
                      },
                      {
                        icon: (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 7.3 7.3l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        ),
                        label: "Phone",
                        value: "346.880.8696",
                        href: "tel:3468808696",
                      },
                      {
                        icon: (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        ),
                        label: "Mail",
                        value: "P.O. Box 60194\nHouston, TX 77205",
                        href: null,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col gap-2 rounded-xl p-5"
                        style={{
                          backgroundColor: "#00172F",
                          border: "1px solid rgba(216,163,51,0.2)",
                        }}
                      >
                        <span style={{ color: "#D8A333" }}>{item.icon}</span>
                        <p
                          className="text-xs font-semibold uppercase tracking-widest"
                          style={{
                            color: "rgba(216,163,51,0.65)",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm leading-relaxed transition-colors duration-200 hover:text-yellow-300"
                            style={{
                              color: "#FFFDF8",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            className="whitespace-pre-line text-sm leading-relaxed"
                            style={{
                              color: "#FFFDF8",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* ─── Bottom CTA Strip ────────────────────────────────────────────────── */}
      <footer
        className="relative overflow-hidden px-6 py-16"
        style={{ backgroundColor: "#00172F" }}
      >
        {/* Glow background */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "700px",
              height: "300px",
              background:
                "radial-gradient(ellipse, rgba(216,163,51,0.1) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Script accent */}
          <p
            className="mb-1 text-3xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: "rgba(216,163,51,0.5)",
            }}
            aria-hidden="true"
          >
            Reach Out
          </p>

          <h2
            className="mb-3 text-3xl font-light md:text-4xl"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "#FFFDF8",
              letterSpacing: "0.03em",
            }}
          >
            Questions About Your Privacy?
          </h2>
          <p
            className="mx-auto mb-10 max-w-md text-sm leading-relaxed"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,253,248,0.55)",
            }}
          >
            We&apos;re here to help. Reach out to our team and we&apos;ll
            address your questions with the care and respect you deserve.
          </p>

          {/* Contact details */}
          <div className="mx-auto mb-10 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              { label: "Email", value: "dominque@grace101ilh.org", href: "mailto:dominque@grace101ilh.org" },
              { label: "Phone", value: "346.880.8696", href: "tel:3468808696" },
              { label: "Mail", value: "P.O. Box 60194, Houston, TX 77205", href: null },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "rgba(216,163,51,0.6)", fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm transition-colors duration-200 hover:text-yellow-300"
                    style={{ color: "#FFFDF8", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p
                    className="text-sm"
                    style={{ color: "#FFFDF8", fontFamily: "Inter, sans-serif" }}
                  >
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            className="mx-auto mb-8 h-px"
            style={{
              maxWidth: "400px",
              background:
                "linear-gradient(to right, transparent, rgba(216,163,51,0.4), transparent)",
            }}
            aria-hidden="true"
          />

          {/* Back home CTA */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#D8A333",
              color: "#00172F",
              fontFamily: "Inter, sans-serif",
              boxShadow: "0 4px 24px rgba(216,163,51,0.35)",
            }}
            aria-label="Return to Grace 101 homepage"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Return Home
          </Link>

          {/* Copyright */}
          <p
            className="mt-10 text-xs"
            style={{
              color: "rgba(255,253,248,0.3)",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.06em",
            }}
          >
            &copy; {new Date().getFullYear()} Grace 101 Independent Living Home.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

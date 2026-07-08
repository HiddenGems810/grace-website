import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Grace 101 Independent Living Home",
  description:
    "Review the Terms of Use for Grace 101 Independent Living Home. Understand the conditions governing access and use of our website and services.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Use | Grace 101 Independent Living Home",
    description:
      "The terms and conditions governing your use of the Grace 101 Independent Living Home website.",
    url: "https://grace101ilh.org/terms-of-use",
    siteName: "Grace 101 Independent Living Home",
    type: "website",
  },
};

const EFFECTIVE_DATE = "July 1, 2026";

const sections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    body: `By accessing or using this website, you confirm that you are at least 18 years of age, have read and understood these Terms of Use, and agree to be bound by them. If you do not agree to these Terms, please discontinue use of this website immediately. Your continued use of the website following the posting of any changes constitutes your acceptance of those changes.`,
  },
  {
    number: "02",
    title: "Use of This Website",
    body: `This website is provided solely for informational purposes about Grace 101 Independent Living Home, its programs, services, and mission. You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit anyone else's use and enjoyment of the website. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.`,
  },
  {
    number: "03",
    title: "Intellectual Property",
    body: `All content on this website — including but not limited to text, photography, graphics, logos, icons, audio clips, digital downloads, and data compilations — is the property of Grace 101 Independent Living Home or its content suppliers and is protected by applicable copyright, trademark, and intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content without prior written permission from Grace 101 Independent Living Home.`,
  },
  {
    number: "04",
    title: "User Conduct",
    body: `You agree not to use this website to: transmit any unsolicited or unauthorized advertising or promotional material; knowingly transmit any data or material that contains viruses, Trojan horses, worms, or other malicious or technologically harmful material; attempt to gain unauthorized access to any portion of this website or its related systems or networks; engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website; or post or transmit any content that is defamatory, offensive, or otherwise objectionable.`,
  },
  {
    number: "05",
    title: "Disclaimer of Warranties",
    body: `This website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. Grace 101 Independent Living Home makes no representations or warranties regarding the accuracy, completeness, reliability, or suitability of the information and materials found on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.`,
  },
  {
    number: "06",
    title: "Limitation of Liability",
    body: `To the fullest extent permissible under applicable law, Grace 101 Independent Living Home shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or relating to your access to, use of, or inability to use this website, including any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via this website, even if advised of the possibility of such damages.`,
  },
  {
    number: "07",
    title: "Indemnification",
    body: `You agree to defend, indemnify, and hold harmless Grace 101 Independent Living Home and its officers, directors, employees, volunteers, agents, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the website, including, but not limited to, any use of the website's content, services, and products other than as expressly authorized in these Terms.`,
  },
  {
    number: "08",
    title: "Governing Law",
    body: `These Terms of Use and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the State of Texas, United States of America, without giving effect to any choice or conflict of law provision or rule. Any legal suit, action, or proceeding arising out of, or related to, these Terms of Use or the website shall be instituted exclusively in the federal or state courts located in Harris County, Texas.`,
  },
  {
    number: "09",
    title: "Modifications to Terms",
    body: `Grace 101 Independent Living Home reserves the right to revise and update these Terms of Use from time to time at our sole discretion. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised Terms of Use means that you accept and agree to the changes. We encourage you to check this page frequently for updates, as you are bound by the version of the Terms in effect at the time of your use.`,
  },
  {
    number: "10",
    title: "Contact Us",
    body: `If you have any questions, concerns, or comments about these Terms of Use, please contact us. We are committed to addressing your inquiries promptly and transparently.`,
    isContact: true,
  },
];

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[var(--color-warm-white)] font-sans">

      {/* ── Sticky Nav ─────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-[var(--color-navy-900)]/95 backdrop-blur-md border-b border-[rgba(216,163,51,0.2)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3 text-[var(--color-gold-400)] hover:text-[var(--color-gold-300)] transition-colors duration-200"
          >
            {/* Back arrow */}
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(216,163,51,0.4)] group-hover:border-[var(--color-gold-400)] group-hover:bg-[rgba(216,163,51,0.1)] transition-all duration-200">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 2L4 7L9 12"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm tracking-wider uppercase font-medium">
              Back to Home
            </span>
          </Link>

          <span className="font-display text-[var(--color-warm-white)] text-xl tracking-wide">
            Grace&nbsp;<span className="text-[var(--color-gold-500)]">101</span>
          </span>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden bg-[var(--color-navy-900)] min-h-[52vh] flex items-center">

        {/* Radial gradient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Left glow */}
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(216,163,51,0.18)_0%,transparent_70%)]" />
          {/* Right glow */}
          <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(216,163,51,0.12)_0%,transparent_65%)]" />
          {/* Bottom center glow */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(216,163,51,0.08)_0%,transparent_70%)]" />
        </div>

        {/* Decorative top rule */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-60"
        />

        {/* Bottom divider wave-like ornament */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 flex justify-center pb-0"
        >
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(216,163,51,0.3)] to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center w-full">
          {/* Script accent */}
          <p
            aria-hidden="true"
            className="font-script text-[var(--color-gold-400)] text-5xl md:text-6xl mb-4 opacity-85"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Terms
          </p>

          {/* Main heading */}
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl text-[var(--color-warm-white)] font-light tracking-tight leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Terms{" "}
            <span className="italic text-[var(--color-gold-400)]">of Use</span>
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-[var(--color-gold-500)] to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-500)]" />
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-[var(--color-gold-500)] to-transparent" />
          </div>

          {/* Effective date */}
          <p className="text-[var(--color-muted)] text-sm md:text-base tracking-widest uppercase font-medium">
            Effective Date:&nbsp;
            <span className="text-[var(--color-gold-300)]">{EFFECTIVE_DATE}</span>
          </p>
        </div>
      </header>

      {/* ── Introduction Card ──────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 -mt-0 pt-16 pb-8">
        <div className="relative rounded-2xl border border-[rgba(216,163,51,0.35)] bg-[var(--color-ivory)] shadow-[0_18px_60px_rgba(0,23,47,0.08)] overflow-hidden">
          {/* Gold left accent bar */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[var(--color-gold-500)] via-[var(--color-gold-400)] to-[var(--color-gold-500)]" />
          <div className="px-10 py-10 md:px-14 md:py-12">
            <p
              className="font-display text-2xl md:text-3xl font-light text-[var(--color-navy-900)] leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Welcome to Grace 101 Independent Living Home
            </p>
            <p className="text-[var(--color-text)] text-base md:text-lg leading-relaxed mb-4">
              These Terms of Use govern your access to and use of the Grace 101
              Independent Living Home website (the &quot;Website&quot;). Please read
              these terms carefully before using our site. This agreement is
              between you and Grace 101 Independent Living Home, a nonprofit
              organization dedicated to providing safe, supportive transitional
              housing for women rebuilding their lives with dignity, stability,
              and hope.
            </p>
            <p className="text-[var(--color-muted)] text-base leading-relaxed">
              These Terms apply to all visitors, users, and others who access
              or use the Website. By accessing the Website, you agree to these
              Terms. Questions? Contact us at{" "}
              <a
                href="mailto:dominque@grace101ilh.org"
                className="text-[var(--color-gold-dark,#A97514)] underline underline-offset-2 decoration-[rgba(216,163,51,0.5)] hover:text-[var(--color-gold-500)] transition-colors"
              >
                dominque@grace101ilh.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Section Cards ──────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-6 py-8 space-y-6" id="main-content">
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <article
              key={section.number}
              className={`relative rounded-2xl overflow-hidden border shadow-[0_8px_40px_rgba(0,23,47,0.06)] transition-shadow hover:shadow-[0_18px_60px_rgba(0,23,47,0.1)] duration-300 ${
                isEven
                  ? "bg-[var(--color-warm-white)] border-[rgba(216,163,51,0.2)]"
                  : "bg-[var(--color-cream)] border-[rgba(216,163,51,0.28)]"
              }`}
            >
              {/* Gold left accent bar */}
              <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[var(--color-gold-500)] via-[var(--color-gold-400)] to-transparent" />

              <div className="px-10 py-10 md:px-14 md:py-12 md:flex md:gap-10 md:items-start">
                {/* Section number */}
                <div className="flex-shrink-0 mb-5 md:mb-0">
                  <span
                    className="font-display text-6xl md:text-7xl font-light leading-none select-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "rgba(216,163,51,0.22)",
                      letterSpacing: "-0.02em",
                    }}
                    aria-hidden="true"
                  >
                    {section.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2
                    className="font-display text-2xl md:text-3xl font-semibold text-[var(--color-navy-900)] mb-4 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {section.title}
                  </h2>
                  <p className="text-[var(--color-text)] text-base md:text-[1.05rem] leading-relaxed">
                    {section.body}
                  </p>

                  {/* Contact details extra block */}
                  {section.isContact && (
                    <div className="mt-8 grid sm:grid-cols-3 gap-4">
                      {[
                        {
                          icon: (
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                              <path d="M2.5 6.5L10 11.5L17.5 6.5M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ),
                          label: "Email",
                          value: "dominque@grace101ilh.org",
                          href: "mailto:dominque@grace101ilh.org",
                        },
                        {
                          icon: (
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                              <path d="M2 3.5A1.5 1.5 0 013.5 2h1.68a1 1 0 01.97.757l.7 2.8a1 1 0 01-.287 1.007l-1.22 1.017a11.055 11.055 0 005.079 5.079l1.017-1.22a1 1 0 011.007-.287l2.8.7A1 1 0 0118 12.82V14.5A1.5 1.5 0 0116.5 16C8.492 16 2 9.508 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ),
                          label: "Phone",
                          value: "346.880.8696",
                          href: "tel:3468808696",
                        },
                        {
                          icon: (
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                              <path d="M10 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M10 2C6.686 2 4 4.686 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ),
                          label: "Mail",
                          value: "P.O. Box 60194, Houston, TX 77205",
                          href: undefined,
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-xl bg-[var(--color-navy-900)] p-5 flex flex-col gap-2"
                        >
                          <span className="text-[var(--color-gold-500)]">
                            {item.icon}
                          </span>
                          <span className="text-[var(--color-gold-300)] text-xs uppercase tracking-widest font-medium">
                            {item.label}
                          </span>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-[var(--color-warm-white)] text-sm leading-snug hover:text-[var(--color-gold-400)] transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-[var(--color-warm-white)] text-sm leading-snug">
                              {item.value}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </main>

      {/* ── Bottom CTA Strip ───────────────────────────────────────────────── */}
      <footer className="relative mt-20 bg-[var(--color-navy-900)] overflow-hidden">
        {/* Decorative top rule */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-50"
        />
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(216,163,51,0.1)_0%,transparent_60%)] pointer-events-none"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          {/* Script accent */}
          <p
            aria-hidden="true"
            className="font-script text-[var(--color-gold-400)] text-4xl mb-3 opacity-80"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Questions?
          </p>

          <h2
            className="font-display text-3xl md:text-4xl text-[var(--color-warm-white)] font-light mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We&rsquo;re here to help
          </h2>

          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-gradient-to-l from-[var(--color-gold-500)] to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-500)]" />
            <div className="h-px w-12 bg-gradient-to-r from-[var(--color-gold-500)] to-transparent" />
          </div>

          <p className="text-[var(--color-muted)] text-base mb-10 max-w-lg mx-auto leading-relaxed">
            If you have any questions about these Terms of Use, please don&rsquo;t
            hesitate to reach out to us directly.
          </p>

          {/* Contact info grid */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 flex-wrap">
            <a
              href="mailto:dominque@grace101ilh.org"
              className="group flex items-center gap-3 text-[var(--color-warm-white)] hover:text-[var(--color-gold-400)] transition-colors duration-200"
            >
              <span className="w-9 h-9 rounded-full border border-[rgba(216,163,51,0.35)] group-hover:border-[var(--color-gold-500)] group-hover:bg-[rgba(216,163,51,0.1)] flex items-center justify-center transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M2.5 6.5L10 11.5L17.5 6.5M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-sm md:text-base">dominque@grace101ilh.org</span>
            </a>

            <span className="hidden sm:block w-px h-6 bg-[rgba(216,163,51,0.3)]" aria-hidden="true" />

            <a
              href="tel:3468808696"
              className="group flex items-center gap-3 text-[var(--color-warm-white)] hover:text-[var(--color-gold-400)] transition-colors duration-200"
            >
              <span className="w-9 h-9 rounded-full border border-[rgba(216,163,51,0.35)] group-hover:border-[var(--color-gold-500)] group-hover:bg-[rgba(216,163,51,0.1)] flex items-center justify-center transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M2 3.5A1.5 1.5 0 013.5 2h1.68a1 1 0 01.97.757l.7 2.8a1 1 0 01-.287 1.007l-1.22 1.017a11.055 11.055 0 005.079 5.079l1.017-1.22a1 1 0 011.007-.287l2.8.7A1 1 0 0118 12.82V14.5A1.5 1.5 0 0116.5 16C8.492 16 2 9.508 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-sm md:text-base">346.880.8696</span>
            </a>

            <span className="hidden sm:block w-px h-6 bg-[rgba(216,163,51,0.3)]" aria-hidden="true" />

            <span className="flex items-center gap-3 text-[var(--color-muted)] text-sm md:text-base">
              <span className="w-9 h-9 rounded-full border border-[rgba(216,163,51,0.2)] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 2C6.686 2 4 4.686 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              P.O. Box 60194, Houston, TX&nbsp;77205
            </span>
          </div>

          {/* Back to home CTA */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--color-gold-500)] text-[var(--color-navy-900)] font-semibold text-sm tracking-wider uppercase hover:bg-[var(--color-gold-400)] active:scale-[0.98] transition-all duration-200 shadow-[0_8px_32px_rgba(216,163,51,0.35)]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Return to Home
          </Link>

          {/* Bottom fine print */}
          <p className="mt-12 text-[var(--color-muted)] text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Grace 101 Independent Living Home. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

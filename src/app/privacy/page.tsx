import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { SITE } from "@/lib/constants/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Woodlands Manor Farm collects, uses and protects your personal data.",
  alternates: { canonical: "/privacy/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      eyebrow="Woodlands Manor Farm · Legal"
      title="Privacy"
      titleAccent="policy"
      lastUpdated="February 2024"
      intro={
        <p style={{ marginBottom: 32 }}>
          This privacy policy explains how Woodlands Manor Farm Ltd (&ldquo;we&rdquo;,
          &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses and protects your personal data
          when you book a stay, contact us or use this website. We are the data controller for
          the purposes of the UK GDPR and Data Protection Act 2018.
        </p>
      }
      sections={[
        {
          id: "data-collected",
          title: "What data we collect",
          content: (
            <>
              <p>We collect the following information when you make a booking or enquiry:</p>
              <ul>
                <li>Your name, address, phone number and email address</li>
                <li>Booking details: dates, party size, special requests, dietary needs</li>
                <li>Payment details (processed securely by our payment provider — we never store card numbers)</li>
                <li>Any correspondence between us</li>
                <li>Basic website analytics (page views, device type) via privacy-friendly analytics</li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-use",
          title: "How we use your data",
          content: (
            <>
              <p>We use your data to:</p>
              <ul>
                <li>Process your booking and accept payment</li>
                <li>Communicate with you about your stay (arrival info, follow-ups)</li>
                <li>Issue receipts and tax-compliant invoices</li>
                <li>Respond to enquiries you send us</li>
                <li>Send you marketing emails — only if you have opted in</li>
                <li>Comply with our legal obligations (tax, accounting, fraud prevention)</li>
              </ul>
            </>
          ),
        },
        {
          id: "legal-basis",
          title: "Legal basis",
          content: (
            <p>
              We process your data on the basis of contract performance (for bookings),
              legitimate interest (for replying to enquiries and improving our service), legal
              obligation (for tax records) and consent (for marketing).
            </p>
          ),
        },
        {
          id: "sharing",
          title: "Who we share your data with",
          content: (
            <>
              <p>We share your data only with:</p>
              <ul>
                <li>Our booking platform (Supercontrol) — to process the booking</li>
                <li>Our payment provider — to process payment securely</li>
                <li>Our accountants — for tax and accounting purposes</li>
                <li>Cleaning &amp; maintenance team — only your name and dates, not personal details</li>
              </ul>
              <p>We <strong>never sell or share your data with third parties</strong> for marketing.</p>
            </>
          ),
        },
        {
          id: "retention",
          title: "How long we keep your data",
          content: (
            <p>
              Booking data is retained for 7 years to comply with UK tax law. Marketing data is
              retained until you unsubscribe. Enquiries that don&rsquo;t result in a booking are
              deleted after 12 months.
            </p>
          ),
        },
        {
          id: "your-rights",
          title: "Your rights",
          content: (
            <>
              <p>Under UK GDPR you have the right to:</p>
              <ul>
                <li>Request a copy of the personal data we hold about you</li>
                <li>Ask us to correct or delete your data</li>
                <li>Withdraw consent for marketing at any time</li>
                <li>Object to our processing or restrict it</li>
                <li>Lodge a complaint with the Information Commissioner&rsquo;s Office (ICO)</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a href={`mailto:${SITE.contact.email}`} style={{ color: "var(--color-violet)" }}>
                  {SITE.contact.email}
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "cookies",
          title: "Cookies",
          content: (
            <p>
              We use a minimal set of cookies for site functionality and basic analytics. We do
              not use advertising cookies, retargeting pixels or third-party trackers. You can
              disable cookies in your browser at any time without affecting your ability to book.
            </p>
          ),
        },
        {
          id: "contact",
          title: "Contact us",
          content: (
            <p>
              If you have any questions about this privacy policy or how we handle your data,
              contact Andy Peters at{" "}
              <a href={`mailto:${SITE.contact.email}`} style={{ color: "var(--color-violet)" }}>
                {SITE.contact.email}
              </a>{" "}
              or {SITE.contact.phoneDisplay}.
            </p>
          ),
        },
      ]}
    />
  );
}

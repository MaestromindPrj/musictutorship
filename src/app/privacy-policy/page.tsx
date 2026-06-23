import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Music Tutorship",
  description: "Read the Privacy Policy of Music Tutorship. Learn about how we collect, use, protect, and handle your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="main-wrapper main-content bg-white">
      <section className="legal-header">
        <div className="container">
          <span className="legal-subtitle">LEGAL PORTAL</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-meta">Last Updated: June 2026</p>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="container legal-container-narrow">
          <div className="legal-intro">
            At Music Tutorship, we value and respect the privacy of our students and visitors. This Privacy Policy outlines the type of information we collect, how we use it, and your rights concerning your personal data.
          </div>

          <div className="legal-grid">
            <div className="legal-item">
              <h2 className="legal-section-title">1. Student Privacy</h2>
              <p>
                We are committed to protecting the privacy of all our users, including students under the age of 18. If you are under 18, you must use our website and services only with the supervision and consent of a parent or legal guardian.
              </p>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">2. Information We Collect</h2>
              <p>
                We may collect the following personal information through secure and encrypted channels:
              </p>
              <ul className="legal-list">
                <li>Name</li>
                <li>Email address</li>
                <li>Date of birth</li>
                <li>Government-issued ID or PAN card (for identification purposes)</li>
                <li>Credit card or payment details (for transactions)</li>
                <li>Tax ID or identification documents (for mentors or vendors)</li>
                <li>Device and browser data used to access our services</li>
              </ul>
              <p>
                This information is collected through registrations, subscriptions, course enrollments, promotions, and usage of our services.
              </p>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">3. Purpose of Data Collection</h2>
              <p>
                Your information helps us to:
              </p>
              <ul className="legal-list">
                <li>Register and manage your account</li>
                <li>Deliver the services and mentorship you have enrolled in</li>
                <li>Personalize your learning experience</li>
                <li>Communicate relevant updates about our courses, services, and offers</li>
                <li>Improve our offerings and website performance</li>
              </ul>
              <p className="legal-emphasis">
                We do not sell your data.
              </p>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">4. Email Usage Policy</h2>
              <p>
                If you&apos;re enrolled in one of our programs, we may use your email to:
              </p>
              <ul className="legal-list">
                <li>Send course-related updates and instructions</li>
                <li>Share promotional content only if you&apos;ve opted in</li>
              </ul>
              <p>
                If you&apos;re a mentor, vendor, or business partner, your email may be used to share important business updates.
              </p>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">5. Sharing of Information</h2>
              <p>
                We only share your data:
              </p>
              <ul className="legal-list">
                <li>With third-party vendors essential for service delivery (e.g., payment processors)</li>
                <li>With strict confidentiality agreements</li>
                <li>As required or permitted by law</li>
              </ul>
              <p className="legal-emphasis">
                We do not sell or rent your personal data to anyone.
              </p>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">6. Comments and Media Uploads</h2>
              <p>
                When visitors leave comments:
              </p>
              <ul className="legal-list">
                <li>We collect data provided in the comment form</li>
                <li>The visitor&apos;s IP address and browser user agent may be stored to detect spam</li>
                <li>If images are uploaded, please ensure location (EXIF GPS) data is removed. Embedded media may behave as if you&apos;re visiting the third-party website directly.</li>
              </ul>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">7. Cookies and Web Data</h2>
              <p>
                We use cookies to enhance your browsing experience. Cookies help us:
              </p>
              <ul className="legal-list">
                <li>Save login and session data</li>
                <li>Track activity for a better user experience</li>
              </ul>
              <p>
                You can manage cookie preferences in your browser settings.
              </p>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">8. Data Retention</h2>
              <ul className="legal-list">
                <li>Comments and associated metadata are retained indefinitely</li>
                <li>Registered user data remains until deleted by the user or administrator</li>
                <li>Login and session cookies expire in 2 days to 2 weeks, based on your settings</li>
              </ul>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">9. Your Rights Over Your Data</h2>
              <p>
                You may request:
              </p>
              <ul className="legal-list">
                <li>An exported file of your personal data</li>
                <li>Deletion of your personal data (subject to legal or security requirements)</li>
              </ul>
              <p>
                To exercise these rights, please email us at <a href="mailto:info@musictutorship.in" className="legal-link">info@musictutorship.in</a>.
              </p>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">10. Data Security and Transfers</h2>
              <p>
                We use encrypted and secure technologies to protect your data. Visitor comments may be screened through automated spam detection tools.
              </p>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">11. Updates to This Policy</h2>
              <p>
                This policy may be updated from time to time. Changes will be posted here and will take effect upon publication.
              </p>
            </div>

            <div className="legal-contact-box">
              <h3 className="legal-contact-title">Questions or Concerns?</h3>
              <p>
                For any privacy-related queries, please contact our team at:
              </p>
              <a href="mailto:info@musictutorship.in" className="legal-contact-email">
                info@musictutorship.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
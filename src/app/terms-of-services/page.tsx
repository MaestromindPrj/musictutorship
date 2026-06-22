import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Music Tutorship",
  description: "Read the Terms and Conditions of Music Tutorship. Learn about our code of conduct, courses guidelines, refund policies, and batch changes.",
};

export default function TermsOfServicesPage() {
  return (
    <main className="main-wrapper main-content bg-white">
      <section className="legal-header">
        <div className="container">
          <span className="legal-subtitle">STUDENT AGREEMENT</span>
          <h1 className="legal-title">Terms & Conditions</h1>
          <p className="legal-meta">Last Updated: June 2026</p>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="container legal-container-narrow">
          <div className="legal-intro">
            Welcome to Music Tutorship. By enrolling in our programs, you agree to the terms outlined below. These ensure a respectful, focused, and professional learning environment for all.
          </div>

          <div className="legal-grid">
            <div className="legal-item">
              <h2 className="legal-section-title">1. Code of Conduct</h2>
              <p>
                All classes are structured learning environments. Students are expected to:
              </p>
              <ul className="legal-list">
                <li>Log in at least 10 minutes before the session using their full registered name.</li>
                <li>Keep video ON and microphone muted unless prompted.</li>
                <li>Attend from a quiet, well-lit space without distractions.</li>
                <li>Dress appropriately and stay seated throughout the class.</li>
                <li>Avoid multitasking, eating, or lying down during sessions.</li>
                <li>Use the chat only as instructed by the mentor.</li>
                <li>Do not record, share, or distribute any class content or links.</li>
                <li>Refrain from sharing personal contact details in class.</li>
                <li>Avoid organizing unofficial sessions or groups without approval.</li>
              </ul>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">2. Course-Specific Guidelines</h2>
              
              <h3 className="legal-subsection-title">Complete Music Production Mastery (Group Program):</h3>
              <ul className="legal-list">
                <li>Missed sessions will not be repeated. However, recorded sessions will be provided.</li>
                <li>Substitute mentors may conduct sessions if the original mentor is unavailable.</li>
                <li>If no substitute is available, the session will be rescheduled.</li>
                <li>Extra sessions can be booked for an additional fee, subject to mentor availability.</li>
              </ul>

              <h3 className="legal-subsection-title">One-on-One Music Production Mentorship:</h3>
              <ul className="legal-list">
                <li>Free rescheduling is allowed with prior notice.</li>
                <li>Missed classes can be rescheduled directly with the mentor.</li>
                <li>Additional sessions may be booked based on mentor availability.</li>
              </ul>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">3. Use of Course Material</h2>
              <p>
                All learning content is strictly for enrolled students only. Redistribution, reproduction, or sharing of any material or live class links is prohibited.
              </p>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">4. Online Class Etiquette</h2>
              <p>
                To maintain a smooth and focused learning experience:
              </p>
              <ul className="legal-list">
                <li>Keep your microphone muted when not speaking.</li>
                <li>Avoid background noise, distractions, or unrelated browsing.</li>
                <li>Participate actively, be attentive on video, and avoid unnecessary movement.</li>
                <li>Avoid typing sounds and keep all stationery ready in advance.</li>
              </ul>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">5. Disciplinary Policy</h2>
              <p>
                Violation of the code of conduct may lead to:
              </p>
              <ul className="legal-list">
                <li>Verbal warnings</li>
                <li>Temporary communication restrictions</li>
                <li>Suspension from sessions</li>
                <li>Removal from the course without refund in serious cases</li>
              </ul>
              <p>
                Examples of unacceptable behavior include:
              </p>
              <ul className="legal-list">
                <li>Class disruption</li>
                <li>Sharing or recording class content</li>
                <li>Inappropriate messages, links, or conduct</li>
                <li>Repeated absences or failure to follow guidelines</li>
              </ul>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">6. Media Consent</h2>
              <p>
                By joining our sessions, you consent to Music Tutorship capturing photos, videos, or recordings during sessions. These may be used for educational or promotional purposes across platforms without further approval.
              </p>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">7. Batch and Schedule Change Policy</h2>
              <p>
                For Complete Music Production Mastery:
              </p>
              <ul className="legal-list">
                <li>A batch change is only allowed if the new batch has fewer than 5 students.</li>
                <li>A one-time administrative fee of ₹2500 applies.</li>
              </ul>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">8. Refund Policy</h2>
              <p>
                All course fees are non-refundable. Refunds may be granted only in rare, exceptional cases at the sole discretion of Music Tutorship.
              </p>
            </div>

            <div className="legal-item">
              <h2 className="legal-section-title">9. Extra Sessions</h2>
              <p>
                Make-up sessions are not included. However, additional sessions can be booked for an extra fee, subject to mentor availability.
              </p>
            </div>

            <div className="legal-contact-box">
              <h3 className="legal-contact-title">Contact Information</h3>
              <p>
                If you have questions or require assistance, please contact us at:
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
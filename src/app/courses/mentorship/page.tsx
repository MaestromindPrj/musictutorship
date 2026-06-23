import "../../../styles/course-detail.css";
import Link from "next/link";

export default function mentorship() {
  return (
    <>
      <section className="course-detail-hero">
        <div className="container">

          <span className="course-detail-overline">
            PREMIUM MENTORSHIP
          </span>

          <h1 className="course-detail-title">
            One-on-One Music Production Mentorship
          </h1>

          <p className="course-detail-description">
           Get personalized guidance and accelerate your music production journey with our exclusive 1-on-1 mentorship program.
          </p>

          <div className="course-detail-stats">

            <div className="course-stat-card">
              <img
                src="/images/skill.svg"
                alt="Skill Level"
                className="course-stat-icon"
              />

              <div>
                <h3>All Levels</h3>
                <span>Skill Level</span>
              </div>
            </div>

            <div className="course-stat-card">
              <img
                src="/images/duration.svg"
                alt="Duration"
                className="course-stat-icon"
              />

              <div>
                <h3>Flexible Duration</h3>
                <span>Duration</span>
              </div>
            </div>

            <div className="course-stat-card">
              <img
                src="/images/students.svg"
                alt="Class Size"
                className="course-stat-icon"
              />

              <div>
                <h3>Individual Sessions</h3>
                <span>Class Size</span>
              </div>
            </div>

          </div>

          <a
            href="/contact"
            className="course-detail-cta"
          >
            APPLY NOW
          </a>

        </div>
      </section>

      <section className="curriculum-section">
        <div className="container">

          <div className="curriculum-header">
            <h2 className="curriculum-title">
              Course Curriculum
            </h2>

            <p className="curriculum-subtitle">
              Comprehensive learning path designed by industry experts
            </p>
          </div>

          <div className="curriculum-list">

            <div className="curriculum-card">
              <h3>Module 1: Initial Assessment & Goal Setting</h3>

              <ol>
                <li>Skill level evaluation</li>
                <li>Goal identification and planning</li>
                <li>Customized learning path creation</li>
                <li>Resource and equipment assessment</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>Module 2: Personalized Learning Modules</h3>

              <ol>
                <li>Tailored lessons based on your interests</li>
                <li>Genre-specific techniques and styles</li>
                <li>Advanced production workflows</li>
                <li>Creative problem-solving approaches</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>Module 3: Project-Based Learning</h3>

              <ol>
                <li>Work on real music projects</li>
                <li>Collaborative production opportunities</li>
                <li>Portfolio development</li>
                <li>Professional project management</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>Module 4: Industry Insights & Networking</h3>

              <ol>
                <li>Music industry trends and opportunities</li>
                <li>Professional networking strategies</li>
                <li>Building your brand as a producer</li>
                <li>Monetizing your music production skills</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>Module 5: Career Development</h3>

              <ol>
                <li>Portfolio review and optimization</li>
                <li>Job search strategies in music industry</li>
                <li>Freelance and entrepreneurship guidance</li>
                <li>Long-term career planning</li>
              </ol>
            </div>

          </div>

        </div>
      </section>
      
      <section className="course-cta">
        <div className="container">

          <div className="course-cta-content">
            <h2 className="course-cta-title">
              Ready To Start Your Musical Journey?
            </h2>

            <p className="course-cta-description">
              Join thousands of students who have transformed their passion into
              professional skills.
            </p>

            <div className="course-cta-actions">
              <Link
                href="/contact"
                className="course-cta-primary"
              >
                APPLY NOW
              </Link>

              <Link
                href="/courses"
                className="course-cta-secondary"
              >
                BACK TO COURSES
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
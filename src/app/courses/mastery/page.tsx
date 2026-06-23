
import "../../../styles/course-detail.css";
import Link from "next/link";

export default function mastery() {
  return (
    <>
      <section className="course-detail-hero">
        <div className="container">

          <span className="course-detail-overline">
            POPULAR CHOICE
          </span>

          <h1 className="course-detail-title">
            Complete Music Production Mastery Course
          </h1>

          <p className="course-detail-description">
            Master the art of music production from beginner to advanced level with our comprehensive group learning program.
          </p>

          <div className="course-detail-stats">

            <div className="course-stat-card">
              <img
                src="/images/skill.svg"
                alt="Skill Level"
                className="course-stat-icon"
              />

              <div>
                <h3>Beginner To Advanced</h3>
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
                <h3>12 Months</h3>
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
                <h3>15 Students Per Batch</h3>
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
              <h3>Module 1: Foundations Of Music Production</h3>

              <ol>
                <li>Introduction to Digital Audio Workstations (DAWs)</li>
                <li>Understanding audio interfaces and MIDI</li>
                <li>Basic music theory for producers</li>
                <li>Setting up your home studio</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>Module 2: Recording Techniques</h3>

              <ol>
                <li>Microphone placement and techniques</li>
                <li>Recording vocals and instruments</li>
                <li>Multi-track recording</li>
                <li>Managing recording sessions</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>Module 3: Mixing And Sound Design</h3>

              <ol>
                <li>EQ, compression, and effects</li>
                <li>Creating depth with reverb and delay</li>
                <li>Sound design and synthesis</li>
                <li>Automation and dynamic processing</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>Module 4: Advanced Production Techniques</h3>

              <ol>
                <li>Genre-specific production styles</li>
                <li>Collaboration with other musicians</li>
                <li>Creative sampling and remixing</li>
                <li>Building your unique sound</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>Module 5: Mastering And Distribution</h3>

              <ol>
                <li>Audio mastering fundamentals</li>
                <li>Preparing tracks for distribution</li>
                <li>Digital platforms and streaming</li>
                <li>Building your music career</li>
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
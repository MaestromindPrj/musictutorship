import "../../../styles/course-detail.css";
import Link from "next/link";

export default function bootcamp() {
  return (
    <>
      <section className="course-detail-hero">
        <div className="container">

          <h1 className="course-detail-title">
            Essential Producer Bootcamp: Launch Your Music Career in 3 Months
          </h1>

          <p className="course-detail-description">
            Intensive Learning Path from Beginner to Intermediate Level
          </p>

          <div className="course-detail-stats">

            <div className="course-stat-card">
              <img
                src="/images/duration.svg"
                alt="Duration"
                className="course-stat-icon"
              />

              <div>
                <h3>3 Months</h3>
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
                <span>Batch Size</span>
              </div>
            </div>

            <div className="course-stat-card">
              <img
                src="/images/video.svg"
                alt="Skill Level"
                className="course-stat-icon"
              />

              <div>
                <h3>Twice Weekly Sessions</h3>
                <span>Format</span>
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
              <h3>week 1-2: Production Fundamentals & DAW Setup</h3>

              <ol>
                <li>Introduction to Music Production</li>
                <li>DAW Installation & Basic Navigation</li>
                <li>Audio Fundamentals & File Management</li>
                <li>Creating Your First Beat</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>week 3-4: Beat Making & Rhythm Mastery</h3>

              <ol>
                <li>Drum Programming Essentials</li>
                <li>Creating Grooves & Patterns</li>
                <li>Sample Selection & Manipulation</li>
                <li>Building Dynamic Rhythms</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>week 5-6: Melody & Chord Progressions</h3>

              <ol>
                <li>Basic Music Theory for Producers</li>
                <li>Creating Catchy Melodies</li>
                <li>Chord Progression Fundamentals</li>
                <li>Bass Line Construction</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>week 7-8: Sound Design & Creative Processing</h3>

              <ol>
                <li>Basic Synthesis Techniques</li>
                <li>Audio Effects & Processing</li>
                <li>Creating Unique Sounds</li>
                <li>Layering & Arrangement</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>week 9-10: Mixing Fundamentals</h3>

              <ol>
                <li>EQ & Compression Basics</li>
                <li>Creating Space with Reverb</li>
                <li>Balancing Mix Elements</li>
                <li>Professional Mixing Tips</li>
              </ol>
            </div>

            <div className="curriculum-card">
              <h3>week 11-12: Track Completion & Career Launch</h3>

              <ol>
                <li>Finalizing Your Productions</li>
                <li>Basic Mastering Concepts</li>
                <li>Sharing Your Music Online</li>
                <li>Building Your Producer Identity</li>
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
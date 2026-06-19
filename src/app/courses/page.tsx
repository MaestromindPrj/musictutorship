"use client";

import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CourseHero from "@/components/course-hero/course-hero";


export default function CoursesPage() {
  return (
    <>
      <Navbar />

      <main className="courses-page">

        <CourseHero />

        <section id="courseprograms" className="section-padding programs-section">
          <div className="container">
            <div className="programs-header">
              <span className="section-overline">LEARNING PATHS</span>
              <h2 className="section-title">Our Programs</h2>
            </div>
            
            <div className="programs-grid">
             
              <div className="program-card" style={{ transitionDelay: "0.1s" }}>
                <span className="card-overline">01 / FOUNDATION</span>
                <h3 className="card-title">Mastery Course</h3>
                <p className="card-subtitle">From Beginner to Advanced</p>
                
                <ul className="card-list">
                  <li className="card-list-item">
                    <span className="card-list-icon">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4.5" stroke="currentColor" />
                      </svg>
                    </span>
                    Setting up your home studio
                  </li>
                  <li className="card-list-item">
                    <span className="card-list-icon">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4.5" stroke="currentColor" />
                      </svg>
                    </span>
                    Basic music theory for producers
                  </li>
                </ul>
                
                <Link href="/courses/mastery" className="btn-card-ghost">
                  LEARN MORE
                </Link>
              </div>

              <div className="program-card card-featured" style={{ transitionDelay: "0.25s" }}>
                <span className="card-badge">POPULAR CHOICE</span>
                <span className="card-overline">02 / INTENSIVE</span>
                <h3 className="card-title">Bootcamp</h3>
                <p className="card-subtitle">From Beginner to Advanced</p>
                
                <ul className="card-list">
                  <li className="card-list-item">
                    <span className="card-list-icon" style={{ borderColor: 'transparent' }}>
                      <span className="card-list-icon">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4.5" stroke="currentColor" />
                      </svg>
                    </span>
                    </span>
                    Access to exclusive producer community
                  </li>
                  <li className="card-list-item">
                    <span className="card-list-icon" style={{ borderColor: 'transparent' }}>
                      <span className="card-list-icon">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4.5" stroke="currentColor" />
                      </svg>
                    </span>
                    </span>
                    Essential software training (DAW of choice)
                  </li>
                </ul>
                
                <Link href="/courses/bootcamp" className="btn-card-solid">
                  ENROLL NOW
                </Link>
              </div>

           
              <div className="program-card" style={{ transitionDelay: "0.4s" }}>
                <span className="card-badge-premium">PREMIUM TIER</span>
                <span className="card-overline">03 / PERSONALIZED</span>
                <h3 className="card-title">1-on-1 Mentorship</h3>
                <p className="card-subtitle">Personalized learning experience</p>
                
                <ul className="card-list">
                  <li className="card-list-item">
                    <span className="card-list-icon" style={{ borderColor: 'transparent' }}>
                      <span className="card-list-icon">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4.5" stroke="currentColor" />
                      </svg>
                    </span>
                    </span>
                    Flexible Scheduling
                  </li>
                  <li className="card-list-item">
                    <span className="card-list-icon">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4.5" stroke="currentColor" />
                      </svg>
                    </span>
                    Advanced production workflows
                  </li>
                </ul>
                
                <Link href="/courses/mentorship" className="btn-card-ghost">
                  APPLY NOW
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="studio-section">
            <div className="container">
                <div className="studio-image-wrapper">

                    <img
                        src="/images/courses-hero.png"
                        alt="Professional music production studio"
                        className="studio-image"
                    />

                    <div className="studio-content">
                        <span className="studio-overline">
                        THE ENVIRONMENT
                        </span>

                        <h2 className="studio-title">
                        Professional Studio Standards
                        </h2>
                    </div>

                 </div>
             </div>
        </section>

        <section className="cta-section">
            <div className="cta-container">
                <div className="cta-content">

                    <h2 className="cta-title">
                        Start Learning Today
                    </h2>

                    <p className="cta-description">
                        Take the first step towards sonic excellence.
                        Join our community of producers and transform
                        your creative workflow with professional guidance.
                    </p>

                    <button className="cta-button">
                        BOOK YOUR FREE DEMO
                    </button>

                </div>
            </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
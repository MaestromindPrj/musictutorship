"use client";

import { useState } from "react";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import BookingModal from "@/components/booking/BookingModal";
import "../../styles/courses.css";

export default function CoursesClient() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingProgram, setBookingProgram] = useState<"Mastery Course" | "Bootcamp" | "1-on-1 Mentorship">("Bootcamp");

  const openBookingModal = (program: "Mastery Course" | "Bootcamp" | "1-on-1 Mentorship" = "Bootcamp") => {
    setBookingProgram(program);
    setIsBookingOpen(true);
  };

  return (
    <>
      <main className="courses-page">
        <Hero
          overline="EDUCATION PATHWAYS"
          title="Our Programs"
          desc="Choose your musical journey. From foundational basics to advanced studio techniques, our curated programs are designed for clarity and creative mastery."
          primaryCtaText="EXPLORE ALL"
          primaryCtaLink="#courseprograms"
          secondaryCtaText="ENQUIRE NOW"
          secondaryCtaLink="/contact"
        />

        <section id="courseprograms" className="section-padding programs-section">
          <div className="container">
            <div className="programs-header">
              <span className="section-overline">LEARNING PATHS</span>
              <h2 className="section-title">Our Programs</h2>
            </div>
            
            <div className="programs-grid">
              {/* Mastery Course */}
              <div className="program-card" style={{ transitionDelay: "0.1s" }}>
                <span className="card-overline">01 / FOUNDATION</span>
                <h3 className="card-title">Complete Music Production Mastery Course</h3>
                <p className="card-subtitle">From Beginner to Advanced</p>
                
                <ul className="card-list">
                  <li className="card-list-item">
                    <span className="card-list-icon">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4.5" stroke="currentColor" />
                      </svg>
                    </span>
                    25 students per batch
                  </li>
                  <li className="card-list-item">
                    <span className="card-list-icon">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4.5" stroke="currentColor" />
                      </svg>
                    </span>
                    12 months intensive program
                  </li>
                </ul>
                
                <div className="card-buttons-row">
                  <Link href="/courses/mastery" className="btn-card-ghost">
                    LEARN MORE
                  </Link>
                  <Link href="/contact" className="btn-card-solid">
                    ENROLL NOW
                  </Link>
                </div>
              </div>

              {/* Bootcamp */}
              <div className="program-card card-featured" style={{ transitionDelay: "0.25s" }}>
                <span className="card-badge">POPULAR CHOICE</span>
                <span className="card-overline">02 / INTENSIVE</span>
                <h3 className="card-title">Producer Transformation Path</h3>
                <p className="card-subtitle">From Intermediate to Advanced</p>
                
                <ul className="card-list">
                  <li className="card-list-item">
                    <span className="card-list-icon" style={{ borderColor: 'transparent' }}>
                      <span className="card-list-icon">
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                          <circle cx="5" cy="5" r="4.5" stroke="currentColor" />
                        </svg>
                      </span>
                    </span>
                    13 Students per batch
                  </li>
                  <li className="card-list-item">
                    <span className="card-list-icon" style={{ borderColor: 'transparent' }}>
                      <span className="card-list-icon">
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                          <circle cx="5" cy="5" r="4.5" stroke="currentColor" />
                        </svg>
                      </span>
                    </span>
                    4 Months + Internship
                  </li>
                </ul>
                
                <div className="card-buttons-row">
                  <Link href="/courses/bootcamp" className="btn-card-ghost">
                    LEARN MORE
                  </Link>
                  <Link href="/contact" className="btn-card-solid">
                    ENROLL NOW
                  </Link>
                </div>
              </div>
              <div className="program-card" style={{ transitionDelay: "0.4s" }}>
                <span className="card-badge-premium">PREMIUM TIER</span>
                <span className="card-overline">03 / PERSONALIZED</span>
                <h3 className="card-title">1-on-1 Music Production Mentorship</h3>
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
                    Personalised Curriculum
                  </li>
                </ul>
                
                <div className="card-buttons-row">
                  <Link href="/courses/mentorship" className="btn-card-ghost">
                    LEARN MORE
                  </Link>
                  <Link href="/contact" className="btn-card-solid">
                    ENROLL NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="studio-section">
          <div className="container">
            <div className="studio-image-wrapper">
              <img
                src="/images/hero-img.png"
                alt="Professional music production studio"
                className="studio-image"
              />
              <div className="studio-content">
                <span className="studio-overline">THE ENVIRONMENT</span>
                <h2 className="studio-title">Professional Studio Standards</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-container">
            <div className="cta-content">
              <h2 className="cta-title">Start Learning Today</h2>
              <p className="cta-description">
                Take the first step towards sonic excellence.
                Join our community of producers and transform
                your creative workflow with professional guidance.
              </p>
              
              <a 
                href="#enquire" 
                className="btn-primary-white"
                onClick={(e) => {
                  e.preventDefault();
                  openBookingModal("Bootcamp");
                }}
              >
                BOOK YOUR FREE DEMO
              </a>
            </div>
          </div>
        </section>
      </main>

      {isBookingOpen && (
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
          initialProgram={bookingProgram} 
        />
      )}
    </>
  );
}

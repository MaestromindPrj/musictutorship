"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import BookingModal from "@/components/booking/BookingModal";
import "../styles/home.css"

const testimonials = [
  {
    id: 1,
    quote: "Before this bootcamp, I had no idea where to start. Vijay broke everything down so simply. Within 3 months, I released my first track!",
    name: "Arjun M.",
    title: "Now releasing on Spotify",
    badge: "First release in 3 months",
    avatar: "A"
  },
  {
    id: 2,
    quote: "The hands-on approach was exactly what I needed. Every session built on the last, and I never felt lost. Best investment I've made.",
    name: "Priya S.",
    title: "Independent Artist",
    badge: "10K+ streams on debut",
    avatar: "P"
  },
  {
    id: 3,
    quote: "I tried YouTube tutorials for a year with no progress. This bootcamp gave me structure and accountability. Now I produce daily.",
    name: "Rahul K.",
    title: "Bedroom Producer",
    badge: "Daily production habit",
    avatar: "R"
  },
  {
    id: 4,
    quote: "As a singer, learning production felt overwhelming. Vijay made it accessible. Now I produce my own tracks instead of paying others.",
    name: "Sneha D.",
    title: "Singer-Songwriter",
    badge: "Self-producing all tracks",
    avatar: "S"
  }
];

const faqs = [
  {
    question: "What is the eligible age to join your music production courses?",
    answer: "Our music production training is open to all age groups. Whether you're 8 years old, a teenager, or an adult exploring music later in life, you're welcome to join. If you have a passion for music production, age is never a limitation."
  },
  {
    question: "What types of music production courses are available?",
    answer: "We offer complete music production courses designed for beginners, intermediate learners, and advanced producers. This includes full music production programs, electronic music production, and personalized one-on-one mentorship that covers songwriting, sound design, mixing, and mastering."
  },
  {
    question: "How are the music production classes conducted?",
    answer: "Our classes follow a structured format that blends music theory with practical training. Each session includes individual attention, group collaboration, and hands-on experience with professional music software. Students will actively create, produce, and refine music throughout the course."
  },
  {
    question: "What is the class size for each batch?",
    answer: "We maintain a small class size of 20 students per batch for the Essential Producer Bootcamp and 15 students per batch for the Advanced Production Course to ensure focused learning and individual support. For those looking for deeper, customized learning, we offer personal one-on-one mentorship programs tailored to your specific music production goals."
  },
  {
    question: "How long is each music production class?",
    answer: " Weekly group sessions last between 60 to 90 minutes. We also offer extended 120-minute sessions for students seeking an intensive learning experience. One-on-one mentorship classes typically run for 90 minutes and are scheduled with flexible timing."
  },
  {
    question: "What software do students learn during the course?",
    answer: "Students are trained on industry-standard digital audio workstations (DAWs) such as Logic Pro X, Ableton Live, and other professional music production tools. We also provide access to high-quality sample libraries, VST plugins, and virtual instruments used in modern music production."
  },
  {
    question: "Is there ongoing support after completing the music production course?",
    answer: "Yes, students enrolled in our premium courses receive lifetime access to mentorship support. You'll also be part of an exclusive alumni network with career guidance, music industry opportunities, and long-term support to help you succeed as a professional music producer."
  }
];

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    if (openFaqIdx === idx) {
      setOpenFaqIdx(null);
    } else {
      setOpenFaqIdx(idx);
    }
  };
  const [bookingProgram, setBookingProgram] = useState<"Mastery Course" | "Bootcamp" | "1-on-1 Mentorship">("Bootcamp");

  const openBookingModal = (program: "Mastery Course" | "Bootcamp" | "1-on-1 Mentorship" = "Bootcamp") => {
    setBookingProgram(program);
    setIsBookingOpen(true);
  };

  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px -10% -10% 0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          observer.unobserve(entry.target); 
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elementsToReveal = document.querySelectorAll(".reveal");
    
    elementsToReveal.forEach((el) => observer.observe(el));

    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <main>
      
        <Hero onOpenBooking={() => openBookingModal("Bootcamp")} />

       
        <section className="section-padding container">
          <div className="mentor-grid">
            <div className="mentor-img-wrapper reveal">
              <Image 
                src="/images/mentor.jpg"
                alt="Meet Your Mentor"
                width={550}
                height={550}
                className="mentor-img"
                priority
              />
            </div>
            <div className="mentor-content reveal" style={{ transitionDelay: "0.2s" }}>
              <span className="section-overline">EXPERT GUIDANCE FOR YOUR JOURNEY</span>
              <h2 className="section-title">Meet Your Mentor</h2>
              <p className="mentor-text">
                With over a decade of experience in music production, I&apos;ve dedicated my career to helping aspiring musicians unlock their creative potential. My journey spans working with renowned artists, producing tracks that have reached millions, and mentoring hundreds of students who&apos;ve built successful music careers.
              </p>
              
              <div className="mentor-stats">
                <div className="stat-item">
                  <span className="stat-num">10+</span>
                  <span className="stat-label">YEARS EXPERIENCE</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">300+</span>
                  <span className="stat-label">STUDENTS TAUGHT</span>
                </div>
                <div className="stat-item" >
                  <span className="stat-num">60M+</span>
                  <span className="stat-label">STREAMS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      
        <section className="section-padding programs-section">
          <div className="container">
            <div className="programs-header reveal">
              <span className="section-overline">LEARNING PATHS</span>
              <h2 className="section-title">Our Programs</h2>
            </div>
            
            <div className="programs-grid">
             
              <div className="program-card reveal" style={{ transitionDelay: "0.1s" }}>
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

              <div className="program-card card-featured reveal" style={{ transitionDelay: "0.25s" }}>
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

           
              <div className="program-card reveal" style={{ transitionDelay: "0.4s" }}>
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


        <section className="section-padding container">
          <div className="trust-header reveal">
            <span className="section-overline">THE IMPACT</span>
            <h2 className="section-title">Trust & Excellence</h2>
          </div>
          
          <div className="trust-grid">
            <div className="trust-card trust-card-black reveal" style={{ transitionDelay: "0.1s" }}>
              <div className="trust-icon">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.133 9.21l8.2-1.192L12 .587z"/>
                </svg>
              </div>
              <span className="trust-card-title">4.9/5</span>
              <span className="trust-card-desc">AVERAGE RATING</span>
            </div>
            
           
            <div className="trust-card reveal" style={{ transitionDelay: "0.25s" }}>
              <span className="trust-card-title">300+</span>
              <span className="trust-card-desc">STUDENTS MENTORED</span>
            </div>
            
           
            <div className="trust-card reveal" style={{ transitionDelay: "0.4s" }}>
              <span className="trust-card-title">60M +</span>
              <span className="trust-card-desc">TOTAL STREAMS</span>
            </div>
          </div>
          
         
          <div className="trust-wide-card reveal" style={{ transitionDelay: "0.5s" }}>
            <div className="trust-wide-left">
              <span className="trust-wide-title">94%</span>
              <span className="trust-wide-desc">STUDENTS SUCCESS RATE</span>
            </div>
            <div className="trust-wide-badge">
              <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </section>

        <section className="section-padding container testimonials-section">
          <div className="testimonials-header">
            <span className="section-overline">STUDENT SUCCESS</span>
            <h2 className="section-title">Hear from our graduates</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={t.id} className="testimonial-card reveal" style={{ transitionDelay: `${idx * 0.15}s` }}>
                <div className="vinyl-record"></div>
                <div className="testimonial-card-content">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F3C64F">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="testimonial-quote">"{t.quote}"</p>
                  
                  <div className="testimonial-footer">
                    <div className="testimonial-user">
                      <div className="testimonial-avatar">{t.avatar}</div>
                      <div className="testimonial-user-info">
                        <span className="testimonial-name">{t.name}</span>
                        <span className="testimonial-title">{t.title}</span>
                      </div>
                    </div>
                    <div className="testimonial-badge">{t.badge}</div>
                  </div>
                </div>
                
                <div className="audio-wave">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding container faq-section">
          <div className="faq-header">
            <span className="section-overline">EVERYTHING YOU NEED TO KNOW</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            <div className="vinyl-bg"></div>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="faq-item reveal" 
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="faq-question-row">
                    <h3 className="faq-question">{faq.question}</h3>
                    <div className={`faq-icon ${isOpen ? 'faq-icon-open' : ''}`}>
                      {isOpen ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div 
                    className={`faq-answer-wrapper ${isOpen ? 'faq-answer-open' : ''}`}
                  >
                    <div className="faq-answer-inner">
                      {isOpen && (
                        <div className="eq-bars">
                          <span></span><span></span><span></span>
                        </div>
                      )}
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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

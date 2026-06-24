"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import BookingModal from "@/components/booking/BookingModal";

import "../styles/home.css";


const testimonials = [
  {
    id: 1,
    quote: "I’ve already started producing my tracks with more confidence and Mr. Vijay gave us excellent mentoring from how to structure the composition to producing it. Loved every sessions and detailings went to it. ",
    name: "Ela Maran",
    title: "Batch 2B",
    avatar: "E"
  },
  {
    id: 2,
    quote: "Being a businessman with a deep passion for music, Vijay helped me out with all the music production essentials and he guided me on the right path. Now, I can confidently start producing my tracks. ",
    name: "Fredrick",
    title: "Batch 2B ",
    avatar: "F"
  },
  {
    id: 3,
    quote: "I’ve took the three months program and it’s already second month now and I’m loving every sessions and Vijay’s guidance is amazing and I wish everyone who’s aspiring to be a music producer could join and experience the class and way he explains the concepts. ",
    name: "Praveen",
    title: "Batch 3A ",
    avatar: "P"
  },
  {
    id: 4,
    quote: "I’ve happened to find Vijay through mutual friend and enrolled in the music production program. As a director myself I now can understand how music production works and how to think like a composer, this gives extra edge while I’m directing pilot film",
    name: "Sri",
    title: "Batch 1B ",
    avatar: "S"
  },
  {
    id: 5,
    quote: "We had a most interesting learning experience in Music tutorship under guidance of Vijay sir. He gave us a proper roadmap customised for our goals and he’s been guiding us constantly with motivation and self discipline.",
    name: "Sarwina",
    title: "Personalised Mentorship ",
    avatar: "S"
  },
  {
    id: 6,
    quote: "The advanced studio setup and professional workflows gave me a clear perspective on modern music making. Highly recommended!",
    name: "Vikram",
    title: "Advanced Production Course",
    avatar: "V",
    videoUrl: "/videos/testimonial1.mp4"
  },
  {
    id: 7,
    quote: "Learning here was a game changer for my mixes. The personalized feedback during the 1-on-1 mentorship sessions is invaluable.",
    name: "Arjun",
    title: "Personalized Mentorship",
    avatar: "A",
    videoUrl: "/videos/testimonial2.mp4"
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const textTestimonials = testimonials.filter(t => !t.videoUrl);
  const videoTestimonials = testimonials.filter(t => t.videoUrl);


  return (
    <>
      <main>
      
        <Hero showVideo={true} onOpenBooking={() => openBookingModal("Bootcamp")} />

       
        <section className="section-padding container">
          <div className="mentor-grid">
            <div className="mentor-img-wrapper reveal">
              <Image 
                src="/images/mentor.jpeg"
                alt="Meet Your Mentor"
                width={550}
                height={550}
                className="mentor-img"
                priority
              />
            </div>
            <div className="mentor-content reveal" style={{ transitionDelay: "0.2s" }}>
              <span className="section-overline">EXPERT GUIDANCE FOR YOUR JOURNEY</span>
              <h2 className="section-title">Meet Your Mentor, <i>Vijay </i></h2>
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
                    ENQUIRE NOW
                  </Link>
                </div>
              </div>

              <div className="program-card card-featured reveal" style={{ transitionDelay: "0.25s" }}>
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
                    ENQUIRE NOW
                  </Link>
                </div>
              </div>

           
              <div className="program-card reveal" style={{ transitionDelay: "0.4s" }}>
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
                   ENQUIRE NOW
                  </Link>
                </div>
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
              <span className="trust-wide-title">98%</span>
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
            {textTestimonials.map((t, idx) => (
              <div 
                key={t.id} 
                className="testimonial-card reveal" 
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
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
                  </div>
                </div>
                
                <div className="audio-wave">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-videos-grid reveal" style={{ marginTop: '40px', display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {videoTestimonials.map((t, idx) => (
              <div 
                key={t.id} 
                className="testimonial-video-card" 
                style={{ 
                  overflow: 'hidden', 
                  position: 'relative', 
                  backgroundColor: '#111', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  height: '750px',
                  width: '100%'
                }}
              >
                <div className="testimonial-video-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <video
                    src={t.videoUrl}
                    loop
                    muted
                    playsInline
                    className="testimonial-video"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onMouseEnter={(e) => {
                      const video = e.currentTarget;
                      video.muted = false;
                      video.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      const video = e.currentTarget;
                      video.pause();
                    }}
                    onClick={(e) => {
                      const video = e.currentTarget;
                      if (video.requestFullscreen) {
                        video.requestFullscreen();
                      } else if ((video as any).webkitRequestFullscreen) {
                        (video as any).webkitRequestFullscreen();
                      }
                    }}
                  />
                  <div className="video-playback-overlay video-overlay" style={{ pointerEvents: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', transition: 'opacity 0.3s ease' }}>
                    <div className="video-play-btn" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <polygon points="6 3 20 12 6 21 6 3" />
                      </svg>
                    </div>
                    <span className="video-hint" style={{ color: 'white', marginTop: '12px', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.5px' }}>Hover: Audio & Play / Click: Fullscreen</span>
                  </div>
                </div>
                <style jsx>{`
                  .testimonial-video-container .video-overlay {
                    opacity: 1;
                  }
                  .testimonial-video-container:hover .video-overlay {
                    opacity: 0;
                  }
                `}</style>
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

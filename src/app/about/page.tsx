import Hero from "../../components/hero/Hero";
import Image from "next/image";
import "../../styles/about.css";

export default function AboutPage() {
  return (
    <div className="main-wrapper main-content bg-white">
      <Hero 
        overline="MEET YOUR MENTOR"
        title="Your journey starts here"
        desc="An immersive deep dive into professional music production, guided by a Decade of Industry expertise and creative vision."
        primaryCtaText=""
        hideSecondaryCta={true}
      />

      <section className="container section-padding anim" style={{ '--anim-delay': '0.1s' } as any}>
        <div className="about-grid">
          <div className="about-image-wrapper">
            <Image 
              src="/images/mentor.jpg" 
              alt="Vijay - Music Producer & Educator"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="about-image"
            />
          </div>
          <div className="about-content">
            <h2 className="about-title">
              Hi, I'm Vijay -<br/>Music Producer &<br/>Educator
            </h2>
            <div className="about-desc">
              <p>
                With over a decade of experience in music production, mixing, sound design, and music theory, I've dedicated my career to helping aspiring musicians unlock their creative potential and achieve professional success.
              </p>
              <p>
                My journey spans working with renowned artists across various genres, producing tracks that have reached millions of listeners, and mentoring hundreds of students who have gone on to build successful music careers.
              </p>
              <p>
                I believe that music production is not just about technology - it's about storytelling, emotion, and connecting with your audience. Through personalized mentorship, I guide students on a transformative journey that goes beyond software.
              </p>
            </div>
            <button className="btn-dark anim" style={{ '--anim-delay': '0.7s' } as any}>
              START YOUR JOURNEY <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 section-padding anim" style={{ '--anim-delay': '0.3s' } as any}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">THE ADVANTAGE</span>
            <h2 className="section-title">Why Choose Me</h2>
          </div>
          
          <div className="advantage-grid">
            <div className="advantage-card">
              <div className="advantage-card-header">
                <div className="advantage-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 15.25l-4.37 2.63c-.45.27-.98-.12-.86-.64l1.17-4.96-3.85-3.32c-.4-.34-.18-1 .35-1.04l5.07-.43 1.99-4.72c.2-.47.88-.47 1.08 0l1.99 4.72 5.07.43c.53.04.75.7.35 1.04l-3.85 3.32 1.17 4.96c.12.52-.41.91-.86.64L12 15.25z"/>
                  </svg>
                </div>
                <div className="advantage-equalizer">
                  <span className="equalizer-bar"></span>
                  <span className="equalizer-bar"></span>
                  <span className="equalizer-bar"></span>
                  <span className="equalizer-bar"></span>
                  <span className="equalizer-bar"></span>
                </div>
              </div>
              <div className="advantage-card-body">
                <h3 className="advantage-card-title">Industry Recognition</h3>
                <p className="advantage-card-desc">Worked with top artists and produced chart-topping tracks.</p>
              </div>
            </div>

            <div className="advantage-card">
              <div className="advantage-card-header">
                <div className="advantage-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zM11 17H5V7h6v10zm8 0h-6V7h6v10z"/>
                  </svg>
                </div>
                <div className="advantage-equalizer">
                  <span className="equalizer-bar"></span>
                  <span className="equalizer-bar"></span>
                  <span className="equalizer-bar"></span>
                  <span className="equalizer-bar"></span>
                  <span className="equalizer-bar"></span>
                </div>
              </div>
              <div className="advantage-card-body">
                <h3 className="advantage-card-title">Comprehensive Learning</h3>
                <p className="advantage-card-desc">Worked with top artists and produced chart-topping tracks.</p>
              </div>
            </div>

            <div className="advantage-card">
              <div className="advantage-card-header">
                <div className="advantage-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div className="advantage-equalizer">
                  <span className="equalizer-bar"></span>
                  <span className="equalizer-bar"></span>
                  <span className="equalizer-bar"></span>
                  <span className="equalizer-bar"></span>
                  <span className="equalizer-bar"></span>
                </div>
              </div>
              <div className="advantage-card-body">
                <h3 className="advantage-card-title">Personalized Approach</h3>
                <p className="advantage-card-desc">Worked with top artists and produced chart-topping tracks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-padding anim" style={{ '--anim-delay': '0.5s' } as any}>
        <div className="section-header">
          <span className="section-label">PORTFOLIO</span>
          <h2 className="section-title">Music from films I've worked on</h2>
        </div>

        <div className="spotify-embed-container">
          <iframe 
            src="https://open.spotify.com/embed/playlist/1Baqr6iqDkXbHUCXXK8ThG?utm_source=generator&theme=0" 
            width="100%" 
            height="540" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-col">
            <span className="footer-logo">Music Tutorship</span>
            <p className="footer-desc">
              Elevate your music production journey with personalized mentorship and comprehensive courses designed to unlock your creative potential.
            </p>
          </div>
          
        
          <div className="footer-col">
            <span className="footer-title">NAVIGATION</span>
            <ul className="footer-list">
              <li className="footer-list-item"><Link href="/">Home</Link></li>
              <li className="footer-list-item"><Link href="/about">About Me</Link></li>
              <li className="footer-list-item"><Link href="/courses">Courses</Link></li>
              <li className="footer-list-item"><Link href="/blog">Blog</Link></li>
              <li className="footer-list-item"><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
       
          <div className="footer-col">
            <span className="footer-title">OUR COURSES</span>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link href="/courses/mastery">Complete Music Production Mastery Course</Link>
              </li>
              <li className="footer-list-item">
                <Link href="/courses/bootcamp">Essential Producer Bootcamp</Link>
              </li>
              <li className="footer-list-item">
                <Link href="/courses/mentorship">One-on-One Music Production Mentorship</Link>
              </li>
            </ul>
          </div>
          
    
          <div className="footer-col">
            <span className="footer-title">CONTACT INFO</span>
            
            <div className="footer-contact-item">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@musictutorship.in</span>
            </div>
            
            <div className="footer-contact-item">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 6374428173</span>
            </div>
            
            <div className="footer-contact-item">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>
                TVH Beliciaa Towers, Tower II, 6th floor, 71/1 (71/41) Raja Annamalai Puram, M.R.C Nagar, Chennai 600028
              </span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 MUSIC TUTORSHIP. ALL RIGHTS RESERVED.
          </span>
          <div className="footer-links">
            <Link href="/privacy">PRIVACY PLOICY</Link>
            <Link href="/terms">TERMS OF SERVICES</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
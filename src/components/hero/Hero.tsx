import Link from "next/link";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url('/images/homepage-hero.png')` }}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <span className="hero-overline reveal">CRAFTING PROFESSIONAL SOUND</span>
        <h1 className="hero-title reveal" style={{ transitionDelay: "0.15s" }}>
          Learn Music Production
        </h1>
        <p className="hero-desc reveal" style={{ transitionDelay: "0.3s" }}>
          Master the art and science of audio production with industry-leading mentorship. From technical mixing to creative arrangement, build your sonic signature.
        </p>
        <div className="hero-ctas reveal" style={{ transitionDelay: "0.45s" }}>
          <a 
            href="#enquire" 
            className="btn-primary-white"
            onClick={(e) => {
              e.preventDefault();
              onOpenBooking?.();
            }}
          >
            BOOK YOUR FREE DEMO
          </a>
          <Link href="/courses" className="btn-secondary-ghost">
            VIEW COURSES
          </Link>
        </div>
      </div>
    </section>
  );
}
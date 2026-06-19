import Link from "next/link";

interface HeroProps {
  overline?: string;
  title?: string;
  desc?: string;
  primaryCtaText?: string;
  hideSecondaryCta?: boolean;
  onOpenBooking?: () => void;
}

export default function Hero({
  overline = "CRAFTING PROFESSIONAL SOUND",
  title = "Learn Music Production",
  desc = "Master the art and science of audio production with industry-leading mentorship. From technical mixing to creative arrangement, build your sonic signature.",
  primaryCtaText = "BOOK YOUR FREE DEMO",
  hideSecondaryCta = false,
  onOpenBooking,
}: HeroProps) {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url('/images/hero-img.png')` }}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <span className="hero-overline reveal">{overline}</span>
        <h1 className="hero-title reveal" style={{ transitionDelay: "0.15s" }}>
          {title}
        </h1>
        <p className="hero-desc reveal" style={{ transitionDelay: "0.3s" }}>
          {desc}
        </p>
        <div className="hero-ctas reveal" style={{ transitionDelay: "0.45s" }}>
          {primaryCtaText && (
            <a 
              href="#enquire" 
              className="btn-primary-white"
              onClick={(e) => {
                e.preventDefault();
                onOpenBooking?.();
              }}
            >
              {primaryCtaText}
            </a>
          )}
          {!hideSecondaryCta && (
            <Link href="/courses" className="btn-secondary-ghost">
              VIEW COURSES
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
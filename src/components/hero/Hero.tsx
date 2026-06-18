import Link from "next/link";

interface HeroProps {
  onOpenBooking?: () => void;
  overline?: string;
  title?: string;
  desc?: string;
  backgroundImage?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  hideSecondaryCta?: boolean;
}

export default function Hero({ 
  onOpenBooking,
  overline = "CRAFTING PROFESSIONAL SOUND",
  title = "Learn Music Production",
  desc = "Master the art and science of audio production with industry-leading mentorship. From technical mixing to creative arrangement, build your sonic signature.",
  backgroundImage = "/images/hero-img.png",
  primaryCtaText = "BOOK YOUR FREE DEMO",
  secondaryCtaText = "VIEW COURSES",
  secondaryCtaLink = "/courses",
  hideSecondaryCta = false
}: HeroProps) {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="hero-overlay"></div>
      

      <div className="hero-eq-overlay">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="hero-eq-bar"
            style={{ animationDelay: `${Math.random() * 0.8}s` }}
          ></div>
        ))}
      </div>

      <div className="container hero-container">
        <span className="hero-overline fade-in-up" style={{ animationDelay: "0s" }}>{overline}</span>
        <h1 className="hero-title fade-in-up" style={{ animationDelay: "0.15s" }}>
          {title}
        </h1>
        {desc && (
          <p className="hero-desc fade-in-up" style={{ animationDelay: "0.3s" }}>
            {desc}
          </p>
        )}
        <div className="hero-ctas fade-in-up" style={{ animationDelay: "0.45s" }}>
          {primaryCtaText && (
            <a 
              href="#enquire" 
              className="btn-primary-white bass-pulse"
              onClick={(e) => {
                if (onOpenBooking) {
                  e.preventDefault();
                  onOpenBooking();
                }
              }}
            >
              {primaryCtaText}
            </a>
          )}
          {!hideSecondaryCta && secondaryCtaLink && secondaryCtaText && (
            <Link href={secondaryCtaLink} className="btn-secondary-ghost">
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

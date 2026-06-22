import Link from "next/link";

interface HeroProps {
  overline?: string;
  title?: string;
  desc?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  hideSecondaryCta?: boolean;
  onOpenBooking?: () => void;
}

export default function Hero({
  overline = "CRAFTING PROFESSIONAL SOUND",
  title = "Learn Music Production",
  desc = "Master the art and science of audio production with industry-leading mentorship. From technical mixing to creative arrangement, build your sonic signature.",
  primaryCtaText = "BOOK YOUR FREE DEMO",
  primaryCtaLink,
  secondaryCtaText = "VIEW COURSES",
  secondaryCtaLink = "/courses",
  hideSecondaryCta = false,
  onOpenBooking,
}: HeroProps) {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url('/images/hero-img.png')` }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-bg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
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
            primaryCtaLink ? (
              primaryCtaLink.startsWith("#") ? (
                <a href={primaryCtaLink} className="btn-primary-white">
                  {primaryCtaText}
                </a>
              ) : (
                <Link href={primaryCtaLink} className="btn-primary-white">
                  {primaryCtaText}
                </Link>
              )
            ) : (
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
            )
          )}
          {!hideSecondaryCta && secondaryCtaText && (
            secondaryCtaLink.startsWith("#") ? (
              <a href={secondaryCtaLink} className="btn-secondary-ghost">
                {secondaryCtaText}
              </a>
            ) : (
              <Link href={secondaryCtaLink} className="btn-secondary-ghost">
                {secondaryCtaText}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
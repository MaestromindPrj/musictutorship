import Link from "next/link";

export default function CoursesHero() {
  return (
    <section
      className="courses-hero"
      style={{
        backgroundImage: "url('/images/hero-img.png')",
      }}
    >
      <div className="courses-hero-overlay"></div>

      <div className="courses-hero-content">
        <span className="courses-overline">
          EDUCATION PATHWAYS
        </span>

        <h1 className="courses-title">
          Our Programs
        </h1>

        <p className="courses-description">
          Choose your musical journey. From foundational basics to
          advanced studio techniques, our curated programs are designed
          for clarity and creative mastery.
        </p>

        <div className="courses-buttons">
          <a href="#courseprograms" className="btn-primary-white">
            EXPLORE ALL
          </a>

          <Link href="/contact" className="btn-secondary-ghost">
            ENQUIRE NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
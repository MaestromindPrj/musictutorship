import { Metadata } from "next";
import Hero from "../../components/hero/Hero";
import Image from "next/image";
import Link from "next/link";
import "../../styles/about.css";

export const metadata: Metadata = {
  title: "Music Production Blog & Tutorials | Music Tutorship",
  description: "Get expert insights, sound design tips, software reviews, and mixing/mastering guides from our music production studio.",
};

export default function BlogPage() {
  return (
    <main className="main-wrapper main-content bg-zinc-50">
      <Hero 
        overline="KNOWLEDGE BASE"
        title="Blogs"
        desc="Expert insights, technical deep-dives, and production workflows from the SonicMentors studio. Elevate your sound with curated educational content."
        primaryCtaText=""
        hideSecondaryCta={true}
      />

      <section className="container section-padding">
        <div className="blog-header-row">
          <div className="search-wrapper">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="search-input"
            />
            <span className="search-icon">
               <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </span>
          </div>
          
          <div className="category-filters">
            {["All", "Beginner Guide", "Software Review", "Sound Design", "Mixing & Mastering"].map((cat, idx) => (
              <button 
                key={idx} 
                className={`category-btn ${idx === 0 ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="featured-article">
          <div className="featured-image audio-wave-hover">
             <Image src="/images/hero-img.png" alt="Featured Article" fill sizes="(max-width: 768px) 100vw, 50vw" className="article-img-inner" />
          </div>
          <div className="featured-content">
            <span className="insight-label">FEATURED INSIGHT</span>
            <h2 className="featured-title">Mastering the Analog Workflow in a Digital Era</h2>
            <p className="featured-desc">
              Discover how top producers bridge the gap between vintage hardware warmth and the surgical precision of modern DAWs. A deep dive into hybrid signal chains.
            </p>
            <button className="read-more-link">
              READ FULL ARTICLE <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>

        <div className="blog-main-layout">
          <div className="blog-content-col">
            <div className="latest-header">
              <h3 className="latest-title">Latest Articles</h3>
            </div>

            <div className="article-grid">
              {[
                { title: "The Art of Granular Synthesis", desc: "Learn how to deconstruct audio into microscopic grains to create lush soundscapes.", cat: "SOUND DESIGN" },
                { title: "Top 5 DAW Updates in 2024", desc: "We benchmark the latest releases from Ableton, Logic Pro, and FL Studio.", cat: "SOFTWARE REVIEW" },
                { title: "Dynamic EQ vs Compression", desc: "Choosing the right tool for controlling frequency-dependent transients.", cat: "MIXING" },
                { title: "Vocal Chain Essentials", desc: "From mic choice to pre-amp settings for that professional radio-ready sound.", cat: "RECORDING" },
              ].map((article, idx) => (
                <div key={idx} className="article-card">
                  <div className="article-card-image audio-wave-hover">
                     <Image src="/images/hero-img.png" alt={article.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="article-img-inner" />
                  </div>
                  <div className="article-card-content">
                    <span className="article-cat">{article.cat}</span>
                    <h4 className="article-title">{article.title}</h4>
                    <p className="article-desc">{article.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="load-more-wrapper">
              <button className="btn-dark">
                LOAD MORE ARTICLES
              </button>
            </div>
          </div>

          <div className="blog-sidebar">
            <div className="sidebar-widget">
              <h3 className="widget-title">TRENDING NOW</h3>
              <div className="trending-list">
                {[
                  { title: "How to Finish Your Tracks Faster", time: "5 min read" },
                  { title: "Understanding Sidechain Compression", time: "8 min read" },
                  { title: "The Best Free VSTs in 2024", time: "12 min read" },
                  { title: "Setting Up Your First Studio", time: "10 min read" },
                ].map((item, idx) => (
                  <div key={idx} className="trending-item">
                    <span className="trending-num">0{idx + 1}</span>
                    <div className="trending-content">
                      <h4 className="trending-title">{item.title}</h4>
                      <span className="trending-time">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-widget widget-dark">
              <span className="widget-subtitle">COMMUNITY</span>
              <h3 className="widget-title">Join the Mentorship List</h3>
              <p className="widget-desc">
                Weekly production tips and exclusive course discounts delivered to your inbox.
              </p>
              <Link href="/contact" className="btn-light">
                ENQUIRE NOW
              </Link>
            </div>

            <div className="sidebar-widget">
              <h3 className="widget-title">POPULAR TAGS</h3>
              <div className="tags-list">
                {["VOCALS", "MIXING", "ARRANGEMENT", "MASTERING", "ABLETON", "HARDWARE", "DAW", "LOGIC PRO"].map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

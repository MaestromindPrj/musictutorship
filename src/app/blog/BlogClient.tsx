"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero/Hero";

const BLOG_POSTS = [
  {
    slug: "how-ai-is-stealing-music-from-artists",
    title: "How AI Is Stealing Music From Artists",
    desc: "238 of SZA's songs were found inside an AI training database without her knowledge or consent, including unreleased material. How AI is stealing music from artists is not a future concern—it is happening right now, at an industrial scale. This deep-dive walks you through the technology, the lawsuits, and the Indian court cases setting global precedents.",
    category: "AI & COPYRIGHT",
    tags: ["AI", "COPYRIGHT", "LEGAL", "INDUSTRY INSIGHTS"],
    image: "/images/ai_music_theft.jpeg",
    date: "June 23, 2026",
  }
];

export default function BlogClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Derive categories and tags dynamically from existing articles
  const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];
  const tags = Array.from(new Set(BLOG_POSTS.flatMap(post => post.tags)));

  // Filter logic
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All" || post.category === selectedCategory;

    const matchesTag = 
      !selectedTag || post.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedTag(null); // Reset tag filter when changing categories
  };

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null); // Unselect tag if clicked again
    } else {
      setSelectedTag(tag);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedTag(null);
  };

  return (
    <main className="main-wrapper main-content bg-zinc-50">
      <Hero 
        overline="KNOWLEDGE BASE"
        title="Industry Insights"
        desc="Crucial updates, tech analyses, and legal precedents shaping the future of music production. Understand the industry to protect your craft."
        primaryCtaText=""
        hideSecondaryCta={true}
      />

      <section className="container section-padding">
        {/* Search Bar & Category Filters */}
        <div className="blog-header-row">
          <div className="search-wrapper">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="search-icon">
               <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </span>
          </div>
          
          <div className="category-filters">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-main-layout">
          <div className="blog-content-col">
            <div className="latest-header">
              <h3 className="latest-title">
                {selectedTag ? `Tagged: ${selectedTag}` : "Articles"}
              </h3>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="article-grid" style={{ gridTemplateColumns: "1fr" }}>
                {filteredPosts.map((post, idx) => (
                  <div key={idx} className="article-single-card">
                    <div className="featured-image audio-wave-hover" style={{ height: "100%", minHeight: "260px" }}>
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw" 
                        className="article-img-inner"
                        priority
                      />
                    </div>
                    <div className="featured-content">
                      <span className="insight-label">{post.category}</span>
                      <h2 className="featured-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                        {post.title}
                      </h2>
                      <p className="featured-desc">
                        {post.desc}
                      </p>
                      <Link href={`/blog/${post.slug}`} className="read-more-link">
                        READ FULL ARTICLE <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: "3rem 1.5rem", textAlign: "center", border: "1px dashed #e4e4e7", backgroundColor: "#fff" }}>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>No results found</h4>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  Try adjusting your search query or reset your filters.
                </p>
                <button className="btn-dark" onClick={handleResetFilters} style={{ margin: "0 auto" }}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          <div className="blog-sidebar">
            <div className="sidebar-widget widget-dark">
              <span className="widget-subtitle">EMAIL NEWSLETTER</span>
              <h3 className="widget-title">Join the Newsletter Now!</h3>
              <p className="widget-desc">
                Get expert tips on copyright protection, AI trends, and music business directly in your inbox.
              </p>
              <Link href="/contact" className="btn-light">
                SUBSCRIBE NOW
              </Link>
            </div>

           
            {tags.length > 0 && (
              <div className="sidebar-widget">
                <h3 className="widget-title">POPULAR TAGS</h3>
                <div className="tags-list">
                  {tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className={`tag ${selectedTag === tag ? 'active' : ''}`}
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div>
      </section>
    </main>
  );
}
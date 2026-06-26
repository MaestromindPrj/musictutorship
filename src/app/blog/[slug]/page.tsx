import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ScrollProgressBar from "@/components/blog/ScrollProgressBar";
import ReadingAnimations from "@/components/blog/ReadingAnimations";
import "../../../styles/blog.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "how-ai-is-stealing-music-from-artists" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "how-ai-is-stealing-music-from-artists") {
    return {
      title: "How AI Is Stealing Music From Artists | Music Tutorship",
      description: "Understand SZA's 238 songs training database leak, the RIAA lawsuits, the Bombay High Court's Voice as Persona ruling, and what it means for music producers in 2026.",
      openGraph: {
        title: "How AI Is Stealing Music From Artists | Music Tutorship",
        description: "Understand SZA's 238 songs training database leak, the RIAA lawsuits, the Bombay High Court's Voice as Persona ruling, and what it means for music producers in 2026.",
        images: [
          {
            url: "/images/ai_music_theft.jpeg",
            width: 1200,
            height: 630,
            alt: "How AI Is Stealing Music From Artists",
          },
        ],
      },
    };
  }
  return {
    title: "Article Not Found | Music Tutorship",
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug !== "how-ai-is-stealing-music-from-artists") {
    notFound();
  }

  return (
    <>
      <ScrollProgressBar />
      <ReadingAnimations />

      <article className="blog-detail-wrapper">
        <div className="blog-detail-container">
          
          <header className="blog-post-header">
            <div className="blog-post-meta">
              <span className="blog-post-category">Industry Insights</span>
              <span>•</span>
              <time dateTime="2026-06-23">June 23, 2026</time>
              <span>•</span>
              <span>8 Min Read</span>
            </div>
            
            <h1 className="blog-post-title animate-on-scroll visible">
              How AI Is Stealing Music From Artists
            </h1>
            
            <p className="blog-post-subtitle animate-on-scroll visible">
              A deep dive into the industrial extraction of creative catalogs, the $9.1B lawsuits, the Indian court cases setting global precedents, and the path forward for producers in 2026.
            </p>
          </header>

          {/* Banner Image */}
          <div 
            className="featured-image audio-wave-hover animate-on-scroll visible blog-banner-image" 
            style={{ marginBottom: "3rem" }}
          >
            <Image 
              src="/images/ai_music_theft.jpeg" 
              alt="AI Music Theft Concept Graphic" 
              fill 
              sizes="(max-width: 1024px) 100vw, 800px" 
              className="article-img-inner"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Equalizer Divider */}
          <div className="blog-post-divider" aria-hidden="true">
            <span className="divider-line"></span>
            <div className="divider-wave">
              <span className="divider-bar"></span>
              <span className="divider-bar"></span>
              <span className="divider-bar"></span>
              <span className="divider-bar"></span>
              <span className="divider-bar"></span>
            </div>
            <span className="divider-line"></span>
          </div>
          <div className="blog-post-content">
            
            <p className="intro animate-on-scroll">
              Let me start with a number that should concern every producer reading this. <strong>238</strong>. That is how many of <a href="https://www.deccanchronicle.com/entertainment/music/sza-slams-ai-after-discovering-238-of-her-songs-were-used-to-train-models-1966181" target="_blank" rel="noopener noreferrer" className="blog-inline-link">SZA&apos;s songs</a> were found inside an AI training database without her knowledge, without her consent, and without a single rupee paid to her. When the Grammy-winning artist searched her own name on an open AI music database, that is what came back. 
            </p>

            <p className="animate-on-scroll">
              And here is the part that makes it genuinely alarming: <strong>the data included unreleased material</strong>. Songs she had not shared with the world yet, already broken down into frequency data, teaching a machine how to sound like her. How AI is stealing music from artists is not a future concern. It is happening right now, at an industrial scale. This post will walk you through exactly what is going on, the technology behind it, the lawsuits, the Indian court cases setting global precedent—and what it means for every producer building a music career in 2026.
            </p>

            <h2 className="animate-on-scroll">How AI Is Stealing Music From Artists Without Their Knowledge</h2>
            
            <p className="animate-on-scroll">
              When SZA shared her discovery publicly, she did not just vent frustration. She diagnosed something structural. She described the AI-generated output built from her stolen catalog as <strong>&quot;weird, stereotypical struggle music&quot;</strong>—music that mimics the surface of emotion without any of the lived experience underneath it.
            </p>

            <blockquote className="animate-on-scroll">
              &quot;Black artists, who drive a disproportionate share of global sonic culture, have the least legal protection in the system. Their vocal runs, production signatures, and rhythmic pockets are extracted without permission and fed into algorithms that then generate music in their style—without ever crediting or paying them.&quot;
            </blockquote>

            <p className="animate-on-scroll">
              Her response was to go in the opposite direction: raw, organic, deeply human recordings that no algorithm can statistically replicate. That is a creative principle worth carrying into your own work.
            </p>

            <h2 className="animate-on-scroll">Why AI Platforms Need Your Music to Survive</h2>
            
            <p className="animate-on-scroll">
              Platforms like <em>Suno</em> and <em>Udio</em> are built on <strong>Large Audio Models (LAMs)</strong>. To train these systems, they need millions of hours of recorded music. The model learns timing, harmonic structure, how a vocal sits against a kick drum, how a producer transitions from verse to chorus. It builds statistical predictions from all of it.
            </p>

            <p className="animate-on-scroll">
              To teach the model what great R&B sounds like, you feed it decades of great R&B. To teach it how a specific producer&apos;s sound works, you feed it their catalog.
            </p>

            <div className="blog-callout animate-on-scroll">
              <div className="blog-callout-title">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                The Fair Use Defense
              </div>
              <p className="blog-callout-desc">
                AI companies have argued that downloading and parsing copyrighted tracks falls under <strong>&quot;fair use&quot;</strong>, a U.S. legal concept allowing limited use of copyrighted material for transformative purposes. The Recording Industry Association of America (RIAA) disagreed sharply, filing federal lawsuits arguing that reproducing characteristic sonic elements is direct infringement.
              </p>
            </div>

            <h2 className="animate-on-scroll">The Legal Fight Against AI Stealing Music From the Industry</h2>
            
            <p className="animate-on-scroll">
              The RIAA lawsuits, backed by Universal Music Group, Sony Music, and Warner Music Group, triggered one of the largest legal battles in music industry history. But the major label response fractured quickly:
            </p>

            {/* Lawsuits Table */}
            <div className="lawsuit-table-container animate-on-scroll">
              <table className="lawsuit-table">
                <thead>
                  <tr>
                    <th>Label</th>
                    <th>Platform</th>
                    <th>Outcome / Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="label-cell">Warner Music Group</td>
                    <td>Suno</td>
                    <td className="outcome-cell">Settled — licensing deal + multi-million dollar payout</td>
                  </tr>
                  <tr>
                    <td className="label-cell">Universal Music Group</td>
                    <td>Udio</td>
                    <td className="outcome-cell">Settled — undisclosed payment, licensed platform planned</td>
                  </tr>
                  <tr>
                    <td className="label-cell">Sony Music Entertainment</td>
                    <td>Both</td>
                    <td className="outcome-cell" style={{ fontWeight: 600 }}>Still litigating; damages claim expanded to $9.1 billion</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="animate-on-scroll">
              Warner and Universal settled. Sony refused. Sony pushed to expand the formal count of infringed recordings from 560 tracks to over 61,000. At $150,000 per track for willful infringement under US law, the theoretical liability Suno faces now exceeds nine billion dollars.
            </p>

            <p className="animate-on-scroll">
              But the settlements reveal something producers need to understand clearly: <strong>The major labels are not primarily fighting to protect artists.</strong> They are fighting to ensure that if AI monetizes music, the labels control a share of that revenue. Individual artist consent has been treated as secondary to corporate deal-making. This is why knowing your contracts, not just the industry headlines, is essential to building a sustainable music career.
            </p>

            <h2 className="animate-on-scroll">India&apos;s Answer to AI Stealing Music: Voice as a Human Right</h2>
            
            <p className="animate-on-scroll">
              While American courts debated fair use doctrine, the Indian judiciary took a fundamentally different approach—and in doing so, may have created the most important global precedent for artist protection in the AI era.
            </p>

            <h3 className="animate-on-scroll">Arijit Singh&apos;s Landmark Victory Against AI Music Theft</h3>
            
            <p className="animate-on-scroll">
              In 2024, Arijit Singh—currently the most followed artist on Spotify globally, surpassing even Taylor Swift—filed a case in the Bombay High Court. A company called Codible Ventures had deployed an AI tool capable of cloning his voice with 95 percent accuracy and was using his name and likeness to market their platform commercially, without any permission.
            </p>

            <p className="animate-on-scroll">
              The court granted a sweeping injunction. But the reasoning went far beyond copyright. The judge ruled that cloning a celebrity&apos;s voice without consent violates their right to privacy and dignity under <strong>Article 21 of the Indian Constitution</strong>. Not just a property issue, but a fundamental human rights violation.
            </p>

            <p className="animate-on-scroll">
              The court introduced the concept of <strong>&quot;Voice as Persona&quot;</strong>: an artist&apos;s voice is not a data set. It is an inseparable part of who they are as a human being. Following Singh&apos;s victory, Asha Bhosle, Anil Kapoor, Amitabh Bachchan, and Allu Arjun all secured similar constitutional protections against AI replication.
            </p>

            <h3 className="animate-on-scroll">The S.P. Balasubrahmanyam Case: When AI Steals From the Dead</h3>
            
            <p className="animate-on-scroll">
              The ethical questions become more painful when the artist is no longer alive. In early 2024, the family of the late S.P. Balasubrahmanyam, one of India&apos;s most beloved playback singers, discovered that a Telugu film had used deepfake AI to recreate his voice commercially, without approaching the family, without consent, and without compensation.
            </p>

            <p className="animate-on-scroll">
              His son S.P. Charan was direct: the love for his father was appreciated, but unauthorized commercial exploitation of his vocal identity was completely unacceptable. The family&apos;s legal counsel raised a concern that the entire industry needs to sit with: <strong>every track assigned to a digital ghost is a session stolen from a living, working vocalist</strong> who needs that opportunity to build their career.
            </p>

            <p className="animate-on-scroll">
              The Artist Rights Alliance—whose open letter was signed by over 200 artists including Stevie Wonder, Billie Eilish, and Nicki Minaj—has called out exactly this dynamic: AI is not just recreating the past. It is blocking the future for emerging talent.
            </p>

            <h2 className="animate-on-scroll">What Producers Must Do While AI Keeps Stealing Music</h2>

            <div
              className="featured-image audio-wave-hover animate-on-scroll"
              style={{ position: "relative", width: "100%", aspectRatio: "16/9", marginTop: "1.5rem", marginBottom: "2rem", overflow: "hidden" }}
            >
              <Image
                src="/images/blog1-sub.jpeg"
                alt="What Producers Must Do While AI Keeps Stealing Music"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="article-img-inner"
                style={{ objectFit: "cover" }}
              />
            </div>

            <p className="animate-on-scroll">
              Here is the honest reality that I want every producer who reads this to carry forward. AI learns from existing music. It predicts what should come next based on patterns extracted from what has already been made. It does not have a story, a perspective, or a reason to make a creative choice.
            </p>

            <p className="animate-on-scroll">
              It cannot replicate your specific experience, your production identity, or the kind of craft that only comes from genuine development under real mentorship. The producers who will be most resilient in this environment are the ones who build a sound that is genuinely and recognizably theirs, not a statistical average of what already exists. The ones who understand both the creative and business dimensions of a music career.
            </p>

            <h2 className="animate-on-scroll">Conclusion</h2>
            
            <p className="animate-on-scroll">
              How AI is stealing music from artists is one of the defining stories of the music industry right now—and it is far from resolved. SZA found 238 of her songs in a database without consent. The Indian judiciary declared the human voice a constitutional right. Sony is pursuing nine billion dollars in damages. And artists from Los Angeles to Mumbai are organizing to demand that consent, credit, and compensation become the foundation of any AI system that touches music.
            </p>

            <p className="animate-on-scroll">
              For producers building a career today, the message is clear. Develop something real. Understand how the industry actually works. Protect your creative identity—because if you do not, someone else will monetize it without asking.
            </p>

          </div>

          {/* Blog Footer CTA */}
          <footer className="blog-footer-cta animate-on-scroll">
            <h3>Protect Your Sound &amp; Career</h3>
            <p>
              Our Producer Transformation Path is built around developing a unique sonic identity and mastering the business skills needed to build a resilient career in the age of AI.
            </p>
            <Link href="/courses" className="btn-cta">
              EXPLORE MENTORSHIP
            </Link>
          </footer>

        </div>
      </article>
    </>
  );
}
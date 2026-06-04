import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, Heart } from 'lucide-react';

// Types
interface StatItem { label: string; value: number | string }
interface ProgramItem { id: string; title: string; desc: string; image: string; stats: StatItem[] }

// Animated Counter (reveals when visible)
function useRevealCount(targetRef: React.RefObject<HTMLElement>, duration = 1500) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      });
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [targetRef]);
  return visible;
}

const AnimatedNumber: React.FC<{ value: number; visible: boolean, suffix?: string }> = ({ value, visible, suffix }) => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start: number | null = null;
    let raf: number;
    const step = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / 1200, 1);
      setNum(Math.floor(progress * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, visible]);

  return <>{num.toLocaleString()}{suffix || ''}</>;
};

// Flexible Marquee - supports directions: ltr, rtl, up
const Marquee: React.FC<{ children: React.ReactNode; speed?: number; direction?: 'ltr'|'rtl'|'up' }> = ({ children, speed = 30, direction = 'rtl' }) => {
  const baseStyle: React.CSSProperties = { whiteSpace: 'nowrap', display: 'flex', gap: '2rem', alignItems: 'center' };
  if (direction === 'up') {
    return (
      <div className="marquee-vert" style={{ overflow: 'hidden' }}>
        <div className="marquee-vert-track" style={{ animationDuration: `${speed}s` }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>{children}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="marquee" style={{ overflow: 'hidden' }}>
      <div className={`marquee-track ${direction === 'ltr' ? 'ltr' : 'rtl'}`} style={{ animationDuration: `${speed}s` }}>
        <div style={baseStyle}>{children}</div>
        <div style={baseStyle}>{children}</div>
      </div>
    </div>
  );
};

// Live dataset (real Unsplash imagery used)
const programs: ProgramItem[] = [
  {
    id: 'education',
    title: 'Education Support',
    desc: 'Scholarships, literacy hubs, tutoring and curriculum support.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600',
    stats: [ { label: 'Scholarships', value: 1420 }, { label: 'Labs', value: 45 }, { label: 'Completion %', value: 94 } ]
  },
  {
    id: 'health',
    title: 'Health & Nutrition',
    desc: 'Mobile clinics, immunizations, therapeutic feeding programs.',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1600',
    stats: [ { label: 'Treated', value: 18200 }, { label: 'Meals', value: 3200000 }, { label: 'Wells', value: 240 } ]
  },
  {
    id: 'protection',
    title: 'Child Protection',
    desc: 'Hotlines, shelters and rehabilitation for exploited children.',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=1600',
    stats: [ { label: 'Rescued', value: 345 }, { label: 'Advocates', value: 12000 }, { label: 'IDs Registered', value: 8500 } ]
  }
];

export default function App() {
  const heroStatRef = useRef<HTMLDivElement | null>(null);
  const heroVisible = useRevealCount(heroStatRef, 1200);

  return (
    <div className="site-root" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* NAV - streamlined: Explore (programs), Impact, Team, Contact. About is intentionally shown on the page (not in menu). */}
      <header className="site-nav">
        <div className="nav-inner">
          <div className="brand">
            <div className="logo">
              <Heart className="logo-ikon" />
            </div>
            <div className="brand-text">ThriveKids</div>
          </div>
          <nav className="nav-links">
            <a href="#programs">Explore</a>
            <a href="#impact">Impact</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-cta">
            <button className="donate">Donate</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">Global Nonprofit • Transparency & Impact</div>
            <h1 className="hero-title">Empower Every Child — Transform Generations</h1>
            <p className="hero-lead">ThriveKids works in partnership with local communities to deliver education, health, protection and family-strengthening programs that are measurable and audited.</p>

            <div className="cta-row">
              <button className="btn-primary">Support Now <ChevronRight /></button>
              <button className="btn-ghost">Our Work</button>
            </div>

            <div ref={heroStatRef} className="hero-stats">
              <div className="stat">
                <div className="stat-value"><AnimatedNumber value={50000} visible={heroVisible} /></div>
                <div className="stat-label">Lives Transformed</div>
              </div>
              <div className="stat">
                <div className="stat-value"><AnimatedNumber value={15} visible={heroVisible} /></div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="stat">
                <div className="stat-value"><AnimatedNumber value={87} visible={heroVisible} suffix="%" /></div>
                <div className="stat-label">Direct Program Efficiency</div>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <div className="floating-card about-card">
              <h3>About ThriveKids</h3>
              <p>We are an internationally registered charity delivering child-first programs with proven outcomes and audited transparency. Learn how we protect beneficiaries while maximizing impact.</p>
              <a href="#impact" className="link-cta">See our Impact</a>
            </div>

            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1469571486292-0ba58e3f068b?auto=format&fit=crop&q=80&w=1400" alt="children learning" />
            </div>
          </div>
        </section>

        {/* MARQUEE - horizontal right-to-left */}
        <section className="marquee-section">
          <Marquee speed={45} direction="rtl">
            {[
              '✨ 50,000+ Lives Transformed',
              '📚 1,420+ Scholarships',
              '🏥 18,200+ Treated',
              '🛡️ 345 Rescued',
              '💧 110 Water Wells',
            ].map((m, i) => (
              <div key={i} className="marquee-item">{m}</div>
            ))}
          </Marquee>
        </section>

        {/* PROGRAMS - streamlined grid with vertical and horizontal marquees*/}
        <section id="programs" className="programs">
          <div className="section-head">
            <h2>What We Do</h2>
            <p>Focused initiatives that deliver measurable results.</p>
          </div>

          <div className="program-grid">
            {programs.map((p, idx) => (
              <article key={p.id} className="program-card animate-card" style={{ animationDelay: `${idx * 120}ms` }}>
                <div className="card-media">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>

                  <div className="card-stats">
                    {p.stats.map((s, i) => (
                      <div key={i} className="card-stat">
                        <div className="num">{typeof s.value === 'number' ? s.value.toLocaleString() : s.value}</div>
                        <div className="lbl">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* vertical marquee inside programs area (upwards) */}
          <div className="program-marquee">
            <Marquee speed={35} direction="up">
              {programs.map((p, i) => (
                <div key={i} className="prog-mar">{p.title} — {p.stats[0].value}+</div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* IMPACT SECTION with animated counters and left-to-right marquee */}
        <section id="impact" className="impact">
          <div className="impact-inner">
            <div className="impact-head">
              <h2>Verified Impact</h2>
              <p>Transparent figures audited annually — visualized with motion.</p>
            </div>

            <div className="impact-grid">
              <div className="impact-card">
                <div className="impact-num"><AnimatedNumber value={50000} visible={true} /></div>
                <div className="impact-label">Lives Transformed</div>
              </div>
              <div className="impact-card">
                <div className="impact-num"><AnimatedNumber value={1420} visible={true} /></div>
                <div className="impact-label">Scholarships</div>
              </div>
              <div className="impact-card">
                <div className="impact-num"><AnimatedNumber value={18200} visible={true} /></div>
                <div className="impact-label">Children Treated</div>
              </div>
              <div className="impact-card">
                <div className="impact-num"><AnimatedNumber value={345} visible={true} /></div>
                <div className="impact-label">Rescued</div>
              </div>
            </div>

            <div className="impact-marquee">
              <Marquee speed={40} direction="ltr">
                {['Direct Allocation: 87.2%','CPA Audited','Annual Reports Available','Partnered Districts: 48'].map((t, i) => (
                  <div key={i} className="impact-mar-item">{t}</div>
                ))}
              </Marquee>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS with mixed-direction marquees */}
        <section className="testimonials">
          <div className="test-head"><h2>Stories</h2></div>

          <div className="test-row">
            <Marquee speed={55} direction="rtl">
              <div className="testimonial">“ThriveKids helped my daughter finish school.” — Amina, Kenya</div>
              <div className="testimonial">“Our village well changed everything.” — Daniel, Kajiado</div>
            </Marquee>

            <Marquee speed={50} direction="ltr">
              <div className="testimonial">“They rebuilt our community center.” — Maria, Colombia</div>
              <div className="testimonial">“Nutrition program saved my son.” — Priya, India</div>
            </Marquee>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="team">
          <div className="section-head">
            <h2>Leadership</h2>
            <p>Experts in humanitarian, finance and child safeguarding.</p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900" alt="Helen" />
              <div className="t-body"><strong>Dr. Helen Vance</strong><span>Executive Director</span></div>
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=900" alt="Marcus" />
              <div className="t-body"><strong>Marcus Reynolds</strong><span>Chief Financial Officer</span></div>
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=900" alt="Daniel" />
              <div className="t-body"><strong>Ambassador D.K. Choi</strong><span>Chairperson</span></div>
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=900" alt="Sarah" />
              <div className="t-body"><strong>Sarah Jenkins-Hume</strong><span>Chair Governance</span></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="cta-inner">
            <h2>Ready to transform a child's future?</h2>
            <p>Join our global community of supporters and make measurable impact today.</p>
            <div className="cta-actions"><button className="btn-primary">Donate</button><button className="btn-ghost">Partner With Us</button></div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="site-footer">
          <div className="footer-inner">
            <div className="brand">
              <Heart className="logo-ikon" />
              <div>ThriveKids Global Foundation</div>
            </div>
            <div className="footer-links">
              <div>
                <h4>Programs</h4>
                <a href="#programs">Explore</a>
              </div>
              <div>
                <h4>About</h4>
                <p>Registered charity. Audited reports available.</p>
              </div>
            </div>

            <div className="footer-meta">
              <p>© 2026 ThriveKids Global Foundation</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Inline helpful animation CSS */}
      <style>{`
        :root{--rose-500:#ef4444;--rose-600:#e11d48}
        .site-root{background:#fff;color:#111}
        .site-nav{position:sticky;top:0;z-index:60;background:rgba(255,255,255,0.8);backdrop-filter:blur(6px);border-bottom:1px solid rgba(17,24,39,0.06)}
        .nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:0.75rem 1rem}
        .brand{display:flex;align-items:center;gap:12px}
        .logo-ikon{color:var(--rose-600)}
        .brand-text{font-weight:700;font-size:1.1rem}
        .nav-links a{margin:0 12px;color:#374151;text-decoration:none}
        .donate{background:linear-gradient(90deg,var(--rose-500),var(--rose-600));color:white;padding:8px 16px;border-radius:8px;border:none}

        .hero{display:flex;gap:2rem;align-items:center;justify-content:space-between;padding:5rem 1rem;background:linear-gradient(180deg,#f8fafc 0%, #fff 100%)}
        .hero-content{max-width:680px}
        .eyebrow{font-weight:600;color:var(--rose-600);margin-bottom:0.75rem}
        .hero-title{font-size:clamp(2rem,4vw,3.5rem);line-height:1.02;margin:0 0 1rem}
        .hero-lead{color:#6b7280;font-size:1.05rem;margin-bottom:1.25rem}
        .cta-row{display:flex;gap:1rem}
        .btn-primary{background:linear-gradient(90deg,var(--rose-500),var(--rose-600));color:white;padding:0.9rem 1.2rem;border-radius:10px;border:none;display:flex;align-items:center;gap:0.5rem}
        .btn-ghost{background:white;border:1px solid #e6e7eb;padding:0.9rem 1.2rem;border-radius:10px}

        .hero-stats{display:flex;gap:1.5rem;margin-top:1.5rem}
        .stat .stat-value{font-weight:800;font-size:1.35rem;color:var(--rose-600)}
        .hero-media{display:flex;flex-direction:column;gap:1rem;align-items:flex-end}
        .floating-card.about-card{background:white;padding:1rem;border-radius:12px;box-shadow:0 8px 30px rgba(2,6,23,0.08);width:320px;transform:translateY(-40px)}
        .hero-image img{width:520px;height:340px;object-fit:cover;border-radius:14px;box-shadow:0 30px 60px rgba(2,6,23,0.12)}

        .marquee{position:relative}
        .marquee-track{display:flex;gap:2rem;align-items:center}
        .marquee-track.rtl{animation:marquee-rtl linear infinite}
        .marquee-track.ltr{animation:marquee-ltr linear infinite}
        @keyframes marquee-rtl{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes marquee-ltr{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}

        .marquee-vert{height:120px}
        .marquee-vert-track{display:flex;flex-direction:column;gap:1.5rem;animation:marquee-up linear infinite}
        @keyframes marquee-up{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}

        .marquee-item{color:#111;background:rgba(255,255,255,0.03);padding:0.6rem 1rem;border-radius:8px}

        .programs{padding:4rem 1rem}
        .section-head{text-align:center;margin-bottom:1.5rem}
        .program-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.2rem}
        .program-card{background:white;border-radius:14px;overflow:hidden;display:flex;flex-direction:column}
        .card-media img{width:100%;height:220px;object-fit:cover}
        .card-body{padding:1rem}
        .card-stats{display:flex;gap:0.6rem;margin-top:0.75rem}
        .card-stat{flex:1;background:linear-gradient(180deg,#ffffff,#f8fafc);padding:0.6rem;border-radius:8px;text-align:center}

        .impact{padding:4rem 1rem;background:linear-gradient(180deg,#fbfdff,#fff)}
        .impact-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}
        .impact-card{background:white;padding:1.2rem;border-radius:12px;text-align:center;box-shadow:0 10px 30px rgba(2,6,23,0.06)}
        .impact-num{font-weight:800;font-size:1.6rem;color:var(--rose-600)}

        .testimonials{padding:3rem 1rem}
        .testimonial{min-width:320px;background:#fff;padding:1rem;border-radius:12px}

        .team{padding:4rem 1rem}
        .team-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}
        .team-card img{width:100%;height:220px;object-fit:cover}
        .t-body{padding:0.8rem}

        .cta{padding:3rem 1rem;background:linear-gradient(90deg,var(--rose-500),var(--rose-600));color:white;text-align:center}
        .cta-inner{max-width:900px;margin:0 auto}

        .site-footer{padding:3rem 1rem;background:#0f1724;color:#cbd5e1}
        .footer-inner{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;gap:1rem;align-items:flex-start}

        /* small screens */
        @media (max-width:768px){
          .hero{flex-direction:column;padding:3rem 1rem}
          .hero-image img{width:100%;height:auto}
          .marquee-track{animation-duration:30s!important}
          .impact-grid{grid-template-columns:repeat(2,1fr)}
        }
      `}</style>
    </div>
  );
}

'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

/* ===== DATA ===== */
const team = [
  {
    name: 'Kerem Aydın',
    role: 'Kurucu & Kreatif Direktör',
    bio: 'Marka stratejisi ve yaratıcı yön konusunda 10+ yıl deneyim. Markanızın hikayesini görsel bir dile dönüştürür.',
    skills: ['Strateji', 'Branding', 'Art Direction'],
    social: { linkedin: '#', instagram: '#', behance: '#' },
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 100%)',
    accent: '#b8a97a',
    initial: 'K',
  },
  {
    name: 'Defne Yıldız',
    role: 'Baş Tasarımcı',
    bio: 'UI/UX ve görsel tasarımda uzman. Her pikseli marka kimliğiyle uyumlu hale getirerek estetik ve fonksiyonelliği birleştirir.',
    skills: ['UI/UX', 'Motion', 'Illustration'],
    social: { linkedin: '#', instagram: '#', behance: '#' },
    gradient: 'linear-gradient(135deg, #0f2027 0%, #1a3a3a 100%)',
    accent: '#7ab8a9',
    initial: 'D',
  },
  {
    name: 'Berk Çelik',
    role: 'Full-Stack Geliştirici',
    bio: 'React, Next.js ve Node.js ile yüksek performanslı web uygulamaları inşa eder. Hız ve kullanıcı deneyimini ön planda tutar.',
    skills: ['Next.js', 'Node.js', 'DevOps'],
    social: { linkedin: '#', github: '#' },
    gradient: 'linear-gradient(135deg, #0d1117 0%, #1e3a5f 100%)',
    accent: '#7aa4b8',
    initial: 'B',
  },
  {
    name: 'Selin Kara',
    role: 'Video & İçerik Prodüktör',
    bio: 'Reklam filminden sosyal medya içeriğine kadar her formatı dönüştürücü hikayelerle hayata geçirir.',
    skills: ['Prodüksiyon', 'Senaryo', 'Post-FX'],
    social: { linkedin: '#', instagram: '#', vimeo: '#' },
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #3d1515 100%)',
    accent: '#b87a7a',
    initial: 'S',
  },
  {
    name: 'Emre Şahin',
    role: 'Dijital Pazarlama Uzmanı',
    bio: 'SEO, Google Ads ve performans pazarlamayla markaların hedef kitlesine en verimli şekilde ulaşmasını sağlar.',
    skills: ['SEO', 'Google Ads', 'Analytics'],
    social: { linkedin: '#', twitter: '#' },
    gradient: 'linear-gradient(135deg, #0b1a0b 0%, #1a3d1a 100%)',
    accent: '#7ab87a',
    initial: 'E',
  },
  {
    name: 'Ayşe Koç',
    role: 'Sosyal Medya Stratejisti',
    bio: 'İçerik takviminden etkileşim analizine kadar markaların sosyal medya varlığını stratejik bir yaklaşımla yönetir.',
    skills: ['İçerik', 'Analiz', 'Community'],
    social: { linkedin: '#', instagram: '#', twitter: '#' },
    gradient: 'linear-gradient(135deg, #1a1008 0%, #3d2e10 100%)',
    accent: '#b8a07a',
    initial: 'A',
  },
];

const SocialIcon = ({ type }) => {
  const icons = {
    linkedin: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    instagram: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    behance: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 11.5c1.38 0 2.5-1.12 2.5-2.5S8.88 6.5 7.5 6.5H2v11h5.5c1.65 0 3-1.35 3-3 0-1.3-.83-2.4-2-2.84zm-3.5-3h3c.55 0 1 .45 1 1s-.45 1-1 1H4v-2zm3.5 7H4v-3h3.5c.83 0 1.5.67 1.5 1.5S8.33 15.5 7.5 15.5zM20.5 9h-5v-1.5h5V9zm-2.5 6c-.83 0-1.5-.67-1.5-1.5h5c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.85 0 3.46-1.01 4.33-2.5H19c-.5.55-1.21.9-2 .9l-.5-.1c-.55.1-1.11.1-1 .1z" />
      </svg>
    ),
    github: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    twitter: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.626zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    vimeo: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.401 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.612-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.468 4.797z" />
      </svg>
    ),
  };
  return icons[type] || null;
};

export default function EkibimizPage() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="team-hero">
        <div className="team-hero-bg" />
        <div className="container team-hero-content">
          <div className="team-hero-label">
            <span className="label-pulse" />
            <span className="label-text">Ekibimiz</span>
          </div>
          <h1 className="team-hero-title">
            Arkamızdaki<br />
            <span className="text-gold">Güç</span>
          </h1>
          <p className="team-hero-sub">
            Tasarım, teknoloji ve stratejiyi harmanlayan, her projede tutku ve uzmanlıkla çalışan
            özenle seçilmiş profesyonellerden oluşan ekibimizle tanışın.
          </p>
          <div className="team-stats">
            <div className="team-stat">
              <span className="team-stat-num">6</span>
              <span className="team-stat-label">Uzman</span>
            </div>
            <div className="team-stat-divider" />
            <div className="team-stat">
              <span className="team-stat-num">5+</span>
              <span className="team-stat-label">Yıl Deneyim</span>
            </div>
            <div className="team-stat-divider" />
            <div className="team-stat">
              <span className="team-stat-num">50+</span>
              <span className="team-stat-label">Proje</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line" />
        </div>
      </section>

      {/* ===== TEAM GRID ===== */}
      <section className="team-section">
        <div className="container">
          <div className="team-grid">
            {team.map((member, i) => (
              <div
                key={i}
                className="team-card"
                ref={(el) => (cardsRef.current[i] = el)}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                {/* Avatar */}
                <div className="card-avatar-wrap">
                  <div className="card-avatar" style={{ background: member.gradient }}>
                    <span className="card-avatar-initial">{member.initial}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="card-info">
                  <h3 className="card-name">{member.name}</h3>
                  <p className="card-role" style={{ color: member.accent }}>{member.role}</p>
                  <p className="card-bio">{member.bio}</p>

                  {/* Skills */}
                  <div className="card-skills">
                    {member.skills.map((skill, j) => (
                      <span key={j} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social */}
                  <div className="card-social">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="social-btn"
                        aria-label={platform}
                      >
                        <SocialIcon type={platform} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOIN CTA ===== */}
      <section className="join-section">
        <div className="join-bg" />
        <div className="container join-inner">
          <span className="label-text">Katılın</span>
          <h2 className="join-title">Ekibimize Dahil Olmak<br /><span className="text-gold">İster Misiniz?</span></h2>
          <p className="join-desc">
            Yaratıcı ve tutkulu profesyonelleri her zaman aramızdaki görüyoruz.
            Portfolyonuzu bizimle paylaşın.
          </p>
          <div className="join-actions">
            <a href="mailto:hello@uniqbee.com.tr" className="btn btn-gold">
              Başvuru Gönderin
            </a>
            <Link href="/iletisim" className="btn btn-secondary">
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* HERO */
        .team-hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 90px;
          padding-bottom: 60px;
        }
        .team-hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 15% 40%, rgba(184,169,122,0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 20%, rgba(122,168,184,0.05) 0%, transparent 50%),
            var(--black);
        }
        .team-hero-content {
          position: relative;
          z-index: 1;
        }
        .team-hero-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }
        .label-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gold);
          position: relative;
        }
        .label-pulse::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid var(--gold);
          animation: ripple 2s ease-out infinite;
        }
        @keyframes ripple {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .team-hero-title {
          font-size: clamp(52px, 8vw, 110px);
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin: 0 0 24px;
        }
        .team-hero-sub {
          font-size: clamp(14px, 1.1vw, 17px);
          color: var(--lightgray);
          max-width: 540px;
          line-height: 1.7;
          margin-bottom: 48px;
        }
        .team-stats {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .team-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .team-stat-num {
          font-family: var(--font-display);
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 700;
          background: linear-gradient(135deg, var(--offwhite) 0%, var(--gold) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .team-stat-label {
          font-size: 12px;
          color: var(--lightgray);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .team-stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(200,200,200,0.1);
        }
        .scroll-indicator {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
        }
        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--gold) 0%, transparent 100%);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        /* TEAM GRID */
        .team-section {
          padding: clamp(64px, 8vw, 120px) 0;
          background:
            radial-gradient(ellipse at 50% 0%, rgba(184,169,122,0.04) 0%, transparent 60%),
            var(--anthracite);
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* CARD (APPLE STYLE) */
        .team-card {
          position: relative;
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          box-shadow: 
            0 24px 48px rgba(0, 0, 0, 0.2), 
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.4s ease,
            border-color 0.4s ease;
          cursor: default;
          overflow: hidden;
        }
        .team-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .team-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .team-card:hover {
          transform: translateY(-8px) scale(1.01);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 32px 64px rgba(0, 0, 0, 0.4), 
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }
        .team-card:hover::before {
          opacity: 1;
        }

        /* AVATAR */
        .card-avatar-wrap {
          margin-bottom: 24px;
          position: relative;
        }
        .card-avatar {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 12px 24px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .team-card:hover .card-avatar {
          transform: scale(1.08);
        }
        .card-avatar-initial {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 36px;
          font-weight: 500;
          color: rgba(255,255,255,0.95);
        }

        /* CARD TEXT */
        .card-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          flex: 1;
        }
        .card-name {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 4px;
          color: rgba(255,255,255,0.95);
          letter-spacing: -0.02em;
        }
        .card-role {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.02em;
          margin-bottom: 20px;
          opacity: 0.9;
        }
        .card-bio {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin-bottom: 28px;
          font-weight: 400;
        }

        /* SKILLS */
        .card-skills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 28px;
        }
        .skill-pill {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.01em;
          padding: 6px 12px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.75);
          transition: all 0.3s ease;
        }
        .team-card:hover .skill-pill {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.9);
          border-color: rgba(255,255,255,0.1);
        }

        /* SOCIAL */
        .card-social {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }
        .social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.6);
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .social-btn:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        /* JOIN */
        .join-section {
          position: relative;
          overflow: hidden;
          padding: clamp(80px, 12vw, 160px) 0;
        }
        .join-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at center, rgba(184,169,122,0.07) 0%, transparent 65%),
            var(--black);
        }
        .join-inner {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .join-title {
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 700;
          line-height: 1.1;
          margin: 16px 0 24px;
          letter-spacing: -0.02em;
        }
        .join-desc {
          color: var(--lightgray);
          max-width: 480px;
          margin: 0 auto 40px;
          line-height: 1.7;
          font-size: 15px;
        }
        .join-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* RESPONSIVE */
        @media (max-width: 1023px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .team-grid { grid-template-columns: 1fr; }
          .team-stats { gap: 20px; }
        }
      `}</style>
    </>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';

const allProjects = [
  { title: 'Luxe Hotel & Spa', category: 'Web Tasarım', slug: 'luxe-hotel', year: '2024', color: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', brief: 'Premium boutique otel için dijital deneyim tasarımı ve web sitesi geliştirme.' },
  { title: 'Verde Organics', category: 'Branding', slug: 'verde-organics', year: '2024', color: 'linear-gradient(135deg, #0f3d2e 0%, #1a472a 100%)', brief: 'Organik gıda markası için bütüncül marka kimliği tasarımı.' },
  { title: 'Sonic Audio', category: 'Video', slug: 'sonic-audio', year: '2023', color: 'linear-gradient(135deg, #2d1b4e 0%, #1a1145 100%)', brief: 'Ses teknolojisi markası için reklam filmi ve tanıtım videosu prodüksiyonu.' },
  { title: 'Atlas Fintech', category: 'UI/UX', slug: 'atlas-fintech', year: '2024', color: 'linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)', brief: 'FinTech mobil uygulama için kullanıcı deneyimi tasarımı.' },
  { title: 'Bloom Cosmetics', category: 'Sosyal Medya', slug: 'bloom-cosmetics', year: '2023', color: 'linear-gradient(135deg, #4a1942 0%, #2d1233 100%)', brief: 'Kozmetik markası için sosyal medya içerik stratejisi ve üretimi.' },
  { title: 'Wave Studio', category: 'Web Tasarım', slug: 'wave-studio', year: '2023', color: 'linear-gradient(135deg, #1a3c4a 0%, #0f2930 100%)', brief: 'Müzik prodüksiyon stüdyosu için kurumsal web sitesi tasarımı.' },
  { title: 'Peak Athletics', category: 'Kampanya', slug: 'peak-athletics', year: '2024', color: 'linear-gradient(135deg, #3d1f0a 0%, #2a1508 100%)', brief: 'Spor markası için dijital lansman kampanyası ve içerik üretimi.' },
  { title: 'Nora Fashion', category: 'Branding', slug: 'nora-fashion', year: '2023', color: 'linear-gradient(135deg, #2a1a1a 0%, #1a1010 100%)', brief: 'Moda markası için logo, kurumsal kimlik ve marka rehberi tasarımı.' },
  { title: 'Artisan Coffee', category: 'Video', slug: 'artisan-coffee', year: '2024', color: 'linear-gradient(135deg, #2d2215 0%, #1a150d 100%)', brief: 'Kahve markası için tanıtım filmi ve sosyal medya video içerikleri.' },
];

const categories = ['Tümü', 'Web Tasarım', 'Branding', 'Video', 'Sosyal Medya', 'Kampanya', 'UI/UX'];

export default function ProjectsPage() {
  const [active, setActive] = useState('Tümü');
  const filtered = active === 'Tümü' ? allProjects : allProjects.filter(p => p.category === active);

  return (
    <>
      <div className="breadcrumb container" style={{ paddingTop: 100 }}>
        <Link href="/">Ana Sayfa</Link>
        <span className="separator">›</span>
        <span>Projeler</span>
      </div>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <ScrollReveal>
            <span className="label-text">Portfolyo</span>
            <h1 style={{ marginTop: 16 }}>
              Seçili <span className="text-gold">Çalışmalarımız</span>
            </h1>
            <p className="body-large" style={{ maxWidth: 700, marginTop: 20 }}>
              Web tasarım, branding, video prodüksiyon ve dijital kampanya projelerimizden
              öne çıkan çalışmaları inceleyin.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div className="filter-bar">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${active === cat ? 'active' : ''}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="projects-grid">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.08}>
                <Link href={`/projeler/${project.slug}`} className="project-card">
                  <div className="project-img" style={{ background: project.color }}>
                    <div className="project-overlay">
                      <span>Projeyi İncele →</span>
                    </div>
                  </div>
                  <div className="project-meta">
                    <div className="project-tags">
                      <span className="label-text">{project.category}</span>
                      <span className="project-year">{project.year}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.brief}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--anthracite)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <h2>Benzer Bir Proje mi Düşünüyorsunuz?</h2>
            <p className="text-gray" style={{ maxWidth: 500, margin: '20px auto 40px' }}>
              Projenizi anlatın, size özel bir strateji ve teklif oluşturalım.
            </p>
            <Link href="/teklif" className="btn btn-gold">Teklif Al</Link>
          </ScrollReveal>
        </div>
      </section>

      <style jsx>{`
        .filter-bar {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }
        .filter-btn {
          padding: 10px 22px;
          font-size: 13px;
          font-weight: 500;
          border-radius: 50px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(200,200,200,0.1);
          color: var(--lightgray);
          transition: all 0.3s ease;
          letter-spacing: 0.02em;
        }
        .filter-btn:hover,
        .filter-btn.active {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--black);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .project-card {
          text-decoration: none;
          display: block;
        }
        .project-img {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-img {
          transform: scale(1.02);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10,10,10,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .project-overlay span {
          color: var(--gold);
          font-weight: 600;
          font-size: 14px;
        }
        .project-meta {
          padding: 16px 4px 0;
        }
        .project-tags {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }
        .project-year {
          font-size: 12px;
          color: var(--lightgray);
        }
        .project-meta h3 {
          font-size: 20px;
          margin-bottom: 6px;
        }
        .project-meta p {
          font-size: 14px;
          color: var(--lightgray);
          line-height: 1.5;
        }
        @media (max-width: 1023px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 767px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

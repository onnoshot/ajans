'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';

const articles = [
  {
    slug: 'web-tasarim-fiyatlari-2025',
    title: 'Web Tasarım Fiyatları 2025: Ajans mı, Freelancer mı?',
    category: 'Dijital',
    date: '15 Şubat 2025',
    readTime: '8 dk',
    excerpt: 'Web tasarım projesi planlıyorsanız, 2025 yılında ajans ve freelancer fiyatlarını karşılaştırarak en doğru kararı vermenize yardımcı oluyoruz.',
    featured: true,
    color: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  },
  {
    slug: 'marka-kimligi-nedir',
    title: 'Marka Kimliği Tasarımı Nedir? Neden Önemlidir?',
    category: 'Tasarım',
    date: '8 Şubat 2025',
    readTime: '6 dk',
    excerpt: 'Marka kimliği sadece bir logodan ibaret değildir. Başarılı bir marka kimliği tasarımının tüm bileşenlerini ve neden kritik olduğunu keşfedin.',
    color: 'linear-gradient(135deg, #0f3d2e 0%, #1a472a 100%)',
  },
  {
    slug: 'sosyal-medya-ajans-secimi',
    title: 'Sosyal Medya Yönetimi İçin En İyi Ajans Nasıl Seçilir?',
    category: 'Strateji',
    date: '1 Şubat 2025',
    readTime: '7 dk',
    excerpt: 'Sosyal medya ajansı seçerken dikkat etmeniz gereken 10 kritik faktörü ve doğru ajansı bulmanın ipuçlarını paylaşıyoruz.',
    color: 'linear-gradient(135deg, #2d1b4e 0%, #1a1145 100%)',
  },
  {
    slug: 'reklam-filmi-sureci',
    title: 'Reklam Filmi Çekimi Süreci: Baştan Sona Nasıl İşler?',
    category: 'Kreatif',
    date: '25 Ocak 2025',
    readTime: '9 dk',
    excerpt: 'Bir reklam filmi projesi baştan sona nasıl ilerler? Pre-prodüksiyondan post-prodüksiyona tüm aşamaları detaylıca anlatıyoruz.',
    color: 'linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)',
  },
  {
    slug: 'ui-ux-donusum-orani',
    title: 'UI/UX Tasarımı ile Dönüşüm Oranını Artırmanın 7 Yolu',
    category: 'Tasarım',
    date: '18 Ocak 2025',
    readTime: '10 dk',
    excerpt: 'Kullanıcı deneyimi tasarımınızı optimize ederek web sitenizin dönüşüm oranlarını nasıl artırabileceğinizi keşfedin.',
    color: 'linear-gradient(135deg, #4a1942 0%, #2d1233 100%)',
  },
  {
    slug: 'dijital-ajans-secerken',
    title: 'İstanbul\'da Dijital Ajans Seçerken Dikkat Edilmesi Gerekenler',
    category: 'Strateji',
    date: '10 Ocak 2025',
    readTime: '6 dk',
    excerpt: 'Doğru dijital ajansı bulmak markanız için kritik bir karar. İstanbul\'daki ajansları değerlendirirken göz önünde bulundurmanız gerekenleri paylaşıyoruz.',
    color: 'linear-gradient(135deg, #3d1f0a 0%, #2a1508 100%)',
  },
];

const categories = ['Tümü', 'Tasarım', 'Dijital', 'Strateji', 'Kreatif', 'Trendler'];

export default function JournalPage() {
  const [active, setActive] = useState('Tümü');
  const filtered = active === 'Tümü' ? articles : articles.filter(a => a.category === active);
  const featured = articles.find(a => a.featured);
  const rest = filtered.filter(a => !a.featured || active !== 'Tümü');

  return (
    <>
      <div className="breadcrumb container" style={{ paddingTop: 100 }}>
        <Link href="/">Ana Sayfa</Link>
        <span className="separator">›</span>
        <span>Journal</span>
      </div>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <ScrollReveal>
            <span className="label-text">Blog & Yazılar</span>
            <h1 style={{ marginTop: 16 }}>Journal</h1>
            <p className="body-large" style={{ maxWidth: 600, marginTop: 20 }}>
              Tasarım, dijital strateji ve kreatif dünya hakkında UniqBee'nin bakış açıları.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURED */}
      {active === 'Tümü' && featured && (
        <section className="section" style={{ paddingTop: 0, paddingBottom: 40 }}>
          <div className="container">
            <ScrollReveal>
              <Link href={`/journal/${featured.slug}`} className="featured-article">
                <div className="featured-img" style={{ background: featured.color }}></div>
                <div className="featured-content">
                  <span className="label-text">{featured.category} · {featured.readTime} okuma</span>
                  <h2>{featured.title}</h2>
                  <p className="text-gray">{featured.excerpt}</p>
                  <span className="featured-date">{featured.date}</span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="section" style={{ paddingTop: 20 }}>
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
          <div className="articles-grid">
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.08}>
                <Link href={`/journal/${article.slug}`} className="article-card">
                  <div className="article-img" style={{ background: article.color }}></div>
                  <div className="article-content">
                    <div className="article-meta">
                      <span className="label-text">{article.category}</span>
                      <span className="article-time">{article.readTime}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <span className="article-date">{article.date}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .filter-bar {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 40px;
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
        }
        .filter-btn:hover, .filter-btn.active {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--black);
        }
        .featured-article {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 50px;
          text-decoration: none;
          align-items: center;
        }
        .featured-img {
          aspect-ratio: 16/10;
          border-radius: var(--radius-md);
        }
        .featured-content {
          padding: 20px 0;
        }
        .featured-content h2 {
          margin: 16px 0;
          font-size: clamp(24px, 3vw, 36px);
          transition: color 0.3s ease;
        }
        .featured-article:hover h2 { color: var(--gold); }
        .featured-content p { line-height: 1.7; margin-bottom: 16px; }
        .featured-date { font-size: 13px; color: var(--lightgray); }
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .article-card {
          text-decoration: none;
          display: block;
        }
        .article-img {
          aspect-ratio: 16/10;
          border-radius: var(--radius-md);
          margin-bottom: 16px;
          transition: transform 0.4s ease;
        }
        .article-card:hover .article-img { transform: scale(1.02); }
        .article-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .article-time {
          font-size: 12px;
          color: var(--lightgray);
        }
        .article-content h3 {
          font-size: 18px;
          margin-bottom: 8px;
          transition: color 0.3s ease;
          line-height: 1.3;
        }
        .article-card:hover h3 { color: var(--gold); }
        .article-content p {
          font-size: 14px;
          color: var(--lightgray);
          line-height: 1.6;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .article-date { font-size: 12px; color: var(--lightgray); }
        @media (max-width: 1023px) {
          .featured-article { grid-template-columns: 1fr; gap: 20px; }
          .articles-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 767px) {
          .articles-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

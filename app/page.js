'use client';
import Link from 'next/link';
import ScrollReveal from './components/ScrollReveal';

/* ===== DATA ===== */
const brands = ['Nike', 'Samsung', 'Spotify', 'Adobe', 'Airbnb', 'Tesla', 'Netflix', 'Apple', 'Google', 'Meta', 'Figma', 'Slack'];

const ServiceIcon = ({ type }) => {
  const icons = {
    web: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="22" height="16" rx="2"/><path d="M8 24h12"/><path d="M14 20v4"/><path d="M3 16h22"/></svg>,
    brand: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3l3.5 7 7.5 1.5-5.5 5 1.5 7.5L14 20.5 7 24l1.5-7.5L3 11.5l7.5-1.5z"/></svg>,
    social: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="20" height="20" rx="5"/><circle cx="14" cy="14" r="5"/><circle cx="20.5" cy="7.5" r="1.5" fill="currentColor"/></svg>,
    video: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="17" height="18" rx="2"/><path d="M19 10l7-4v16l-7-4z"/></svg>,
    photo: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="22" height="18" rx="2"/><circle cx="14" cy="15" r="4"/><path d="M9 6l1.5-3h7L19 6"/></svg>,
    campaign: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4L6 12l6 3 3 6z"/><path d="M22 4L12 15"/><circle cx="8" cy="20" r="4" strokeDasharray="3 3"/></svg>,
    uiux: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="20" height="20" rx="3"/><path d="M4 10h20"/><circle cx="8" cy="7" r="1" fill="currentColor"/><circle cx="11" cy="7" r="1" fill="currentColor"/><rect x="8" y="14" width="5" height="6" rx="1"/><rect x="15" y="14" width="5" height="3" rx="1"/></svg>,
    digital: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l4-6 4 4 4-8 8 10"/><path d="M20 8v4h4"/><rect x="3" y="4" width="22" height="20" rx="2"/></svg>,
  };
  return icons[type] || null;
};

const services = [
  { icon: 'web', title: 'Web Tasarım & Geliştirme', desc: 'Markanızı dijitalde güçlü bir şekilde temsil eden, kullanıcı odaklı ve SEO uyumlu web siteleri tasarlıyoruz.', href: '/hizmetler/web-tasarim' },
  { icon: 'brand', title: 'Marka Kimliği Tasarımı', desc: 'Logo, renk paleti ve tipografiden kurumsal kimliğe kadar markanızın görsel dilini oluşturuyoruz.', href: '/hizmetler/marka-kimligi' },
  { icon: 'social', title: 'Sosyal Medya İçerik', desc: 'Markanız için dikkat çeken, etkileşim yaratan ve dönüştüren sosyal medya içerikleri üretiyoruz.', href: '/hizmetler/sosyal-medya' },
  { icon: 'video', title: 'Video Prodüksiyon', desc: 'Reklam filmi, tanıtım videosu ve sosyal medya video içerikleri ile hikayenizi görselleştiriyoruz.', href: '/hizmetler/video-produksiyon' },
  { icon: 'photo', title: 'Fotoğraf Çekimi', desc: 'Ürün, mekan ve kurumsal fotoğraf çekimi ile markanızın profesyonel görsel arşivini oluşturuyoruz.', href: '/hizmetler/fotograf-cekimi' },
  { icon: 'campaign', title: 'Kreatif Kampanya', desc: 'Hedef kitlenize ulaşan, marka bilinirliğini artıran yaratıcı dijital kampanyalar tasarlıyoruz.', href: '/hizmetler/kreatif-kampanya' },
  { icon: 'uiux', title: 'UI/UX Tasarım', desc: 'Kullanıcı deneyimini merkeze alan, estetik ve fonksiyonel dijital arayüzler tasarlıyoruz.', href: '/hizmetler/ui-ux-tasarim' },
  { icon: 'digital', title: 'Dijital Pazarlama', desc: 'SEO, Google Ads, performans pazarlama ile markanızın dijital görünürlüğünü artırıyoruz.', href: '/hizmetler/dijital-pazarlama' },
];

const stats = [
  { number: '50+', label: 'Tamamlanan Proje' },
  { number: '10+', label: 'Ülkeden Müşteri' },
  { number: '5+', label: 'Yıllık Deneyim' },
  { number: '%97', label: 'Müşteri Memnuniyeti' },
];

const projects = [
  { title: 'Luxe Hotel & Spa', category: 'Web Tasarım & Branding', slug: 'luxe-hotel', image: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' },
  { title: 'Verde Organics', category: 'Marka Kimliği', slug: 'verde-organics', image: 'linear-gradient(135deg, #0f3d2e 0%, #1a472a 100%)' },
  { title: 'Sonic Audio', category: 'Video Prodüksiyon', slug: 'sonic-audio', image: 'linear-gradient(135deg, #2d1b4e 0%, #1a1145 100%)' },
  { title: 'Atlas Fintech', category: 'UI/UX Tasarım', slug: 'atlas-fintech', image: 'linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)' },
];

const processSteps = [
  { num: '01', title: 'Keşif', desc: 'Markanızı, hedeflerinizi ve sektörünüzü derinlemesine analiz ediyor, projenin temellerini atıyoruz.' },
  { num: '02', title: 'Strateji', desc: 'İçgörülere dayalı kreatif strateji ve yol haritası oluşturuyor, hedeflerinize uygun çözümler planlıyoruz.' },
  { num: '03', title: 'Üretim', desc: 'Onaylanan stratejiyi hayata geçiriyor, tasarım ve geliştirme sürecini şeffaf bir şekilde yürütüyoruz.' },
  { num: '04', title: 'Teslimat', desc: 'Projeyi test ediyor, optimize ediyor ve kusursuz bir şekilde teslim ediyoruz. Sonrasında da yanınızdayız.' },
];

const testimonials = [
  { name: 'Ahmet Yılmaz', title: 'CEO, TechVista', text: 'UniqBee ile çalışmak markanız için atacağınız en iyi adım. Kreatif zekâları ve profesyonel süreç yönetimleri bizim için büyük fark yarattı.' },
  { name: 'Elif Demir', title: 'Pazarlama Direktörü, Luma', text: 'Web sitemizin yeniden tasarımı sonrası dönüşüm oranlarımız %140 arttı. Ekip her detayı düşünüyor, beklentilerin ötesine geçiyor.' },
  { name: 'Mert Kaya', title: 'Kurucu, Artisan Coffee', text: 'Marka kimliğimizden sosyal medya içeriklerimize kadar her şey mükemmel. UniqBee, vizyonumuzu gerçeğe dönüştürdü.' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <ScrollReveal>
            <span className="label-text">İstanbul Merkezli Kreatif Ajans</span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="hero-title">
              Dijitalde Sınırları<br />
              <span className="text-gold">Zorlayan</span> Ajans
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="hero-sub">
              Web tasarım, marka kimliği, video prodüksiyon ve dijital pazarlama alanlarında
              İstanbul merkezli premium kreatif ajans. Markanızı bir üst seviyeye taşıyoruz.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.45}>
            <div className="hero-ctas">
              <Link href="/projeler" className="btn btn-primary">Projelerimizi İncele</Link>
              <Link href="/teklif" className="btn btn-secondary">Teklif Al</Link>
            </div>
          </ScrollReveal>
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
          </div>
        </div>
      </section>

      {/* ===== BRAND MARQUEE ===== */}
      <section className="section brands-section">
        <div className="container">
          <ScrollReveal>
            <p className="brands-label label-text" style={{ textAlign: 'center', marginBottom: 40 }}>Güvenen Markalar</p>
          </ScrollReveal>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...brands, ...brands].map((brand, i) => (
              <span key={i} className="brand-item">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section services-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ textAlign: 'center' }}>
              <span className="label-text">Hizmetlerimiz</span>
              <h2>Ne Yapıyoruz?</h2>
              <p style={{ margin: '0 auto' }}>
                Markanızın ihtiyaç duyduğu tüm kreatif ve dijital çözümleri, İstanbul merkezli uzman ekibimizle sunuyoruz.
              </p>
            </div>
          </ScrollReveal>
          <div className="services-grid">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href={service.href} className="service-card">
                  <div className="service-card-inner">
                    <div className="service-card-top">
                      <div className="service-icon-badge">
                        <ServiceIcon type={service.icon} />
                      </div>
                      <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                    <span className="service-link">
                      <span className="service-link-text">Detayları Gör</span>
                      <span className="service-link-arrow">→</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section stats-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ textAlign: 'center' }}>
              <span className="label-text">Rakamlarla Biz</span>
              <h2>Neden Bizi Seçiyorlar?</h2>
            </div>
          </ScrollReveal>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Portfolyo</span>
              <h2>Seçili Çalışmalar</h2>
              <p>Her projede markanın hikayesini, estetiğini ve hedeflerini merkeze alıyoruz.</p>
            </div>
          </ScrollReveal>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href={`/projeler/${project.slug}`} className="project-card">
                  <div className="project-image" style={{ background: project.image }}>
                    <div className="project-overlay">
                      <span className="project-view">Projeyi İncele →</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="project-category label-text">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: 50 }}>
              <Link href="/projeler" className="btn btn-secondary">Tüm Projeleri Gör</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section" style={{ background: 'var(--anthracite)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ textAlign: 'center' }}>
              <span className="label-text">Sürecimiz</span>
              <h2>Nasıl Çalışıyoruz?</h2>
              <p style={{ margin: '0 auto' }}>Her projede kanıtlanmış, şeffaf ve sonuç odaklı bir süreç izliyoruz.</p>
            </div>
          </ScrollReveal>
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="process-step">
                  <span className="process-num">{step.num}</span>
                  <div className="process-line"></div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ textAlign: 'center' }}>
              <span className="label-text">Referanslar</span>
              <h2>Müşterilerimiz Ne Diyor?</h2>
            </div>
          </ScrollReveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="testimonial-card card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                    <div>
                      <span className="testimonial-name">{t.name}</span>
                      <span className="testimonial-title">{t.title}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section about-preview" style={{ background: 'var(--anthracite)' }}>
        <div className="container about-preview-inner">
          <ScrollReveal>
            <div className="about-preview-content">
              <span className="label-text">Hakkımızda</span>
              <h2>Biz Kimiz?</h2>
              <p>
                UniqBee, İstanbul merkezli bir kreatif ajans olarak markaların dijital dünyada güçlü,
                tutarlı ve etkileyici bir varlık göstermesini sağlıyor. Tasarım, teknoloji ve stratejiyi
                bir araya getirerek sonuç üreten işler ortaya koyuyoruz.
              </p>
              <p>
                Her projede müşterilerimizin vizyonunu anlıyor, sektörlerini analiz ediyor ve
                beklentilerin ötesinde çözümler sunuyoruz. Estetik, işlevsellik ve performansı
                bir arada tutmak bizim işimiz.
              </p>
              <Link href="/hakkimizda" className="btn btn-secondary" style={{ marginTop: 10 }}>
                Hakkımızda Daha Fazla
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className="section closing-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span className="label-text">Bir Sonraki Adım</span>
            <h2 style={{ fontSize: 'var(--h1-size)', marginTop: 16 }}>Projenizi Konuşalım</h2>
            <p className="body-large" style={{ maxWidth: 600, margin: '20px auto 40px' }}>
              Markanız için güçlü ve etkileyici bir dijital deneyim yaratmaya hazırız. İlk adımı siz atın.
            </p>
            <div className="hero-ctas" style={{ justifyContent: 'center' }}>
              <Link href="/teklif" className="btn btn-gold">Teklif Al</Link>
              <a href="https://wa.me/902121234567" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                WhatsApp ile Yazın
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style jsx>{`
        /* HERO */
        .hero {
          min-height: 92vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 72px;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(184, 169, 122, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(184, 169, 122, 0.04) 0%, transparent 50%),
            var(--black);
        }
        .hero-content {
          position: relative;
          z-index: 1;
          padding-top: 32px;
          padding-bottom: 48px;
        }
        .hero-title {
          margin: 16px 0 20px;
        }
        .hero-sub {
          font-size: clamp(14px, 1.1vw, 17px);
          color: var(--lightgray);
          max-width: 520px;
          line-height: 1.65;
          margin-bottom: 32px;
        }
        .hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
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

        /* BRANDS */
        .brands-section {
          padding-top: 32px;
          padding-bottom: 32px;
          border-top: 1px solid rgba(200,200,200,0.06);
          border-bottom: 1px solid rgba(200,200,200,0.06);
        }
        .brand-item {
          font-family: var(--font-display);
          font-size: clamp(15px, 1.5vw, 22px);
          font-weight: 600;
          color: rgba(200,200,200,0.18);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
          user-select: none;
        }

        /* SERVICES */
        .services-section {
          background:
            radial-gradient(ellipse at 30% 0%, rgba(184,169,122,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 100%, rgba(184,169,122,0.04) 0%, transparent 50%),
            var(--anthracite);
          overflow: hidden;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .service-card {
          display: block;
          text-decoration: none;
          height: 100%;
          border-radius: var(--radius-md);
          position: relative;
          padding: 1px;
          background: rgba(200,200,200,0.06);
          transition: background 0.5s ease;
        }
        .service-card:hover {
          background: linear-gradient(135deg, rgba(184,169,122,0.5) 0%, rgba(184,169,122,0.1) 50%, rgba(184,169,122,0.3) 100%);
        }
        .service-card-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 24px 20px;
          border-radius: calc(var(--radius-md) - 1px);
          background: rgba(20,20,20,0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: background 0.4s ease;
        }
        .service-card:hover .service-card-inner {
          background: rgba(25,25,25,0.95);
        }
        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .service-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(184,169,122,0.12) 0%, rgba(184,169,122,0.04) 100%);
          color: var(--gold);
          transition: all 0.4s ease;
          flex-shrink: 0;
        }
        .service-card:hover .service-icon-badge {
          background: linear-gradient(135deg, rgba(184,169,122,0.3) 0%, rgba(184,169,122,0.1) 100%);
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(184,169,122,0.15);
        }
        .service-num {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          color: rgba(184,169,122,0.25);
          letter-spacing: 0.05em;
          transition: color 0.3s ease;
        }
        .service-card:hover .service-num {
          color: rgba(184,169,122,0.5);
        }
        .service-title {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }
        .service-card:hover .service-title {
          color: var(--gold);
        }
        .service-desc {
          font-size: 13px;
          color: var(--lightgray);
          line-height: 1.6;
          flex: 1;
          margin-bottom: 16px;
        }
        .service-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--gold);
          margin-top: auto;
        }
        .service-link-text {
          transition: letter-spacing 0.3s ease;
        }
        .service-card:hover .service-link-text {
          letter-spacing: 0.03em;
        }
        .service-link-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
          font-size: 16px;
        }
        .service-card:hover .service-link-arrow {
          transform: translateX(6px);
        }
        .stats-section {
          background:
            radial-gradient(ellipse at center, rgba(184,169,122,0.04) 0%, transparent 70%),
            var(--black);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          text-align: center;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .stat-number {
          font-family: var(--font-display);
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 700;
          line-height: 1;
          background: linear-gradient(135deg, var(--offwhite) 0%, var(--gold) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          font-size: var(--small-size);
          color: var(--lightgray);
          letter-spacing: 0.03em;
        }

        /* PROJECTS */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .project-card {
          display: block;
          text-decoration: none;
        }
        .project-image {
          width: 100%;
          aspect-ratio: 16/10;
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
          transition: transform var(--transition-medium);
        }
        .project-card:hover .project-image {
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
          transition: opacity var(--transition-fast);
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .project-view {
          color: var(--gold);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.04em;
        }
        .project-info {
          padding: 18px 4px 0;
        }
        .project-category {
          font-size: 11px;
          margin-bottom: 6px;
          display: block;
        }
        .project-info h3 {
          font-size: 22px;
          font-weight: 600;
        }

        /* PROCESS */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }
        .process-step {
          text-align: center;
          position: relative;
        }
        .process-num {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 700;
          color: rgba(184,169,122,0.15);
          line-height: 1;
          display: block;
          margin-bottom: 12px;
        }
        .process-line {
          width: 32px;
          height: 1.5px;
          background: var(--gold);
          margin: 0 auto 12px;
        }
        .process-step h3 {
          font-size: 17px;
          margin-bottom: 8px;
        }
        .process-step p {
          font-size: 13px;
          color: var(--lightgray);
          line-height: 1.55;
        }

        /* TESTIMONIALS */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .testimonial-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .testimonial-quote {
          font-family: var(--font-serif);
          font-size: 40px;
          line-height: 1;
          color: var(--gold);
          opacity: 0.4;
          height: 32px;
        }
        .testimonial-text {
          font-size: 14px;
          color: var(--lightgray);
          line-height: 1.65;
          flex: 1;
          font-style: italic;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
        }
        .testimonial-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--gold);
          color: var(--black);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
        }
        .testimonial-name {
          font-weight: 600;
          font-size: 14px;
          display: block;
        }
        .testimonial-title {
          font-size: 12px;
          color: var(--lightgray);
        }

        /* ABOUT PREVIEW */
        .about-preview-content {
          max-width: 700px;
        }
        .about-preview-content h2 {
          margin: 12px 0 24px;
        }
        .about-preview-content p {
          color: var(--lightgray);
          margin-bottom: 16px;
          line-height: 1.8;
        }

        /* CLOSING CTA */
        .closing-cta {
          background:
            radial-gradient(ellipse at center, rgba(184,169,122,0.06) 0%, transparent 60%),
            var(--black);
          padding-top: clamp(80px, 12vw, 180px);
          padding-bottom: clamp(80px, 12vw, 180px);
        }

        /* RESPONSIVE */
        @media (max-width: 1023px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .process-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonials-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 767px) {
          .hero { min-height: 85vh; }
          .services-grid { grid-template-columns: 1fr; gap: 32px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .projects-grid { grid-template-columns: 1fr; gap: 32px; }
          .process-grid { grid-template-columns: 1fr; gap: 40px; }
          .testimonials-grid { grid-template-columns: 1fr; gap: 32px; }
          .hero-ctas { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}

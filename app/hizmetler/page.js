'use client';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';

const ServiceIcon = ({ type }) => {
  const icons = {
    web: <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="22" height="16" rx="2"/><path d="M8 24h12"/><path d="M14 20v4"/><path d="M3 16h22"/></svg>,
    brand: <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3l3.5 7 7.5 1.5-5.5 5 1.5 7.5L14 20.5 7 24l1.5-7.5L3 11.5l7.5-1.5z"/></svg>,
    social: <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="20" height="20" rx="5"/><circle cx="14" cy="14" r="5"/><circle cx="20.5" cy="7.5" r="1.5" fill="currentColor"/></svg>,
    video: <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="17" height="18" rx="2"/><path d="M19 10l7-4v16l-7-4z"/></svg>,
    photo: <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="22" height="18" rx="2"/><circle cx="14" cy="15" r="4"/><path d="M9 6l1.5-3h7L19 6"/></svg>,
    campaign: <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4L6 12l6 3 3 6z"/><path d="M22 4L12 15"/><circle cx="8" cy="20" r="4" strokeDasharray="3 3"/></svg>,
    uiux: <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="20" height="20" rx="3"/><path d="M4 10h20"/><circle cx="8" cy="7" r="1" fill="currentColor"/><circle cx="11" cy="7" r="1" fill="currentColor"/><rect x="8" y="14" width="5" height="6" rx="1"/><rect x="15" y="14" width="5" height="3" rx="1"/></svg>,
    digital: <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l4-6 4 4 4-8 8 10"/><path d="M20 8v4h4"/><rect x="3" y="4" width="22" height="20" rx="2"/></svg>,
  };
  return icons[type] || null;
};

const services = [
  { slug: 'web-tasarim', icon: 'web', title: 'Web Tasarım & Geliştirme', desc: 'Markanızı dijitalde güçlü bir şekilde temsil eden, kullanıcı odaklı ve SEO uyumlu premium web siteleri tasarlıyor ve geliştiriyoruz. Kurumsal siteden e-ticaret platformuna kadar geniş yelpazede çözümler sunuyoruz.', keyword: 'Web Tasarım Ajansı İstanbul' },
  { slug: 'marka-kimligi', icon: 'brand', title: 'Marka Kimliği Tasarımı', desc: 'Logo, renk paleti, tipografi ve tüm marka dokunuş noktalarını kapsayan bütüncül marka kimlik sistemleri oluşturuyoruz. Markanızın benzersiz hikayesini görsel bir dile çeviriyoruz.', keyword: 'Marka Kimliği Tasarımı' },
  { slug: 'sosyal-medya', icon: 'social', title: 'Sosyal Medya İçerik Üretimi', desc: 'Markanız için strateji odaklı, dikkat çeken ve etkileşim yaratan sosyal medya içerikleri üretiyoruz. Instagram, TikTok, LinkedIn ve tüm platformlarda tutarlı bir marka varlığı oluşturuyoruz.', keyword: 'Sosyal Medya İçerik Ajansı' },
  { slug: 'video-produksiyon', icon: 'video', title: 'Video Prodüksiyon', desc: 'Reklam filmi, tanıtım videosu, sosyal medya video içerikleri ve kurumsal film prodüksiyon hizmetleriyle hikayenizi en etkili şekilde anlatıyoruz.', keyword: 'Reklam Filmi Çekimi İstanbul' },
  { slug: 'fotograf-cekimi', icon: 'photo', title: 'Fotoğraf Çekimi', desc: 'Ürün, mekan, etkinlik ve kurumsal fotoğraf çekimi ile markanızın profesyonel görsel arşivini oluşturuyoruz. Her kare, marka kimliğinizle uyumlu.', keyword: 'Ürün Fotoğrafçılığı İstanbul' },
  { slug: 'kreatif-kampanya', icon: 'campaign', title: 'Kreatif Kampanya', desc: 'Hedef kitlenize ulaşan, marka bilinirliğini artıran ve dönüşüm sağlayan 360 derece kreatif dijital kampanyalar tasarlıyor ve yönetiyoruz.', keyword: 'Dijital Kampanya Ajansı' },
  { slug: 'ui-ux-tasarim', icon: 'uiux', title: 'UI/UX Tasarım', desc: 'Kullanıcı araştırması, wireframe, prototip ve kullanılabilirlik testleri ile dijital ürünleriniz için mükemmel kullanıcı deneyimleri tasarlıyoruz.', keyword: 'UI UX Tasarım Ajansı' },
  { slug: 'dijital-pazarlama', icon: 'digital', title: 'Dijital Pazarlama', desc: 'SEO, Google Ads, sosyal medya reklamları ve performans pazarlama ile markanızın dijital görünürlüğünü artırıyor, ölçülebilir sonuçlar elde ediyoruz.', keyword: 'Dijital Pazarlama Ajansı Türkiye' },
];

export default function ServicesPage() {
  return (
    <>
      <div className="breadcrumb container" style={{ paddingTop: 100 }}>
        <Link href="/">Ana Sayfa</Link>
        <span className="separator">›</span>
        <span>Hizmetler</span>
      </div>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <ScrollReveal>
            <span className="label-text">Hizmetlerimiz</span>
            <h1 style={{ marginTop: 16 }}>
              Markanız İçin <span className="text-gold">Her Şey</span>
            </h1>
            <p className="body-large" style={{ maxWidth: 700, marginTop: 20 }}>
              Web tasarım, marka kimliği, video prodüksiyon, sosyal medya ve dijital pazarlama alanlarında
              İstanbul merkezli uzman ekibimizle kapsamlı çözümler sunuyoruz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="services-list">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.05}>
                <Link href={`/hizmetler/${service.slug}`} className="service-row">
                  <div className="service-row-header">
                    <span className="service-row-num">0{i + 1}</span>
                    <div className="service-row-icon-badge">
                      <ServiceIcon type={service.icon} />
                    </div>
                  </div>
                  <div className="service-row-content">
                    <div className="service-row-info">
                      <h2 className="service-row-title">{service.title}</h2>
                      <span className="service-row-keyword">{service.keyword}</span>
                      <p className="service-row-desc">{service.desc}</p>
                    </div>
                    <div className="service-row-arrow-wrap">
                      <span className="service-row-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                      </span>
                    </div>
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
            <span className="label-text">Özel Proje mi?</span>
            <h2 style={{ marginTop: 16 }}>İhtiyacınıza Özel Çözüm Üretelim</h2>
            <p className="text-gray" style={{ maxWidth: 500, margin: '20px auto 40px' }}>
              Listede olmayan bir hizmete mi ihtiyacınız var? Projenizi anlatın, size özel bir plan oluşturalım.
            </p>
            <Link href="/teklif" className="btn btn-gold">Teklif Al</Link>
          </ScrollReveal>
        </div>
      </section>

      <style jsx>{`
        .services-list {
          display: flex;
          flex-direction: column;
        }
        .service-row {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          padding: 32px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
        }
        .service-row:first-child {
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .service-row:hover {
          border-bottom-color: rgba(184,169,122,0.3);
        }
        .service-row-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }
        .service-row-num {
          font-family: var(--font-display);
          font-size: 14px;
          color: rgba(255,255,255,0.2);
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .service-row:hover .service-row-num {
          color: var(--gold);
        }
        .service-row-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--lightgray);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .service-row:hover .service-row-icon-badge {
          background: rgba(184,169,122,0.1);
          border-color: rgba(184,169,122,0.4);
          color: var(--gold);
          transform: scale(1.1);
        }
        .service-row-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-grow: 1;
          gap: 32px;
          padding-top: 2px;
        }
        .service-row-info {
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .service-row:hover .service-row-info {
          transform: translateX(8px);
        }
        .service-row-title {
          font-size: clamp(20px, 2.5vw, 24px);
          font-weight: 500;
          line-height: 1.2;
          color: var(--offwhite);
          transition: color 0.3s ease;
          letter-spacing: -0.01em;
        }
        .service-row:hover .service-row-title {
          color: var(--gold);
        }
        .service-row-keyword {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }
        .service-row-desc {
          font-size: 14px;
          color: var(--lightgray);
          line-height: 1.6;
          margin-top: 8px;
          max-width: 540px;
        }
        .service-row-arrow-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(-16px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          color: var(--gold);
          flex-shrink: 0;
        }
        .service-row:hover .service-row-arrow-wrap {
          opacity: 1;
          transform: translateX(0);
        }
        
        @media (max-width: 767px) {
          .service-row {
            flex-direction: column;
            gap: 16px;
            padding: 24px 0;
          }
          .service-row-header {
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            align-items: center;
          }
          .service-row-num {
            font-size: 16px;
          }
          .service-row-icon-badge {
            width: 40px;
            height: 40px;
            border-radius: 8px;
          }
          .service-row:hover .service-row-icon-badge {
            transform: none;
          }
          .service-row-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .service-row:hover .service-row-info {
            transform: none;
          }
          .service-row-arrow-wrap {
            display: flex;
            opacity: 1;
            transform: none;
            width: 100%;
            justify-content: flex-end;
            margin-top: -30px; /* Pull arrow up next to desc */
          }
          .service-row:hover .service-row-arrow-wrap {
            transform: translateX(4px);
          }
        }
      `}</style>
    </>
  );
}

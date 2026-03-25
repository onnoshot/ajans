'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

/* ===== VALUES DATA ===== */
const values = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="url(#g1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="g1" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stopColor="#d4c88a"/><stop offset="100%" stopColor="#8a7d54"/></linearGradient></defs>
        <path d="M20 4l4 8 8 2-6 6 2 8-8-4-8 4 2-8-6-6 8-2z"/>
        <circle cx="20" cy="20" r="3" fill="url(#g1)" stroke="none"/>
      </svg>
    ),
    title: 'Yaratıcılık',
    desc: 'Klişeleri reddediyor, her projede taze ve özgün yaklaşımlar üretiyoruz. Sıradanlığa meydan okuyoruz.',
    gradient: 'linear-gradient(135deg, #B8A97A 0%, #8A7D54 100%)',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="url(#g2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="g2" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stopColor="#d4c88a"/><stop offset="100%" stopColor="#8a7d54"/></linearGradient></defs>
        <circle cx="20" cy="20" r="15"/>
        <path d="M14 20l4 4 8-8"/>
      </svg>
    ),
    title: 'Mükemmeliyetçilik',
    desc: 'Her pikselde, her kelimede ve her kararımızda en yüksek standartları hedefliyoruz.',
    gradient: 'linear-gradient(135deg, #C8B170 0%, #A08C5A 100%)',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="g3" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stopColor="#d4c88a"/><stop offset="100%" stopColor="#8a7d54"/></linearGradient></defs>
        <path d="M20 6v28"/>
        <path d="M6 20h28"/>
        <circle cx="20" cy="20" r="14"/>
        <path d="M11 11l18 18" strokeDasharray="4 4"/>
      </svg>
    ),
    title: 'Şeffaflık',
    desc: 'Süreçlerimizi açık tutuyor, müşterilerimizle güvene dayalı ilişkiler kuruyoruz.',
    gradient: 'linear-gradient(135deg, #D4C88A 0%, #9A8D60 100%)',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="url(#g4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="g4" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stopColor="#d4c88a"/><stop offset="100%" stopColor="#8a7d54"/></linearGradient></defs>
        <circle cx="20" cy="14" r="8"/>
        <path d="M12 26l8-4 8 4"/>
        <path d="M20 22v12"/>
        <circle cx="20" cy="37" r="2" fill="url(#g4)" stroke="none"/>
      </svg>
    ),
    title: 'Sonuç Odaklılık',
    desc: 'Güzel tasarımın ötesinde, iş hedeflerine hizmet eden çözümler üretiyoruz.',
    gradient: 'linear-gradient(135deg, #B8A97A 0%, #7A6D44 100%)',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="url(#g5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="g5" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stopColor="#d4c88a"/><stop offset="100%" stopColor="#8a7d54"/></linearGradient></defs>
        <path d="M8 32L18 8h4l10 24"/>
        <path d="M12 24h16"/>
        <circle cx="30" cy="10" r="5" strokeDasharray="3 2"/>
      </svg>
    ),
    title: 'Yenilikçilik',
    desc: 'Teknoloji ve tasarım trendlerini yakından takip ediyor, projelere entegre ediyoruz.',
    gradient: 'linear-gradient(135deg, #C8B170 0%, #8A7D54 100%)',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="url(#g6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="g6" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stopColor="#d4c88a"/><stop offset="100%" stopColor="#8a7d54"/></linearGradient></defs>
        <circle cx="14" cy="16" r="8"/>
        <circle cx="26" cy="24" r="8"/>
        <path d="M20 14v12" strokeWidth="2" stroke="url(#g6)"/>
      </svg>
    ),
    title: 'İşbirliği',
    desc: 'Müşterilerimizi sürecin bir parçası yapıyor, birlikte en iyi sonuca ulaşıyoruz.',
    gradient: 'linear-gradient(135deg, #D4C88A 0%, #A08C5A 100%)',
  },
];

/* ===== VALUE CARD COMPONENT ===== */
function ValueCard({ value, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`value-card ${isHovered ? 'value-card--active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
        '--delay': `${index * 0.15}s`,
      }}
    >
      <div className="value-card-glow" />
      <div className="value-card-content">
        <div className="value-card-number">{String(index + 1).padStart(2, '0')}</div>
        <div className="value-card-icon">{value.icon}</div>
        <h3 className="value-card-title">{value.title}</h3>
        <p className="value-card-desc">{value.desc}</p>
        <div className="value-card-line" />
      </div>
    </div>
  );
}

/* ===== TEAM DATA ===== */
const team = [
  { name: 'Emre Çelik', role: 'Kurucu & Kreatif Direktör', bio: 'Dijital tasarım ve marka stratejisi alanında 10+ yıllık deneyim. Markaların görsel hikayelerini güçlendirmeye odaklanıyor.' },
  { name: 'Selin Yıldız', role: 'Sanat Yönetmeni', bio: 'Tipografi ve görsel iletişim tutkunu. Markaların estetik dilini oluşturuyor ve yaratıcı projeleri yönetiyor.' },
  { name: 'Can Özdemir', role: 'Geliştirme Lideri', bio: 'Full-stack geliştirme uzmanı. Performans ve kullanıcı deneyimini ön planda tutan web çözümleri üretiyor.' },
  { name: 'Zeynep Aksoy', role: 'Dijital Strateji Uzmanı', bio: 'SEO, içerik stratejisi ve dijital pazarlama alanlarında uzman. Markaların dijital görünürlüğünü artırıyor.' },
];

export default function AboutPage() {
  return (
    <>
      <div className="breadcrumb container" style={{ paddingTop: 100 }}>
        <Link href="/">Ana Sayfa</Link>
        <span className="separator">›</span>
        <span>Hakkımızda</span>
      </div>

      {/* HERO */}
      <section className="about-hero section">
        <div className="container">
          <ScrollReveal>
            <span className="label-text">Hakkımızda</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 style={{ marginTop: 16 }}>
              Markaları Bir Üst Seviyeye<br />
              <span className="text-gold">Taşıyan</span> Ekip
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="body-large" style={{ maxWidth: 700, marginTop: 28 }}>
              UniqBee olarak, İstanbul'un kalbinden dünyaya açılan premium bir kreatif ajansız.
              Tasarım, strateji ve teknolojiyi bir araya getirerek markaların dijitaldeki varlığını
              güçlendiriyoruz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* STORY */}
      <section className="section" style={{ background: 'var(--anthracite)' }}>
        <div className="container">
          <div className="story-grid">
            <ScrollReveal>
              <div>
                <span className="label-text">Hikayemiz</span>
                <h2 style={{ margin: '16px 0 24px' }}>Neden Varız?</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="story-text">
                <p>
                  UniqBee, 2019 yılında İstanbul'da bir grup tutkulu yaratıcı profesyonel tarafından
                  kuruldu. Dijital dünyada markaların gerçek potansiyellerini ortaya koymalarına yardımcı
                  olmak amacıyla yola çıktık.
                </p>
                <p>
                  Kurumsal soğukluğu reddeden, lüksü klişesizlikle harmanlayan bir yaklaşım benimsedik.
                  Her projemizde müşterilerimizin vizyonunu derinlemesine anlıyor, sektörlerinin
                  dinamiklerini analiz ediyor ve beklentilerin ötesinde çözümler sunuyoruz.
                </p>
                <p>
                  Bugün 50'den fazla tamamlanmış proje, 10'dan fazla ülkeden müşteri portföyü ve
                  sürekli büyüyen bir ekiple, Türkiye'nin öncü kreatif ajanslarından biri olmaya devam
                  ediyoruz. Estetiğimiz yüksek, standartlarımız net, sonuçlarımız ölçülebilir.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section">
        <div className="container">
          <div className="vm-grid">
            <ScrollReveal>
              <div className="vm-card card">
                <span className="label-text">Vizyonumuz</span>
                <h3 style={{ margin: '16px 0 16px' }}>Dijital Dünyayı Şekillendiren Ajans</h3>
                <p className="text-gray">
                  Türkiye'den dünyaya açılan, küresel standartlarda tasarım ve strateji üreten,
                  sektöre yön veren bir kreatif güç merkezi olmayı hedefliyoruz.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="vm-card card">
                <span className="label-text">Misyonumuz</span>
                <h3 style={{ margin: '16px 0 16px' }}>Her Markayı Benzersiz Kılmak</h3>
                <p className="text-gray">
                  Her markanın kendine has bir hikayesi olduğuna inanıyoruz. Bu hikayeyi en güçlü
                  şekilde anlatmak, dijitalde kalıcı izler bırakmak ve iş sonuçlarına
                  dönüştürmek için çalışıyoruz.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VALUES — Apple-Inspired Design */}
      <section className="values-section">
        <div className="container">
          <ScrollReveal>
            <div className="values-header">
              <span className="label-text">Değerlerimiz</span>
              <h2 className="values-main-title">
                Bizi Biz Yapan<br />
                <span className="text-gold">İlkeler</span>
              </h2>
              <p className="values-subtitle">
                Her kararımızda, her projemizde bize yol gösteren temel değerlerimiz.
              </p>
            </div>
          </ScrollReveal>

          <div className="values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <ValueCard value={v} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ textAlign: 'center' }}>
              <span className="label-text">Ekibimiz</span>
              <h2>Yaratıcı Güç</h2>
              <p style={{ margin: '0 auto' }}>Her biri alanında uzman, tutkulu ve sonuç odaklı profesyonellerden oluşan ekibimizle tanışın.</p>
            </div>
          </ScrollReveal>
          <div className="team-grid">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="team-card">
                  <div className="team-avatar">{member.name.charAt(0)}</div>
                  <h3>{member.name}</h3>
                  <span className="label-text" style={{ fontSize: 11 }}>{member.role}</span>
                  <p className="text-gray" style={{ marginTop: 12, fontSize: 14 }}>{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--anthracite)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <span className="label-text">Bir Sonraki Adım</span>
            <h2 style={{ marginTop: 16 }}>Birlikte Bir Şey Yaratalım</h2>
            <p className="text-gray" style={{ maxWidth: 500, margin: '20px auto 40px' }}>
              Markanızı güçlendirecek, fark yaratacak bir proje için konuşmaya hazırız.
            </p>
            <Link href="/teklif" className="btn btn-gold">Projenizi Anlatın</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Scoped styles for AboutPage elements */}
      <style jsx>{`
        .about-hero { padding-bottom: 80px; }
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 48px;
          align-items: start;
        }
        .story-text p {
          color: var(--lightgray);
          margin-bottom: 16px;
          line-height: 1.7;
        }
        .vm-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .vm-card { min-height: 180px; }

        .values-section {
          padding: clamp(64px, 10vw, 120px) 0;
          background:
            radial-gradient(ellipse at 20% 0%, rgba(184,169,122,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 100%, rgba(184,169,122,0.03) 0%, transparent 50%),
            var(--anthracite);
          position: relative;
          overflow: hidden;
        }
        .values-section::before {
          content: '';
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(184,169,122,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .values-header {
          text-align: center;
          max-width: 520px;
          margin: 0 auto 60px;
        }
        .values-main-title {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          line-height: 1.1;
          margin: 16px 0 18px;
          letter-spacing: -0.03em;
        }
        .values-subtitle {
          font-size: clamp(13px, 1vw, 16px);
          color: var(--lightgray);
          line-height: 1.6;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .team-card {
          text-align: center;
          padding: 24px 16px;
        }
        .team-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold), rgba(184,169,122,0.5));
          color: var(--black);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 700;
          margin: 0 auto 12px;
        }
        .team-card h3 { font-size: 16px; margin-bottom: 4px; }
        @media (max-width: 1023px) {
          .story-grid { grid-template-columns: 1fr; gap: 24px; }
          .values-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 767px) {
          .vm-grid { grid-template-columns: 1fr; gap: 40px; }
          .values-grid { grid-template-columns: 1fr; gap: 24px; }
          .team-grid { grid-template-columns: 1fr; gap: 32px; }
          .values-header { margin-bottom: 40px; }
        }
      `}</style>

      {/* Global styles for ValueCard child component */}
      <style jsx global>{`
        .value-card {
          position: relative;
          border-radius: 24px;
          padding: 1px;
          cursor: default;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease;
          overflow: hidden;
        }
        .value-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 24px 60px rgba(0,0,0,0.3), 0 0 80px rgba(184,169,122,0.06);
        }

        .value-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 24px;
          background: radial-gradient(
            400px circle at var(--mouse-x) var(--mouse-y),
            rgba(184,169,122,0.25),
            transparent 50%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 2;
        }
        .value-card--active .value-card-glow {
          opacity: 1;
        }

        .value-card-content {
          position: relative;
          z-index: 1;
          background: linear-gradient(160deg, rgba(42,42,42,0.98) 0%, rgba(28,28,28,0.99) 100%);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 24px;
          padding: 44px 36px 36px;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: border-color 0.5s ease, background 0.5s ease, box-shadow 0.5s ease;
          overflow: hidden;
        }
        .value-card:hover .value-card-content {
          border-color: rgba(184,169,122,0.4);
          background: linear-gradient(160deg, rgba(48,44,36,0.99) 0%, rgba(30,28,24,1) 100%);
          box-shadow: inset 0 1px 0 rgba(184,169,122,0.15);
        }

        .value-card-number {
          position: absolute;
          top: -15px;
          right: 12px;
          font-size: 120px;
          font-weight: 900;
          color: rgba(184,169,122,0.08);
          line-height: 1;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          user-select: none;
          letter-spacing: -0.05em;
        }
        .value-card:hover .value-card-number {
          color: rgba(184,169,122,0.16);
          transform: scale(1.08);
        }

        .value-card-icon {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, rgba(184,169,122,0.2) 0%, rgba(184,169,122,0.08) 100%);
          border: 1px solid rgba(184,169,122,0.2);
          margin-bottom: 32px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          z-index: 1;
        }
        .value-card-icon svg {
          width: 36px;
          height: 36px;
        }
        .value-card:hover .value-card-icon {
          background: linear-gradient(145deg, rgba(184,169,122,0.35) 0%, rgba(184,169,122,0.12) 100%);
          border-color: rgba(184,169,122,0.45);
          transform: scale(1.12) translateY(-3px);
          box-shadow: 0 16px 48px rgba(184,169,122,0.2), 0 0 0 1px rgba(184,169,122,0.15);
        }

        .value-card-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
          transition: all 0.4s ease;
          position: relative;
          z-index: 1;
        }
        .value-card:hover .value-card-title {
          background: linear-gradient(135deg, #fff 0%, var(--gold) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .value-card-desc {
          font-size: 15px;
          color: rgba(180,180,180,0.8);
          line-height: 1.75;
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .value-card-line {
          width: 32px;
          height: 2px;
          margin-top: 28px;
          background: linear-gradient(90deg, var(--gold), rgba(184,169,122,0.2));
          border-radius: 2px;
          transition: width 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s ease;
          opacity: 0.6;
          position: relative;
          z-index: 1;
        }
        .value-card:hover .value-card-line {
          width: 100px;
          opacity: 1;
        }
      `}</style>
    </>
  );
}

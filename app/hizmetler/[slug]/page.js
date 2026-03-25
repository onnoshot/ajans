import Link from 'next/link';
import { notFound } from 'next/navigation';
import ScrollReveal from '../../components/ScrollReveal';
import styles from './service.module.css';

const servicesData = {
  'web-tasarim': {
    title: 'Web Tasarım & Geliştirme',
    h1: 'Web Tasarım & Geliştirme Hizmeti',
    metaTitle: 'Web Tasarım Ajansı İstanbul | Kurumsal & E-Ticaret Web Sitesi',
    metaDesc: 'İstanbul merkezli web tasarım ajansı UniqBee ile SEO uyumlu, mobil responsive ve yüksek performanslı web siteleri oluşturun.',
    keyword: 'web tasarım ajansı istanbul',
    icon: '🌐',
    intro: 'Markanızı dijitalde güçlü bir şekilde temsil eden, kullanıcı odaklı ve SEO uyumlu premium web siteleri tasarlıyor ve geliştiriyoruz. Next.js, React ve modern teknolojiler ile yüksek performanslı, hızlı çözümler sunuyoruz.',
    audience: ['Kurumsal şirketler ve holdingler', 'E-ticaret markaları', 'Start-up ve ölçeklenme aşamasındaki girişimler', 'Profesyonel hizmet sağlayıcılar', 'Ajanslar ve dijital markalar'],
    features: ['Responsive ve mobil uyumlu tasarım', 'SEO optimizasyonu ve teknik altyapı', 'Hızlı yükleme süreleri (Core Web Vitals)', 'CMS entegrasyonu (WordPress, Sanity, Contentful)', 'E-ticaret çözümleri (Shopify, WooCommerce)', 'API entegrasyonları ve özel geliştirme', 'Analytics ve dönüşüm takibi', 'SSL sertifikası ve güvenlik', 'Çok dilli site desteği', 'Bakım ve destek paketleri'],
    deliverables: ['Figma üzerinde detaylı UI tasarım', 'Responsive geliştirme (mobil, tablet, desktop)', 'SEO altyapısı ve sitemap', 'Google Analytics & Search Console kurulumu', 'Performans optimizasyonu raporu', 'Kullanım kılavuzu ve eğitim'],
    faq: [
      { q: 'Web tasarım süreci ne kadar sürer?', a: 'Proje kapsamına bağlı olarak kurumsal bir web sitesi ortalama 4-8 hafta, e-ticaret projeleri 8-12 hafta sürer.' },
      { q: 'Hangi teknolojileri kullanıyorsunuz?', a: 'Next.js, React, WordPress, Shopify gibi modern ve kanıtlanmış teknolojileri projenin ihtiyacına göre kullanıyoruz.' },
      { q: 'Web tasarım fiyatları ne kadar?', a: 'Kurumsal site projeleri 25.000 TL\'den, e-ticaret projeleri 50.000 TL\'den başlar.' },
      { q: 'SEO hizmeti dahil mi?', a: 'Evet, tüm web tasarım projelerimiz teknik SEO altyapısı içerir.' },
    ],
  },
  'marka-kimligi': {
    title: 'Marka Kimliği Tasarımı', h1: 'Marka Kimliği Tasarımı Hizmeti', metaTitle: 'Marka Kimliği Tasarımı | Logo, Kurumsal Kimlik & Branding', metaDesc: 'UniqBee ile markanızın görsel dilini oluşturun. Logo tasarımı, kurumsal kimlik, marka rehberi.', keyword: 'marka kimliği tasarımı', icon: '✦',
    intro: 'Logo, renk paleti, tipografi ve tüm marka dokunma noktalarını kapsayan bütüncül marka kimlik sistemleri oluşturuyoruz.',
    audience: ['Yeni kurulan markalar', 'Rebranding planlayan şirketler', 'KOBİ\'ler', 'Premium segment markalar', 'E-ticaret markaları'],
    features: ['Logo tasarımı ve varyasyonlar', 'Renk paleti ve tipografi', 'Marka rehberi', 'Kartvizit ve kırtasiye', 'Sosyal medya şablonları', 'Ambalaj tasarımı', 'Marka hikayesi', 'İkon seti'],
    deliverables: ['Logo dosyaları (AI, SVG, PNG, PDF)', 'Marka rehberi (40+ sayfa)', 'Kurumsal kırtasiye tasarımları', 'Sosyal medya şablonları', 'Sunum dosyası', 'Font ve renk dökümanları'],
    faq: [{ q: 'Ne kadar sürer?', a: '3-6 hafta sürer.' }, { q: 'Kaç alternatif sunuyorsunuz?', a: '3-5 farklı konsept.' }, { q: 'Rebranding yapıyor musunuz?', a: 'Evet, mevcut marka değerlerini koruyarak yeniliyoruz.' }, { q: 'Fiyatlar nedir?', a: '15.000 TL\'den başlar.' }],
  },
  'sosyal-medya': {
    title: 'Sosyal Medya İçerik Üretimi', h1: 'Sosyal Medya İçerik Üretimi Hizmeti', metaTitle: 'Sosyal Medya İçerik Ajansı İstanbul', metaDesc: 'Markanız için strateji odaklı sosyal medya içerikleri üretiyoruz.', keyword: 'sosyal medya içerik ajansı', icon: '📱',
    intro: 'Markanız için strateji odaklı, dikkat çeken ve etkileşim yaratan sosyal medya içerikleri üretiyoruz.',
    audience: ['Büyümek isteyen markalar', 'E-ticaret şirketleri', 'Restoran ve hospitality', 'Moda ve lifestyle', 'B2B şirketler'],
    features: ['İçerik stratejisi ve takvim', 'Görsel içerik üretimi', 'Video içerik (Reels, TikTok)', 'Copywriting', 'Hashtag optimizasyonu', 'Topluluk yönetimi', 'Raporlama', 'Influencer koordinasyonu'],
    deliverables: ['Aylık strateji ve takvim', 'Görsel ve video içerikler', 'Performans raporu', 'Topluluk yönetimi', 'Trend analizleri', 'Kampanya planlaması'],
    faq: [{ q: 'Hangi platformlarda?', a: 'Instagram, TikTok, Twitter/X, LinkedIn, Facebook, YouTube.' }, { q: 'Aylık kaç içerik?', a: '12-30 içerik arası.' }, { q: 'Fiyatlar?', a: '8.000 TL\'den başlar.' }, { q: 'Marka sesimizi nasıl yakalıyorsunuz?', a: 'Detaylı marka analizi ile.' }],
  },
  'video-produksiyon': {
    title: 'Video Prodüksiyon', h1: 'Video Prodüksiyon Hizmeti', metaTitle: 'Reklam Filmi Çekimi İstanbul | Video Prodüksiyon', metaDesc: 'Reklam filmi, tanıtım videosu, sosyal medya video içerikleri prodüksiyonu.', keyword: 'reklam filmi çekimi istanbul', icon: '🎬',
    intro: 'Reklam filmi, tanıtım videosu ve kurumsal film prodüksiyon hizmetleriyle hikayenizi görselleştiriyoruz.',
    audience: ['Reklam filmi çekmek isteyen markalar', 'Ürün tanıtımı', 'Sosyal medya video', 'Kurumsal film', 'Etkinlik kayıtları'],
    features: ['Konsept ve senaryo', 'Storyboard', 'Profesyonel ekip', 'Stüdyo ve lokasyon', 'Drone çekimi', 'Renk grading', 'Motion graphics', 'Ses tasarımı'],
    deliverables: ['Senaryo ve storyboard', 'Kurgulanmış video', 'Platform formatları', 'Final çıktılar', 'Thumbnail ve kapak', 'Müzik lisansları'],
    faq: [{ q: 'Süreç nasıl işler?', a: 'Briefing → Senaryo → Storyboard → Çekim → Kurgu → Teslimat.' }, { q: 'Ne kadar sürer?', a: '1-6 hafta.' }, { q: 'Fiyatlar?', a: '15.000 TL\'den başlar.' }, { q: 'Stüdyo var mı?', a: 'Partner stüdyolarımız mevcut.' }],
  },
  'fotograf-cekimi': {
    title: 'Fotoğraf Çekimi', h1: 'Fotoğraf Çekimi Hizmeti', metaTitle: 'Ürün Fotoğrafçılığı İstanbul', metaDesc: 'Ürün, mekan, etkinlik ve kurumsal fotoğraf çekimi hizmeti.', keyword: 'ürün fotoğrafçılığı istanbul', icon: '📸',
    intro: 'Ürün, mekan, etkinlik ve kurumsal fotoğraf çekimi ile markanızın profesyonel görsel arşivini oluşturuyoruz.',
    audience: ['E-ticaret markaları', 'Restoran ve kafe', 'Otel ve konaklama', 'Moda ve perakende', 'Kurumsal şirketler'],
    features: ['Ürün fotoğrafçılığı', 'Mekan fotoğrafçılık', 'Yemek fotoğrafçılığı', 'Etkinlik fotoğrafçılığı', 'Kurumsal portre', 'Drone fotoğrafçılığı', 'Post prodüksiyon', 'E-ticaret paketi'],
    deliverables: ['Yüksek çözünürlüklü dosyalar', 'Web optimize versiyonlar', 'Rötuşlanmış fotoğraflar', 'Farklı kırpım boyutları', 'Online galeri', 'Ham dosyalar (opsiyonel)'],
    faq: [{ q: 'Fiyatlar?', a: 'Yarım gün 5.000 TL, tam gün 8.000 TL\'den başlar.' }, { q: 'Kaç fotoğraf?', a: '30-100 arası düzenlenmiş fotoğraf.' }, { q: 'Stüdyo mu lokasyon mu?', a: 'Her ikisi de mümkün.' }, { q: 'Teslim süresi?', a: '5-10 iş günü.' }],
  },
  'kreatif-kampanya': {
    title: 'Kreatif Kampanya', h1: 'Kreatif Kampanya Hizmeti', metaTitle: 'Dijital Kampanya Ajansı İstanbul', metaDesc: 'Yaratıcı dijital kampanyalar tasarlıyor ve yönetiyoruz.', keyword: 'dijital kampanya ajansı', icon: '🎯',
    intro: 'Hedef kitlenize ulaşan, marka bilinirliğini artıran yaratıcı dijital kampanyalar tasarlıyoruz.',
    audience: ['Lansman planlayan markalar', 'Sezonluk kampanya ihtiyacı', 'Marka bilinirliği', 'Ürün tanıtımı', 'Büyüme hedefleyen işletmeler'],
    features: ['Kampanya stratejisi', 'Kreatif konsept', 'İçerik üretimi', 'Medya planlama', 'Sosyal medya kampanya', 'Google Ads', 'Landing page', 'A/B testing'],
    deliverables: ['Strateji dökümanı', 'Konsept sunumu', 'Tüm materyaller', 'Medya planı', 'Performans raporları', 'Optimizasyon önerileri'],
    faq: [{ q: 'Ne kadar sürer?', a: 'Planlama 1-3 hafta, uygulama 2-8 hafta.' }, { q: 'Minimum bütçe?', a: '20.000 TL medya bütçesi öneriyoruz.' }, { q: 'Performans ölçümü?', a: 'Gerçek zamanlı dashboard\'lar ile.' }, { q: 'Hangi platformlarda?', a: 'Google, Meta, TikTok, YouTube, LinkedIn.' }],
  },
  'ui-ux-tasarim': {
    title: 'UI/UX Tasarım', h1: 'UI/UX Tasarım Hizmeti', metaTitle: 'UI UX Tasarım Ajansı İstanbul', metaDesc: 'Dijital ürünleriniz için mükemmel UI/UX deneyimleri tasarlıyoruz.', keyword: 'ui ux tasarım ajansı', icon: '◈',
    intro: 'Kullanıcı araştırması, wireframe, prototip ve testler ile mükemmel kullanıcı deneyimleri tasarlıyoruz.',
    audience: ['Mobil uygulama şirketleri', 'SaaS firmaları', 'E-ticaret platformları', 'FinTech girişimleri', 'Kurumsal dijital dönüşüm'],
    features: ['Kullanıcı araştırması', 'Bilgi mimarisi', 'Wireframe', 'Hi-fi UI tasarımı', 'Etkileşimli prototip', 'Design system', 'Kullanılabilirlik testi', 'Geliştirici handoff'],
    deliverables: ['Araştırma raporu', 'Wireframe ve akışlar', 'Hi-fi UI tasarım', 'Etkileşimli prototip', 'Design system', 'Geliştirici dosyaları'],
    faq: [{ q: 'UI ve UX farkı nedir?', a: 'UX deneyimi, UI görsel arayüzü kapsar.' }, { q: 'Hangi araçlar?', a: 'Ana aracımız Figma.' }, { q: 'Ne kadar sürer?', a: '4-12 hafta.' }, { q: 'Mevcut ürün iyileştirmesi?', a: 'Evet, UX audit yapıyoruz.' }],
  },
  'dijital-pazarlama': {
    title: 'Dijital Pazarlama', h1: 'Dijital Pazarlama Hizmeti', metaTitle: 'Dijital Pazarlama Ajansı Türkiye', metaDesc: 'SEO, Google Ads ve performans pazarlama ile dijital görünürlüğünüzü artırıyoruz.', keyword: 'dijital pazarlama ajansı türkiye', icon: '📊',
    intro: 'SEO, Google Ads, sosyal medya reklamları ve performans pazarlama ile ölçülebilir sonuçlar elde ediyoruz.',
    audience: ['Organik trafik isteyen markalar', 'E-ticaret şirketleri', 'B2B firmalar', 'Yerel işletmeler', 'Start-up\'lar'],
    features: ['SEO', 'Google Ads', 'Meta/Instagram reklamları', 'İçerik pazarlama', 'E-posta pazarlama', 'CRO', 'Analytics', 'Rakip analizi'],
    deliverables: ['Pazarlama stratejisi', 'Aylık SEO raporu', 'Reklam raporları', 'Anahtar kelime araştırması', 'İçerik takvimi', 'ROI analizi'],
    faq: [{ q: 'SEO sonuçları ne zaman?', a: 'İlk sonuçlar 3-6 ayda görülür.' }, { q: 'Ads vs SEO?', a: 'Ads anlık, SEO uzun vadeli.' }, { q: 'Fiyatlar?', a: 'SEO 5.000 TL, Ads 3.000 TL + bütçe.' }, { q: 'Raporlama?', a: 'Aylık detaylı raporlar.' }],
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = await params;
  const service = servicesData[p.slug];
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: { canonical: `https://uniqbee.com.tr/hizmetler/${p.slug}` },
    openGraph: { title: service.metaTitle, description: service.metaDesc, url: `https://uniqbee.com.tr/hizmetler/${p.slug}` },
  };
}

export default async function ServiceDetailPage({ params }) {
  const p = await params;
  const service = servicesData[p.slug];
  if (!service) notFound();

  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://uniqbee.com.tr' },
    { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://uniqbee.com.tr/hizmetler' },
    { '@type': 'ListItem', position: 3, name: service.title, item: `https://uniqbee.com.tr/hizmetler/${p.slug}` },
  ]};

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faq.map(f => ({
    '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a },
  }))};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="breadcrumb container" style={{ paddingTop: 100 }}>
        <Link href="/">Ana Sayfa</Link><span className="separator">›</span>
        <Link href="/hizmetler">Hizmetler</Link><span className="separator">›</span>
        <span>{service.title}</span>
      </div>

      <section className="section" style={{ paddingTop: 30, paddingBottom: 80 }}>
        <div className="container">
          <ScrollReveal>
            <span className={styles.serviceDetailIcon}>{service.icon}</span>
            <span className="label-text" style={{ marginTop: 16, display: 'block' }}>{service.keyword}</span>
            <h1 className={styles.serviceDetailH1}>{service.h1}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="body-large" style={{ maxWidth: 750, marginTop: 24 }}>{service.intro}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div style={{ marginTop: 36, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/teklif" className="btn btn-gold">Bu Hizmet İçin Teklif Al</Link>
              <Link href="/projeler" className="btn btn-secondary">İlgili Projeleri Gör</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--anthracite)' }}>
        <div className="container">
          <div className={styles.svcSplit}>
            <ScrollReveal><div><span className="label-text">Hedef Kitle</span><h2 style={{ marginTop: 12 }}>Kimler İçin Uygun?</h2></div></ScrollReveal>
            <ScrollReveal delay={0.15}>
              <ul className={styles.svcList}>
                {service.audience.map((item, i) => <li key={i} className={styles.svcListItem}><span className="text-gold">✦</span> {item}</li>)}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal><div className="section-header" style={{ textAlign: 'center' }}><span className="label-text">Kapsam</span><h2>Neler Sunuyoruz?</h2></div></ScrollReveal>
          <div className={styles.svcFeaturesGrid}>
            {service.features.map((feat, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className={styles.svcFeatureItem}><span className={styles.svcFeatureNum}>0{i + 1}</span><span>{feat}</span></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--anthracite)' }}>
        <div className="container">
          <ScrollReveal><div className="section-header" style={{ textAlign: 'center' }}><span className="label-text">Süreç</span><h2>Nasıl İlerliyoruz?</h2></div></ScrollReveal>
          <div className={styles.svcProcess}>
            {['Briefing & Keşif', 'Strateji & Planlama', 'Tasarım & Üretim', 'Test & Revizyon', 'Teslimat & Destek'].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={styles.svcProcessStep}>
                  <div className={styles.svcProcessNum}>{String(i + 1).padStart(2, '0')}</div>
                  <div className={styles.svcProcessLine}></div>
                  <h3>{step}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.svcSplit}>
            <ScrollReveal><div><span className="label-text">Teslimatlar</span><h2 style={{ marginTop: 12 }}>Neler Teslim Ediyoruz?</h2></div></ScrollReveal>
            <ScrollReveal delay={0.15}>
              <ul className={styles.svcList}>
                {service.deliverables.map((item, i) => <li key={i} className={styles.svcListItem}><span className="text-gold">◆</span> {item}</li>)}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--anthracite)' }}>
        <div className="container">
          <ScrollReveal><div className="section-header" style={{ textAlign: 'center' }}><span className="label-text">SSS</span><h2>Sıkça Sorulan Sorular</h2></div></ScrollReveal>
          <div className={styles.faqList}>
            {service.faq.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card"><h3 className={styles.faqQ}>{item.q}</h3><p className={styles.faqA}>{item.a}</p></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <span className="label-text">Bir Sonraki Adım</span>
            <h2 style={{ marginTop: 16 }}>Bu Hizmet İçin Teklif Al</h2>
            <p className="text-gray" style={{ maxWidth: 500, margin: '20px auto 40px' }}>Projenizi anlatın, size özel teklif oluşturalım.</p>
            <Link href="/teklif" className="btn btn-gold">Teklif Al</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

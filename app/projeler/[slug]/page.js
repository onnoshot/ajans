import Link from 'next/link';
import { notFound } from 'next/navigation';
import ScrollReveal from '../../components/ScrollReveal';
import s from './project.module.css';

const projectsData = {
  'luxe-hotel': { title: 'Luxe Hotel & Spa', category: 'Web Tasarım & Branding', year: '2024', client: 'Luxe Hotels Group', color: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', scope: 'Web Tasarım, UI/UX, Marka Kimliği', brief: 'İstanbul\'un en prestijli boutique otellerinden biri için dijital deneyim tasarımı.', problem: 'Mevcut web sitesi marka değerlerini yansıtmıyordu. Mobil deneyim kötüydü, rezervasyon oranları düşüktü.', solution: 'Sinematik görseller, yumuşak animasyonlar ve sezgisel bir rezervasyon akışı ile ziyaretçileri misafire dönüştüren bir platform oluşturduk.', results: [{ metric: '%180', label: 'Rezervasyon artışı' }, { metric: '%65', label: 'Bounce rate düşüşü' }, { metric: '1.8s', label: 'Sayfa yükleme hızı' }, { metric: '%140', label: 'Mobil dönüşüm artışı' }], nextProject: { slug: 'verde-organics', title: 'Verde Organics' } },
  'verde-organics': { title: 'Verde Organics', category: 'Marka Kimliği', year: '2024', client: 'Verde Foods Ltd.', color: 'linear-gradient(135deg, #0f3d2e 0%, #1a472a 100%)', scope: 'Logo, Kurumsal Kimlik, Ambalaj', brief: 'Organik gıda markası için sıfırdan marka kimliği tasarımı.', problem: 'Yeni markanın pazarda kimliği yoktu. Rakiplerinden farklılaşan, güven veren bir kimliğe ihtiyaç duyuyordu.', solution: 'Doğanın sadeliğinden ilham alan, sürdürülebilirlik mesajını ileten kapsamlı bir marka kimliği oluşturduk.', results: [{ metric: '%250', label: 'Marka bilinirliği artışı' }, { metric: '6 Ay', label: 'İlk 50 satış noktası' }, { metric: '%90', label: 'Güven skoru' }, { metric: '1.', label: 'Sektör ödülü' }], nextProject: { slug: 'sonic-audio', title: 'Sonic Audio' } },
  'sonic-audio': { title: 'Sonic Audio', category: 'Video Prodüksiyon', year: '2023', client: 'Sonic Technologies', color: 'linear-gradient(135deg, #2d1b4e 0%, #1a1145 100%)', scope: 'Reklam Filmi, Sosyal Medya Video', brief: 'Yeni nesil kablosuz kulaklık serisi için video kampanyası.', problem: 'Yeni kulaklık serisini genç kitleye ulaştırmak istiyordu ancak video stratejisi yoktu.', solution: 'Ürünün ses kalitesini ve tasarımını ön plana çıkaran sinematik reklam filmi ve sosyal medya video serisi ürettik.', results: [{ metric: '2.5M', label: 'Toplam izlenme' }, { metric: '%340', label: 'Etkileşim artışı' }, { metric: '%120', label: 'Satış artışı' }, { metric: '3', label: 'Trend listesi' }], nextProject: { slug: 'atlas-fintech', title: 'Atlas Fintech' } },
  'atlas-fintech': { title: 'Atlas Fintech', category: 'UI/UX Tasarım', year: '2024', client: 'Atlas Financial Technologies', color: 'linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)', scope: 'Mobil Uygulama UI/UX, Design System', brief: 'FinTech mobil uygulama için kullanıcı deneyimi tasarımı.', problem: 'Mevcut uygulama karmaşıktı, kullanıcı terk oranı yüksekti.', solution: 'Kapsamlı kullanıcı araştırması ile akışları yeniden tasarladık, modüler design system oluşturduk.', results: [{ metric: '%200', label: 'Memnuniyet artışı' }, { metric: '%45', label: 'Görev hızı' }, { metric: '%60', label: 'Terk oranı düşüşü' }, { metric: '100+', label: 'Component' }], nextProject: { slug: 'bloom-cosmetics', title: 'Bloom Cosmetics' } },
  'bloom-cosmetics': { title: 'Bloom Cosmetics', category: 'Sosyal Medya', year: '2023', client: 'Bloom Beauty', color: 'linear-gradient(135deg, #4a1942 0%, #2d1233 100%)', scope: 'Sosyal Medya Stratejisi, İçerik Üretimi', brief: 'Kozmetik markası için sosyal medya stratejisi ve içerik üretimi.', problem: 'Sosyal medyada tutarsız görünüm, düşük etkileşim oranları.', solution: 'Güçlü strateji, aylık içerik takvimleri ve profesyonel içerikler ile markayı dijitalde güçlendirdik.', results: [{ metric: '180K', label: 'Takipçi' }, { metric: '%400', label: 'Etkileşim artışı' }, { metric: '%220', label: 'Web trafiği' }, { metric: '%85', label: 'Brand mention' }], nextProject: { slug: 'wave-studio', title: 'Wave Studio' } },
  'wave-studio': { title: 'Wave Studio', category: 'Web Tasarım', year: '2023', client: 'Wave Music Productions', color: 'linear-gradient(135deg, #1a3c4a 0%, #0f2930 100%)', scope: 'Kurumsal Web Sitesi, SEO', brief: 'Müzik prodüksiyon stüdyosu için premium web sitesi.', problem: 'Dijital varlığı yoktu, portföyünü profesyonel şekilde sunamıyordu.', solution: 'Stüdyonun atmosferini dijitale yansıtan immersive bir web deneyimi tasarladık.', results: [{ metric: '%300', label: 'Form artışı' }, { metric: '1.', label: 'Google sıralaması' }, { metric: '%90', label: 'Organik trafik' }, { metric: '2.1s', label: 'Yükleme süresi' }], nextProject: { slug: 'peak-athletics', title: 'Peak Athletics' } },
  'peak-athletics': { title: 'Peak Athletics', category: 'Dijital Kampanya', year: '2024', client: 'Peak Sports', color: 'linear-gradient(135deg, #3d1f0a 0%, #2a1508 100%)', scope: 'Lansman Kampanyası, İçerik, Medya', brief: 'Spor markası yeni koleksiyon lansmanı dijital kampanyası.', problem: 'Yeni sezon koleksiyonunu hedef kitleye ulaştırmak istiyordu.', solution: 'Çok kanallı dijital lansman kampanyası: influencer iş birlikleri, video, sosyal medya ve performans reklamları.', results: [{ metric: '5M', label: 'Toplam erişim' }, { metric: '%180', label: 'Satış artışı' }, { metric: '15+', label: 'Influencer' }, { metric: '%250', label: 'Web trafiği' }], nextProject: { slug: 'nora-fashion', title: 'Nora Fashion' } },
  'nora-fashion': { title: 'Nora Fashion', category: 'Branding', year: '2023', client: 'Nora Fashion House', color: 'linear-gradient(135deg, #2a1a1a 0%, #1a1010 100%)', scope: 'Logo, Kurumsal Kimlik, Marka Rehberi', brief: 'Moda markası için sofistike marka kimliği.', problem: 'Premium segmentte konumlanmak istiyordu ancak marka kimliği bu seviyeyi yansıtmıyordu.', solution: 'Minimalist ve sofistike marka kimliği: tipografi odaklı logo, zarif renk paleti ve detaylı marka rehberi.', results: [{ metric: '%180', label: 'Marka algısı' }, { metric: '%120', label: 'Premium müşteri' }, { metric: '40+', label: 'Rehber sayfası' }, { metric: '3', label: 'Tasarım ödülü' }], nextProject: { slug: 'artisan-coffee', title: 'Artisan Coffee' } },
  'artisan-coffee': { title: 'Artisan Coffee', category: 'Video Prodüksiyon', year: '2024', client: 'Artisan Coffee Co.', color: 'linear-gradient(135deg, #2d2215 0%, #1a150d 100%)', scope: 'Tanıtım Filmi, Sosyal Medya Video', brief: 'Kahve markası için sinematik tanıtım filmi ve video serisi.', problem: 'Zanaatkarlık hikayesini hedef kitlesine etkili anlatamıyordu.', solution: 'Kahve çekirdeğinin yolculuğunu anlatan sinematik tanıtım filmi ve kısa video serisi ürettik.', results: [{ metric: '1.8M', label: 'İzlenme' }, { metric: '%200', label: 'Mağaza ziyareti' }, { metric: '%300', label: 'Etkileşim' }, { metric: '2', label: 'Video ödülü' }], nextProject: { slug: 'luxe-hotel', title: 'Luxe Hotel & Spa' } },
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = await params;
  const proj = projectsData[p.slug];
  if (!proj) return {};
  return {
    title: `${proj.title} | UniqBee Projeler`,
    description: proj.brief,
    alternates: { canonical: `https://uniqbee.com.tr/projeler/${p.slug}` },
    openGraph: { title: `${proj.title} – UniqBee`, description: proj.brief, url: `https://uniqbee.com.tr/projeler/${p.slug}` },
  };
}

export default async function ProjectDetailPage({ params }) {
  const p = await params;
  const proj = projectsData[p.slug];
  if (!proj) notFound();

  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://uniqbee.com.tr' },
    { '@type': 'ListItem', position: 2, name: 'Projeler', item: 'https://uniqbee.com.tr/projeler' },
    { '@type': 'ListItem', position: 3, name: proj.title, item: `https://uniqbee.com.tr/projeler/${p.slug}` },
  ]};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className={s.projHero} style={{ background: proj.color }}>
        <div className={s.projHeroOverlay}>
          <div className={`container ${s.projHeroContent}`}>
            <span className="label-text">{proj.category}</span>
            <h1 className={s.projHeroTitle}>{proj.title}</h1>
          </div>
        </div>
      </section>

      <div className="breadcrumb container">
        <Link href="/">Ana Sayfa</Link><span className="separator">›</span>
        <Link href="/projeler">Projeler</Link><span className="separator">›</span>
        <span>{proj.title}</span>
      </div>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <ScrollReveal>
            <div className={s.projMetaGrid}>
              <div><span className={s.projMetaLabel}>Müşteri</span><span>{proj.client}</span></div>
              <div><span className={s.projMetaLabel}>Kategori</span><span>{proj.category}</span></div>
              <div><span className={s.projMetaLabel}>Yıl</span><span>{proj.year}</span></div>
              <div><span className={s.projMetaLabel}>Kapsam</span><span>{proj.scope}</span></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--anthracite)' }}>
        <div className="container">
          <div className={s.projSplit}>
            <ScrollReveal><div><span className="label-text">Problem</span><h2 style={{ marginTop: 12 }}>Sorun Ne İdi?</h2></div></ScrollReveal>
            <ScrollReveal delay={0.15}><p className={s.projText}>{proj.problem}</p></ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={s.projSplit}>
            <ScrollReveal><div><span className="label-text">Çözüm</span><h2 style={{ marginTop: 12 }}>Ne Yaptık?</h2></div></ScrollReveal>
            <ScrollReveal delay={0.15}><p className={s.projText}>{proj.solution}</p></ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--anthracite)' }}>
        <div className="container">
          <ScrollReveal><div className="section-header" style={{ textAlign: 'center' }}><span className="label-text">Görseller</span><h2>Proje Detayları</h2></div></ScrollReveal>
          <div className={s.projGallery}>
            {[1, 2, 3].map((i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={i === 1 ? s.projGalleryItemFirst : s.projGalleryItem} style={{ background: proj.color, opacity: 0.6 + i * 0.13 }}></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal><div className="section-header" style={{ textAlign: 'center' }}><span className="label-text">Sonuçlar</span><h2>Elde Edilen Sonuçlar</h2></div></ScrollReveal>
          <div className={s.projResults}>
            {proj.results.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div><span className={s.projResultMetric}>{r.metric}</span><span className={s.projResultLabel}>{r.label}</span></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--anthracite)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <span className="label-text">Sonraki Proje</span>
            <h2 style={{ marginTop: 16 }}><Link href={`/projeler/${proj.nextProject.slug}`} className={s.projNextLink}>{proj.nextProject.title} →</Link></h2>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <h2>Benzer Bir Proje mi Düşünüyorsunuz?</h2>
            <p className="text-gray" style={{ maxWidth: 500, margin: '20px auto 40px' }}>Projenizi anlatın, birlikte harika işler çıkaralım.</p>
            <Link href="/teklif" className="btn btn-gold">Teklif Al</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

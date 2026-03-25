import Link from 'next/link';
import { notFound } from 'next/navigation';
import ScrollReveal from '../../components/ScrollReveal';
import a from './article.module.css';

const articlesData = {
  'web-tasarim-fiyatlari-2025': {
    title: 'Web Tasarım Fiyatları 2025: Ajans mı, Freelancer mı?',
    metaTitle: 'Web Tasarım Fiyatları 2025 | Ajans vs Freelancer Karşılaştırması',
    metaDesc: 'Web tasarım projesi planlıyorsanız, 2025 yılında ajans ve freelancer fiyatlarını karşılaştırarak en doğru kararı vermenize yardımcı oluyoruz.',
    category: 'Dijital', date: '15 Şubat 2025', author: 'Zeynep Aksoy', authorRole: 'Dijital Strateji Uzmanı', readTime: '8 dk',
    color: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    paragraphs: [
      'Web tasarım fiyatları projenin kapsamına, kullanılan teknolojiye ve hizmet sağlayıcının deneyimine göre büyük farklılıklar gösterebilir. İstanbul\'da bir web tasarım projesi planlıyorsanız, doğru bütçeyi belirlemek kritik bir adımdır.',
      'Freelancer\'lar genellikle daha düşük fiyatlar sunar çünkü ofis ve ekip maliyetleri yoktur. Basit ve küçük ölçekli projeler için ideal olabilirler. Genellikle 5.000 TL – 25.000 TL arasında fiyatlar sunarlar.',
      'Bir ajans, çok disiplinli bir ekip (tasarımcı, geliştirici, SEO uzmanı, proje yöneticisi) sunar. Daha kapsamlı projeler, daha iyi kalite kontrolü ve uzun vadeli destek sağlarlar. Kurumsal web sitesi projeleri genellikle 25.000 TL – 200.000 TL arasında değişir.',
      'Projenizin karmaşıklığını, zaman çizelgesini ve bütçenizi değerlendirin. Küçük ve basit projeler için freelancer, kapsamlı ve uzun vadeli projeler için ajans tercih etmenizi öneriyoruz.',
    ],
  },
  'marka-kimligi-nedir': {
    title: 'Marka Kimliği Tasarımı Nedir? Neden Önemlidir?',
    metaTitle: 'Marka Kimliği Tasarımı Nedir? | Kapsamlı Rehber',
    metaDesc: 'Marka kimliği tasarımı nedir, neden önemlidir ve başarılı bir marka kimliği nasıl oluşturulur?',
    category: 'Tasarım', date: '8 Şubat 2025', author: 'Selin Yıldız', authorRole: 'Sanat Yönetmeni', readTime: '6 dk',
    color: 'linear-gradient(135deg, #0f3d2e 0%, #1a472a 100%)',
    paragraphs: [
      'Marka kimliği, bir markanın hedef kitlesiyle iletişim kurmak için kullandığı tüm görsel ve sözel unsurların bütünüdür. Logo, renk paleti, tipografi, görsel dil, ses tonu ve marka mesajlarını kapsar.',
      'Güçlü bir marka kimliği, müşterilerinizin sizi rakiplerinizden ayırt etmesini sağlar ve güven oluşturur. Tutarlı renk kullanımı marka bilinirliğini %80\'e kadar artırabilir.',
      'Başarılı bir marka kimliği tasarımı sürecinde şu adımlar izlenir: Keşif ve araştırma, strateji belirleme, konsept geliştirme, tasarım ve uygulama, marka rehberi oluşturma.',
      'Profesyonel bir marka kimliği güven oluşturur, farklılaşma sağlar, tutarlılık yaratır ve değer algısı artırır.',
    ],
  },
};

const defaultArticle = (slug) => ({
  title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  metaTitle: 'UniqBee Journal',
  metaDesc: 'Tasarım, dijital ve kreatif dünyasından yazılar.',
  category: 'Genel', date: '2025', author: 'UniqBee Ekibi', authorRole: 'Kreatif Ekip', readTime: '5 dk',
  color: 'linear-gradient(135deg, #2A2A2A 0%, #1a1a1a 100%)',
  paragraphs: ['Bu yazı yakında yayınlanacak. Takipte kalın!'],
});

const allSlugs = ['web-tasarim-fiyatlari-2025', 'marka-kimligi-nedir', 'sosyal-medya-ajans-secimi', 'reklam-filmi-sureci', 'ui-ux-donusum-orani', 'dijital-ajans-secerken'];

export async function generateStaticParams() {
  return allSlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = await params;
  const article = articlesData[p.slug] || defaultArticle(p.slug);
  return {
    title: article.metaTitle,
    description: article.metaDesc,
    alternates: { canonical: `https://uniqbee.com.tr/journal/${p.slug}` },
    openGraph: { title: article.metaTitle, description: article.metaDesc, url: `https://uniqbee.com.tr/journal/${p.slug}`, type: 'article' },
  };
}

export default async function ArticlePage({ params }) {
  const p = await params;
  const article = articlesData[p.slug] || defaultArticle(p.slug);

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: article.title, author: { '@type': 'Person', name: article.author },
    datePublished: article.date,
    publisher: { '@type': 'Organization', name: 'UniqBee', url: 'https://uniqbee.com.tr' },
    description: article.metaDesc,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="breadcrumb container" style={{ paddingTop: 100 }}>
        <Link href="/">Ana Sayfa</Link><span className="separator">›</span>
        <Link href="/journal">Journal</Link><span className="separator">›</span>
        <span>{article.title.length > 40 ? article.title.substring(0, 40) + '...' : article.title}</span>
      </div>

      <article className={a.articlePage}>
        <div className="container">
          <ScrollReveal>
            <div className={a.articleHeader}>
              <span className="label-text">{article.category} · {article.readTime} okuma</span>
              <h1 className={a.articleHeaderH1}>{article.title}</h1>
              <div className={a.articleAuthorRow}>
                <div className={a.articleAvatar}>{article.author.charAt(0)}</div>
                <div>
                  <span className={a.authorName}>{article.author}</span>
                  <span className={a.authorRole}>{article.authorRole} · {article.date}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className={a.articleCover} style={{ background: article.color }}></div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className={a.articleBody}>
              {article.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className={a.articleShare}>
              <span className="text-gray" style={{ fontSize: 13 }}>Paylaş:</span>
              <a className={a.articleShareLink} href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer">Twitter</a>
              <a className={a.articleShareLink} href={`https://www.linkedin.com/sharing/share-offsite/?url=https://uniqbee.com.tr/journal/${p.slug}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className={a.articleShareLink} href={`https://wa.me/?text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className={`card ${a.authorBox}`}>
              <div className={a.articleAvatarLg}>{article.author.charAt(0)}</div>
              <div>
                <h4 className={a.authorBoxName}>{article.author}</h4>
                <span className="text-gray" style={{ fontSize: 14 }}>{article.authorRole}, UniqBee</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className={a.articleCta}>
              <h3 className={a.articleCtaH3}>Projeniz İçin Profesyonel Destek Alın</h3>
              <p className="text-gray" style={{ marginBottom: 24 }}>Bu konuda desteğe mi ihtiyacınız var? Uzman ekibimizle konuşun.</p>
              <Link href="/teklif" className="btn btn-gold">Teklif Al</Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}

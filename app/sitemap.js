const BASE_URL = 'https://uniqbee.com.tr';

const services = [
  'web-tasarim', 'marka-kimligi', 'sosyal-medya', 'video-produksiyon',
  'fotograf-cekimi', 'kreatif-kampanya', 'ui-ux-tasarim', 'dijital-pazarlama',
];

const projects = [
  'luxe-hotel', 'verde-organics', 'sonic-audio', 'atlas-fintech',
  'bloom-cosmetics', 'wave-studio', 'peak-athletics', 'nora-fashion', 'artisan-coffee',
];

const articles = [
  'web-tasarim-fiyatlari-2025', 'marka-kimligi-nedir', 'sosyal-medya-ajans-secimi',
  'reklam-filmi-sureci', 'ui-ux-donusum-orani', 'dijital-ajans-secerken',
];

export default function sitemap() {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/hakkimizda`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/hizmetler`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/projeler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/journal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/iletisim`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/teklif`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const servicePages = services.map(slug => ({
    url: `${BASE_URL}/hizmetler/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const projectPages = projects.map(slug => ({
    url: `${BASE_URL}/projeler/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const articlePages = articles.map(slug => ({
    url: `${BASE_URL}/journal/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...projectPages, ...articlePages];
}

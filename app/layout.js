import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  metadataBase: new URL('https://uniqbee.com.tr'),
  title: {
    default: 'UniqBee | Kreatif Dijital Ajans İstanbul – Web Tasarım & Marka',
    template: '%s – UniqBee',
  },
  description: 'UniqBee, web tasarım, marka kimliği, video prodüksiyon ve dijital pazarlama alanlarında İstanbul merkezli premium kreatif ajans. Markanızı bir üst seviyeye taşıyın.',
  keywords: ['kreatif ajans istanbul', 'dijital ajans türkiye', 'web tasarım ajansı', 'marka kimliği tasarımı', 'video prodüksiyon istanbul', 'dijital pazarlama ajansı'],
  authors: [{ name: 'UniqBee' }],
  creator: 'UniqBee',
  publisher: 'UniqBee',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://uniqbee.com.tr',
    siteName: 'UniqBee',
    title: 'UniqBee | Kreatif Dijital Ajans İstanbul',
    description: 'İstanbul merkezli premium kreatif ajans. Web tasarım, marka kimliği, video prodüksiyon ve dijital pazarlama.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'UniqBee Kreatif Ajans' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UniqBee | Kreatif Dijital Ajans İstanbul',
    description: 'İstanbul merkezli premium kreatif ajans. Web tasarım, marka kimliği, video prodüksiyon ve dijital pazarlama.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://uniqbee.com.tr',
    languages: { 'tr-TR': 'https://uniqbee.com.tr' },
  },
  icons: {
    icon: '/images/favicon.png',
  },
};

function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://uniqbee.com.tr/#organization',
        name: 'UniqBee',
        url: 'https://uniqbee.com.tr',
        logo: { '@type': 'ImageObject', url: 'https://uniqbee.com.tr/images/logo.png' },
        description: 'İstanbul merkezli premium kreatif ve dijital ajans',
        sameAs: [
          'https://instagram.com/uniqbee',
          'https://linkedin.com/company/uniqbee',
          'https://behance.net/uniqbee',
          'https://twitter.com/uniqbee',
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://uniqbee.com.tr/#localbusiness',
        name: 'UniqBee',
        description: 'İstanbul merkezli premium kreatif ve dijital ajans',
        url: 'https://uniqbee.com.tr',
        areaServed: 'TR',
        serviceType: ['Web Tasarım', 'Marka Kimliği', 'Video Prodüksiyon', 'Dijital Pazarlama', 'Sosyal Medya', 'UI/UX Tasarım'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'İstanbul',
          addressCountry: 'TR',
        },
        telephone: '+90-212-123-4567',
        openingHours: 'Mo-Fr 09:00-18:00',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://uniqbee.com.tr/#website',
        url: 'https://uniqbee.com.tr',
        name: 'UniqBee',
        publisher: { '@id': 'https://uniqbee.com.tr/#organization' },
        inLanguage: 'tr-TR',
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/902121234567"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile mesaj gönderin"
    >
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.35 22.614c-.396 1.116-1.972 2.042-3.234 2.312-.864.182-1.99.328-5.786-1.244-4.856-2.01-7.978-6.934-8.22-7.254-.232-.32-1.946-2.594-1.946-4.948 0-2.354 1.232-3.512 1.668-3.992.436-.48.952-.6 1.27-.6.316 0 .632.004.908.016.292.014.682-.11 1.066.814.396.952 1.346 3.286 1.464 3.524.118.238.198.516.04.832-.158.32-.238.518-.476.798-.238.278-.5.622-.714.834-.238.238-.486.496-.208.972.278.476 1.236 2.038 2.654 3.302 1.822 1.624 3.358 2.126 3.834 2.364.476.238.754.198 1.032-.12.278-.316 1.194-1.392 1.512-1.87.316-.478.634-.396 1.07-.238.436.158 2.77 1.306 3.246 1.544.476.238.794.356.912.554.118.198.118 1.148-.278 2.264z" />
      </svg>
    </a>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <OrganizationSchema />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

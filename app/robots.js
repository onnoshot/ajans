export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://uniqbee.com.tr/sitemap.xml',
    host: 'https://uniqbee.com.tr',
  };
}

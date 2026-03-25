'use client';
import Link from 'next/link';

const footerServices = [
  { href: '/hizmetler/web-tasarim', label: 'Web Tasarım' },
  { href: '/hizmetler/marka-kimligi', label: 'Marka Kimliği' },
  { href: '/hizmetler/video-produksiyon', label: 'Video Prodüksiyon' },
  { href: '/hizmetler/sosyal-medya', label: 'Sosyal Medya' },
  { href: '/hizmetler/dijital-pazarlama', label: 'Dijital Pazarlama' },
  { href: '/hizmetler/ui-ux-tasarim', label: 'UI/UX Tasarım' },
];

const footerNav = [
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/projeler', label: 'Projeler' },
  { href: '/journal', label: 'Journal' },
  { href: '/iletisim', label: 'İletişim' },
  { href: '/teklif', label: 'Teklif Al' },
];

const socials = [
  { href: 'https://instagram.com/uniqbee', label: 'Instagram' },
  { href: 'https://linkedin.com/company/uniqbee', label: 'LinkedIn' },
  { href: 'https://behance.net/uniqbee', label: 'Behance' },
  { href: 'https://twitter.com/uniqbee', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* TOP CTA */}
        <div className="footer-cta-section">
          <div className="footer-cta-content">
            <span className="label-text">Bir Sonraki Adım</span>
            <h2>Projenizi Konuşalım</h2>
            <p className="text-gray">Markanızı bir üst seviyeye taşımak için hazırız. İlk adımı siz atın.</p>
          </div>
          <div className="footer-cta-actions">
            <Link href="/teklif" className="btn btn-gold">Teklif Al</Link>
            <a href="https://wa.me/902121234567" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              WhatsApp ile Yazın
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* COLUMNS */}
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <span className="logo-text">UNIQBEE</span>
              <span className="logo-dot"></span>
            </div>
            <p className="footer-tagline">İstanbul merkezli premium kreatif ve dijital ajans. Markaları bir üst seviyeye taşıyoruz.</p>
            <div className="footer-socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Hizmetler</h4>
            <ul>
              {footerServices.map(s => (
                <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Keşfet</h4>
            <ul>
              {footerNav.map(n => (
                <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">İletişim</h4>
            <ul className="footer-contact">
              <li>
                <span className="text-gray">E-posta</span>
                <a href="mailto:hello@uniqbee.com.tr">hello@uniqbee.com.tr</a>
              </li>
              <li>
                <span className="text-gray">Telefon</span>
                <a href="tel:+902121234567">+90 212 123 45 67</a>
              </li>
              <li>
                <span className="text-gray">Adres</span>
                <span>Levent, İstanbul, Türkiye</span>
              </li>
              <li>
                <span className="text-gray">Çalışma Saatleri</span>
                <span>Pzt – Cum, 09:00 – 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} UniqBee. Tüm hakları saklıdır.</p>
          <div className="footer-bottom-links">
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Çerez Politikası</a>
            <a href="#">KVKK</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: var(--black);
          border-top: 1px solid rgba(200, 200, 200, 0.06);
          padding-top: 60px;
          padding-bottom: 32px;
        }
        .footer-cta-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding-bottom: 48px;
          flex-wrap: wrap;
        }
        .footer-cta-content h2 {
          font-size: clamp(28px, 3.5vw, 44px);
          margin: 10px 0 12px;
        }
        .footer-cta-content p {
          max-width: 500px;
        }
        .footer-cta-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(200, 200, 200, 0.08);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.2fr;
          gap: 32px;
          padding: 48px 0;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
        }
        .logo-text {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.14em;
        }
        .logo-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--gold);
        }
        .footer-tagline {
          color: var(--lightgray);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 20px;
          max-width: 280px;
        }
        .footer-socials {
          display: flex;
          gap: 20px;
        }
        .footer-socials a {
          font-size: 13px;
          color: var(--lightgray);
          transition: color 0.3s ease;
        }
        .footer-socials a:hover {
          color: var(--gold);
        }
        .footer-heading {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
          color: var(--offwhite);
        }
        .footer-col ul {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-col ul li a,
        .footer-col ul li span {
          font-size: 14px;
          color: var(--lightgray);
          transition: color 0.3s ease;
        }
        .footer-col ul li a:hover {
          color: var(--gold);
        }
        .footer-contact li {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .footer-contact li .text-gray {
          font-size: 12px;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-bottom p {
          font-size: 13px;
          color: var(--lightgray);
        }
        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }
        .footer-bottom-links a {
          font-size: 13px;
          color: var(--lightgray);
          transition: color 0.3s ease;
        }
        .footer-bottom-links a:hover {
          color: var(--gold);
        }
        @media (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-cta-section {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}

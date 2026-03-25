'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', service: '', budget: '', message: '', honeypot: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <>
      <div className="breadcrumb container" style={{ paddingTop: 100 }}>
        <Link href="/">Ana Sayfa</Link>
        <span className="separator">›</span>
        <span>İletişim</span>
      </div>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <ScrollReveal>
            <span className="label-text">İletişim</span>
            <h1 style={{ marginTop: 16 }}>
              Projenizi <span className="text-gold">Konuşalım</span>
            </h1>
            <p className="body-large" style={{ maxWidth: 600, marginTop: 20 }}>
              Bir sonraki projeniz için konuşmaya hazırız. Bize ulaşın, markanızı bir üst seviyeye taşıyalım.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-grid">
            {/* FORM */}
            <ScrollReveal>
              <div className="contact-form-wrap">
                {status === 'success' ? (
                  <div className="form-success">
                    <span className="success-icon">✓</span>
                    <h3>Mesajınız Gönderildi!</h3>
                    <p className="text-gray">En kısa sürede size dönüş yapacağız. Genellikle 24 saat içinde yanıt veriyoruz.</p>
                    <Link href="/" className="btn btn-secondary" style={{ marginTop: 20 }}>Ana Sayfaya Dön</Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">Ad Soyad *</label>
                        <input className="form-input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Adınız Soyadınız" />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="company">Marka / Şirket *</label>
                        <input className="form-input" type="text" id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="Şirket Adı" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">E-posta Adresi *</label>
                        <input className="form-input" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="ornek@sirket.com" />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Telefon</label>
                        <input className="form-input" type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+90 5XX XXX XX XX" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="service">Hizmet Seçimi *</label>
                        <select className="form-select" id="service" name="service" value={formData.service} onChange={handleChange} required>
                          <option value="">Hizmet Seçin</option>
                          <option value="web">Web Tasarım</option>
                          <option value="branding">Marka Kimliği</option>
                          <option value="video">Video Prodüksiyon</option>
                          <option value="social">Sosyal Medya</option>
                          <option value="campaign">Kreatif Kampanya</option>
                          <option value="uiux">UI/UX Tasarım</option>
                          <option value="digital">Dijital Pazarlama</option>
                          <option value="other">Diğer</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="budget">Bütçe Aralığı</label>
                        <select className="form-select" id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                          <option value="">Seçin (İsteğe Bağlı)</option>
                          <option value="10-25k">₺10.000 – ₺25.000</option>
                          <option value="25-50k">₺25.000 – ₺50.000</option>
                          <option value="50-100k">₺50.000 – ₺100.000</option>
                          <option value="100k+">₺100.000+</option>
                          <option value="unspecified">Belirtmek İstemiyorum</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Proje Detayı</label>
                      <textarea className="form-textarea" id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Projeniz hakkında kısaca bilgi verin..."></textarea>
                    </div>
                    {/* Honeypot */}
                    <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                      <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                    </div>
                    <p className="form-consent text-gray">Bu formu göndererek, kişisel verilerinizin KVKK kapsamında işlenmesini kabul etmiş olursunuz.</p>
                    <button type="submit" className="btn btn-gold" disabled={status === 'loading'} style={{ marginTop: 8 }}>
                      {status === 'loading' ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* INFO */}
            <ScrollReveal delay={0.2}>
              <div className="contact-info">
                <div className="info-block">
                  <h3>İletişim Bilgileri</h3>
                  <div className="info-item">
                    <span className="info-label">E-posta</span>
                    <a href="mailto:hello@uniqbee.com.tr">hello@uniqbee.com.tr</a>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Telefon</span>
                    <a href="tel:+902121234567">+90 212 123 45 67</a>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Adres</span>
                    <span>Levent Mah. Canan Sk. No:12<br />Beşiktaş, İstanbul 34330</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Çalışma Saatleri</span>
                    <span>Pazartesi – Cuma, 09:00 – 18:00</span>
                  </div>
                </div>

                <div className="info-block">
                  <h3>Sosyal Medya</h3>
                  <div className="social-links">
                    <a href="https://instagram.com/uniqbee" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://linkedin.com/company/uniqbee" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://behance.net/uniqbee" target="_blank" rel="noopener noreferrer">Behance</a>
                    <a href="https://twitter.com/uniqbee" target="_blank" rel="noopener noreferrer">Twitter</a>
                  </div>
                </div>

                <div className="info-block">
                  <h3>Hızlı İletişim</h3>
                  <a href="https://wa.me/902121234567" className="btn btn-secondary whatsapp-btn" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor"><path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0z"/></svg>
                    WhatsApp ile Yazın
                  </a>
                </div>

                {/* MAP */}
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.123!2d29.01!3d41.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzQ4LjAiTiAyOcKwMDAnMzYuMCJF!5e0!3m2!1str!2str!4v1"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: 'var(--radius-md)', filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="UniqBee Ofis Konumu"
                  ></iframe>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-consent {
          font-size: 12px;
          margin-top: 8px;
          line-height: 1.5;
        }
        .form-success {
          text-align: center;
          padding: 60px 20px;
        }
        .success-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--gold);
          color: var(--black);
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .form-success h3 {
          font-size: 24px;
          margin-bottom: 12px;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .info-block h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .info-item {
          margin-bottom: 16px;
        }
        .info-label {
          display: block;
          font-size: 12px;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }
        .info-item a:hover {
          color: var(--gold);
        }
        .social-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .social-links a {
          font-size: 14px;
          color: var(--lightgray);
          transition: color 0.3s ease;
        }
        .social-links a:hover {
          color: var(--gold);
        }
        .whatsapp-btn {
          display: inline-flex;
          gap: 10px;
          align-items: center;
        }
        .map-container {
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        @media (max-width: 1023px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }
        @media (max-width: 767px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

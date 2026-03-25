'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';

const serviceOptions = [
  'Web Tasarım & Geliştirme',
  'Marka Kimliği Tasarımı',
  'Video Prodüksiyon',
  'Sosyal Medya İçerik',
  'Kreatif Kampanya',
  'UI/UX Tasarım',
  'Dijital Pazarlama',
  'Fotoğraf Çekimi',
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', company: '', sector: '', website: '',
    services: [], description: '', audience: '',
    budget: '', startDate: '', deadline: '',
    email: '', phone: '', contactMethod: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const toggleService = (svc) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter(s => s !== svc)
        : [...prev.services, svc],
    }));
  };

  const next = () => step < 4 && setStep(step + 1);
  const prev = () => step > 1 && setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="quote-page">
        <div className="container" style={{ textAlign: 'center', paddingTop: 180, paddingBottom: 120 }}>
          <ScrollReveal>
            <div className="success-icon-lg">✓</div>
            <h1 style={{ marginTop: 24 }}>Teşekkürler!</h1>
            <p className="body-large" style={{ maxWidth: 500, margin: '20px auto 16px' }}>
              Proje brifinginiz başarıyla iletildi. Ekibimiz inceleyip en kısa sürede sizinle iletişime geçecek.
            </p>
            <p className="text-gray" style={{ marginBottom: 40 }}>
              Genellikle 24 saat içinde geri dönüş sağlıyoruz.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/902121234567" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                WhatsApp ile Hızlı Mesaj
              </a>
              <Link href="/" className="btn btn-secondary">Ana Sayfaya Dön</Link>
              <Link href="/projeler" className="btn btn-gold">Projelerimizi İncele</Link>
            </div>
          </ScrollReveal>
        </div>
        <style jsx>{`
          .success-icon-lg {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: var(--gold);
            color: var(--black);
            font-size: 36px;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <div className="breadcrumb container" style={{ paddingTop: 100 }}>
        <Link href="/">Ana Sayfa</Link>
        <span className="separator">›</span>
        <span>Teklif Al</span>
      </div>

      <section className="quote-page section" style={{ paddingTop: 30 }}>
        <div className="container">
          <ScrollReveal>
            <div className="quote-header">
              <span className="label-text">Teklif Al</span>
              <h1 style={{ marginTop: 16 }}>Projenizi <span className="text-gold">Anlatın</span></h1>
              <p className="text-gray" style={{ maxWidth: 550, marginTop: 16 }}>
                Formu doldurarak projeniz hakkında bilgi verin. Size özel bir strateji ve fiyat teklifi oluşturalım.
              </p>
            </div>
          </ScrollReveal>

          {/* PROGRESS BAR */}
          <ScrollReveal delay={0.1}>
            <div className="progress-bar-wrap">
              <div className="progress-steps">
                {['Sizi Tanıyalım', 'Proje Nedir?', 'Bütçe & Zaman', 'İletişim'].map((label, i) => (
                  <div key={i} className={`progress-step ${step > i ? 'done' : ''} ${step === i + 1 ? 'active' : ''}`}>
                    <div className="step-num">{i + 1}</div>
                    <span className="step-label">{label}</span>
                  </div>
                ))}
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="quote-form">
              {/* STEP 1 */}
              <div className={`form-step ${step === 1 ? 'active' : ''}`}>
                <h3 className="step-title">01 — Sizi Tanıyalım</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Ad Soyad *</label>
                    <input className="form-input" type="text" value={form.name} onChange={e => update('name', e.target.value)} required placeholder="Adınız Soyadınız" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Marka / Şirket Adı *</label>
                    <input className="form-input" type="text" value={form.company} onChange={e => update('company', e.target.value)} required placeholder="Şirket Adı" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Sektör</label>
                    <input className="form-input" type="text" value={form.sector} onChange={e => update('sector', e.target.value)} placeholder="Örn: Teknoloji, Moda, Gıda" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Web Sitesi (varsa)</label>
                    <input className="form-input" type="url" value={form.website} onChange={e => update('website', e.target.value)} placeholder="https://..." />
                  </div>
                </div>
              </div>

              {/* STEP 2 */}
              <div className={`form-step ${step === 2 ? 'active' : ''}`}>
                <h3 className="step-title">02 — Proje Nedir?</h3>
                <div className="form-group">
                  <label className="form-label">Hizmet Seçimi * (birden fazla seçebilirsiniz)</label>
                  <div className="service-chips">
                    {serviceOptions.map(svc => (
                      <button
                        key={svc}
                        type="button"
                        className={`chip ${form.services.includes(svc) ? 'active' : ''}`}
                        onClick={() => toggleService(svc)}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Proje Açıklaması *</label>
                  <textarea className="form-textarea" value={form.description} onChange={e => update('description', e.target.value)} rows={5} placeholder="Projeniz hakkında detaylı bilgi verin..."></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Hedef Kitle</label>
                  <input className="form-input" type="text" value={form.audience} onChange={e => update('audience', e.target.value)} placeholder="Kimlere ulaşmak istiyorsunuz?" />
                </div>
              </div>

              {/* STEP 3 */}
              <div className={`form-step ${step === 3 ? 'active' : ''}`}>
                <h3 className="step-title">03 — Bütçe & Zaman</h3>
                <div className="form-group">
                  <label className="form-label">Bütçe Aralığı</label>
                  <select className="form-select" value={form.budget} onChange={e => update('budget', e.target.value)}>
                    <option value="">Seçin</option>
                    <option value="10-25k">₺10.000 – ₺25.000</option>
                    <option value="25-50k">₺25.000 – ₺50.000</option>
                    <option value="50-100k">₺50.000 – ₺100.000</option>
                    <option value="100k+">₺100.000+</option>
                    <option value="unspecified">Belirtmek İstemiyorum</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Projeye Başlama Tarihi</label>
                    <input className="form-input" type="date" value={form.startDate} onChange={e => update('startDate', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Teslim Tarihi Beklentisi</label>
                    <input className="form-input" type="date" value={form.deadline} onChange={e => update('deadline', e.target.value)} />
                  </div>
                </div>
              </div>

              {/* STEP 4 */}
              <div className={`form-step ${step === 4 ? 'active' : ''}`}>
                <h3 className="step-title">04 — İletişim</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">E-posta Adresi *</label>
                    <input className="form-input" type="email" value={form.email} onChange={e => update('email', e.target.value)} required placeholder="ornek@sirket.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Telefon Numarası</label>
                    <input className="form-input" type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+90 5XX XXX XX XX" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Tercih Edilen İletişim Yöntemi</label>
                  <select className="form-select" value={form.contactMethod} onChange={e => update('contactMethod', e.target.value)}>
                    <option value="">Seçin</option>
                    <option value="email">E-posta</option>
                    <option value="phone">Telefon</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>

              {/* NAVIGATION */}
              <div className="form-nav">
                {step > 1 && (
                  <button type="button" className="btn btn-secondary" onClick={prev}>← Geri</button>
                )}
                <div style={{ flex: 1 }}></div>
                {step < 4 ? (
                  <button type="button" className="btn btn-gold" onClick={next}>İleri →</button>
                ) : (
                  <button type="submit" className="btn btn-gold">Teklif Talep Et</button>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <style jsx>{`
        .quote-header { max-width: 600px; }
        .progress-bar-wrap {
          margin: 50px 0 40px;
          max-width: 700px;
        }
        .progress-steps {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .progress-step {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(200,200,200,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .progress-step.active .step-num,
        .progress-step.done .step-num {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--black);
        }
        .step-label {
          font-size: 13px;
          color: var(--lightgray);
        }
        .progress-step.active .step-label {
          color: var(--offwhite);
          font-weight: 500;
        }
        .progress-track {
          width: 100%;
          height: 2px;
          background: rgba(200,200,200,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--gold);
          border-radius: 2px;
          transition: width 0.4s ease;
        }
        .quote-form {
          max-width: 700px;
        }
        .form-step {
          display: none;
        }
        .form-step.active {
          display: block;
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .step-title {
          font-size: 22px;
          margin-bottom: 30px;
          color: var(--gold);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .service-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 4px;
        }
        .chip {
          padding: 10px 20px;
          font-size: 13px;
          border-radius: 50px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(200,200,200,0.12);
          color: var(--lightgray);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .chip:hover {
          border-color: var(--gold);
          color: var(--gold);
        }
        .chip.active {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--black);
          font-weight: 600;
        }
        .form-nav {
          display: flex;
          gap: 16px;
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid rgba(200,200,200,0.08);
        }
        @media (max-width: 767px) {
          .form-row { grid-template-columns: 1fr; }
          .progress-steps { gap: 4px; }
          .step-label { display: none; }
        }
      `}</style>
    </>
  );
}

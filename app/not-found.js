import Link from 'next/link';

export const metadata = {
  title: 'Sayfa Bulunamadı | UniqBee',
  description: 'Aradığınız sayfa bulunamadı. Ana sayfaya dönerek devam edebilirsiniz.',
};

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(100px, 15vw, 200px)',
        fontWeight: 800,
        lineHeight: 1,
        background: 'linear-gradient(135deg, var(--offwhite) 0%, var(--gold) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        404
      </span>
      <h1 style={{ fontSize: 'clamp(24px, 3vw, 36px)', marginTop: 16 }}>
        Sayfa Bulunamadı
      </h1>
      <p style={{ color: 'var(--lightgray)', maxWidth: 450, marginTop: 16, lineHeight: 1.7 }}>
        Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        Aşağıdaki linklerden devam edebilirsiniz.
      </p>
      <div style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn btn-gold">Ana Sayfaya Dön</Link>
        <Link href="/projeler" className="btn btn-secondary">Projeleri İncele</Link>
        <Link href="/iletisim" className="btn btn-secondary">İletişim</Link>
      </div>
    </div>
  );
}

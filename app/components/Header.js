"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/ekibimiz", label: "Ekibimiz" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/journal", label: "Journal" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner container">
          <Link href="/" className="logo" aria-label="UniqBee Ana Sayfa">
            <Image src="/images/logo.png" alt="UniqBee" width={36} height={36} className="logo-img" priority />
            <span className="logo-text">UNIQBEE</span>
          </Link>

          <nav className="desktop-nav" aria-label="Ana navigasyon">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link href="/teklif" className="btn btn-gold header-cta">
              Teklif Al
            </Link>
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav" aria-label="Mobil navigasyon">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
              style={{ transitionDelay: menuOpen ? `${i * 0.07}s` : "0s" }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-nav-number">0{i + 1}</span>
              <span className="mobile-nav-label">{link.label}</span>
            </Link>
          ))}
          <div className="mobile-nav-cta">
            <Link
              href="/teklif"
              className="btn btn-gold"
              onClick={() => setMenuOpen(false)}
            >
              Teklif Al
            </Link>
          </div>
        </nav>
        <div className="mobile-menu-footer">
          <a href="mailto:hello@uniqbee.com.tr">hello@uniqbee.com.tr</a>
          <a href="tel:+902121234567">+90 212 123 45 67</a>
        </div>
      </div>

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 14px 0;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .site-header.scrolled {
          padding: 10px 0;
          background: rgba(10, 10, 10, 0.92);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(200, 200, 200, 0.06);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 1001;
        }
        .logo :global(.logo-img) {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }
        .logo-text {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--offwhite);
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-link {
          font-size: 13px;
          font-weight: 500;
          color: var(--lightgray);
          letter-spacing: 0.02em;
          position: relative;
          padding: 4px 0;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nav-link:hover,
        .nav-link.active {
          color: var(--offwhite);
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .header-cta {
          padding: 8px 20px;
          font-size: 12px;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          width: 28px;
          padding: 4px 0;
          z-index: 1001;
        }
        .hamburger span {
          display: block;
          width: 100%;
          height: 1.5px;
          background: var(--offwhite);
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) {
          transform: translateY(7.5px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7.5px) rotate(-45deg);
        }
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: var(--black);
          z-index: 999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 100px 40px 40px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .mobile-menu.open {
          opacity: 1;
          pointer-events: all;
        }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(200, 200, 200, 0.06);
          opacity: 0;
          transform: translateX(-20px);
          transition:
            opacity 0.4s ease,
            transform 0.4s ease,
            color 0.3s ease;
        }
        .mobile-menu.open .mobile-nav-link {
          opacity: 1;
          transform: translateX(0);
        }
        .mobile-nav-number {
          font-size: 12px;
          font-weight: 400;
          color: var(--gold);
          letter-spacing: 0.05em;
          min-width: 24px;
        }
        .mobile-nav-label {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        .mobile-nav-link.active .mobile-nav-label {
          color: var(--gold);
        }
        .mobile-nav-cta {
          margin-top: 30px;
        }
        .mobile-menu-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 14px;
          color: var(--lightgray);
        }
        .mobile-menu-footer a:hover {
          color: var(--gold);
        }
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none;
          }
          .header-cta {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}

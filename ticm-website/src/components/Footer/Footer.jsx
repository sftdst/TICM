import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineArrowUp } from 'react-icons/hi2'
import './Footer.css'

const footerLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À Propos', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Matériaux', href: '#materials' },
  { label: 'Références', href: '#references' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" ref={ref}>
      <div className="footer-main">
        <div className="container">
          <motion.div
            className="footer-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo-row">
                <svg viewBox="0 0 40 40" fill="none">
                  <rect x="2" y="2" width="36" height="36" rx="2" stroke="var(--gold)" strokeWidth="2" />
                  <path d="M10 28V12h6c4 0 6 2 6 5s-2 5-6 5h-3v6h-3zm3-9h3c2 0 3-1 3-2.5S18 14 16 14h-3v5z" fill="var(--gold)" />
                  <line x1="26" y1="12" x2="26" y2="28" stroke="var(--gold)" strokeWidth="2.5" />
                  <line x1="22" y1="28" x2="30" y2="28" stroke="var(--gold)" strokeWidth="2.5" />
                  <line x1="22" y1="12" x2="30" y2="12" stroke="var(--gold)" strokeWidth="2.5" />
                </svg>
                <div>
                  <span className="footer-logo-name">TICM</span>
                  <span className="footer-logo-sub">Construction Métallique</span>
                </div>
              </div>
              <p className="footer-desc">
                Solutions industrielles complètes en tuyauterie, chaudronnerie et charpente
                métallique au Sénégal et en Afrique de l'Ouest.
              </p>
            </div>

            {/* Nav */}
            <div>
              <h4 className="footer-col-title">Navigation</h4>
              <div className="footer-nav-list">
                {footerLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer-col-title">Contact</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <span className="footer-contact-label">Email</span>
                  <a href="mailto:thiamchd7@gmail.com" className="footer-contact-value">thiamchd7@gmail.com</a>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-label">DG</span>
                  <a href="tel:+221784486731" className="footer-contact-value">+221 78 448 67 31</a>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-label">Directeur Associé</span>
                  <a href="tel:+221777626497" className="footer-contact-value">+221 77 762 64 97</a>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-label">Admin</span>
                  <a href="tel:+221771429231" className="footer-contact-value">+221 77 142 92 31</a>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="footer-col-title">Informations Légales</h4>
              <div className="footer-legal-list">
                <div className="footer-legal-item">
                  <span className="footer-legal-key">NINEA</span>
                  <span className="footer-legal-val">008947501 1E1</span>
                </div>
                <div className="footer-legal-item">
                  <span className="footer-legal-key">RCC</span>
                  <span className="footer-legal-val">SN DKR 2021 A34789</span>
                </div>
                <div className="footer-legal-item">
                  <span className="footer-legal-key">Zone</span>
                  <span className="footer-legal-val">Sénégal & Afrique de l'Ouest</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container">
          <div className="footer-bar-inner">
            <span className="footer-copy">
              &copy; {new Date().getFullYear()} TICM — Touba International Construction Métallique. Tous droits réservés.
            </span>
            <button className="footer-top-btn" onClick={scrollToTop} aria-label="Retour en haut">
              <HiOutlineArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

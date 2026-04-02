import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import './Navbar.css'

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À Propos', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Matériaux', href: '#materials' },
  { label: 'Références', href: '#references' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Engagements', href: '#commitments' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <rect x="2" y="2" width="36" height="36" rx="2" stroke="var(--accent-primary)" strokeWidth="2" />
              <path d="M10 28V12h6c4 0 6 2 6 5s-2 5-6 5h-3v6h-3zm3-9h3c2 0 3-1 3-2.5S18 14 16 14h-3v5z" fill="var(--accent-primary)" />
              <line x1="26" y1="12" x2="26" y2="28" stroke="var(--accent-primary)" strokeWidth="2.5" />
              <line x1="22" y1="28" x2="30" y2="28" stroke="var(--accent-primary)" strokeWidth="2.5" />
              <line x1="22" y1="12" x2="30" y2="12" stroke="var(--accent-primary)" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">TICM</span>
            <span className="logo-tagline">Construction Métallique</span>
          </div>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="navbar-cta"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Nous Contacter
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`mobile-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mobile-cta"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Nous Contacter
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

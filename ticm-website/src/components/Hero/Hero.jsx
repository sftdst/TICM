import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi'
import eiffageLogo from '../../assets/Eiffage.png'
import lasLogo from '../../assets/las.jpg'
import orsenLogo from '../../assets/orsen.jpg'
import suezLogo from '../../assets/suez.png'
import './Hero.css'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const clientLogos = [
    { name: 'Eiffage', logo: eiffageLogo },
    { name: 'Suez', logo: suezLogo },
    { name: 'LAS', logo: lasLogo },
    { name: 'Orsen', logo: orsenLogo },
  ]

  return (
    <section id="hero" className="hero-section">
      {/* Animated diagonal welding lines */}
      <div className="hero-diagonals">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="hero-diag"
            style={{ left: `${i * 14}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.06 }}
            transition={{ duration: 2, delay: i * 0.15, ease: 'easeOut' }}
          />
        ))}
      </div>

      {/* Floating sparks */}
      <div className="hero-sparks">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="spark"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="hero-content container">
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="badge-line" />
          <span>Tuyauterie &middot; Chaudronnerie &middot; Charpente M&eacute;tallique</span>
          <span className="badge-line" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <span className="title-line-1">Bâtir l'industrie</span>
          <span className="title-line-2">africaine</span>
          <span className="title-line-3">
            — avec acier, précision et expertise.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Solutions industrielles complètes en tuyauterie, chaudronnerie et charpente
          métallique pour les projets les plus exigeants d'Afrique de l'Ouest.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a href="#expertise" className="cta-primary" onClick={(e) => handleScroll(e, '#expertise')}>
            Découvrir nos expertises
            <HiArrowDown className="cta-arrow" />
          </a>
          <a href="#contact" className="cta-secondary" onClick={(e) => handleScroll(e, '#contact')}>
            <HiOutlineMail />
            Demander un devis
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="hero-stat">
            <span className="hero-stat-val">5+</span>
            <span className="hero-stat-lbl">Années</span>
          </div>
          <span className="hero-stat-sep" />
          <div className="hero-stat">
            <span className="hero-stat-val">15+</span>
            <span className="hero-stat-lbl">Projets</span>
          </div>
          <span className="hero-stat-sep" />
          <div className="hero-stat">
            <span className="hero-stat-val">8+</span>
            <span className="hero-stat-lbl">Clients</span>
          </div>
          <span className="hero-stat-sep" />
          <div className="hero-stat">
            <span className="hero-stat-val">3</span>
            <span className="hero-stat-lbl">Pays</span>
          </div>
        </motion.div>

        {/* Client logos */}
        <motion.div
          className="hero-clients"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="hero-clients-label">Ils nous font confiance</span>
          <div className="hero-clients-logos">
            {clientLogos.map((c) => (
              <div key={c.name} className="client-logo-wrap">
                <img src={c.logo} alt={c.name} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </motion.div>
    </section>
  )
}

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineLocationMarker, HiOutlineGlobe } from 'react-icons/hi'
import './About.css'

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      let start = 0
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref}>{count}{suffix}</span>
  )
}

const stats = [
  { value: 5, suffix: '+', label: "Années d'expérience" },
  { value: 15, suffix: '+', label: 'Projets réalisés' },
  { value: 8, suffix: '+', label: 'Clients majeurs' },
  { value: 3, suffix: '', label: "Pays d'intervention" },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div ref={ref} className="about-layout">
          {/* Left: text */}
          <motion.div
            className="about-text-col"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="section-header">
              <h2 className="section-title">À Propos de TICM</h2>
              <p className="section-subtitle">
                Une entreprise sénégalaise de référence dans le domaine de la construction métallique
                industrielle.
              </p>
            </div>

            <div className="about-body">
              <p>
                <strong>Touba International Construction Métallique (TICM)</strong> est une entreprise
                spécialisée dans la réalisation d'ouvrages de tuyauterie industrielle, de chaudronnerie
                et de charpente métallique.
              </p>
              <p>
                Implantée au Sénégal, TICM intervient sur des projets industriels majeurs en Afrique
                de l'Ouest, au service d'opérateurs de renommée internationale.
              </p>
              <p>
                Notre force : une équipe technique qualifiée, une maîtrise des normes internationales
                les plus exigeantes et un engagement total sur la qualité, la sécurité et les délais.
              </p>
            </div>

            <div className="about-locations">
              <div className="about-loc">
                <HiOutlineLocationMarker />
                <span>Siège : Sénégal</span>
              </div>
              <div className="about-loc">
                <HiOutlineGlobe />
                <span>Zone d'intervention : Afrique de l'Ouest</span>
              </div>
            </div>
          </motion.div>

          {/* Right: stats */}
          <motion.div
            className="about-stats-col"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-stats-grid">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="about-stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                >
                  <div className="stat-card-glow" />
                  <div className="stat-card-value">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="stat-card-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

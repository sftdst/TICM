import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import eiffageLogo from '../../assets/Eiffage.png'
import lasLogo from '../../assets/las.jpg'
import orsenLogo from '../../assets/orsen.jpg'
import suezLogo from '../../assets/suez.png'
import './References.css'

const references = [
  { client: 'Eiffage', project: 'Usine dessalement Les Mamelles', location: 'Dakar', period: '2024–2026', tag: 'Dessalement', logo: eiffageLogo },
  { client: 'Suez', project: 'STEP Baie de Hann', location: 'Dakar', period: '2023–2026', tag: 'Traitement eaux', logo: suezLogo },
  { client: 'LAS', project: 'Plateforme Offshore GTA', location: 'Grand Tortue Ahmeyim', period: '2023–2024', tag: 'Offshore', logo: lasLogo },
  { client: 'Orsen / Ortec', project: 'Plateforme Sangomar', location: 'Offshore Sénégal', period: '2022–2024', tag: 'Pétrole & Gaz', logo: orsenLogo },
  { client: 'LAS', project: 'Dépôt hydrocarbures Sendou', location: 'Projet ELTON', period: '2022–2023', tag: 'Hydrocarbures', logo: lasLogo },
  { client: 'LAS', project: 'Centrale Électrique', location: 'Malicounda', period: '2020–2021', tag: 'Énergie', logo: lasLogo },
  { client: 'China Harbour', project: 'Dépôt de Gaz', location: 'Burkina Faso', period: '2021', tag: 'Gaz', logo: null },
  { client: 'Suez', project: 'Usine eau KMS', location: 'Keur Momar Sarr', period: '2018–2020', tag: 'Eau potable', logo: suezLogo },
]

export default function References() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="references" className="section references-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Nos Références
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Des projets industriels majeurs réalisés pour des opérateurs de renommée internationale.
          </motion.p>
        </div>

        <div ref={ref} className="references-timeline">
          <div className="timeline-line" />
          {references.map((ref, i) => (
            <motion.div
              key={i}
              className="reference-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
            >
              <div className="reference-node">
                <div className="node-dot" />
                <div className="node-line" />
              </div>
              <div className="reference-card">
                <div className="reference-top">
                  {ref.logo && (
                    <div className="reference-logo-wrap">
                      <img src={ref.logo} alt={ref.client} className="reference-logo" />
                    </div>
                  )}
                  <div className="reference-meta">
                    <span className="reference-client">{ref.client}</span>
                    <span className="reference-tag">{ref.tag}</span>
                  </div>
                </div>
                <h3 className="reference-project">{ref.project}</h3>
                <div className="reference-details">
                  <span className="reference-location">{ref.location}</span>
                  <span className="reference-period">{ref.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

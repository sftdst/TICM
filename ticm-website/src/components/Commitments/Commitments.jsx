import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineClipboardDocumentCheck, HiOutlineShieldExclamation, HiOutlineClock, HiOutlineUserGroup } from 'react-icons/hi2'
import './Commitments.css'

const pillars = [
  {
    icon: <HiOutlineClipboardDocumentCheck />,
    title: 'Qualité',
    description: 'Plan qualité par chantier, traçabilité totale des matériaux et des procédés. Contrôles non-destructifs systématiques.',
    accent: 'Plan qualité & traçabilité',
  },
  {
    icon: <HiOutlineShieldExclamation />,
    title: 'Sécurité HSE',
    description: 'Zéro accident comme objectif. Job Safety Analysis (JSA) systématique. Formation continue du personnel.',
    accent: 'Zéro accident',
  },
  {
    icon: <HiOutlineClock />,
    title: 'Délais',
    description: 'Reporting hebdomadaire d\'avancement. Alertes proactives en cas de dérive. Engagement contractuel sur les échéances.',
    accent: 'Respect des échéances',
  },
  {
    icon: <HiOutlineUserGroup />,
    title: 'Client',
    description: 'Interlocuteur dédié sur chaque projet. Support post-livraison et garantie. Flexibilité et réactivité permanente.',
    accent: 'Accompagnement total',
  },
]

export default function Commitments() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="commitments" className="section commitments-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Nos Engagements
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Quatre piliers fondamentaux qui guident chacune de nos interventions.
          </motion.p>
        </div>

        <div ref={ref} className="commitments-grid">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="commitment-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
            >
              <div className="commitment-number">0{i + 1}</div>
              <div className="commitment-icon">{pillar.icon}</div>
              <h3 className="commitment-title">{pillar.title}</h3>
              <p className="commitment-accent">{pillar.accent}</p>
              <p className="commitment-desc">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineCog, HiOutlineCube, HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import './Expertise.css'

const expertiseData = [
  {
    icon: <HiOutlineCube />,
    title: 'Tuyauterie Industrielle',
    subtitle: 'Réseaux haute & basse pression',
    description: 'Conception, fabrication et installation de réseaux de tuyauterie pour fluides industriels : vapeur, hydrocarbures, eau, produits chimiques. Maîtrise complète des procédés de soudage TIG/MIG/MAG.',
    features: ['Soudage TIG / MIG / MAG', 'Haute & basse pression', 'Fluides industriels', 'As-built & traçabilité'],
  },
  {
    icon: <HiOutlineCog />,
    title: 'Chaudronnerie',
    subtitle: 'Réservoirs & équipements soudés',
    description: `Fabrication sur mesure de réservoirs, bacs, échangeurs et équipements mécano-soudés. De l'étude à la mise en service, nous maîtrisons l'ensemble de la chaîne de production.`,
    features: ['Réservoirs sur mesure', 'Échangeurs thermiques', 'Équipements ATEX', 'Contrôle qualité intégral'],
  },
  {
    icon: <HiOutlineBuildingOffice2 />,
    title: 'Charpente Métallique',
    subtitle: 'Structures industrielles',
    description: `Conception et montage de structures métalliques pour l'industrie : hangars, plateformes, passerelles, supports techniques. Conformité EN 1090 et capacité d'exécution jusqu'à EXC3.`,
    features: ['Structures EN 1090 EXC3', 'Hangars industriels', 'Plateformes & passerelles', 'Montage sur site'],
  },
]

export default function Expertise() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="expertise" className="section expertise-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Domaines d'Expertise
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Trois métiers complémentaires au service de vos projets industriels les plus ambitieux.
          </motion.p>
        </div>

        <div ref={ref} className="expertise-grid">
          {expertiseData.map((item, i) => (
            <motion.div
              key={item.title}
              className="expertise-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              <div className="card-sheen" />
              <div className="card-top-bar" />

              <div className="card-icon-wrap">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-subtitle">{item.subtitle}</p>
              <p className="card-desc">{item.description}</p>

              <ul className="card-features">
                {item.features.map((f) => (
                  <li key={f}>
                    <span className="feat-dot" />
                    {f}
                  </li>
                ))}
              </ul>

              <span className="card-num">0{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

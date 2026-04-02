import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Materials.css'

const materials = [
  { name: 'Acier noir', sigle: '—', application: 'Haute pression, charpentes, réservoirs', color: '#555' },
  { name: 'Inox', sigle: '304/316L', application: 'Agroalimentaire, chimique, pharma', color: '#C0C0C0' },
  { name: 'PEHD', sigle: 'PE100', application: 'Eau, assainissement, gaz BP', color: '#1a1a1a' },
  { name: 'PVC', sigle: '—', application: 'Drainage, ventilation', color: '#8B7355' },
  { name: 'PPH', sigle: 'PP-H', application: 'Eau chaude, produits chimiques', color: '#D4840A' },
  { name: 'PRV', sigle: 'GRP', application: 'Effluents, eau potable, milieux marins', color: '#2F4F4F' },
]

export default function Materials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="materials" className="section materials-section">
      <div className="materials-grain" />
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Matériaux Maîtrisés
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Une expertise étendue sur l'ensemble des matériaux utilisés dans l'industrie.
          </motion.p>
        </div>

        <div ref={ref} className="materials-grid">
          {materials.map((mat, i) => (
            <motion.div
              key={mat.name}
              className="material-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
            >
              <div className="material-swatch" style={{ background: mat.color }}>
                <div className="swatch-shine" />
              </div>
              <div className="material-info">
                <div className="material-header">
                  <h3 className="material-name">{mat.name}</h3>
                  <span className="material-sigle">{mat.sigle}</span>
                </div>
                <p className="material-app">{mat.application}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

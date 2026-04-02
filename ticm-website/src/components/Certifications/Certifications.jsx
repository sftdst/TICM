import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineShieldCheck, HiOutlineAcademicCap } from 'react-icons/hi2'
import './Certifications.css'

const certifications = [
  { code: 'ASME B31.3', name: 'Process Piping', category: 'Tuyauterie' },
  { code: 'EN 13480', name: 'Tuyauteries métalliques industrielles', category: 'Tuyauterie' },
  { code: 'NF EN ISO 3834', name: 'Exigences de qualité en soudage', category: 'Soudage' },
  { code: 'EN 1090', name: 'Structures métalliques et aluminium', category: 'Charpente' },
  { code: 'ISO 9001', name: 'Système de management de la qualité', category: 'Management' },
  { code: 'ISO 45001', name: 'Santé & Sécurité au travail', category: 'HSE' },
]

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Normes & Qualité
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Notre engagement qualité repose sur les normes internationales les plus exigeantes.
          </motion.p>
        </div>

        <div ref={ref} className="certifications-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.code}
              className="cert-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="cert-icon-wrap">
                <HiOutlineShieldCheck className="cert-icon" />
              </div>
              <div className="cert-info">
                <span className="cert-code">{cert.code}</span>
                <span className="cert-name">{cert.name}</span>
                <span className="cert-category">{cert.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin, HiOutlineClock } from 'react-icons/hi2'
import './Contact.css'

const contacts = [
  { name: 'Ibrahima THIAM', role: 'Directeur Général', phone: '+221 78 448 67 31' },
  { name: 'Ibra SECK', role: 'Directeur Associé', phone: '+221 77 762 64 97' },
  { name: 'Ndeye Yacine GUEYE', role: 'Responsable Administrative', phone: '+221 77 142 92 31' },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Contactez-Nous
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Décrivez votre projet et recevez une réponse sous 48 heures.
          </motion.p>
        </div>

        <div ref={ref} className="contact-layout">
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="info-block">
              <h3 className="info-block-title">Coordonnées</h3>
              <div className="info-items">
                <div className="info-item">
                  <HiOutlineEnvelope />
                  <a href="mailto:thiamchd7@gmail.com">thiamchd7@gmail.com</a>
                </div>
                <div className="info-item">
                  <HiOutlineMapPin />
                  <span>Sénégal — Afrique de l'Ouest</span>
                </div>
                <div className="info-item">
                  <HiOutlineClock />
                  <span>Lun – Ven : 08h00 – 18h00</span>
                </div>
              </div>
            </div>

            <div className="info-block">
              <h3 className="info-block-title">Équipe</h3>
              <div className="team-list">
                {contacts.map((c) => (
                  <div key={c.name} className="team-member">
                    <div className="member-info">
                      <span className="member-name">{c.name}</span>
                      <span className="member-role">{c.role}</span>
                    </div>
                    <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="member-phone">
                      <HiOutlinePhone />
                      {c.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="legal-block">
              <span className="legal-label">NINEA</span>
              <span className="legal-value">008947501 1E1</span>
              <span className="legal-label">RCC</span>
              <span className="legal-value">SN DKR 2021 A34789</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Votre nom" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="votre@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company">Entreprise</label>
                <input type="text" id="company" name="company" value={form.company} onChange={handleChange} placeholder="Nom de votre entreprise" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required placeholder="Décrivez votre projet ou votre besoin..." />
              </div>
              <button type="submit" className="form-submit" disabled={submitted}>
                {submitted ? 'Message envoyé !' : 'Envoyer le message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

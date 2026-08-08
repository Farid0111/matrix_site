import { useState } from 'react'
import { useSite } from '../context/SiteContext'

function FAQSection() {
  const { siteContent } = useSite()
  const content = siteContent || {}
  const [openIndex, setOpenIndex] = useState(1)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const faqItems = content.faq?.length > 0 ? content.faq : [
    {
      id: 'faq1',
      question: "Quelle est l'autonomie de la batterie ?",
      answer: "La batterie rechargeable de 4000 mAh offre jusqu'à 8 heures d'utilisation continue selon la vitesse choisie.",
    },
    {
      id: 'faq2',
      question: "Est-ce qu'il fonctionne sans électricité ?",
      answer: "Oui ! Il se recharge via power bank, panneau solaire ou chargeur voiture. Parfait pour les coupures de courant.",
    },
    {
      id: 'faq3',
      question: 'Combien de vitesses de vent sont disponibles ?',
      answer: "Le NeckCool Pro 2026 propose 5 vitesses de ventilation réglables via l'affichage LED numérique.",
    },
    {
      id: 'faq4',
      question: 'Est-il sûr pour les enfants ?',
      answer: "Absolument. Son design sans lame élimine tout risque de blessure, ce qui le rend idéal pour toute la famille.",
    },
  ]

  return (
    <section className="section faq-section">
      <div className="container faq-container">
        <h2 className="section-title centered">
          {content.faq_title || 'Questions Fréquemment Posées'}
        </h2>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div key={item.id || item.question || index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-chevron">{openIndex === index ? '▲' : '▼'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection

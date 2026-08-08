import { useState } from 'react'
import { useSite } from '../context/SiteContext'

function FAQSection() {
  const { siteContent } = useSite()
  const content = siteContent || {}
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const faqItems = content.faq?.length > 0 ? content.faq : []

  if (!faqItems.length) return null

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

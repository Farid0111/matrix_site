import { useSite } from '../context/SiteContext'
import { sectionImages } from '../data/product'
import { trackFacebookEvent } from '../lib/facebookPixel'

function WhyChooseSection() {
  const { siteContent } = useSite()
  const content = siteContent || {}

  const scrollToOrder = () => {
    trackFacebookEvent('Lead', {
      content_name: content.product_title || 'NeckCool Pro 2026',
      content_category: 'ventilateur',
    })
    document.querySelector('.order-form-card')?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = content.why_features?.length > 0
    ? content.why_features.map((f) => f.text).filter(Boolean)
    : [
        'Vous garde au frais où que vous soyez grâce à sa conception portable.',
        'Sécurité accrue avec son design sans lame, idéal pour tous les âges.',
        'Affichage numérique LED pour un contrôle facile des 5 vitesses de vent.',
        'Rotation à 360 degrés pour une ventilation personnalisée et efficace.',
      ]

  return (
    <section className="section why-section">
      <div className="container two-col two-col--image-left">
        <div className="col-image why-image-wrap">
          <img
            src={content.why_image || sectionImages.whyProduct}
            alt="Ventilateur de cou portable"
            className="rounded-image"
          />
        </div>

        <div className="col-content why-content">
          <h2 className="section-title">
            {content.why_title || 'Pourquoi choisir notre Ventilateur de Cou Portable 2026 ?'}
          </h2>

          <div className="feature-list">
            {features.map((feature, index) => (
              <div key={feature || index} className="feature-list-item">
                <span className="check-icon">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button type="button" className="btn btn-primary" onClick={scrollToOrder}>
            {content.why_cta || 'Je veux rester au frais !'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection

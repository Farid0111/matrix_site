import { useSite } from '../context/SiteContext'
import { trackFacebookEvent } from '../lib/facebookPixel'

function WhyChooseSection() {
  const { siteContent, activeProduct } = useSite()
  const content = siteContent || {}

  const scrollToOrder = () => {
    trackFacebookEvent('Lead', {
      content_name: content.product_title || activeProduct?.name || 'NeckCool Pro 2026',
      content_category: 'ventilateur',
    })
    document.querySelector('.order-form-card')?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = content.why_features?.length > 0
    ? content.why_features.map((f) => f.text || f).filter(Boolean)
    : activeProduct?.features?.map((f) => f.text).filter(Boolean) || []

  if (!content.why_title && !features.length) return null

  return (
    <section className="section why-section">
      <div className="container two-col two-col--image-left">
        <div className="col-image why-image-wrap">
          <img
            src={content.why_image || '/images/products/why-product.png'}
            alt="Ventilateur de cou portable"
            className="rounded-image"
          />
        </div>

        <div className="col-content why-content">
          <h2 className="section-title">
            {content.why_title || 'Pourquoi choisir NeckCool Pro ?'}
          </h2>

          {features.length > 0 && (
            <div className="feature-list">
              {features.map((feature, index) => (
                <div key={feature || index} className="feature-list-item">
                  <span className="check-icon">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          <button type="button" className="btn btn-primary" onClick={scrollToOrder}>
            {content.why_cta || 'Je commande maintenant'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection

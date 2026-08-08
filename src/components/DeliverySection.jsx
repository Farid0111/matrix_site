import { sectionImages } from '../data/product'
import { useSite } from '../context/SiteContext'
import { trackFacebookEvent } from '../lib/facebookPixel'

function DeliverySection() {
  const { siteContent } = useSite()
  const content = siteContent || {}

  const scrollToOrder = () => {
    trackFacebookEvent('Lead', {
      content_name: content.product_title || 'NeckCool Pro 2026',
      content_category: 'ventilateur',
    })
    document.querySelector('.order-form-card')?.scrollIntoView({ behavior: 'smooth' })
  }

  const paragraphs = (content.delivery_text || '')
    .split('\n\n')
    .map((text) => text.trim())
    .filter(Boolean)

  return (
    <section className="section delivery-section">
      <div className="container two-col two-col--image-left">
        <div className="col-image delivery-image-wrap">
          <img
            src={content.delivery_image || sectionImages.deliveryColors}
            alt="NeckCool Pro toutes les couleurs"
            className="rounded-image"
          />
        </div>

        <div className="col-content delivery-content">
          <h2 className="section-title">
            {content.delivery_title || 'Livraison Rapide Assurée'}
          </h2>
          {paragraphs.map((text, index) => (
            <p key={index} className="section-text">
              {text}
            </p>
          ))}
          <button type="button" className="btn btn-primary" onClick={scrollToOrder}>
            {content.delivery_cta || 'Commandez Maintenant et Profitez !'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default DeliverySection

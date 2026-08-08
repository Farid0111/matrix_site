import { useSite } from '../context/SiteContext'

function ComfortSection() {
  const { siteContent } = useSite()
  const content = siteContent || {}

  const scrollToOrder = () => {
    document.querySelector('.order-form-card')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!content.hero_title && !content.hero_text) return null

  return (
    <section className="section comfort-section">
      <div className="container two-col two-col--image-right">
        <div className="col-content comfort-content">
          <h2 className="section-title">
            {content.hero_title || 'Confort et Technologie à Portée de Main'}
          </h2>
          <p className="section-text">
            {content.hero_text || 'Le ventilateur de cou portable 2026 intègre les dernières innovations pour un rafraîchissement optimal. Son design ergonomique et léger assure un confort maximal, tandis que sa batterie rechargeable de 4000 mAh garantit de longues heures d\'utilisation. Profitez d\'une brise personnalisée sans effort.'}
          </p>
          <button type="button" className="btn btn-primary" onClick={scrollToOrder}>
            {content.hero_cta || 'Achetez maintenant !'}
          </button>
        </div>

        <div className="col-image comfort-image-wrap">
          <img
            src={content.hero_image || '/images/products/comfort-duo.png'}
            alt="NeckCool Pro blanc et rose"
            className="rounded-image"
          />
        </div>
      </div>
    </section>
  )
}

export default ComfortSection

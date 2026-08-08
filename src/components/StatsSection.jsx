import { useSite } from '../context/SiteContext'

function StatsSection() {
  const { siteContent } = useSite()
  const content = siteContent || {}

  const statsData = content.stats?.length > 0 ? content.stats : []
  const testimonials = content.testimonials || []
  const testimonial = testimonials.length > 0 ? { ...testimonials[0], author: testimonials[0].name || testimonials[0].author } : null

  if (!statsData.length && !testimonial) return null

  return (
    <section className="section stats-section">
      <div className="container">
        <h2 className="section-title">{content.stats_title || 'Ils nous font confiance'}</h2>

        <div className="stats-grid two-col--image-right">
          <div className="col-content stats-left">
            {statsData.length > 0 && (
              <div className="stats-cards">
                {statsData.map((stat, index) => (
                  <div key={stat.label || stat.id || index} className="stat-card">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            {testimonial && (
              <div className="testimonial-card">
                <img
                  src={testimonial.avatar || '/images/products/thumb-1.png'}
                  alt="Produit"
                  className="testimonial-avatar"
                />
                <div>
                  <p className="testimonial-text">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="testimonial-author">{testimonial.author}</p>
                </div>
              </div>
            )}
          </div>

          <div className="col-image stats-image">
            <img
              src={content.showcase_image || '/images/products/stats-green.png'}
              alt="NeckCool Pro vert"
              className="rounded-image stats-product-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection

import { useSite } from '../context/SiteContext'
import { stats, sectionImages } from '../data/product'

function StatsSection() {
  const { siteContent } = useSite()
  const content = siteContent || {}

  const statsData = content.stats?.length > 0 ? content.stats : stats
  const testimonials = content.testimonials || []
  const testimonial = testimonials.length > 0 ? { ...testimonials[0], author: testimonials[0].name } : null

  return (
    <section className="section stats-section">
      <div className="container">
        <h2 className="section-title">{content.stats_title || 'Rejoignez des Milliers de Clients Satisfaits'}</h2>

        <div className="stats-grid two-col--image-right">
          <div className="col-content stats-left">
            <div className="stats-cards">
              {statsData.map((stat, index) => (
                <div key={stat.label || stat.id || index} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="testimonial-card">
              <img
                src={testimonial?.avatar || sectionImages.heroMain}
                alt="Produit"
                className="testimonial-avatar"
              />
              <div>
                <p className="testimonial-text">
                  &ldquo;{testimonial?.text || "J'utilise ce ventilateur pour mes randonnées et il est parfait. Très léger, discret et garde mon cou frais. Je le recommande vivement !"}&rdquo;
                </p>
                <p className="testimonial-author">{testimonial?.author || 'David P.'}</p>
              </div>
            </div>
          </div>

          <div className="col-image stats-image">
            <img
              src={content.showcase_image || sectionImages.statsGreen}
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

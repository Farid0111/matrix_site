import { useState } from 'react'
import ProductGallery from './ProductGallery'
import OrderForm from './OrderForm'
import { useSite } from '../context/SiteContext'
import { heroFeatures } from '../data/product'

function HeroSection() {
  const { siteContent, activeProduct, loading } = useSite()
  const [quantity, setQuantity] = useState(1)

  const content = siteContent || {}
  const product = activeProduct || {}

  const productFeatures = product.features?.length > 0
    ? product.features.map((f) => f.text).filter(Boolean)
    : heroFeatures

  const price = product.price || 24990
  const stock = product.stock ?? 12
  const priceLabel = content.price_label || '24 990 FCFA'

  if (loading) {
    return (
      <section className="hero section">
        <div className="container hero-grid">
          <div className="gallery">
            <div className="gallery-main" style={{ minHeight: '400px', background: '#f1f5f9', borderRadius: '12px' }} />
          </div>
          <div className="hero-content">
            <div style={{ minHeight: '24px', width: '80%', background: '#f1f5f9', borderRadius: '8px', marginBottom: '16px' }} />
            <div style={{ minHeight: '40px', width: '90%', background: '#f1f5f9', borderRadius: '8px', marginBottom: '16px' }} />
            <div style={{ minHeight: '60px', width: '100%', background: '#f1f5f9', borderRadius: '8px', marginBottom: '16px' }} />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="hero section">
      <div className="container hero-grid">
        <ProductGallery />

        <div className="hero-content">
          {content.urgency_banner_active !== false && content.urgency_banner && (
            <span className="badge badge-urgency">{content.urgency_banner}</span>
          )}

          <h1 className="hero-title">
            {content.product_icon}
            {content.product_title || product.name || 'NeckCool Pro 2026'}
          </h1>

          <p className="hero-description">
            {content.product_description || content.hero_text || product.description || 'Dites adieu à la chaleur étouffante avec le ventilateur de cou portable 2026. Conçu pour un confort optimal, il offre une brise rafraîchissante sans effort, idéal pour les activités en extérieur ou au bureau. Sa technologie sans lame assure sécurité et silence.'}
          </p>

          <div className="rating-row">
            <div className="stars">
              {[1, 2, 3, 4].map((i) => (
                <span key={i} className="star filled">★</span>
              ))}
              <span className="star half">★</span>
            </div>
            <span className="rating-text">{(product.rating || 4.4).toFixed(1)} / 5</span>
          </div>

          {content.stock_warning && content.stock_count > 0 && (
            <p className="stock-alert">
              <span className="stock-dot" />
              {content.stock_warning.replace('{count}', content.stock_count).replace('{stock}', content.stock_count)}
            </p>
          )}

          <div className="hero-meta">
            <p className="price">{priceLabel}</p>
          </div>

          <div className="features-grid">
            {productFeatures.map((feature, index) => (
              <div key={feature || index} className="feature-box">
                <span className="check-icon">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="selector-group">
            <label className="selector-label">Quantité</label>
            <div className="quantity-selector">
              <button
                type="button"
                className="qty-btn"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Diminuer la quantité"
              >
                −
              </button>
              <span className="qty-value">{quantity}</span>
              <button
                type="button"
                className="qty-btn"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Augmenter la quantité"
              >
                +
              </button>
            </div>
          </div>

          <OrderForm quantity={quantity} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

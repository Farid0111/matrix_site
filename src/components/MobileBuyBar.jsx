import { useEffect, useState } from 'react'
import { useSite } from '../context/SiteContext'

function MobileBuyBar() {
  const { activeProduct, siteContent } = useSite()
  const [visible, setVisible] = useState(true)

  const product = activeProduct || {}
  const content = siteContent || {}
  const priceLabel = content.price_label || ''
  const productName = content.product_title || product.name || ''

  useEffect(() => {
    const form = document.querySelector('.order-form-card')
    if (!form) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.2 },
    )

    observer.observe(form)
    return () => observer.disconnect()
  }, [])

  const scrollToOrder = () => {
    document.querySelector('.order-form-card')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!visible || !productName) return null

  return (
    <div className="mobile-buy-bar">
      <div className="mobile-buy-bar-inner">
        <div className="mobile-buy-bar-info">
          <span className="mobile-buy-bar-label">{productName}</span>
          {priceLabel && <span className="mobile-buy-bar-price">{priceLabel}</span>}
        </div>
        <button type="button" className="mobile-buy-bar-btn" onClick={scrollToOrder}>
          {content.order_button_text || 'Acheter maintenant'}
        </button>
      </div>
    </div>
  )
}

export default MobileBuyBar

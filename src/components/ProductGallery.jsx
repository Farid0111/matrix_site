import { useState } from 'react'
import { useSite } from '../context/SiteContext'

function ProductGallery() {
  const { activeProduct } = useSite()
  const [activeIndex, setActiveIndex] = useState(0)

  const product = activeProduct || {}
  const images = product.images?.length > 0 ? product.images : []

  if (!images.length) return null

  const mainImage = images[activeIndex] || images[0]

  const prev = () => {
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }

  const next = () => {
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  return (
    <div className="gallery">
      <div className="gallery-main">
        <button type="button" className="gallery-arrow gallery-arrow-left" onClick={prev} aria-label="Image précédente">
          ‹
        </button>
        <img src={mainImage.src || mainImage} alt={mainImage.alt || `Produit ${activeIndex + 1}`} className="gallery-main-image" />
        <button type="button" className="gallery-arrow gallery-arrow-right" onClick={next} aria-label="Image suivante">
          ›
        </button>
      </div>

      <div className="gallery-thumbs">
        {images.map((img, index) => (
          <button
            key={img.id || index}
            type="button"
            className={`gallery-thumb ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={img.src || img} alt={img.alt || `Produit ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery

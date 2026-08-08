import { useState } from 'react'
import { useSite } from '../context/SiteContext'
import { productImages } from '../data/product'

function ProductGallery() {
  const { activeProduct } = useSite()
  const [activeIndex, setActiveIndex] = useState(0)

  const product = activeProduct || {}

  const rawImages = product.images?.length > 0 ? product.images : productImages

  const images = rawImages.map((img, index) => {
    if (typeof img === 'string') {
      return { id: index, src: img, alt: `Produit ${index + 1}` }
    }
    return { id: img.id || index, src: img.src || img, alt: img.alt || `Produit ${index + 1}` }
  })

  const mainImage = images[activeIndex] || images[0] || productImages[0]

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
        <img src={mainImage.src} alt={mainImage.alt} className="gallery-main-image" />
        <button type="button" className="gallery-arrow gallery-arrow-right" onClick={next} aria-label="Image suivante">
          ›
        </button>
      </div>

      <div className="gallery-thumbs">
        {images.map((img, index) => (
          <button
            key={img.id}
            type="button"
            className={`gallery-thumb ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={img.src} alt={img.alt} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery

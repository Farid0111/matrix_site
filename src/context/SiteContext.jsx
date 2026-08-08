import { createContext, useContext, useEffect, useState } from 'react'
import { fetchSiteContent, fetchActiveProducts } from '../lib/api'
import {
  productImages,
  heroFeatures,
  whyChooseFeatures,
  comparisonRows,
  stats,
  faqItems,
  colorOptions,
  mapLocations,
} from '../data/product'

const STATIC_SITE_CONTENT = {
  urgency_banner: '🔥 Forte demande : stocks limités',
  urgency_banner_active: true,
  stock_warning: 'Plus que {count} articles en stock — commandez vite !',
  stock_count: 12,
  product_title: 'NeckCool Pro 2026',
  product_icon: '🌀 ',
  product_description:
    'Dites adieu à la chaleur étouffante avec le ventilateur de cou portable 2026. Conçu pour un confort optimal, il offre une brise rafraîchissante sans effort, idéal pour les activités en extérieur ou au bureau. Sa technologie sans lame assure sécurité et silence.',
  price_label: '24 990 FCFA',
  order_form_title: 'Formulaire de Commande',
  order_form_subtitle: 'Nos conseillers vous rappellent pour confirmer votre achat',
  order_button_text: 'Commander Maintenant',
  whatsapp_number: '33600000000',
  whatsapp_active: true,
  why_title: 'Pourquoi choisir NeckCool Pro ?',
  why_features: whyChooseFeatures,
  why_cta: 'Je commande maintenant',
  why_image: '/images/products/why-product.png',
  hero_title: '',
  hero_text: '',
  hero_image: '',
  hero_cta: '',
  showcase_image: '',
  comparisons: comparisonRows,
  stats_title: 'Ils nous font confiance',
  stats,
  testimonials: [],
  urgency_title: '',
  urgency_cta: '',
  reviews_map_title: '',
  primary_color: '#334155',
  button_color: '#334155',
}

const STATIC_PRODUCT = {
  id: 'neckcool-pro-2026',
  slug: 'neckcool-pro-2026',
  name: 'NeckCool Pro 2026',
  price: 24990,
  description:
    'Dites adieu à la chaleur étouffante avec le ventilateur de cou portable 2026. Conçu pour un confort optimal, il offre une brise rafraîchissante sans effort, idéal pour les activités en extérieur ou au bureau. Sa technologie sans lame assure sécurité et silence.',
  rating: 4.4,
  stock: 12,
  battery_mah: 4000,
  speeds: 5,
  features: heroFeatures.map((text) => ({ text })),
  images: productImages,
  colors: colorOptions,
  active: true,
  created_at: new Date().toISOString(),
}

const SiteContext = createContext(null)

export function SiteProvider({ children }) {
  const [siteContent, setSiteContent] = useState(STATIC_SITE_CONTENT)
  const [products, setProducts] = useState([STATIC_PRODUCT])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [content, prods] = await Promise.all([
          fetchSiteContent(),
          fetchActiveProducts(),
        ])

        if (!cancelled) {
          if (content) {
            setSiteContent((prev) => ({ ...prev, ...content }))
            const root = document.documentElement
            if (content.button_color) {
              root.style.setProperty('--button-color', content.button_color)
            }
            if (content.primary_color) {
              root.style.setProperty('--primary-color', content.primary_color)
            }
          }

          if (prods.length > 0) {
            setProducts(prods)
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err)
        }
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [])

  const activeProduct = products[0] || STATIC_PRODUCT

  const value = {
    siteContent,
    products,
    activeProduct,
    loading,
    error,
  }

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

export function useSite() {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider')
  }
  return context
}

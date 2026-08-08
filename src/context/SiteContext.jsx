import { createContext, useContext, useEffect, useState } from 'react'
import { fetchSiteContent, fetchActiveProducts } from '../lib/api'

const SiteContext = createContext(null)

export function SiteProvider({ children }) {
  const [siteContent, setSiteContent] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
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
          setSiteContent(content)
          setProducts(prods)

          if (content) {
            const root = document.documentElement
            if (content.button_color) {
              root.style.setProperty('--button-color', content.button_color)
            }
            if (content.primary_color) {
              root.style.setProperty('--primary-color', content.primary_color)
            }
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [])

  const activeProduct = products[0] || null

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

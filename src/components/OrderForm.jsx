import { useEffect, useState } from 'react'
import { submitOrder } from '../lib/api'
import { useSite } from '../context/SiteContext'
import { trackFacebookEvent } from '../lib/facebookPixel'

const initialForm = {
  name: '',
  phone: '',
  city: '',
  address: '',
}

function OrderForm({ quantity, color = '' }) {
  const { siteContent } = useSite()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const content = siteContent || {}

  useEffect(() => {
    if (status !== 'success') return undefined

    const timer = setTimeout(() => setStatus('idle'), 5000)
    return () => clearTimeout(timer)
  }, [status])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      await submitOrder({
        name: form.name,
        phone: form.phone,
        city: form.city,
        address: form.address,
        color,
        quantity,
      })

      trackFacebookEvent('Purchase', {
        content_name: content.product_title || 'NeckCool Pro 2026',
        content_category: 'ventilateur',
        value: quantity * (parseInt(content.price_label) || 24990),
        currency: 'XOF',
      })

      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message || 'Erreur lors de l\'enregistrement de la commande.')
    }
  }

  const title = content.order_form_title || 'Formulaire de Commande'
  const subtitle = content.order_form_subtitle || 'Nos conseillers vous rappellent pour confirmer votre achat'
  const buttonText = content.order_button_text || 'Commander Maintenant'

  return (
    <div className="order-form-card">
      <h2 className="order-form-title">{title}</h2>
      <p className="order-form-subtitle">{subtitle}</p>

      {status === 'success' && (
        <div className="form-success" role="status">
          Commande enregistrée avec succès ! Nous vous contacterons très bientôt.
        </div>
      )}
      {status === 'error' && (
        <div className="form-error" role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-field">
          <label htmlFor="name">
            Nom Complet <span className="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Entrez votre nom complet"
            value={form.name}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone">
            Numéro de téléphone <span className="required">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Ex: 07 00 00 00 00"
            value={form.phone}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>

        <div className="form-field">
          <label htmlFor="city">
            Ville <span className="required">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="Entrez votre ville"
            value={form.city}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>

        <div className="form-field">
          <label htmlFor="address">
            Adresse <span className="required">*</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Entrez votre adresse"
            value={form.address}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-full" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enregistrement...' : buttonText}
        </button>
      </form>
    </div>
  )
}

export default OrderForm

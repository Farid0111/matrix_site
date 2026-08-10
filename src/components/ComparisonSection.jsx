import { useSite } from '../context/SiteContext'

function ComparisonSection() {
  const { siteContent } = useSite()
  const content = siteContent || {}

  const rows = content.comparisons?.length > 0
    ? content.comparisons.map((c) => ({
        label: c.title || c.label,
        ours: c.positive || c.ours,
        others: c.negative || c.others,
      }))
    : []

  if (!rows.length) return null

  return (
    <section className="section comparison-section">
      <div className="container">
        <h2 className="section-title section-title--center-mobile">
          {content.compare_title || content.comparison_title || 'Notre Ventilateur de Cou Portable 2026 VS Autres Ventilateurs'}
        </h2>

        <div className="comparison-grid">
          <div className="comparison-image">
            <img
              src={content.compare_image || '/images/products/compare-pink.png'}
              alt="NeckCool Pro rose"
              className="rounded-image comparison-product-img"
            />
          </div>

          <div className="comparison-table comparison-table--desktop">
            <div className="comparison-header">
              <span />
              <span className="comparison-col-title ours">Notre Produit</span>
              <span className="comparison-col-title others">Autres</span>
            </div>

            {rows.map((row) => (
              <div key={row.label} className="comparison-row">
                <span className="comparison-label">{row.label}</span>
                <span className="comparison-value ours">
                  <span className="icon-check">✓</span>
                  {row.ours}
                </span>
                <span className="comparison-value others">
                  <span className="icon-cross">✕</span>
                  {row.others}
                </span>
              </div>
            ))}
          </div>

          <div className="comparison-cards comparison-cards--mobile">
            {rows.map((row) => (
              <div key={row.label} className="comparison-card">
                <p className="comparison-card-label">{row.label}</p>
                <div className="comparison-card-row ours">
                  <span className="comparison-card-tag">Notre Produit</span>
                  <span className="comparison-value ours">
                    <span className="icon-check">✓</span>
                    {row.ours}
                  </span>
                </div>
                <div className="comparison-card-row others">
                  <span className="comparison-card-tag">Autres</span>
                  <span className="comparison-value others">
                    <span className="icon-cross">✕</span>
                    {row.others}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection

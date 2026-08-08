const base = '/images/products'

export const sectionImages = {
  heroMain: `${base}/hero-main.png`,
  whyProduct: `${base}/why-product.png`,
  comfortDuo: `${base}/comfort-duo.png`,
  comparePink: `${base}/compare-pink.png`,
  statsGreen: `${base}/stats-green.png`,
  deliveryColors: `${base}/delivery-colors.png`,
}

export const productImages = [
  { id: 'hero', src: sectionImages.heroMain, alt: 'NeckCool Pro blanc et rose' },
  { id: 'duo', src: sectionImages.comfortDuo, alt: 'NeckCool Pro duo' },
  { id: 'pink', src: sectionImages.comparePink, alt: 'NeckCool Pro rose' },
  { id: 'green', src: sectionImages.statsGreen, alt: 'NeckCool Pro vert' },
  { id: 'colors', src: sectionImages.deliveryColors, alt: 'NeckCool Pro couleurs' },
  { id: 'detail', src: sectionImages.whyProduct, alt: 'NeckCool Pro détail' },
  { id: 'thumb1', src: `${base}/thumb-1.png`, alt: 'NeckCool Pro blanc' },
  { id: 'thumb2', src: `${base}/thumb-2.png`, alt: 'NeckCool Pro rose' },
  { id: 'thumb3', src: `${base}/thumb-3.png`, alt: 'NeckCool Pro bleu' },
  { id: 'thumb4', src: `${base}/thumb-4.png`, alt: 'NeckCool Pro vert clair' },
]

export const heroFeatures = [
  'Rotation à 360 degrés pour une ventilation personnalisée et efficace.',
  'Affichage numérique LED pour un contrôle facile des 5 vitesses de vent.',
  'Conception sans lame, sûre et silencieuse.',
  '5 vitesses de vent réglables pour un confort personnalisé.',
]

export const whyChooseFeatures = [
  'Vous garde au frais où que vous soyez grâce à sa conception portable.',
  'Sécurité accrue avec son design sans lame, idéal pour tous les âges.',
  'Affichage numérique LED pour un contrôle facile des 5 vitesses de vent.',
  'Rotation à 360 degrés pour une ventilation personnalisée et efficace.',
]

export const comparisonRows = [
  {
    label: 'Design Portatif',
    ours: 'Léger et ergonomique',
    others: 'Encombrant et lourd',
  },
  {
    label: 'Sécurité Sans Lame',
    ours: 'Protection totale',
    others: 'Risque de blessure',
  },
  {
    label: 'Affichage',
    ours: 'LED numérique',
    others: 'Aucun ou indicateur simple',
  },
]

export const stats = [
  { value: '95%', label: 'Confort garanti' },
  { value: "Jusqu'à 6h", label: 'Autonomie de batterie' },
  { value: '90%', label: 'Recommandations' },
]

export const faqItems = [
  {
    question: "Quelle est l'autonomie de la batterie ?",
    answer:
      'La batterie rechargeable de 4000 mAh offre jusqu\'à 8 heures d\'utilisation continue selon la vitesse choisie.',
  },
  {
    question: "Est-ce qu'il fonctionne sans électricité ?",
    answer:
      'Oui ! Il se recharge via power bank, panneau solaire ou chargeur voiture. Parfait pour les coupures de courant.',
  },
  {
    question: 'Combien de vitesses de vent sont disponibles ?',
    answer:
      'Le NeckCool Pro 2026 propose 5 vitesses de ventilation réglables via l\'affichage LED numérique.',
  },
  {
    question: 'Est-il sûr pour les enfants ?',
    answer:
      'Absolument. Son design sans lame élimine tout risque de blessure, ce qui le rend idéal pour toute la famille.',
  },
]

export const colorOptions = [
  { id: 'noir', label: 'NOIR', image: `${base}/thumb-1.png` },
  { id: 'blanc', label: 'BLANC', image: `${base}/thumb-2.png` },
]

export const mapLocations = [
  { lat: 48.8566, lng: 2.3522 },
  { lat: 45.764, lng: 4.8357 },
  { lat: 43.2965, lng: 5.3698 },
  { lat: 14.7167, lng: -17.4677 },
  { lat: 5.3599, lng: -4.0083 },
  { lat: 6.5244, lng: 3.3792 },
  { lat: 33.5731, lng: -7.5898 },
  { lat: 36.8065, lng: 10.1815 },
]

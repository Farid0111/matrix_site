import HeroSection from './components/HeroSection'
import WhyChooseSection from './components/WhyChooseSection'
import ComfortSection from './components/ComfortSection'
import ComparisonSection from './components/ComparisonSection'
import StatsSection from './components/StatsSection'
import DeliverySection from './components/DeliverySection'
import WorldMapSection from './components/WorldMapSection'
import FAQSection from './components/FAQSection'
import WhatsAppButton from './components/WhatsAppButton'
import MobileBuyBar from './components/MobileBuyBar'
import FacebookPixel from './components/FacebookPixel'
import { SiteProvider, useSite } from './context/SiteContext'
import './App.css'

function AppContent() {
  const { loading, error } = useSite()

  if (loading) {
    return (
      <div className="app">
        <div className="loading-screen">
          <div className="loading-spinner" />
          <p className="loading-text">Chargement...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <div className="loading-screen">
          <p className="loading-text">Erreur de chargement. Veuillez réessayer.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <HeroSection />
      <WhyChooseSection />
      <ComfortSection />
      <ComparisonSection />
      <StatsSection />
      <DeliverySection />
      <WorldMapSection />
      <FAQSection />
      <WhatsAppButton />
      <MobileBuyBar />
    </div>
  )
}

function App() {
  return (
    <SiteProvider>
      <FacebookPixel />
      <AppContent />
    </SiteProvider>
  )
}

export default App

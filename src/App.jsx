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
import { SiteProvider } from './context/SiteContext'
import './App.css'

function App() {
  return (
    <SiteProvider>
      <FacebookPixel />
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
    </SiteProvider>
  )
}

export default App

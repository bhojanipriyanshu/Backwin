import ModernHeader from "@/components/modern-header"
import ClassicHero from "@/components/classic-hero"
import RedesignedProducts from "@/components/redesigned-products"
import DiscoverVideo from "@/components/discover-video"
import InnovationShowcase from "@/components/innovation-showcase"
import ShopSection from "@/components/shop-section"
import SimplifiedFooter from "@/components/simplified-footer"
import WhatsappPrompt from "@/components/whatsapp-prompt"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ModernHeader />
      <ClassicHero />
      <RedesignedProducts />
      <WhatsappPrompt />
      <DiscoverVideo />
      <InnovationShowcase />
      <ShopSection />
      <SimplifiedFooter />
    </main>
  )
}

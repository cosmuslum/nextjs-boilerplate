import Hero from '@/components/Hero'
import LanguageSelector from '@/components/LanguageSelector'
import Levels from '@/components/Levels'
import Features from '@/components/Features'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <LanguageSelector />
      <Levels />
      <Features />
      <CTA />
    </>
  )

// En alt kısma ekle:
<div className="text-center mt-12 mb-8">
  <h3 className="text-2xl font-bold mb-4">Hızlı Erişim</h3>
  <div className="flex flex-wrap justify-center gap-4">
    <a href="/lessons" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
      Derslere Git
    </a>
    <a href="/flashcards" className="px-6 py-3 bg-green-600 text-white rounded-lg">
      Kartlara Git
    </a>
  </div>
</div>
}

import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* NAVBAR */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">NL</span>
          </div>
          <h1 className="text-3xl font-bold text-blue-800">NederLearn</h1>
        </div>
        
        <LanguageSwitcher />
      </nav>

      {/* HERO BÖLÜMÜ */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Hollandaca'yı{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
            Ana Dilinizden
          </span>{' '}
          Öğrenin
        </h2>
        
        <p className="text-xl text-gray-600 mb-8">
          Türkçe, İngilizce, İspanyolca ve Arapça'dan Hollandaca öğrenin.
          A0'dan başlayıp B1 seviyesine kadar ilerleyin.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700">
            ÜCRETSİZ BAŞLA
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50">
            DEMO İZLE
          </button>
        </div>
      </section>
    </main>
  )
}

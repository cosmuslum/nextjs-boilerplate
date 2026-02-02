"use client"

import { useState } from 'react'
import { Volume2, RotateCw, ChevronLeft, ChevronRight } from 'lucide-react'

export default function FlashcardsPage() {
  const flashcards = [
    { id: 1, dutch: 'Hallo', turkish: 'Merhaba', example: 'Hallo, hoe gaat het? - Merhaba, nasılsın?' },
    { id: 2, dutch: 'Dank u wel', turkish: 'Teşekkür ederim', example: 'Dank u wel voor uw hulp. - Yardımınız için teşekkür ederim.' },
    { id: 3, dutch: 'Alstublieft', turkish: 'Lütfen', example: 'Alstublieft, ga zitten. - Lütfen, oturun.' },
    { id: 4, dutch: 'Tot ziens', turkish: 'Görüşürüz', example: 'Tot ziens! - Görüşürüz!' },
    { id: 5, dutch: 'Ja', turkish: 'Evet', example: 'Ja, dat klopt. - Evet, bu doğru.' },
    { id: 6, dutch: 'Nee', turkish: 'Hayır', example: 'Nee, dat wil ik niet. - Hayır, bunu istemiyorum.' },
    { id: 7, dutch: 'Goedemorgen', turkish: 'Günaydın', example: 'Goedemorgen! - Günaydın!' },
    { id: 8, dutch: 'Goedenavond', turkish: 'İyi akşamlar', example: 'Goedenavond, mevrouw. - İyi akşamlar, hanımefendi.' }
  ]

  const [currentCard, setCurrentCard] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [knownCards, setKnownCards] = useState<number[]>([])
  const [showExample, setShowExample] = useState(false)

  const currentCardData = flashcards[currentCard]

  const handleNext = () => {
    setFlipped(false)
    setShowExample(false)
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1)
    } else {
      setCurrentCard(0)
    }
  }

  const handlePrevious = () => {
    setFlipped(false)
    setShowExample(false)
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
    } else {
      setCurrentCard(flashcards.length - 1)
    }
  }

  const markAsKnown = () => {
    if (!knownCards.includes(currentCardData.id)) {
      setKnownCards([...knownCards, currentCardData.id])
    }
    handleNext()
  }

  const resetProgress = () => {
    setKnownCards([])
    setCurrentCard(0)
    setFlipped(false)
    setShowExample(false)
  }

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.lang = 'nl-NL'
      utterance.rate = 0.8
      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <span className="text-white text-3xl font-bold">✏️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kelime Kartları
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hollandaca kelimeleri eğlenceli bir şekilde öğrenin. Kartlara tıklayın, çeviriyi görün ve telaffuzu dinleyin!
          </p>
        </div>

        {/* İlerleme Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">
              <span className="font-bold text-green-600">{knownCards.length}</span> / {flashcards.length} kelime öğrendiniz
            </span>
            <button
              onClick={resetProgress}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm"
            >
              <RotateCw size={16} />
              Sıfırla
            </button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(knownCards.length / flashcards.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Ana Kart */}
        <div className="max-w-2xl mx-auto mb-12">
          <div
            className="relative w-full h-64 md:h-80 mx-auto cursor-pointer mb-8"
            onClick={() => setFlipped(!flipped)}
            style={{ perspective: '1000px' }}
          >
            {/* Ön Yüz */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center transition-transform duration-500 ${
                flipped ? 'opacity-0 rotate-y-90' : 'opacity-100'
              }`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-center text-white">
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm">
                    Hollandaca
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6">{currentCardData.dutch}</h2>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      speakWord(currentCardData.dutch)
                    }}
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition"
                  >
                    <Volume2 size={24} />
                  </button>
                  <span className="text-white/80">Telaffuzu dinle</span>
                </div>
              </div>
              <div className="absolute bottom-6 text-white/60">
                Çevirmek için tıklayın
              </div>
            </div>

            {/* Arka Yüz */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center transition-transform duration-500 ${
                flipped ? 'opacity-100' : 'opacity-0 rotate-y-90'
              }`}
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className="text-center text-white">
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm">
                    Türkçe
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6">{currentCardData.turkish}</h2>
                
                {showExample && (
                  <div className="mt-6 p-4 bg-white/20 rounded-xl max-w-md">
                    <p className="text-white italic text-lg">{currentCardData.example}</p>
                  </div>
                )}
                
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowExample(!showExample)
                  }}
                  className="mt-6 px-5 py-2.5 bg-white/30 rounded-lg hover:bg-white/40 transition"
                >
                  {showExample ? 'Örneği Gizle' : 'Örnek Cümleyi Göster'}
                </button>
              </div>
            </div>
          </div>

          {/* Kart Bilgisi */}
          <div className="text-center text-gray-600">
            Kart <span className="font-bold">{currentCard + 1}</span> / {flashcards.length}
            {knownCards.includes(currentCardData.id) && (
              <span className="ml-3 text-green-600 font-semibold">✓ Öğrendiniz</span>
            )}
          </div>
        </div>

        {/* Kontroller */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handlePrevious}
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 font-semibold"
            >
              <ChevronLeft size={20} />
              Önceki
            </button>

            <div className="flex gap-4">
              <button
                onClick={() => speakWord(currentCardData.dutch)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 font-semibold"
              >
                <Volume2 size={20} />
                Telaffuz Dinle
              </button>

              <button
                onClick={markAsKnown}
                className="flex items-center gap-2 px-6 py-3 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 font-semibold"
              >
                <span className="text-xl">✓</span>
                Öğrendim
              </button>
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 font-semibold"
            >
              Sonraki
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Tüm Kartlar Listesi */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Tüm Kelime Kartları</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {flashcards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => {
                  setCurrentCard(index)
                  setFlipped(false)
                  setShowExample(false)
                }}
                className={`p-4 rounded-xl text-center transition-all ${
                  currentCard === index
                    ? 'bg-blue-100 border-2 border-blue-500 shadow-lg'
                    : knownCards.includes(card.id)
                    ? 'bg-green-100 border border-green-300'
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-bold text-lg mb-1">{card.dutch}</div>
                <div className="text-sm text-gray-600 truncate">{card.turkish}</div>
                {knownCards.includes(card.id) && (
                  <div className="mt-2">
                    <span className="text-green-500 font-bold">✓</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Daha Fazla Kart Yakında!</h3>
            <p className="text-gray-600 mb-6">
              Her hafta yeni kelime kartları ekliyoruz. Toplamda 500+ kelimeyi 
              bu interaktif sistemle öğrenebileceksiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/lessons"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700"
              >
                Derslere Git →
              </a>
              <a 
                href="/"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50"
              >
                Ana Sayfa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from 'react'
import { Volume2, Check, X, RotateCw } from 'lucide-react'

const flashcards = [
  {
    id: 1,
    dutch: "Hallo",
    translation: "Merhaba",
    pronunciation: "ha-lo",
    example: "Hallo, hoe gaat het? - Merhaba, nasılsın?"
  },
  {
    id: 2,
    dutch: "Dank u wel",
    translation: "Teşekkür ederim",
    pronunciation: "dank ü vel",
    example: "Dank u wel voor uw hulp. - Yardımınız için teşekkür ederim."
  },
  {
    id: 3,
    dutch: "Alstublieft",
    translation: "Lütfen",
    pronunciation: "als-tü-bleeft",
    example: "Alstublieft, ga zitten. - Lütfen, oturun."
  },
  {
    id: 4,
    dutch: "Tot ziens",
    translation: "Görüşürüz",
    pronunciation: "tot zins",
    example: "Tot ziens! - Görüşürüz!"
  },
  {
    id: 5,
    dutch: "Ja",
    translation: "Evet",
    pronunciation: "ya",
    example: "Ja, dat klopt. - Evet, bu doğru."
  },
  {
    id: 6,
    dutch: "Nee",
    translation: "Hayır",
    pronunciation: "ney",
    example: "Nee, dat wil ik niet. - Hayır, bunu istemiyorum."
  }
]

export default function Flashcards() {
  const [currentCard, setCurrentCard] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [knownCards, setKnownCards] = useState<number[]>([])
  const [showExample, setShowExample] = useState(false)

  const currentFlashcard = flashcards[currentCard]

  const handleNext = () => {
    setFlipped(false)
    setShowExample(false)
    setCurrentCard((prev) => (prev + 1) % flashcards.length)
  }

  const handlePrevious = () => {
    setFlipped(false)
    setShowExample(false)
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length)
  }

  const markAsKnown = () => {
    if (!knownCards.includes(currentFlashcard.id)) {
      setKnownCards([...knownCards, currentFlashcard.id])
    }
    handleNext()
  }

  const resetProgress = () => {
    setKnownCards([])
    setCurrentCard(0)
    setFlipped(false)
    setShowExample(false)
  }

  const playPronunciation = () => {
    // Ses çalma fonksiyonu (gerçek ses eklenebilir)
    const utterance = new SpeechSynthesisUtterance(currentFlashcard.dutch)
    utterance.lang = 'nl-NL'
    utterance.rate = 0.8
    window.speechSynthesis.speak(utterance)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* İlerleme Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">
            {knownCards.length}/{flashcards.length} kelime öğrendiniz
          </span>
          <button
            onClick={resetProgress}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <RotateCw size={16} />
            Sıfırla
          </button>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{ width: `${(knownCards.length / flashcards.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Ana Kart */}
      <div className="relative mb-12">
        <div
          className={`relative w-full h-96 mx-auto cursor-pointer transition-transform duration-500 ${
            flipped ? 'rotate-y-180' : ''
          }`}
          onClick={() => setFlipped(!flipped)}
          style={{ perspective: '1000px' }}
        >
          {/* Ön Yüz */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-8 flex flex-col justify-between backface-hidden ${
              flipped ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="text-center text-white">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full">
                  Hollandaca
                </span>
              </div>
              <h2 className="text-5xl font-bold mb-4">{currentFlashcard.dutch}</h2>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <span>{currentFlashcard.pronunciation}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    playPronunciation()
                  }}
                  className="p-2 hover:bg-white/20 rounded-full"
                >
                  <Volume2 size={20} />
                </button>
              </div>
            </div>
            <div className="text-center text-white/70">
              <p>Çevirmek için tıklayın</p>
            </div>
          </div>

          {/* Arka Yüz */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl shadow-2xl p-8 flex flex-col justify-between backface-hidden ${
              flipped ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transform: 'rotateY(180deg)', transformStyle: 'preserve-3d' }}
          >
            <div className="text-center text-white">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full">
                  Türkçe
                </span>
              </div>
              <h2 className="text-5xl font-bold mb-4">{currentFlashcard.translation}</h2>
              <div className="text-xl">{currentFlashcard.pronunciation}</div>
            </div>
            
            {showExample && (
              <div className="mt-6 p-4 bg-white/20 rounded-xl">
                <p className="text-white italic">{currentFlashcard.example}</p>
              </div>
            )}
            
            <div className="text-center">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowExample(!showExample)
                }}
                className="px-4 py-2 bg-white/30 rounded-lg hover:bg-white/40 transition"
              >
                {showExample ? 'Örneği Gizle' : 'Örnek Cümleyi Göster'}
              </button>
            </div>
          </div>
        </div>

        {/* Kart Bilgisi */}
        <div className="text-center mt-6 text-gray-600">
          Kart {currentCard + 1} / {flashcards.length}
          {knownCards.includes(currentFlashcard.id) && (
            <span className="ml-2 text-green-600">✓ Öğrendiniz</span>
          )}
        </div>
      </div>

      {/* Kontroller */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={handlePrevious}
          className="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 font-semibold"
        >
          ← Önceki
        </button>

        <div className="flex gap-4">
          <button
            onClick={() => {
              const utterance = new SpeechSynthesisUtterance(currentFlashcard.dutch)
              utterance.lang = 'nl-NL'
              window.speechSynthesis.speak(utterance)
            }}
            className="px-6 py-3 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 font-semibold flex items-center gap-2"
          >
            <Volume2 size={20} />
            Telaffuz Dinle
          </button>

          <button
            onClick={markAsKnown}
            className="px-6 py-3 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 font-semibold flex items-center gap-2"
          >
            <Check size={20} />
            Öğrendim
          </button>
        </div>

        <button
          onClick={handleNext}
          className="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 font-semibold"
        >
          Sonraki →
        </button>
      </div>

      {/* Tüm Kartlar Listesi */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6">Tüm Kelime Kartları</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                  ? 'bg-blue-100 border-2 border-blue-500'
                  : knownCards.includes(card.id)
                  ? 'bg-green-100 border border-green-300'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-bold text-lg mb-1">{card.dutch}</div>
              <div className="text-sm text-gray-600">{card.translation}</div>
              {knownCards.includes(card.id) && (
                <div className="mt-2">
                  <Check className="inline text-green-500" size={16} />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

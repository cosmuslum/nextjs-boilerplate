export default function LessonsPage() {
  const lessons = [
    {
      level: 'A0',
      title: 'Merhaba ve Tanışma',
      description: 'Temel selamlaşma ve tanışma ifadeleri',
      words: ['Hallo', 'Dank u wel', 'Alstublieft', 'Tot ziens'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      level: 'A0',
      title: 'Sayılar 1-20',
      description: 'Temel sayılar ve sayma',
      words: ['een', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien'],
      color: 'from-green-400 to-green-600'
    },
    {
      level: 'A0',
      title: 'Renkler',
      description: 'Temel renkler ve kullanımları',
      words: ['rood', 'blauw', 'geel', 'groen', 'zwart', 'wit', 'bruin', 'oranje'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      level: 'A0',
      title: 'Aile Üyeleri',
      description: 'Aile bireylerini tanıma',
      words: ['vader', 'moeder', 'broer', 'zus', 'opa', 'oma', 'oom', 'tante'],
      color: 'from-pink-400 to-pink-600'
    },
    {
      level: 'A1',
      title: 'Günlük Rutin',
      description: 'Günlük aktiviteler ve zaman',
      words: ['opstaan', 'eten', 'werken', 'slapen', 'drinken', 'lezen', 'schrijven'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      level: 'A1',
      title: 'Yiyecek ve İçecekler',
      description: 'Temel yiyecek ve içecek isimleri',
      words: ['water', 'brood', 'kaas', 'melk', 'koffie', 'thee', 'fruit'],
      color: 'from-red-400 to-red-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-nederland-red to-nederland-blue rounded-full mb-6">
            <span className="text-white text-3xl font-bold">NL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hollandaca Dersler
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A0'dan başlayıp B1 seviyesine kadar adım adım ilerleyin. 
            Her ders size pratik kelimeler ve ifadeler öğretecek.
          </p>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="bg-white p-4 rounded-xl text-center shadow">
            <div className="text-2xl font-bold text-blue-600">6</div>
            <div className="text-gray-600">Ders</div>
          </div>
          <div className="bg-white p-4 rounded-xl text-center shadow">
            <div className="text-2xl font-bold text-green-600">50+</div>
            <div className="text-gray-600">Kelime</div>
          </div>
          <div className="bg-white p-4 rounded-xl text-center shadow">
            <div className="text-2xl font-bold text-purple-600">2</div>
            <div className="text-gray-600">Seviye</div>
          </div>
          <div className="bg-white p-4 rounded-xl text-center shadow">
            <div className="text-2xl font-bold text-orange-600">A0-A1</div>
            <div className="text-gray-600">Zorluk</div>
          </div>
        </div>

        {/* Dersler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Renkli Üst Bar */}
              <div className={`h-2 bg-gradient-to-r ${lesson.color}`}></div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">
                      {lesson.level}
                    </span>
                    <h3 className="text-xl font-bold mt-3 text-gray-900">{lesson.title}</h3>
                  </div>
                  <div className="text-2xl">{index + 1}</div>
                </div>

                <p className="text-gray-600 mb-6">{lesson.description}</p>

                {/* Kelime Listesi */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">Öğreneceğiniz Kelimeler:</h4>
                  <div className="flex flex-wrap gap-2">
                    {lesson.words.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buton */}
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all">
                  Derse Başla →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Bilgi */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Daha Fazla Ders Yakında!</h3>
            <p className="text-gray-600 mb-6">
              A2 ve B1 seviye dersleri yakında eklenecek. E-posta listemize kaydolun, 
              yeni derslerden ilk siz haberdar olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="px-4 py-3 rounded-lg border flex-grow max-w-md"
              />
              <button className="px-6 py-3 bg-nederland-red text-white rounded-lg font-semibold hover:bg-red-700">
                Bildirim Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LessonsPage() {
  const lessons = [
    {
      level: 'A0',
      title: 'Merhaba ve Tanışma',
      description: 'Temel selamlaşma ve tanışma ifadeleri',
      words: ['Hallo', 'Dank u wel', 'Alstublieft', 'Tot ziens']
    },
    {
      level: 'A0',
      title: 'Sayılar 1-20',
      description: 'Temel sayılar ve sayma',
      words: ['een', 'twee', 'drie', 'vier', 'vijf']
    },
    {
      level: 'A0',
      title: 'Renkler',
      description: 'Temel renkler ve kullanımları',
      words: ['rood', 'blauw', 'geel', 'groen']
    },
    {
      level: 'A0',
      title: 'Aile Üyeleri',
      description: 'Aile bireylerini tanıma',
      words: ['vader', 'moeder', 'broer', 'zus']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-nederland-red to-nederland-blue rounded-full mb-6">
            <span className="text-white text-2xl font-bold">NL</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hollandaca Dersler</h1>
          <p className="text-xl text-gray-600">
            A0'dan B1'e kadar adım adım ilerleyin
          </p>
        </div>

        {/* Dersler Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      {lesson.level}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{lesson.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{lesson.description}</p>

                {/* Kelime Listesi */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Öğreneceğiniz Kelimeler:</h4>
                  <div className="flex flex-wrap gap-2">
                    {lesson.words.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                  Derse Başla
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

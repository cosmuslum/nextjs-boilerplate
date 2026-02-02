import { BookOpen, Users, Target, Trophy } from 'lucide-react'

const levels = [
  {
    level: 'A0',
    title: 'Mutlak Başlangıç',
    description: 'Hollandaca ile ilk tanışma, temel kelimeler',
    lessons: 25,
    icon: BookOpen,
    color: 'from-green-400 to-blue-400'
  },
  {
    level: 'A1',
    title: 'Başlangıç',
    description: 'Günlük konuşmalar, basit cümleler',
    lessons: 50,
    icon: Users,
    color: 'from-blue-400 to-purple-400'
  },
  {
    level: 'A2',
    title: 'Orta Başlangıç',
    description: 'Sohbet edebilme, okuma becerileri',
    lessons: 75,
    icon: Target,
    color: 'from-purple-400 to-pink-400'
  },
  {
    level: 'B1',
    title: 'Orta Seviye',
    description: 'Akıcı konuşma, karmaşık metinler',
    lessons: 100,
    icon: Trophy,
    color: 'from-pink-400 to-orange-400'
  }
]

export default function Levels() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Seviyelere Göre İlerleyin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {levels.map((level) => {
            const Icon = level.icon
            return (
              <div key={level.level} className="card hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${level.color} flex items-center justify-center mb-6`}>
                  <Icon size={32} className="text-white" />
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-bold text-gray-900">{level.level}</span>
                  <span className="text-xl font-semibold text-gray-700">{level.title}</span>
                </div>
                <p className="text-gray-600 mb-6">{level.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">{level.lessons} ders</span>
                  <button className="btn-primary text-sm px-4 py-2">
                    Keşfet
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

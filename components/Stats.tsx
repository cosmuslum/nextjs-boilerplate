import { Users, BookOpen, Award, Globe } from 'lucide-react'

const stats = [
  { icon: Users, value: '10,000+', label: 'Aktif Öğrenci' },
  { icon: BookOpen, value: '200+', label: 'Ders İçeriği' },
  { icon: Award, value: '95%', label: 'Başarı Oranı' },
  { icon: Globe, value: '50+', label: 'Ülke' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                  <Icon className="text-nederland-blue" size={32} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

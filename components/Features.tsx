import { Mic, Volume2, MessageSquare, FileText, Award, Users, Clock, Smartphone } from 'lucide-react'

const features = [
  { icon: Mic, title: 'Konuşma Pratiği', desc: 'Mikrofon ile telaffuz kontrolü' },
  { icon: Volume2, title: 'Dinleme Egzersizleri', desc: 'Yerel aksanlarla gerçek sesler' },
  { icon: MessageSquare, title: 'Diyaloglar', desc: 'Günlük hayattan konuşmalar' },
  { icon: FileText, title: 'Gramer Rehberi', desc: 'Detaylı dil bilgisi açıklamaları' },
  { icon: Award, title: 'Sertifika', desc: 'Seviye tamamlama sertifikası' },
  { icon: Users, title: 'Topluluk', desc: 'Diğer öğrencilerle pratik yapın' },
  { icon: Clock, title: 'Esnek Zaman', desc: 'Kendi hızınızda öğrenin' },
  { icon: Smartphone, title: 'Mobil Uyumlu', desc: 'Telefon ve tabletten erişim' },
]

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          NederLearn ile Neler Yapabilirsiniz?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-nederland-blue" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

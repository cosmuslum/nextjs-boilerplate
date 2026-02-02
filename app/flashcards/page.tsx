import Flashcards from '@/components/Flashcards'
import { Cards } from 'lucide-react'

export default function FlashcardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Cards className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kelime Kartları</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hollandaca kelimeleri eğlenceli bir şekilde öğrenin. Kartları çevirin ve pratik yapın!
          </p>
        </div>

        {/* Flashcards Component */}
        <Flashcards />
      </div>
    </div>
  )
}

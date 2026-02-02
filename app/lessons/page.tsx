import LessonsList from '@/components/LessonsList'
import { BookOpen } from 'lucide-react'

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-nederland-red to-nederland-blue rounded-full mb-6">
            <BookOpen className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hollandaca Dersler</h1>
          <p className="text-xl text-gray-600">
            A0'dan B1'e kadar adım adım ilerleyin
          </p>
        </div>

        {/* Dersler Listesi */}
        <LessonsList />
      </div>
    </div>
  )
}

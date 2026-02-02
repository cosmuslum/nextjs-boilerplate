"use client"

import { CheckCircle, Lock, PlayCircle } from 'lucide-react'
import { useState } from 'react'

const lessons = [
  {
    id: 1,
    level: 'A0',
    title: 'Merhaba ve Tanışma',
    description: 'Temel selamlaşma ve tanışma ifadeleri',
    duration: '15 dk',
    words: ['Hallo', 'Dank u wel', 'Alstublieft', 'Tot ziens'],
    completed: true
  },
  {
    id: 2,
    level: 'A0',
    title: 'Sayılar 1-20',
    description: 'Temel sayılar ve sayma',
    duration: '20 dk',
    words: ['een', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven'],
    completed: true
  },
  {
    id: 3,
    level: 'A0',
    title: 'Renkler',
    description: 'Temel renkler ve kullanımları',
    duration: '15 dk',
    words: ['rood', 'blauw', 'geel', 'groen', 'zwart', 'wit'],
    completed: false
  },
  {
    id: 4,
    level: 'A0',
    title: 'Aile Üyeleri',
    description: 'Aile bireylerini tanıma',
    duration: '25 dk',
    words: ['vader', 'moeder', 'broer', 'zus', 'opa', 'oma'],
    completed: false
  },
  {
    id: 5,
    level: 'A1',
    title: 'Günlük Rutin',
    description: 'Günlük aktiviteler ve zaman',
    duration: '30 dk',
    words: ['opstaan', 'eten', 'werken', 'slapen'],
    completed: false,
    locked: true
  }
]

export default function LessonsList() {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null)

  return (
    <div className="max-w-4xl mx-auto">
      {/* Seviye Filtreleri */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {['Hepsi', 'A0', 'A1', 'A2', 'B1'].map((level) => (
          <button
            key={level}
            className="px-4 py-2 rounded-lg bg-white border hover:bg-gray-50 whitespace-nowrap"
          >
            {level}
          </button>
        ))}
      </div>

      {/* Dersler Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className={`bg-white rounded-xl shadow-lg border p-6 ${
              lesson.locked ? 'opacity-75' : 'hover:shadow-xl transition-shadow'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {lesson.level}
                </span>
                <h3 className="text-xl font-bold mt-2">{lesson.title}</h3>
              </div>
              {lesson.completed ? (
                <CheckCircle className="text-green-500" size={24} />
              ) : lesson.locked ? (
                <Lock className="text-gray-400" size={24} />
              ) : (
                <PlayCircle className="text-blue-500" size={24} />
              )}
            </div>

            <p className="text-gray-600 mb-4">{lesson.description}</p>

            {/* Kelime Listesi */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Öğreneceğiniz Kelimeler:</h4>
              <div className="flex flex-wrap gap-2">
                {lesson.words.map((word, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            {/* Alt Bilgi */}
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-gray-500">{lesson.duration}</span>
              <button
                onClick={() => setSelectedLesson(lesson.id)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  lesson.locked
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : lesson.completed
                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                disabled={lesson.locked}
              >
                {lesson.locked
                  ? 'Kilitli'
                  : lesson.completed
                  ? 'Tekrar Et'
                  : 'Derse Başla'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

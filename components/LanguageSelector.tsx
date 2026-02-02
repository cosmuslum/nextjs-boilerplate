"use client"

import { useState } from 'react'

const languages = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', description: 'Hollandaca Öğren' },
  { code: 'en', name: 'English', flag: '🇬🇧', description: 'Learn Dutch' },
  { code: 'es', name: 'Español', flag: '🇪🇸', description: 'Aprender Holandés' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', description: 'تعلم الهولندية' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', description: 'Leer Nederlands' },
]

export default function LanguageSelector() {
  const [selected, setSelected] = useState('tr')

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Hangi Dilden Öğrenmek İstersiniz?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelected(lang.code)}
              className={`p-6 rounded-xl border-2 text-center transition-all ${
                selected === lang.code
                  ? 'border-nederland-blue bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="text-4xl mb-4">{lang.flag}</div>
              <h3 className="font-bold text-lg mb-2">{lang.name}</h3>
              <p className="text-gray-600 text-sm">{lang.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

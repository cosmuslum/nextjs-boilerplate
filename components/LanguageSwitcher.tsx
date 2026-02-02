"use client"

import { useState } from 'react'

const languages = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' }
]

export default function LanguageSwitcher() {
  const [selectedLang, setSelectedLang] = useState('tr')
  const [isOpen, setIsOpen] = useState(false)

  const selectedLanguage = languages.find(lang => lang.code === selectedLang)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50"
      >
        <span className="text-2xl">{selectedLanguage?.flag}</span>
        <span className="font-medium">{selectedLanguage?.name}</span>
        <span className="ml-2">▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white border rounded-lg shadow-xl z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang.code)
                setIsOpen(false)
              }}
              className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-100"
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

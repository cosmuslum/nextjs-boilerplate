"use client"

import { useState } from 'react'
import { Menu, X, Globe, User } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('tr')
  const [showLangMenu, setShowLangMenu] = useState(false)

  const navItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Dersler', href: '/lessons' },
    { label: 'Kelime Kartları', href: '/flashcards' },
    { label: 'Seviyeler', href: '#' },
    { label: 'Fiyatlar', href: '#' },
  ]

  const languages = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">NL</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">NederLearn</h1>
              <p className="text-xs text-gray-600">nederlearn.nl</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Dil Seçici */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                <Globe size={18} />
                <span className="font-medium">{currentLanguage?.flag}</span>
              </button>
              
              {showLangMenu && (
                <div className="absolute top-full mt-1 right-0 bg-white rounded-lg shadow-xl border w-48">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setShowLangMenu(false)
                      }}
                      className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50"
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* GİRİŞ BUTONU - BU GÖRÜNECEK */}
            <button className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-blue-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-blue-800">
              Giriş Yap
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobil Dil Seçici */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="p-2 bg-gray-100 rounded-lg"
              >
                <span className="text-xl">{currentLanguage?.flag}</span>
              </button>
            </div>
            
            {/* Mobil Giriş Butonu */}
            <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-blue-700 text-white font-semibold rounded-lg">
              <User size={20} />
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobil Giriş Butonu Büyük */}
              <div className="mt-4 pt-4 border-t">
                <button className="w-full py-3 bg-gradient-to-r from-red-600 to-blue-700 text-white font-semibold rounded-lg">
                  Giriş Yap / Kayıt Ol
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

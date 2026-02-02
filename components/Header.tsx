"use client"

import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Dersler', href: '#' },
    { label: 'Seviyeler', href: '#' },
    { label: 'Fiyatlar', href: '#' },
    { label: 'Hakkımızda', href: '#' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-nederland-red to-nederland-blue rounded-xl">
              <span className="text-white font-bold text-2xl">NL</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">NederLearn</h1>
              <p className="text-sm text-gray-600">.nl</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-nederland-red font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Globe size={20} />
              <span>Türkçe</span>
            </button>
            
            <button className="btn-primary">
              Ücretsiz Başla
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-nederland-red py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="btn-primary mt-2">
                Ücretsiz Başla
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

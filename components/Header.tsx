"use client"

import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import UserMenu from './UserMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Dersler', href: '/lessons' },
    { label: 'Kelime Kartları', href: '/flashcards' },
    { label: 'Seviyeler', href: '/#levels' },
    { label: 'Fiyatlar', href: '/#pricing' },
    { label: 'Hakkımızda', href: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-nederland-red to-nederland-blue rounded-xl group-hover:from-red-600 group-hover:to-blue-700 transition-all">
              <span className="text-white font-bold text-2xl">NL</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">NederLearn</h1>
              <p className="text-xs text-gray-600 leading-tight">Hollandaca Öğren</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-nederland-red font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nederland-red group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <div className="h-6 w-px bg-gray-300"></div>
              <UserMenu />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitcher />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={28} className="text-gray-700" />
              ) : (
                <Menu size={28} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:text-nederland-red hover:bg-gray-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile User Menu */}
              <div className="mt-4 pt-4 border-t">
                <UserMenu />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  )
}

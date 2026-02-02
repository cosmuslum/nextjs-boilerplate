"use client"

import { useState, useEffect } from 'react'
import { User, LogOut, Settings, Trophy, Bell } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import AuthModal from './AuthModal'

export default function UserMenu() {
  const [user, setUser] = useState<any>(null)
  const [showMenu, setShowMenu] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mevcut kullanıcıyı kontrol et
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })

    // Auth state değişikliklerini dinle
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null)
      }
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setShowMenu(false)
    window.location.reload()
  }

  if (loading) {
    return (
      <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse"></div>
    )
  }

  if (!user) {
    return (
      <>
        <button
          onClick={() => setShowAuthModal(true)}
          className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700"
        >
          Giriş Yap
        </button>

        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      </>
    )
  }

  return (
    <div className="relative">
      {/* Avatar Butonu */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100"
      >
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
          {user.email?.[0]?.toUpperCase() || 'K'}
        </div>
        <div className="hidden md:block text-left">
          <div className="font-semibold text-gray-900">
            {user.user_metadata?.name || 'Kullanıcı'}
          </div>
          <div className="text-sm text-gray-500">
            {user.email?.split('@')[0]}
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border z-50">
          {/* Üst Bilgi */}
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {user.email?.[0]?.toUpperCase() || 'K'}
              </div>
              <div>
                <div className="font-bold text-gray-900">
                  {user.user_metadata?.name || 'Kullanıcı'}
                </div>
                <div className="text-sm text-gray-500 truncate">
                  {user.email}
                </div>
              </div>
            </div>
          </div>

          {/* Menü Öğeleri */}
          <div className="p-2">
            <a
              href="/profile"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              <User size={20} />
              <span>Profilim</span>
            </a>
            
            <a
              href="/progress"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              <Trophy size={20} />
              <span>İlerlemem</span>
            </a>
            
            <a
              href="/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              <Settings size={20} />
              <span>Ayarlar</span>
            </a>
            
            <a
              href="/notifications"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              <Bell size={20} />
              <span>Bildirimler</span>
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                3
              </span>
            </a>
          </div>

          {/* Alt Bilgi */}
          <div className="p-2 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-50 text-red-600"
            >
              <LogOut size={20} />
              <span>Çıkış Yap</span>
            </button>
          </div>
        </div>
      )}

      {/* Dışarı tıklayınca kapat */}
      {showMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowMenu(false)}
        />
      )}
    </div>
  )
}

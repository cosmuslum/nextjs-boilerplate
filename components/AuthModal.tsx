"use client"

import { useState } from 'react'
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      if (isLogin) {
        // Giriş yap
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        })
        
        if (error) throw error
        setSuccess('Giriş başarılı!')
        setTimeout(() => {
          onClose()
          window.location.reload()
        }, 1500)
      } else {
        // Kayıt ol
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name: name,
              native_language: 'tr',
              created_at: new Date().toISOString()
            }
          }
        })
        
        if (error) throw error
        setSuccess('Kayıt başarılı! Lütfen e-postanızı kontrol edin.')
      }
    } catch (err: any) {
      setError(err.message || 'Bir hata oluştu')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md relative">
        {/* Kapatma Butonu */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="p-8 pb-0">
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
          </h2>
          <p className="text-gray-600 mt-2">
            {isLogin 
              ? 'Hollandaca öğrenme yolculuğunuza devam edin'
              : 'Hollandaca öğrenmeye ücretsiz başlayın'
            }
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 pt-6">
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adınız
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Adınız"
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-posta
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="ornek@email.com"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Şifre
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {!isLogin && (
              <p className="text-sm text-gray-500 mt-2">
                Şifreniz en az 6 karakter olmalıdır
              </p>
            )}
          </div>

          {/* Hata/Success Mesajları */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg">
              {success}
            </div>
          )}

          {/* Submit Butonu */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'İşleniyor...' : isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
          </button>

          {/* Switch Mode */}
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin)
                setError('')
                setSuccess('')
              }}
              className="text-blue-600 hover:text-blue-800"
            >
              {isLogin 
                ? 'Hesabınız yok mu? Kayıt olun'
                : 'Zaten hesabınız var mı? Giriş yapın'
              }
            </button>
          </div>

          {/* Sosyal Giriş (Opsiyonel) */}
          <div className="mt-8 pt-6 border-t">
            <p className="text-center text-gray-600 mb-4">Veya şununla devam et:</p>
            <button
              type="button"
              onClick={async () => {
                await supabase.auth.signInWithOAuth({
                  provider: 'google',
                  options: {
                    redirectTo: `${window.location.origin}/auth/callback`
                  }
                })
              }}
              className="w-full py-3 border rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google ile devam et
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

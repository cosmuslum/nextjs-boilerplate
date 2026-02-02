import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-nederland-red to-nederland-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">NL</span>
              </div>
              <h2 className="text-2xl font-bold">NederLearn</h2>
            </div>
            <p className="text-gray-400 mb-6">
              A0'dan B1'e kadar 5 farklı dilde Hollandaca öğrenme platformu.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xl font-bold mb-6">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white">Ana Sayfa</Link></li>
              <li><Link href="/lessons" className="text-gray-400 hover:text-white">Dersler</Link></li>
              <li><Link href="/levels" className="text-gray-400 hover:text-white">Seviyeler</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white">Fiyatlar</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">Hakkımızda</Link></li>
            </ul>
          </div>

          {/* Dil Seçenekleri */}
          <div>
            <h3 className="text-xl font-bold mb-6">Diller</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">🇹🇷 Türkçe</li>
              <li className="text-gray-400">🇬🇧 English</li>
              <li className="text-gray-400">🇪🇸 Español</li>
              <li className="text-gray-400">🇸🇦 العربية</li>
              <li className="text-gray-400">🇳🇱 Nederlands</li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-xl font-bold mb-6">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gray-400" />
                <span className="text-gray-400">info@nederlearn.nl</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gray-400" />
                <span className="text-gray-400">+31 20 123 4567</span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-bold mb-3">Bültene Kaydolun</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-grow px-4 py-2 rounded-l-lg text-gray-900"
                />
                <button className="bg-nederland-red px-4 py-2 rounded-r-lg">
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} NederLearn.nl. Tüm hakları saklıdır.</p>
          <p className="mt-2">KVK numarası: 12345678 | BTW numarası: NL123456789B01</p>
        </div>
      </div>
    </footer>
  )
}

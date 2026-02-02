"use client"

import { PlayCircle } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-gray-900">Hollandaca'yı </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nederland-red to-nederland-blue">
            Ana Dilinizden
          </span>
          <span className="text-gray-900"> Öğrenin</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          NederLearn ile Türkçe, İngilizce, İspanyolca veya Arapça konuşuyorsanız, 
          Hollandaca öğrenmek artık çok daha kolay. A0 seviyesinden başlayıp 
          B1 seviyesine kadar profesyonel rehberlik.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary text-lg px-8 py-4">
            ÜCRETSİZ HESAP AÇ
          </button>
          <button 
            onClick={() => setShowVideo(true)}
            className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
          >
            <PlayCircle size={24} />
            DEMO VİDEO İZLE
          </button>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-4 max-w-4xl w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">NederLearn Tanıtım Videosu</h3>
                <button 
                  onClick={() => setShowVideo(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PlayCircle size={64} className="mx-auto text-gray-400" />
                  <p className="mt-4 text-gray-600">Video burada gösterilecek</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-nederland-blue">5</div>
            <div className="text-gray-600">Desteklenen Dil</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-nederland-blue">4</div>
            <div className="text-gray-600">Seviye</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-nederland-blue">200+</div>
            <div className="text-gray-600">Ders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-nederland-blue">10k+</div>
            <div className="text-gray-600">Öğrenci</div>
          </div>
        </div>
      </div>
    </section>
  )
}

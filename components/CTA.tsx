export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-nederland-red to-nederland-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Hollandaca Öğrenmeye Hazır mısınız?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Şimdi ücretsiz kaydolun ve ilk derslerinize başlayın.
          7 gün ücretsiz deneme, sonrasında ayda sadece €9.99.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-nederland-blue px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100">
            ÜCRETSİZ DENEMEYE BAŞLA
          </button>
          <button className="bg-transparent border-2 border-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10">
            FİYATLARI GÖR
          </button>
        </div>
        <p className="mt-6 text-sm opacity-90">
          * Kredi kartı gerekmez. İstediğiniz zaman iptal edebilirsiniz.
        </p>
      </div>
    </section>
  )
}

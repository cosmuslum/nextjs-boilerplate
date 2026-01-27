export default function SupportPage() {
  return (
    <div className="max-w-3xl w-full px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-6">Destek</h1>

      <p className="text-white/70 leading-relaxed">
        Herhangi bir sorun yaşarsanız bize ulaşabilirsiniz:
      </p>

      <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <p className="text-white/80">
          📩 Email: <span className="text-white font-semibold">support@dutchlearn.com</span>
        </p>
        <p className="text-white/80 mt-3">
          ⏱️ Yanıt süresi: 24 saat içinde dönüş yapılır.
        </p>
      </div>
    </div>
  );
}
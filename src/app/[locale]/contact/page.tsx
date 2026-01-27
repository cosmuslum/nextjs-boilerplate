export default function ContactPage() {
  return (
    <div className="max-w-3xl w-full px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-6">İletişim</h1>

      <p className="text-white/70 leading-relaxed">
        Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsin.
      </p>

      <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <p className="text-white/80">
          📍 Hollanda / Zaandam
        </p>
        <p className="text-white/80 mt-3">
          📩 Email: <span className="text-white font-semibold">info@dutchlearn.com</span>
        </p>
      </div>
    </div>
  );
}
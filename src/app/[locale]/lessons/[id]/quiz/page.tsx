export default function QuizPage({ params }: { params: { locale: string; id: string } }) {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Quiz</h1>
      <p className="text-white/70">Locale: {params.locale} | Lesson ID: {params.id}</p>
      <p className="mt-6 text-white/50">Buraya quiz sistemi ekleyeceğiz.</p>
    </div>
  );
}

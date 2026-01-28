import LessonCard from "@/components/LessonCard";
import { lessons } from "@/lib/lessons";

export default function LessonsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dersler</h1>
        <p className="muted mt-1">Aşağıdan bir ders seç.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {lessons.map((l) => (
          <LessonCard key={l.slug} lesson={l} />
        ))}
      </div>
    </div>
  );
}

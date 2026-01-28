
import { lessons } from "../../../lib/lessons";
import { notFound } from "next/navigation";

export default function Lesson({ params }: { params: { slug: string } }) {
  const lesson = lessons.find(l => l.slug === params.slug);
  if (!lesson) return notFound();

  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.content}</p>
    </div>
  );
}


import Link from "next/link";
import { lessons } from "../../lib/lessons";

export default function Dersler() {
  return (
    <div>
      <h1>Dersler</h1>
      {lessons.map(l => (
        <div key={l.slug}>
          <Link href={`/dersler/${l.slug}`}>{l.title}</Link>
        </div>
      ))}
    </div>
  );
}

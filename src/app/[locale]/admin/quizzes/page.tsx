"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

type LocaleKey = "tr" | "nl" | "en" | "ar" | "ku";
const LOCALES: LocaleKey[] = ["tr", "nl", "en", "ar", "ku"];

type QuizDoc = {
  id?: string;
  lessonId: string;
  question: Record<LocaleKey, string>;
  options: Record<LocaleKey, string[]>; // 4 seçenek
  correctIndex: number; // 0..3
  createdAt?: number;
  updatedAt?: number;
};

function pickBase(map: Partial<Record<LocaleKey, string>>) {
  return (
    map.tr?.trim() ||
    map.nl?.trim() ||
    map.en?.trim() ||
    map.ar?.trim() ||
    map.ku?.trim() ||
    ""
  );
}

function ensureLocales(map: Partial<Record<LocaleKey, string>>) {
  const base = pickBase(map);
  const out: Record<LocaleKey, string> = {
    tr: map.tr?.trim() || base,
    nl: map.nl?.trim() || base,
    en: map.en?.trim() || base,
    ar: map.ar?.trim() || base,
    ku: map.ku?.trim() || base,
  };
  return out;
}

function ensureOptions(
  map: Partial<Record<LocaleKey, string[]>>,
  fallbackTextMap: Partial<Record<LocaleKey, string>>
) {
  // seçenekler boşsa hiç patlamasın diye base oluştur
  const baseText = pickBase(fallbackTextMap);

  const normalize = (arr?: string[]) => {
    const a = Array.isArray(arr) ? arr.map((x) => (x ?? "").trim()) : [];
    // tam 4 eleman garantisi
    const four = [a[0] || "", a[1] || "", a[2] || "", a[3] || ""];
    // hepsi boşsa baseText ile doldurma yapma (opsiyonel)
    // ama dil boş kalmasın istendiği için en azından TR'den kopyalayacağız aşağıda
    return four;
  };

  const tr = normalize(map.tr);
  const nl = normalize(map.nl);
  const en = normalize(map.en);
  const ar = normalize(map.ar);
  const ku = normalize(map.ku);

  // Base: ilk dolu dili baz al (options için)
  const base =
    (tr.some(Boolean) && tr) ||
    (nl.some(Boolean) && nl) ||
    (en.some(Boolean) && en) ||
    (ar.some(Boolean) && ar) ||
    (ku.some(Boolean) && ku) ||
    [baseText, baseText, baseText, baseText].map((x) => x || "");

  const out: Record<LocaleKey, string[]> = {
    tr: tr.some(Boolean) ? tr : base,
    nl: nl.some(Boolean) ? nl : base,
    en: en.some(Boolean) ? en : base,
    ar: ar.some(Boolean) ? ar : base,
    ku: ku.some(Boolean) ? ku : base,
  };

  return out;
}

export default function AdminQuizzesPage() {
  const t = useTranslations();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [filterLessonId, setFilterLessonId] = useState("");

  const [items, setItems] = useState<QuizDoc[]>([]);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  // Form state
  const [lessonId, setLessonId] = useState("");

  const [qTR, setQTR] = useState("");
  const [qNL, setQNL] = useState("");
  const [qEN, setQEN] = useState("");
  const [qAR, setQAR] = useState("");
  const [qKU, setQKU] = useState("");

  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [opt4, setOpt4] = useState("");

  const [correct, setCorrect] = useState(1); // 1..4 (UI)
  const correctIndex = useMemo(() => Math.max(0, Math.min(3, correct - 1)), [correct]);

  async function load() {
    setLoading(true);
    setErr("");
    try {
      const col = collection(db, "quizzes");
      const q =
        filterLessonId.trim().length > 0
          ? query(col, where("lessonId", "==", filterLessonId.trim()), orderBy("updatedAt", "desc"))
          : query(col, orderBy("updatedAt", "desc"));

      const snap = await getDocs(q);
      const data = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as QuizDoc[];
      setItems(data);
    } catch (e: any) {
      console.error(e);
      setItems([]);
      setErr(e?.message || "Quiz yüklenemedi.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleReload() {
    await load();
  }

  async function handleFilterApply() {
    await load();
  }

  async function handleAdd() {
    setMsg("");
    setErr("");

    const lid = lessonId.trim();
    if (!lid || !qTR.trim()) {
      setErr(t("adminQuiz.alertRequired"));
      return;
    }

    try {
      setSaving(true);

      const question = ensureLocales({
        tr: qTR,
        nl: qNL,
        en: qEN,
        ar: qAR,
        ku: qKU,
      });

      // Admin UI'da seçenekler tek set giriliyor; bunu tüm dillere kopyalıyoruz.
      const baseOptions = [opt1, opt2, opt3, opt4].map((x) => (x ?? "").trim());

      const options = ensureOptions(
        {
          tr: baseOptions,
          nl: baseOptions,
          en: baseOptions,
          ar: baseOptions,
          ku: baseOptions,
        },
        question
      );

      const now = Date.now();

      const payload: Omit<QuizDoc, "id"> = {
        lessonId: lid,
        question,
        options,
        correctIndex,
        createdAt: now,
        updatedAt: now,
      };

      await addDoc(collection(db, "quizzes"), payload);

      setMsg("✅ Quiz eklendi.");
      // form temizle
      setLessonId("");
      setQTR("");
      setQNL("");
      setQEN("");
      setQAR("");
      setQKU("");
      setOpt1("");
      setOpt2("");
      setOpt3("");
      setOpt4("");
      setCorrect(1);

      await load();
    } catch (e: any) {
      console.error(e);
      setErr(e?.message || "Quiz eklenemedi.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id?: string) {
    if (!id) return;
    const ok = confirm(t("adminQuiz.confirmDelete", { id }));
    if (!ok) return;

    setMsg("");
    setErr("");
    try {
      await deleteDoc(doc(db, "quizzes", id));
      setMsg("✅ Quiz silindi.");
      await load();
    } catch (e: any) {
      console.error(e);
      setErr(e?.message || "Quiz silinemedi.");
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">
        <h1 className="text-3xl font-extrabold">{t("adminQuiz.title")}</h1>
        <p className="text-white/60 mt-2">{t("adminQuiz.subtitle")}</p>
      </div>

      {/* Add form */}
      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">
        <h2 className="text-xl font-extrabold mb-4">{t("adminQuiz.addTitle")}</h2>

        <input
          value={lessonId}
          onChange={(e) => setLessonId(e.target.value)}
          placeholder={t("adminQuiz.lessonIdPlaceholder")}
          className="w-full mb-4 px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25"
        />

        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <input
            value={qTR}
            onChange={(e) => setQTR(e.target.value)}
            placeholder={t("adminQuiz.questionTR")}
            className="w-full px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25"
          />
          <input
            value={qNL}
            onChange={(e) => setQNL(e.target.value)}
            placeholder={t("adminQuiz.questionNL")}
            className="w-full px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25"
          />
          <input
            value={qEN}
            onChange={(e) => setQEN(e.target.value)}
            placeholder={t("adminQuiz.questionEN")}
            className="w-full px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25"
          />
          <input
            value={qAR}
            onChange={(e) => setQAR(e.target.value)}
            placeholder={t("adminQuiz.questionAR")}
            className="w-full px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25"
          />
          <input
            value={qKU}
            onChange={(e) => setQKU(e.target.value)}
            placeholder={t("adminQuiz.questionKU")}
            className="w-full px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25"
          />
        </div>

        {/* Options (tek set) */}
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <input
            value={opt1}
            onChange={(e) => setOpt1(e.target.value)}
            placeholder={t("adminQuiz.opt1")}
            className="w-full px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25"
          />
          <input
            value={opt2}
            onChange={(e) => setOpt2(e.target.value)}
            placeholder={t("adminQuiz.opt2")}
            className="w-full px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25"
          />
          <input
            value={opt3}
            onChange={(e) => setOpt3(e.target.value)}
            placeholder={t("adminQuiz.opt3")}
            className="w-full px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25"
          />
          <input
            value={opt4}
            onChange={(e) => setOpt4(e.target.value)}
            placeholder={t("adminQuiz.opt4")}
            className="w-full px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-white/70 text-sm">{t("adminQuiz.correct")}</span>
            <select
              value={correct}
              onChange={(e) => setCorrect(Number(e.target.value))}
              className="px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-white outline-none focus:border-white/25"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>

          <button
            onClick={handleAdd}
            disabled={saving}
            className="md:ml-auto px-6 py-3 rounded-2xl bg-green-500/90 hover:bg-green-500 text-black font-extrabold transition disabled:opacity-60"
          >
            {saving ? t("common.loading") : t("adminQuiz.addButton")}
          </button>
        </div>

        {msg && (
          <div className="mt-5 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-200 text-sm">
            {msg}
          </div>
        )}
        {err && (
          <div className="mt-5 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
            {err}
          </div>
        )}
      </div>

      {/* List */}
      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-xl font-extrabold">{t("adminQuiz.listTitle")}</h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={filterLessonId}
              onChange={(e) => setFilterLessonId(e.target.value)}
              placeholder={t("adminQuiz.filterLessonId", { id: "1" })}
              className="px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-white/25"
            />
            <button
              onClick={handleFilterApply}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition"
            >
              {t("common.confirm")}
            </button>
            <button
              onClick={handleReload}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition"
            >
              Yenile
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-white/60">{t("common.loading")}</p>
        ) : items.length === 0 ? (
          <p className="text-white/60">{t("adminQuiz.none")}</p>
        ) : (
          <div className="space-y-3">
            {items.map((qz) => (
              <div
                key={qz.id}
                className="rounded-3xl bg-black/25 border border-white/10 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-white/60 text-sm">
                      {t("adminQuiz.lessonIdLabel")}:{" "}
                      <span className="text-white font-semibold">
                        {qz.lessonId}
                      </span>
                      <span className="text-white/40"> • </span>
                      <span className="text-white/70 text-sm">
                        id: {qz.id}
                      </span>
                    </div>

                    <h3 className="text-white font-extrabold mt-2">
                      {qz.question?.tr || "-"}
                    </h3>

                    <div className="mt-3 grid md:grid-cols-2 gap-2 text-sm">
                      {(qz.options?.tr || ["", "", "", ""]).slice(0, 4).map((o, i) => (
                        <div
                          key={i}
                          className={`rounded-2xl px-4 py-2 border ${
                            i === (qz.correctIndex ?? 0)
                              ? "bg-green-500/10 border-green-500/25 text-green-200"
                              : "bg-white/5 border-white/10 text-white/80"
                          }`}
                        >
                          <span className="text-white/50 mr-2">{i + 1}.</span>
                          {o || "-"}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(qz.id)}
                    className="px-5 py-3 rounded-2xl bg-red-500/80 hover:bg-red-500 text-white font-semibold transition"
                  >
                    {t("adminQuiz.deleteButton")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Eğer where + orderBy yüzünden Firestore index isterse:
            Console link verir, index'i oluşturman yeterli. */}
      </div>
    </div>
  );
}
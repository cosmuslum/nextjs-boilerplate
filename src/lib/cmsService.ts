import { db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

export type LocaleKey = "tr" | "nl" | "en" | "ar" | "ku";
const LOCALES: LocaleKey[] = ["tr", "nl", "en", "ar", "ku"];

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

export function ensureLocales(map: Partial<Record<LocaleKey, string>>) {
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

/**
 * Firestore şema:
 * cms/privacy -> { markdown: {tr,nl,en,ar,ku}, updatedAt }
 * cms/site    -> { footerSubtitle: {..}, supportEmail, brandName, updatedAt }
 */
const CMS_COL = "cms";

export async function getCmsDoc<T = any>(id: "privacy" | "site") {
  const ref = doc(db, CMS_COL, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...(snap.data() as T) };
}

export async function savePrivacyMarkdown(markdown: Partial<Record<LocaleKey, string>>) {
  const ref = doc(db, CMS_COL, "privacy");
  const normalized = ensureLocales(markdown);

  await setDoc(
    ref,
    {
      markdown: normalized,
      updatedAt: Date.now(),
      updatedAtServer: serverTimestamp(),
    },
    { merge: true }
  );
}

export type SiteCmsPayload = {
  brandName?: string; // tek string
  supportEmail?: string; // tek string
  footerSubtitle?: Partial<Record<LocaleKey, string>>; // çok dilli
};

export async function saveSiteSettings(payload: SiteCmsPayload) {
  const ref = doc(db, CMS_COL, "site");

  const footerSubtitle = payload.footerSubtitle
    ? ensureLocales(payload.footerSubtitle)
    : undefined;

  await setDoc(
    ref,
    {
      ...(payload.brandName !== undefined ? { brandName: payload.brandName } : {}),
      ...(payload.supportEmail !== undefined ? { supportEmail: payload.supportEmail } : {}),
      ...(footerSubtitle ? { footerSubtitle } : {}),
      updatedAt: Date.now(),
      updatedAtServer: serverTimestamp(),
    },
    { merge: true }
  );
}
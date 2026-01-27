"use client";

export type VoiceOption = SpeechSynthesisVoice;

const VOICE_STORAGE_KEY = "nederlearn_voice_nl";

function normalize(s: string) {
  return (s || "").toLowerCase();
}

export function getDutchVoices(): VoiceOption[] {
  if (typeof window === "undefined") return [];
  const voices = window.speechSynthesis?.getVoices?.() || [];
  return voices
    .filter(v => normalize(v.lang).startsWith("nl"))
    .sort((a, b) => {
      // kalite puanı: nl-NL + dutch/nederlands/premium/enhanced geçenler üste
      const score = (v: VoiceOption) => {
        const name = normalize(v.name);
        const lang = normalize(v.lang);
        let s = 0;
        if (lang === "nl-nl") s += 5;
        if (name.includes("dutch") || name.includes("nederlands") || name.includes("nl")) s += 3;
        if (name.includes("premium") || name.includes("enhanced") || name.includes("natural")) s += 3;
        return s;
      };
      return score(b) - score(a);
    });
}

export function getSavedVoiceName(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(VOICE_STORAGE_KEY);
}

export function saveVoiceName(name: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(VOICE_STORAGE_KEY, name);
}

export function pickBestDutchVoice(): VoiceOption | null {
  const voices = getDutchVoices();
  if (!voices.length) return null;

  const saved = getSavedVoiceName();
  if (saved) {
    const exact = voices.find(v => v.name === saved);
    if (exact) return exact;
  }

  return voices[0]; // en iyi skorlanan
}

export function speakDutch(text: string, opts?: { rate?: number; pitch?: number }) {
  if (typeof window === "undefined") return;

  const synth = window.speechSynthesis;
  if (!synth) {
    alert("Tarayıcı SpeechSynthesis desteklemiyor.");
    return;
  }

  synth.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "nl-NL";
  utter.rate = opts?.rate ?? 0.9;
  utter.pitch = opts?.pitch ?? 1;

  const voice = pickBestDutchVoice();
  if (voice) utter.voice = voice;

  synth.speak(utter);
}

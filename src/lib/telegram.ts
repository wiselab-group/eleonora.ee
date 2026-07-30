import type { Locale, Service } from "@/lib/i18n";

const TELEGRAM_HANDLE = "eleonora_kupczyk";

const greeting: Record<Locale, string> = {
  ru: "Здравствуйте! Меня интересует",
  en: "Hi! I'm interested in",
};

export const generalGreeting: Record<Locale, string> = {
  ru: "Здравствуйте! Хочу обсудить создание блога.",
  en: "Hi! I'd like to talk about building my blog.",
};

const collabGreeting: Record<Locale, string> = {
  ru: "Здравствуйте! Хочу обсудить сотрудничество с брендом.",
  en: "Hi! I'd like to discuss a brand collaboration.",
};

export function telegramLink(text?: string): string {
  const base = `https://t.me/${TELEGRAM_HANDLE}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function serviceTelegramLink(service: Service, lang: Locale): string {
  return telegramLink(`${greeting[lang]}: ${service.title} (${service.price})`);
}

export function generalTelegramLink(lang: Locale): string {
  return telegramLink(generalGreeting[lang]);
}

export function collabTelegramLink(lang: Locale): string {
  return telegramLink(collabGreeting[lang]);
}

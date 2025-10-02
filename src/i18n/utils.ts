import en from "./en.json";
import es from "./es.json";
import pt from "./pt.json";

export const languages = {
  es: "Español",
  en: "English",
  pt: "Português",
};

export const defaultLang = "es";

export const ui = {
  es,
  en,
  pt,
} as const;

export type Language = keyof typeof ui;

/**
 * Obtiene las traducciones para un idioma específico
 */
export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split(".");
    let value: any = ui[lang];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key} for language: ${lang}`);
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };
}

/**
 * Obtiene la ruta traducida para un idioma específico
 */
export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

/**
 * Extrae el idioma de una URL
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Language;
  return defaultLang;
}

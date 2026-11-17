import en from './en.json';
import zh from './zh.json';

const dict = { en, zh } as const;
export type Lang = keyof typeof dict;

/** 按语言取词典 */
export function useTranslations(lang: Lang) {
  return dict[lang] ?? dict.en;
}
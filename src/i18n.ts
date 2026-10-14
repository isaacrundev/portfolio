import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import zhTW from './locales/zh-TW.json';

const resources = {
  en: {
    translation: en
  },
  'zh-TW': {
    translation: zhTW
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      // localStorage first so an explicit choice wins, then the browser itself:
      // with only localStorage, every first-time visitor got English.
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      // We only have one Chinese translation, so every zh* tag maps onto it;
      // anything else falls back to English rather than a missing locale.
      convertDetectedLanguage: (lng: string) => (lng.startsWith('zh') ? 'zh-TW' : 'en'),
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;

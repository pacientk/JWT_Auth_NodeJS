// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALES_LIST, LOCALES_NS } from '@/utils/constants';

const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : 'en';

i18n
   .use(HttpBackend)
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      backend: {
         loadPath: `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${process.env.I18NEXUS_API_KEY}`,
      },
      lng: savedLanguage || 'en', // Загружаем язык из localStorage или используем 'en' по умолчанию
      fallbackLng: 'en',
      supportedLngs: LOCALES_LIST,

      ns: LOCALES_NS,
      defaultNS: 'common',

      keySeparator: false,

      interpolation: {
         escapeValue: false,
      },
      react: {
         useSuspense: false,
      },
   });

export default i18n;

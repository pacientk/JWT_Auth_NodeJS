// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { NS_LOCALES } from '@/utils/constants';

i18n
   .use(HttpBackend)
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      lng: 'ru',

      backend: {
         loadPath: `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${process.env.NEXT_PUBLIC_I18NEXUS_API_KEY}`,
      },

      fallbackLng: 'en',
      supportedLngs: ['en', 'he', 'ru'],

      ns: NS_LOCALES,
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

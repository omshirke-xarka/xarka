import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import hi from './locales/hi.json';
import ar from './locales/ar.json';
import te from './locales/te.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import zh from './locales/zh.json';

const savedLang = localStorage.getItem('lang') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      ar: { translation: ar },
      te: { translation: te },
      de: { translation: de },
      fr: { translation: fr },
      zh: { translation: zh },
    },
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng);
});

export default i18n;

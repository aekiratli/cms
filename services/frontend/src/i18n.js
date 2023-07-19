import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language files dynamically
function importAll(r) {
  let translations = {};
  r.keys().forEach((key) => {
    const language = key.replace('./', '').replace('.json', '');
    translations[language] = r(key);
  });
  return translations;
}

// import translations from all language files in public/locales directory
const translations = importAll(require.context('./locales', false, /\.json$/));

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language if translation for selected language is missing
    interpolation: {
      escapeValue: false, // React already escapes the values
    },
  });

export default i18n;

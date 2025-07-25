import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@features/i18n/translations/en.json';
import ru from '@features/i18n/translations/ru.json';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
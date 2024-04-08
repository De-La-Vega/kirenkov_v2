import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

import { LOCAL_STORAGE_KEY } from './enums';

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};

// Функция для инициализации i18n
function initI18n() {
    let savedLanguage;
    let defaultLanguage = 'en'; // Значение по умолчанию

    if (typeof window !== "undefined") {
        savedLanguage = localStorage.getItem(LOCAL_STORAGE_KEY.APP_LANGUAGE);
        defaultLanguage = savedLanguage || navigator.language.split('-')[0] || 'en';
    }

    i18n
        .use(initReactI18next)
        .init({
            resources,
            lng: defaultLanguage,
            fallbackLng: "en",
            interpolation: {
                escapeValue: false
            }
        });
}

// Вызываем инициализацию i18n сразу, если находимся в браузере
if (typeof window !== "undefined") {
    initI18n();
}

export default i18n;

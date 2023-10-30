import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const hash = new Date().getTime();

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    load: "languageOnly",
    fallbackLng: "en",
    lng: localStorage.getItem("i18nextLng") ?? "vi",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json?hash=${hash}`,
    },
  });

export default i18n;

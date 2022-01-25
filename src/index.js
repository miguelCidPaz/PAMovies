import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
i18next
  .use(detector)
  .use(backend)

  .init({
    interpolation: { escapeValue: false },
    // lng: "es",
    fallbackLng: "es",
    resources: {
      es: {
        global: global_es,
      },
      en: {
        global: global_en,
      },
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

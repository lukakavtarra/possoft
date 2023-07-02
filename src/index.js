import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Languages
import global_en from './source/en/global_en.json';
import global_ge from './source/ge/global-ge.json';
import global_ru from './source/ru/global-ru.json';
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapeValue: false},
  lng: localStorage.getItem("storedLanguage") || "en",
  resources: {
    en: {
      global: global_en
    },
    ge: {
      global: global_ge
    },
    ru: {
      global: global_ru
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <I18nextProvider i18n={i18next}>
  
    <App />
  </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

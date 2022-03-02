import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
.use(HttpApi)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  debug: false,
  fallbackLng: 'en',
  whitelist: ['pt-BR', 'es', 'ja', 'fr', 'en', 'de', 'default'],
  backend: {
    loadPath: `//${process.env.APP_HOST}/locales/{{lng}}/{{ns}}.json`,
    queryStringParams: { v: '1.1.0' }
  },
  cache: {
    enabled: false
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18n

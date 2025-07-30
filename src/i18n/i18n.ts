import EN_JSON from '@/locales/en.json'
import VI_JSON from '@/locales/vi.json'
import i18n, { use } from 'i18next'
import { initReactI18next } from 'react-i18next'

export const resources = {
  en: {
    translation: EN_JSON
  },
  vi: {
    translation: VI_JSON
  }
}

use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n

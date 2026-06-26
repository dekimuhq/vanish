import React from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import App from './App'
import { StoreProvider } from './store/store'
import { I18nProvider } from './i18n/i18n'
import './styles/index.css'

// Offline-first: the service worker precaches the whole app. No runtime fetches
// are ever made — registering the SW is the only "network" the app touches, and
// only against its own origin.
registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </StoreProvider>
  </React.StrictMode>,
)

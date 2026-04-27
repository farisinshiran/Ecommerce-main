import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./app/App.tsx"
import './styles/index.css'
import * as Sentry from "@sentry/react"; // 1. Impor Sentry

// 2. Inisialisasi Sentry (Masukkan kode DSN milik Anda di sini)
Sentry.init({
  dsn: "https://f1b41a7c5fc915c95de1e5b5e812c80b@o4511285688860672.ingest.de.sentry.io/4511285696004176",
  integrations: [
    Sentry.browserTracingIntegration(),
  ],
  // Melacak 100% dari transaksi untuk analisis performa
  tracesSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
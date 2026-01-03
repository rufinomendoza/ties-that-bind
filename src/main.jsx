import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // (Or your styles file)
import { HelmetProvider } from 'react-helmet-async'; // <--- ADD THIS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* <--- WRAP APP WITH THIS */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
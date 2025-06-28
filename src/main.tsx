import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

import './assets/fonts/AntonRegular.ttf'
import './assets/fonts/AlataRegular.ttf'
import './assets/fonts/GermaniaOneRegular.ttf'
import './assets/fonts/FamiljenGroteskRegular.ttf'
import './assets/fonts/StaatlichesRegular.ttf'
import './assets/fonts/HighwayGothicRegular.ttf'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

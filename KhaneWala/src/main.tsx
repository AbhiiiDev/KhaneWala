import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx'
import './global.css'
import Auth0provilder from './auth/Auth0provilder.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0provilder>
    <AppRoutes />
      </Auth0provilder>
    </Router>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx'
import './global.css'
import Auth0provilder from './auth/Auth0provilder.tsx';
import { Toaster } from 'sonner';

const queryClient=new QueryClient({
defaultOptions:{
  queries:{
    refetchOnWindowFocus:true,
  }
}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
      <Auth0provilder>
    <AppRoutes />
    <Toaster visibleToasts={1} position='top-right' richColors />
      </Auth0provilder>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx'
import './global.css'
import Auth0provider from './auth/Auth0provider.tsx';
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
      <Auth0provider>
    <AppRoutes />
    <Toaster visibleToasts={1} position='top-right' richColors />
      </Auth0provider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)

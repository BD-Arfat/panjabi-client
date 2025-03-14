import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './Router/Routers'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Routers}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)

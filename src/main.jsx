import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routers/Router'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={Router} />
        </AuthProvider>
      </HelmetProvider>
    </div>
  </React.StrictMode>,
)

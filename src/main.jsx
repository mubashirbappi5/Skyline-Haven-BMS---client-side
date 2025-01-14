import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MainRoute from './route/MainRoute.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={MainRoute} />
   </AuthProvider>
  </StrictMode>,
)

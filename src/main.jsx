import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MainRoute from './route/MainRoute.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
   <AuthProvider>
   <RouterProvider router={MainRoute} />
   </AuthProvider>
   </QueryClientProvider>
  </StrictMode>,
)

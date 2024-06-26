import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { router } from './routers/routers';
import AuthProvider from './Provider/AuthProvider';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider >
    <RouterProvider router={router} />
      </AuthProvider>?
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { AuthProvider } from './context/AuthContext.jsx'
import { StudentsProvider } from './context/StudentsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <StudentsProvider>
      <App />
      </StudentsProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Formulario } from './components/form.jsx'
import { Contar } from './components/contagem.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Formulario />
    <Contar />
  </React.StrictMode>,
)

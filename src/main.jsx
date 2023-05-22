import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Contar } from './components/contagem.jsx'
import { Classificacao } from './components/tabelaBR.jsx'
import { FormularioCli } from './components/FormularioCli.jsx'
import { ListaComFiltro } from './components/ListaComFiltro.jsx'
import { ListaComIf } from './components/ListaComIf.jsx'

const pessoa = {
  'nome': 'Hudson',
  'idade': '22'
}

const carros = [{'Modelo': 'Fiat',
                  'Ano': '1998'
              }, 
              {
                'Modelo': 'Ford', 
                'Ano': '2002'
              } 
            ]



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListaComIf carros = {carros}/>
 </React.StrictMode>,
)

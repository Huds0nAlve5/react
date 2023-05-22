import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Contar } from './components/contagem.jsx'
import { Classificacao } from './components/tabelaBR.jsx'
import { FormularioCli } from './components/FormularioCli.jsx'
import { ListaComFiltro } from './components/listaComFiltro.jsx'

const pessoa = {
  'nome': 'Hudson',
  'idade': '22'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App nome={pessoa.nome} idade={pessoa.idade}/>
    <Contar />
    <Classificacao />
    <FormularioCli />
    <ListaComFiltro />
 </React.StrictMode>,
)

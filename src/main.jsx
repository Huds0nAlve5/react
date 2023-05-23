import React from 'react'
import ReactDOM from 'react-dom/client'
import { ListaComIf } from './components/ListaComIf.jsx'
import { NavBar } from './NavBar.jsx'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Contar } from './components/contagem.jsx'
import { FormularioCli } from './components/FormularioCli.jsx'
import { UseEffect } from './components/teste geral/UseEffect.jsx'
import { UseStateList } from './components/teste geral/UseStateList.jsx'
import { Filtro } from './components/teste geral/Filtro.jsx'

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
  	<Router>
    	<NavBar />

		<Routes>
			<Route path='/' element={<UseEffect />}></Route>
			<Route path='/cadastro' element={<ListaComIf carros={carros} />}></Route>
			<Route path='/relatorio' element={<FormularioCli />}></Route>
      <Route path='/usestatelist' element={<UseStateList/>}></Route>
      <Route path='/filtro' element={<Filtro/>}></Route>
		</Routes>
	</Router>
 </React.StrictMode>,
)

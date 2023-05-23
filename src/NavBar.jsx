import './App.css' //css geral aqui
import { Link } from 'react-router-dom'

export function NavBar() {    //Aula de componentes, aqui é um props desestruturado, onde se ficasse "props", acessaria através de props.nome
  return (
    <>
			<ul>
				<li>
					<Link to="/">
						Home
					</Link>
				</li>
				<li>
					<Link to="/cadastro">
						Cadastro
					</Link>
				</li>
				<li>
					<Link to="/relatorio">
						Relatório
					</Link>
				</li>
			</ul>
    </>
  )
}


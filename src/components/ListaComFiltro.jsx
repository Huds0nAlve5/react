import { useState } from "react"

const listaPessoas = [
    {
        'Nome': 'Hudson',
        'Idade': '21'
    },
    {
        'Nome': 'Liviane',
        'Idade': '22'
    }
]


const pessoasHTML = listaPessoas.map(person => <li>{person["Nome"]}</li>)

export function ListaComFiltro(){
    const [pessoa, setPessoa] = useState()
    return (
        <>
            <input type="text" onChange={(e) => setPessoa(e.target.value)}></input>
            {!pessoa ? (pessoasHTML) : (pessoasHTML)}
        </>
    )
}
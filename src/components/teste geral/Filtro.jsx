import { useEffect, useState } from "react"

export function Filtro(){
    const [nomes, setNome] = useState([])
    const [nomeFiltro, setNomeFiltro] = useState("")

    useEffect(() => {
        fetch("https://api.github.com/users/Huds0nAlve5/repos")
        .then((res) =>  res.json())
        .then(data => setNome(data))
        console.log(1)
    }, [])

    const filtroAplicado = nomeFiltro.length > 0 ? nomes.filter(nome => nome["name"].includes(nomeFiltro)) : []

    return(
        <>
            <input type="text" onChange={(e) => setNomeFiltro(e.target.value)}/>  

            {nomeFiltro.length == 0 ? 
                nomes.map(nome => {
                    return(<p key={nome.name}>{nome.name}</p>)
            }) : 
                filtroAplicado.map(nome => {
                    return(<p key={nome.name}>{nome.name}</p>)
                })
            }
        </>
    )
}
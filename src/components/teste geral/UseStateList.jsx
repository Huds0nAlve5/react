import { useEffect, useState } from "react"

export function UseStateList(){
    const [nomes, setNome] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/Huds0nAlve5/repos")
        .then((res) =>  res.json())
        .then(data => setNome(data))
    }, [])

    return(
        <>
            <input type="text"/>  
            {nomes.map(nome =>  {
                return(<p key={nome.name}>{nome.name}</p>)
            })}
        </>
    )
}
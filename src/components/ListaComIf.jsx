import { useState } from "react"
import { StateLiftGet } from "./StateLiftGet"
import { StateLiftSet } from "./StateLiftSet"

export function ListaComIf({carros}){
    const [nome, setNome] = useState()
    const [nomeConf, setNomeConf] = useState()

    return (
        <>
            {carros.map((carro, index) => (
                <p key={index}>{carro["Ano"]}</p>
            ))}
            <StateLiftSet setNome={setNome} nome={nome} setNomeConf={setNomeConf}/>
            <StateLiftGet nomeConf = {nomeConf}/>
        </>
    )
}
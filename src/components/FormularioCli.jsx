import { BotaoLimpar } from "./BotaoLimpar"
import styles from "./form.module.css" //padrao criar o css com o nome do componente.module.css, e importar os styles dele aqui
import { useState } from "react"

export function FormularioCli(){
    const [nome, setNome] = useState()
    const [userNome, setUserNome] = useState()
    const [senha, setSenha] = useState(1234)

    const sucesso = (e)  => {
        e.preventDefault() // IMPORTANTE! Muito utilziado para que nao atualize a pagina após um submit!!
        const senha = document.getElementById("sen").value
        window.alert(senha)
        setUserNome(nome)
    }

    const limparCampos = () => {
        const inputs = document.getElementsByTagName("input")
        for(let i = 0; i < inputs.length; i++){
            inputs[i].value = ""                    //limpando os values da lista de inputs
        }
        setNome("")                                 //limpando os dados do useState
        setSenha("")
        setUserNome("")
    }

    return (
        <>
            <form id={styles.formUser} onSubmit={sucesso}>
                <input type="text" className={styles.inputs} onChange={(e) => setNome(e.target.value)}/>
                <input type="password" className={styles.inputs} onChange={(e) => setSenha(e.target.value)} id="sen"/>
                <button type="submit" className={styles.inputs}>Cadastrar</button>
                <BotaoLimpar event={limparCampos}/> 
                <h1>A senha atual é {senha}</h1>

                {userNome ? (<h2>Bem vindo!{userNome} </h2>) : ("Sim")} // if else no jsx
                {userNome && (<h2>Bem vindo!{userNome} </h2>)}  //apenas if
            </form>
        </>
    )
}
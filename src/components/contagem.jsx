import styles from "./contagem.module.css" //padrao criar o css com o nome do componente.module.css, e importar os styles dele aqui

var vetor = [1, 2, 3, 4, 5, 6]
var arrowFunc = () => {
    console.log("arrow func")
}

export function Contar(){
    return (
        <>
            {vetor.map(num => 
                {return <p key={num} className={styles.numContagem}>{num}</p>}
            )}
        </>
    )
}
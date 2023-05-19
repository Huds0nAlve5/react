import styles from "./form.module.css" //padrao criar o css com o nome do componente.module.css, e importar os styles dele aqui

export function Formulario(){
    return (
        <>
            <form id={styles.formUser}>
                <input type="text" className={styles.inputs} />
                <input type="password" className={styles.inputs} />
                <button type="submit" className={styles.inputs}>Cadastrar</button>
            </form>
        </>
    )
}

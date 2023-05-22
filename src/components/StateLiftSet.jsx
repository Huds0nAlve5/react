export function StateLiftSet({setNome, nome, setNomeConf}){
    var sucesso = (e) => {
        e.preventDefault()
        setNomeConf(nome)
    }
    return (
        <>
            <form onSubmit={sucesso}>
                <input type="text" onChange={e => setNome(e.target.value)} placeholder="Insira seu nome aqui!"/>
                <button type="submit" onClick={sucesso}>Confirmar</button>
            </form>
        </>
    )
}
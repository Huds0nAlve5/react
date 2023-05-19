import propTypes from 'prop-types'  //importacao para o tratamento de tipos da passagem do props, e valores default

export function Classificacao({time, colocacao}){
    return (
        <>
            <ul>
                <li>Time: {time} - Colocacao: {colocacao}</li>
            </ul>
        </>
    )
}

Classificacao.propTypes = {
    time: propTypes.string.isRequired,
    colocacao: propTypes.string.isRequired
}

Classificacao.defaultProps = {
    time: 'time',
    colocacao: '0'
}
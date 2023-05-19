var vetor = [1, 2, 3, 4, 5, 6]
var arrowFunc = () => {
    console.log("arrow func")
}

export function Contar(){
    return (
        <>
            {vetor.map(num => 
                {return <p key={num}>{num}</p>}
            )}

        </>
    )
}
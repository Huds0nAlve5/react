import { useEffect, useState } from "react"

export function UseEffect(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch("https://api.github.com/users/Huds0nAlve5")
        .then((res) =>  res.json())
        .then(data => console.log(data))
        console.log(count)
    })
    
    return(
        <>
            <button onClick={() => setCount(count + 1)}> Click me!!</button>
        </>
    )
}
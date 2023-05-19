import { useState } from 'react'
import './App.css' //css geral aqui

function App({nome, idade}) {    //Aula de componentes, aqui é um props desestruturado, onde se ficasse "props", acessaria através de props.nome
  return (
    <>
      <p>Olá mundo!</p>
      <p>Sr {nome}, de idade {idade}</p>
    </>
  )
}

export default App
